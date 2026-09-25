// Content source: "IVM | bevolkingsonderzoek borstkanker | Vragen V3" (8 september 2026)
//
// `icon` is the shared default (used for the tile, and for both card sides
// unless overridden). To style one side of the flip card differently, add
// `frontIcon` and/or `backIcon` — any of size/top/left/c1/c2/c3 you set
// there overrides just that field for that side, e.g.:
//   frontIcon: { size: 70, top: 10, left: 60 },
//   backIcon: { size: 40, top: 70, left: 10, c1: "#EBA992" }
//
// `audio` is the voice-memo for that question's sound button on the
// homepage tile. `frontAudio`/`backAudio` are the separate recordings for
// the sound button on each side of the detail card (VO set delivered
// 2026-09-22, "VO website tool BOB").
const INTRO_AUDIO = "assets/audio/header.m4a";

const QUESTIONS = [
  {
    id: 1,
    question: "Wat levert het bevolkingsonderzoek borstkanker op?",
    questionLines: ["Wat levert het", "bevolkings-", "onderzoek", "borstkanker op?"],
    color: "t1",
    audio: "assets/audio/q1.m4a",
    frontAudio: "assets/audio/q1-front.m4a",
    backAudio: "assets/audio/q1-back.m4a",
    frontSound: { x: 0, y: 14 },
    backSound: { x: 0, y: 14 },
    textPos: "bottom",
    icon: { size: 44, top: -12, left: 67, c1: "#DF897F", c2: "#903F2F", c3: "#BE6964" },
    frontIcon: { size: 95, top: -12, left: 25 },
    backIcon: { size: 95, top: -12, left: 25 },
    front: {
      title: "Het bevolkingsonderzoek kan borstkanker vroeg ontdekken.",
      text: "Het vroeg ontdekken van borstkanker vergroot de kans op een succesvolle behandeling. En als borstkanker vroeg wordt ontdekt, hoeft de behandeling vaak ook minder zwaar te zijn."
    },
    back: {
      title: "Het bevolkingsonderzoek zegt alleen iets over dat moment.",
      text: "Daarom krijg je elke 2 tot 3 jaar een nieuwe uitnodiging. Vrouwen die regelmatig meedoen aan het bevolkingsonderzoek hebben een kleinere kans om te overlijden aan borstkanker dan vrouwen die niet meedoen."
    }
  },
  {
    id: 2,
    question: "Doet het onderzoek pijn?",
    questionLines: ["Doet het", "onderzoek pijn?"],
    color: "t2",
    audio: "assets/audio/q2.m4a",
    frontAudio: "assets/audio/q2-front.m4a",
    backAudio: "assets/audio/q2-back.m4a",
    frontSound: { x: 0, y: 14 },
    backSound: { x: 0, y: 14 },
    textPos: "center",
    icon: { size: 50.8, top: 66.2, left: -14.0, c1: "#FFD9CB", c2: "#F7A58D", c3: "#DF897F", c3Inset: 43 },
    frontIcon: { size: 95, top: -12, left: 25 },
    backIcon: { size: 95, top: -12, left: 25 },
    front: {
      title: "Het samendrukken van de borsten kan vervelend of pijnlijk zijn.",
      text: "Dat verschilt per persoon. Gemiddeld geven de deelnemers op een schaal van 0 (geen pijn) tot 10 (ergst denkbare pijn) <strong>een score van 4</strong>."
    },
    back: {
      title: "Het samendrukken van de borsten duurt maar kort.",
      text: "Van elke borst worden 2 foto's gemaakt. Voor elke foto wordt de borst een paar seconden samengedrukt. Dit is nodig om een goede foto te maken."
    }
  },
  {
    id: 3,
    question: "Wordt borstkanker altijd gevonden?",
    questionLines: ["Wordt", "borstkanker", "altijd gevonden?"],
    color: "t3",
    audio: "assets/audio/q3.m4a",
    frontAudio: "assets/audio/q3-front.m4a",
    backAudio: "assets/audio/q3-back.m4a",
    frontSound: { x: 0, y: 14 },
    backSound: { x: 0, y: 14 },
    textPos: "bottom",
    icon: { size: 61.8, top: -8.3, left: 48.5, c1: "#6E2711", c2: "#9C3829", c3: "#C65F55", c3Inset: 45 },
    frontIcon: { size: 95, top: -12, left: 25 },
    backIcon: { size: 95, top: -12, left: 25 },
    front: {
      title: "De meeste afwijkingen worden gevonden.",
      text: "Elke foto wordt door 2 artsen bekeken. Zij kijken onafhankelijk van elkaar. Zo is de kans groter dat borstkanker wordt gevonden."
    },
    back: {
      title: "Het onderzoek kan borstkanker missen.",
      text: "Van elke 10 gevallen van borstkanker worden er 7 gevonden. 3 op de 10 gevallen worden door het bevolkingsonderzoek niet ontdekt."
    }
  },
  {
    id: 4,
    question: "Geeft een goede uitslag je zekerheid?",
    questionLines: ["Geeft een goede", "uitslag je", "zekerheid?"],
    color: "t4",
    audio: "assets/audio/q4.m4a",
    frontAudio: "assets/audio/q4-front.m4a",
    backAudio: "assets/audio/q4-back.m4a",
    frontSound: { x: 0, y: 14 },
    backSound: { x: 0, y: 14 },
    textPos: "bottom",
    icon: { size: 42.9, top: 72.2, left: -15.65, c1: "#6E2711", c2: "#500E0B", c3: "#D38D82" },
    frontIcon: { size: 68, top: -15, left: 52 },
    backIcon: { size: 68, top: -15, left: 52 },
    front: {
      title: "De meeste vrouwen krijgen een gunstige uitslag.",
      text: "Van elke 100 vrouwen krijgen er 98 de uitslag 'geen afwijking'. Dat kan een gevoel van rust geven."
    },
    back: {
      title: "Een goede uitslag<br />geeft geen volledige zekerheid.",
      text: "Het onderzoek is een momentopname. Soms is er borstkanker die niet is gezien. Ook kan borstkanker ontstaan tussen twee onderzoeken in."
    }
  },
  {
    id: 5,
    question: "Is een verwijzing reden tot zorgen?",
    questionLines: ["Is een verwijzing", "reden tot", "zorgen?"],
    color: "t5",
    audio: "assets/audio/q5.m4a",
    frontAudio: "assets/audio/q5-front.m4a",
    backAudio: "assets/audio/q5-back.m4a",
    frontSound: { x: 0, y: 14 },
    backSound: { x: 0, y: 14 },
    textPos: "center",
    icon: { size: 62.6, top: 59.0, left: 50.8, c1: "#9C3829", c2: "#CB6361", c3: "#EBA992" },
    frontIcon: { size: 95, top: -12, left: 25 },
    backIcon: { size: 95, top: -12, left: 25 },
    front: {
      title: "Een verwijzing kan zorgen en spanning geven.",
      text: "Na een verwijzing is extra onderzoek nodig om zeker te weten of er iets aan de hand is. Het wachten op die uitslag kan spannend zijn."
    },
    back: {
      title: "Een verwijzing<br />betekent niet altijd dat je borstkanker hebt.",
      text: "Van elke 1.000 deelnemers krijgen ongeveer 23 vrouwen een verwijzing voor extra onderzoek. Bij 7 van hen wordt borstkanker gevonden. Bij de andere 16 vrouwen wordt geen borstkanker gevonden."
    }
  },
  {
    id: 6,
    question: "Is behandelen altijd nodig?",
    questionLines: ["Is behandelen", "altijd nodig?"],
    color: "t6",
    audio: "assets/audio/q6.m4a",
    frontAudio: "assets/audio/q6-front.m4a",
    backAudio: "assets/audio/q6-back.m4a",
    frontSound: { x: 0, y: 14 },
    backSound: { x: 0, y: 14 },
    textPos: "bottom",
    icon: { size: 54.5, top: -20, left: 30, c1: "#F7A58D", c2: "#B37B62", c3: "#DF897F", c3Inset: 41 },
    frontIcon: { size: 95, top: -12, left: 25 },
    backIcon: { size: 85, top: -12, left: 25 },
    front: {
      title: "Borstkanker wordt bijna altijd behandeld.",
      text: "Je overlegt hierover samen met je arts. Als borstkanker vroeg wordt behandeld, kan dat levens redden."
    },
    back: {
      title: "Soms is de behandeling achteraf gezien niet nodig.",
      text: "Bij ongeveer 1 op de 10 vrouwen zou de behandeling achteraf gezien niet nodig zijn geweest. De tumor groeide zo langzaam, dat deze tijdens het leven waarschijnlijk geen klachten zou hebben gegeven."
    }
  },
  {
    id: 7,
    question: "Kan ik gratis meedoen?",
    questionLines: ["Kan ik gratis", "meedoen?"],
    color: "t7",
    audio: "assets/audio/q7.m4a",
    frontAudio: "assets/audio/q7-front.m4a",
    backAudio: "assets/audio/q7-back.m4a",
    frontSound: { x: 0, y: 14 },
    backSound: { x: 0, y: 14 },
    textPos: "bottom",
    icon: { size: 60.5, top: 55.6, left: 47.2, c1: "#F3B5A8", c2: "#B37B62", c3: "#DF897F", c3Inset: 43 },
    frontIcon: { size: 68, top: -15, left: 52 },
    backIcon: { size: 68, top: -15, left: 52 },
    front: {
      title: "Meedoen aan het bevolkingsonderzoek is gratis.",
      text: "De overheid betaalt het onderzoek. Daarom hoef je zelf niets te betalen."
    },
    back: {
      title: "Extra onderzoek in het ziekenhuis kan wel geld kosten.",
      text: "Soms is na het bevolkingsonderzoek extra onderzoek in het ziekenhuis nodig. Dan kan een deel van de kosten afgaan van het eigen risico van je zorgverzekering."
    }
  },
  {
    id: 8,
    question: "Is dit onderzoek iets voor mij?",
    questionLines: ["Is dit onderzoek", "iets voor mij?"],
    color: "t8",
    audio: "assets/audio/q8.m4a",
    frontAudio: "assets/audio/q8-front.m4a",
    backAudio: "assets/audio/q8-back.m4a",
    frontSound: { x: 0, y: 14 },
    backSound: { x: 0, y: 14 },
    textPos: "center",
    icon: { size: 52.5, top: 60.9, left: 60.8, c1: "#6E2711", c2: "#C9625F", c3: "#DF897F" },
    frontIcon: { size: 65, top: -14, left: 55 },
    backIcon: { size: 65, top: -14, left: 55 },
    front: {
      title: "Het bevolkingsonderzoek is bedoeld voor vrouwen zonder veranderingen of klachten aan hun borsten.",
      text: "Heb je geen klachten? Dan kun je meedoen. Meedoen is altijd je eigen keuze."
    },
    back: {
      title: "Heb je een verandering of klacht aan je borsten? Dan is dit onderzoek niet voor jou.",
      text: "Heb je bijvoorbeeld een knobbel of een veranderde tepel? Ga dan direct naar de huisarts en doe niet mee aan het bevolkingsonderzoek."
    }
  },
  {
    id: 9,
    question: "Hoe kan ik meedoen aan het onderzoek?",
    questionLines: ["Hoe kan ik", "meedoen aan", "het onderzoek?"],
    color: "t9",
    audio: "assets/audio/q9.m4a",
    frontAudio: "assets/audio/q9-front.m4a",
    backAudio: "assets/audio/q9-back.m4a",
    frontSound: { x: 0, y: 14 },
    backSound: { x: 0, y: 14 },
    textPos: "bottom",
    icon: { size: 63.1, top: -18, left: 55, c1: "#DF897F", c2: "#6E2711", c3: "#500E0B", c3Inset: 43 },
    frontIcon: { size: 95, top: -22, left: 35 },
    backIcon: { size: 95, top: -22, left: 35 },
    front: {
      title: "Vrouwen van 50 tot en met 75 jaar krijgen een uitnodiging voor het bevolkingsonderzoek borstkanker.",
      text: "Vanaf je 50e krijg je vanzelf een uitnodiging van Bevolkingsonderzoek Nederland. Daarna krijg je elke 2 tot 3 jaar opnieuw een uitnodiging, tot en met je 75e. Alle informatie staat in de brief en folder die je ontvangt."
    },
    back: {
      title: "Ben je jonger dan 50 of ouder dan 75 jaar? Dan krijg je geen uitnodiging.",
      text: "Heb je een verandering of klacht aan je borsten? Ga dan direct naar de huisarts."
    }
  }
];
