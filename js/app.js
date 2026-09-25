const COLOR_CLASSES = ["t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9"];

const gridEl = document.getElementById("question-grid");
const gridView = document.getElementById("grid-view");
const detailView = document.getElementById("detail-view");
const backLink = document.getElementById("back-link");
const backLabel = document.getElementById("back-label");
const cardInner = document.getElementById("card-inner");
const pageEl = document.querySelector(".page");

const heroBefore = document.getElementById("hero-before");
const heroHighlight = document.getElementById("hero-highlight");
const heroAfter = document.getElementById("hero-after");
const heroSubtitle = document.getElementById("hero-subtitle");

const frontEyebrow = document.getElementById("front-eyebrow");
const frontTitle = document.getElementById("front-title");
const frontText = document.getElementById("front-text");
const frontCircles = document.getElementById("front-circles");

const backEyebrow = document.getElementById("back-eyebrow");
const backTitle = document.getElementById("back-title");
const backText = document.getElementById("back-text");
const backCircles = document.getElementById("back-circles");

const painScaleEl = document.getElementById("pain-scale");
const introSoundBtn = document.getElementById("intro-sound-btn");
const soundToggleBtn = document.getElementById("sound-toggle-btn");
const frontSoundBtn = document.getElementById("front-sound-btn");
const backSoundBtn = document.getElementById("back-sound-btn");

// Speaker + sound-wave glyph (Feather's "volume-2"), reused for every sound
// button. Colour comes from currentColor (see .sound-icon-ring/-glyph in
// style.css) so it automatically matches whichever tile/card text colour
// it's placed on — no per-question colour needed. This is drawn as an
// inline SVG rather than the exported PNG asset because that PNG was only
// 44x44 — fine at 1x but visibly soft on a Retina/iPad screen; SVG stays
// crisp at any size and matches the same design.
const SOUND_ICON_SVG = `<svg class="sound-icon" viewBox="0 0 46 46" aria-hidden="true" focusable="false"><circle class="sound-icon-ring" cx="23" cy="23" r="22"/><g class="sound-icon-glyph" transform="translate(5.5 5.5) scale(1.458)"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path class="sound-icon-wave sound-icon-wave-1" d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path class="sound-icon-wave sound-icon-wave-2" d="M15.54 8.46a5 5 0 0 1 0 7.07"/></g></svg>`;

// Same icon with a diagonal slash through it — the header's master on/off
// toggle uses this directly (matches Figma's "Button geluid uit").
const MUTED_ICON_SVG = `<svg class="sound-icon" viewBox="0 0 46 46" aria-hidden="true" focusable="false"><circle class="sound-icon-ring" cx="23" cy="23" r="22"/><g class="sound-icon-glyph" transform="translate(5.5 5.5) scale(1.458)"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path class="sound-icon-wave sound-icon-wave-1" d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path class="sound-icon-wave sound-icon-wave-2" d="M15.54 8.46a5 5 0 0 1 0 7.07"/></g><line class="sound-icon-mute-slash" x1="8" y1="8" x2="38" y2="38"/></svg>`;

// Tile/intro buttons carry the slash line too (same markup as
// MUTED_ICON_SVG), but unlike the header toggle it's shown/hidden per
// button by CSS keyed off .is-playing (see style.css) rather than
// swapped out — each one pops in slashed, drops the slash for as long as
// its own memo is playing, and gets it back the moment that stops
// (clicking it again, another button starting, or it finishing on its
// own), instead of the header toggle's single on/off state.
const TILE_SOUND_ICON_HTML = MUTED_ICON_SVG;

// Sound is off by default (no recordings are audible until switched on).
// Toggling it on reveals every .sound-btn on the page — the intro button
// and, since buildGrid() rebuilds tile buttons on every language switch,
// any tiles built afterwards too, all driven by this one body class.
let soundEnabled = false;

function setSoundEnabled(enabled) {
  soundEnabled = enabled;
  document.body.classList.toggle("sound-enabled", enabled);
  soundToggleBtn.setAttribute("aria-pressed", String(enabled));
  soundToggleBtn.setAttribute("aria-label", enabled ? "Geluid uitzetten" : "Geluid aanzetten");
  soundToggleBtn.innerHTML = enabled ? SOUND_ICON_SVG : MUTED_ICON_SVG;
  if (enabled) {
    // DOM order already is intro button, then tile 1..9 (buildGrid()
    // appends them in question order), so indexing straight through
    // .sound-btn gives the 1,2,3...9 popping sequence for free.
    document.querySelectorAll(".sound-btn").forEach((btn, i) => {
      btn.classList.remove("pop-in");
      btn.style.animationDelay = `${i * 70}ms`;
      void btn.offsetWidth;
      btn.classList.add("pop-in");
    });
  } else {
    stopActiveSound();
  }
}

// Only one voice memo plays at a time — starting a new one stops whatever
// was already playing, and clicking the currently-playing button again
// stops it (acts as a toggle).
let activeAudio = null;
let activeSoundBtn = null;

function stopActiveSound() {
  if (activeAudio) {
    activeAudio.pause();
  }
  if (activeSoundBtn) {
    activeSoundBtn.classList.remove("is-playing");
  }
  activeAudio = null;
  activeSoundBtn = null;
}

function toggleSound(btn, src) {
  if (activeSoundBtn === btn) {
    stopActiveSound();
    return;
  }
  stopActiveSound();
  const audio = new Audio(src);
  audio.addEventListener("ended", stopActiveSound);
  audio.play().catch(() => stopActiveSound());
  btn.classList.add("is-playing");
  activeAudio = audio;
  activeSoundBtn = btn;
}

function buildSoundBtn(extraClass, src, label) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = `sound-btn ${extraClass}`;
  btn.setAttribute("aria-label", label);
  btn.innerHTML = TILE_SOUND_ICON_HTML;
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!soundEnabled) return;
    toggleSound(btn, src);
  });
  return btn;
}

// Without an explicit frontIcon/backIcon, don't reuse the tile's raw
// geometry as-is — tile icons are often positioned to overflow off the
// square tile on purpose, which lands on top of the card's text instead.
// Fall back to a small, safely inset copy tucked in whichever corner the
// tile icon leans toward.
function getDefaultCardIcon(icon) {
  const centerY = icon.top + icon.size / 2;
  const centerX = icon.left + icon.size / 2;
  const size = Math.min(56, Math.max(30, icon.size * 0.55));
  const inset = 1;
  const top = centerY > 50 ? 100 - inset - size : inset;
  const left = centerX > 50 ? 100 - inset - size : inset;
  return { ...icon, size, top, left };
}

// Front/back icon each fall back to this safe default, or to any fields
// explicitly set in q.frontIcon / q.backIcon to fully control that side.
function getSideIcon(q, side) {
  const override = q[side];
  if (!override) return getDefaultCardIcon(q.icon);
  return { ...getDefaultCardIcon(q.icon), ...override };
}

const langToggle = document.getElementById("lang-toggle");
const langMenu = document.getElementById("lang-menu");
const langCurrent = document.getElementById("lang-current");

let currentLang = "nl";
let openQuestionId = null;

function setColorClass(el, color) {
  COLOR_CLASSES.forEach((c) => el.classList.remove(c));
  el.classList.add(color);
}

function applyIconGeometry(el, icon, delaySeconds) {
  el.style.setProperty("--ic-size", `${icon.size}%`);
  el.style.setProperty("--ic-top", `${icon.top}%`);
  el.style.setProperty("--ic-left", `${icon.left}%`);
  el.style.setProperty("--ic-c1", icon.c1);
  el.style.setProperty("--ic-c2", icon.c2);
  el.style.setProperty("--ic-c3", icon.c3);
  // c3Inset ("tepel"-grootte) is optional — falls back to the shared 44%
  // default in style.css when a question doesn't set its own.
  if (icon.c3Inset !== undefined) el.style.setProperty("--ic-c3-inset", `${icon.c3Inset}%`);
  else el.style.removeProperty("--ic-c3-inset");
  if (delaySeconds !== undefined) el.style.setProperty("--ic-delay", `${delaySeconds}s`);
}

// Returns the question text (question/front/back) for the active language,
// falling back to the Dutch source (questions.js) for anything untranslated.
function getQuestionText(q, lang) {
  const t = TRANSLATIONS[lang]?.questions?.[q.id];
  if (!t) return q;
  return {
    question: t.question || q.question,
    front: { title: t.front?.title || q.front.title, text: t.front?.text || q.front.text },
    back: { title: t.back?.title || q.back.title, text: t.back?.text || q.back.text }
  };
}

function buildGrid() {
  gridEl.innerHTML = "";
  QUESTIONS.forEach((q) => {
    const text = getQuestionText(q, currentLang);

    // A plain <button> can't contain the sound button (buttons can't nest),
    // so the tile itself is a div acting as a button: role/tabindex for a11y,
    // Enter/Space handled below, clicks routed to openQuestion unless they
    // land on the nested sound button.
    const tile = document.createElement("div");
    tile.setAttribute("role", "button");
    tile.tabIndex = 0;
    const textPosClass = q.textPos ? ` text-${q.textPos}` : "";
    tile.className = `tile ${q.color}${textPosClass}`;

    // Clipping lives on this wrapper, not on .tile itself — .tile is sized
    // via aspect-ratio and has its own animated transform (tile-in), and
    // Safari has real bugs where overflow: hidden fails to clip reliably
    // on an element that also carries aspect-ratio/an animated transform
    // (same category of bug as the flip card's .card-face/.card-face-clip
    // split). This wrapper is plain inset:0 positioning instead, so its
    // overflow: hidden isn't sharing the element with either of those.
    const clip = document.createElement("div");
    clip.className = "tile-clip";
    tile.appendChild(clip);

    const circles = document.createElement("div");
    circles.className = "circles";
    applyIconGeometry(circles, q.icon, (q.id % 5) * 0.4);
    circles.innerHTML = '<div class="c1"></div><div class="c2"></div><div class="c3"></div>';
    clip.appendChild(circles);

    const label = document.createElement("span");
    const lines = getQuestionLines(q, currentLang);
    if (lines) {
      label.textContent = "";
      lines.forEach((line, i) => {
        if (i > 0) label.appendChild(document.createElement("br"));
        label.appendChild(document.createTextNode(line));
      });
    } else {
      label.textContent = text.question;
    }
    clip.appendChild(label);

    clip.appendChild(buildSoundBtn("tile-sound-btn", q.audio, "Beluister deze vraag"));

    tile.addEventListener("click", (e) => {
      if (e.target.closest(".sound-btn")) return;
      openQuestion(q);
    });
    tile.addEventListener("keydown", (e) => {
      if (e.target !== tile) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openQuestion(q);
      }
    });
    gridEl.appendChild(tile);
  });
}

function restartAnimation(el) {
  el.style.animation = "none";
  void el.offsetWidth;
  el.style.animation = "";
}

function openQuestion(q) {
  stopActiveSound();
  openQuestionId = q.id;
  cardInner.classList.remove("is-flipped");
  renderOpenQuestion();

  gridView.hidden = true;
  detailView.hidden = false;
  syncCardMinHeight();

  const frontFace = frontEyebrow.closest(".card-face");
  [cardInner, frontEyebrow, frontTitle, frontText, frontFace.querySelector(".flip-btn")].forEach(restartAnimation);

  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

// questionLines is a manually-authored line break for a question's tile
// label (and, via setLinedText, its detail-card eyebrow) — kept per
// language because natural wrapping (with hyphens now off, see
// .tile-clip in style.css) can still land mid-phrase in an awkward spot.
// Dutch keeps its lines on the question object itself (q.questionLines);
// other languages define theirs alongside their translation in
// TRANSLATIONS[lang].questions[id].questionLines (i18n.js) — add one
// there for a language/question combo that wraps awkwardly.
function getQuestionLines(q, lang) {
  if (lang === "nl") return q.questionLines || null;
  return TRANSLATIONS[lang]?.questions?.[q.id]?.questionLines || null;
}

function setLinedText(el, lines, fallback) {
  el.textContent = "";
  if (lines) {
    lines.forEach((line, i) => {
      if (i > 0) el.appendChild(document.createElement("br"));
      el.appendChild(document.createTextNode(line));
    });
  } else {
    el.textContent = fallback;
  }
}

// Per-question, per-side placement of the card sound button (x: px from the
// text's left edge, y: px above the "de ene/andere kant" label) — see
// frontSound/backSound in questions.js.
function setSoundPos(btn, pos) {
  btn.style.setProperty("--snd-x", `${pos?.x ?? 0}px`);
  btn.style.setProperty("--snd-y", `${pos?.y ?? 14}px`);
}

function renderOpenQuestion() {
  if (openQuestionId === null) return;
  const q = QUESTIONS.find((item) => item.id === openQuestionId);
  const text = getQuestionText(q, currentLang);
  const lines = getQuestionLines(q, currentLang);

  setLinedText(frontEyebrow, lines, text.question);
  frontTitle.innerHTML = text.front.title;
  frontText.innerHTML = text.front.text;
  setSoundPos(frontSoundBtn, q.frontSound);
  setColorClass(frontEyebrow.closest(".card-face"), q.color);
  applyIconGeometry(frontCircles, getSideIcon(q, "frontIcon"));

  painScaleEl.hidden = q.id !== 2;
  painScaleEl.closest(".card-content").classList.toggle("has-pain-scale", q.id === 2);

  setLinedText(backEyebrow, lines, text.question);
  backTitle.innerHTML = text.back.title;
  backText.innerHTML = text.back.text;
  setSoundPos(backSoundBtn, q.backSound);
  setColorClass(backEyebrow.closest(".card-face"), q.color);
  applyIconGeometry(backCircles, getSideIcon(q, "backIcon"));
}

// .card-face is position: absolute (needed so front/back can be stacked
// for the 3D flip), which means it never contributes its content's actual
// height to .card-inner/.card's layout — measure it directly by briefly
// switching the face in-flow, then feed the taller of front/back into
// .card's --card-min-h (see style.css) so the card never gets squeezed
// smaller than its own content on a short viewport.
function measureFaceContentHeight(face) {
  const prevPosition = face.style.position;
  const prevHeight = face.style.height;
  face.style.position = "relative";
  face.style.height = "auto";
  const h = face.scrollHeight;
  face.style.position = prevPosition;
  face.style.height = prevHeight;
  return h;
}

function syncCardMinHeight() {
  if (detailView.hidden) return;
  const frontFace = frontEyebrow.closest(".card-face");
  const backFace = backEyebrow.closest(".card-face");
  const h = Math.max(measureFaceContentHeight(frontFace), measureFaceContentHeight(backFace));
  document.querySelector(".card").style.setProperty("--card-min-h", `${h}px`);
}

let cardHeightResizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(cardHeightResizeTimer);
  cardHeightResizeTimer = setTimeout(syncCardMinHeight, 100);
});

function closeDetail() {
  stopActiveSound();
  detailView.hidden = true;
  gridView.hidden = false;
  openQuestionId = null;
}

// The 3D rotateY flip visually bulges .card-inner beyond its resting box
// near the rotation's midpoint — perspective magnifies the near edge in
// both width AND height, not just width, so it's a genuine part of how
// the flip looks (clipping it at .card was the earlier "flip gets cut
// off" bug). But .page's height-driven scrollbar (overflow-y: auto)
// reacts to that transient bulge too, flashing a scrollbar in and out
// for the ~0.7s the flip runs. Suppressing overflow-y only for that
// window hides the scrollbar without touching the card's own rendering.
let scrollbarSuppressTimer;
function suppressScrollbarDuringFlip() {
  pageEl.classList.add("suppress-flip-scrollbar");
  clearTimeout(scrollbarSuppressTimer);
  scrollbarSuppressTimer = setTimeout(() => {
    pageEl.classList.remove("suppress-flip-scrollbar");
  }, 700);
}

document.addEventListener("click", (e) => {
  if (e.target.closest("[data-flip]")) {
    stopActiveSound();
    cardInner.classList.toggle("is-flipped");
    suppressScrollbarDuringFlip();
  }
});

backLink.addEventListener("click", (e) => {
  e.preventDefault();
  closeDetail();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !detailView.hidden) {
    closeDetail();
  }
});

// Language switcher
function renderChrome(lang) {
  const t = lang === "nl" ? null : TRANSLATIONS[lang];

  heroBefore.textContent = t ? t.heroBefore : "Wel of niet meedoen aan het ";
  heroHighlight.textContent = t ? t.heroHighlight : "bevolkingsonderzoek borstkanker";
  heroAfter.textContent = t ? t.heroAfter : "?";
  if (t) {
    heroSubtitle.textContent = t.heroSubtitle;
  } else {
    heroSubtitle.textContent = "Wij zetten alle informatie voor je op een rij, jij beslist of je meedoet of niet.";
  }
  backLabel.textContent = t ? t.backLabel : "Terug naar vragen";

  document.querySelectorAll(".flip-label").forEach((el) => {
    el.textContent = t ? t.flipLabel : "Bekijk de andere kant";
  });

  document.getElementById("front-corner-tag").textContent = t ? t.oneSideLabel : "De ene kant";
  document.getElementById("back-corner-tag").textContent = t ? t.otherSideLabel : "De andere kant";
}

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr";

  renderChrome(lang);
  buildGrid();
  renderOpenQuestion();
  syncCardMinHeight();
}

langToggle.addEventListener("click", () => {
  const isOpen = !langMenu.hidden;
  langMenu.hidden = isOpen;
  langToggle.setAttribute("aria-expanded", String(!isOpen));
});

langMenu.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", () => {
    const lang = item.dataset.lang;
    langCurrent.textContent = lang.split("-")[0].toUpperCase();
    langMenu.querySelectorAll("li").forEach((el) => el.setAttribute("aria-selected", String(el === item)));
    langMenu.hidden = true;
    langToggle.setAttribute("aria-expanded", "false");
    applyLanguage(lang);
  });
});

document.addEventListener("click", (e) => {
  if (!langMenu.hidden && !e.target.closest(".lang-switcher")) {
    langMenu.hidden = true;
    langToggle.setAttribute("aria-expanded", "false");
  }
});

introSoundBtn.innerHTML = TILE_SOUND_ICON_HTML;
introSoundBtn.addEventListener("click", () => {
  if (!soundEnabled) return;
  toggleSound(introSoundBtn, INTRO_AUDIO);
});

frontSoundBtn.innerHTML = TILE_SOUND_ICON_HTML;
frontSoundBtn.addEventListener("click", () => {
  if (!soundEnabled || openQuestionId === null) return;
  const q = QUESTIONS.find((item) => item.id === openQuestionId);
  toggleSound(frontSoundBtn, q.frontAudio);
});

backSoundBtn.innerHTML = TILE_SOUND_ICON_HTML;
backSoundBtn.addEventListener("click", () => {
  if (!soundEnabled || openQuestionId === null) return;
  const q = QUESTIONS.find((item) => item.id === openQuestionId);
  toggleSound(backSoundBtn, q.backAudio);
});

soundToggleBtn.addEventListener("click", () => setSoundEnabled(!soundEnabled));
setSoundEnabled(false);

buildGrid();
