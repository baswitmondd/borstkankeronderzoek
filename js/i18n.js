// Translations come from the RIVM translation documents
// "260826_RIVM_Stellingen_V3_prep_<taal>" (English, Polish, Ukrainian,
// Turkish, Arabic), entered 2026-09-24. Exceptions: backLabel/flipLabel
// (site buttons) are not in those documents — the Polish ones are a
// machine translation, the others were already here. Pain-scale labels/
// numbers live inside assets/pain-scale-<lang>.png (see PAIN_SCALE_IMAGE
// in app.js) rather than here.
// Each language may add questionLines per question (manual line breaks on
// the tile, see getQuestionLines in app.js).
const RTL_LANGS = ["ar"];

const TRANSLATIONS = {
  "en": {
    "heroBefore": "Should I take part in the ",
    "heroHighlight": "breast cancer screening programme",
    "heroAfter": "?",
    "heroSubtitle": "We have set out all the information for you. You decide whether or not to take part.",
    "backLabel": "Back to questions",
    "flipLabel": "See the other side",
    "oneSideLabel": "On the one hand",
    "otherSideLabel": "On the other hand",
    "questions": {
      "1": {
        "question": "What are the benefits of breast cancer screening?",
        "questionLines": [
          "What are the",
          "benefits of breast",
          "cancer screening?"
        ],
        "front": {
          "title": "The screening programme can detect breast cancer at an early stage.",
          "text": "Early detection increases the chances that breast cancer can be treated successfully. It also often means that treatment can be less intensive."
        },
        "back": {
          "title": "The screening programme offers a snapshot",
          "text": "This is why you receive a new invitation every two to three years. Women who take part in screening regularly are less likely to die from breast cancer than women who do not take part."
        }
      },
      "2": {
        "question": "Does the breast exam hurt?",
        "questionLines": [
          "Does the",
          "breast exam",
          "hurt?"
        ],
        "front": {
          "title": "Compressing the breasts can be uncomfortable or painful.",
          "text": "It varies from person to person. On average, participants rate the pain as <strong>4</strong> on a scale from 0 (no pain) to 10 (worst pain imaginable)."
        },
        "back": {
          "title": "The breasts are only compressed for a short time.",
          "text": "Two X-rays are taken of each breast. For each X-ray, the breast is compressed for a few seconds. This is necessary to obtain a clear image."
        }
      },
      "3": {
        "question": "Is breast cancer always detected?",
        "questionLines": [
          "Is breast",
          "cancer always",
          "detected?"
        ],
        "front": {
          "title": "Most abnormalities are found.",
          "text": "Each X-ray is examined by two doctors, independently of one another. This increases the likelihood of detecting breast cancer."
        },
        "back": {
          "title": "The screening may miss breast cancer.",
          "text": "7 out of every 10 cases of breast cancer are detected. 3 out of 10 cases are not detected through the screening programme."
        }
      },
      "4": {
        "question": "Does a favourable result give certainty?",
        "questionLines": [
          "Does a favourable",
          "result give",
          "certainty?"
        ],
        "front": {
          "title": "Most women receive a favourable result.",
          "text": "Out of every 100 women, 98 receive a result showing ‘no abnormalities’. This can feel reassuring."
        },
        "back": {
          "title": "A favourable result does not provide complete certainty.",
          "text": "The screening test is a snapshot in time. Sometimes, breast cancer may be present but go undetected. Breast cancer can also develop between two screening tests."
        }
      },
      "5": {
        "question": "Is a referral a cause for concern?",
        "questionLines": [
          "Is a referral",
          "a cause for",
          "concern?"
        ],
        "front": {
          "title": "A referral can cause worry and anxiety.",
          "text": "Following a referral, further tests are needed to establish whether there is a problem. Waiting for the result can be stressful."
        },
        "back": {
          "title": "A referral does not always mean that you have breast cancer.",
          "text": "Of every 1,000 participants, around 23 women are referred for further tests. Breast cancer is detected in 7 of these women. The other 16 women do not have breast cancer."
        }
      },
      "6": {
        "question": "Is treatment always necessary?",
        "questionLines": [
          "Is treatment",
          "always necessary?"
        ],
        "front": {
          "title": "Breast cancer is almost always treated.",
          "text": "You will discuss this with your doctor. Treating breast cancer at an early stage can save lives."
        },
        "back": {
          "title": "In some cases, treatment turns out not to have been necessary.",
          "text": "For around 1 in 10 women, treatment turns out not to have been necessary. The tumour grew so slowly that it would probably not have caused any symptoms during their lifetime."
        }
      },
      "7": {
        "question": "Can I take part for free?",
        "questionLines": [
          "Can I take part",
          "for free?"
        ],
        "front": {
          "title": "Taking part in the screening programme is free of charge.",
          "text": "The government pays for the population screening. You do not have to pay anything yourself."
        },
        "back": {
          "title": "Further tests at the hospital may involve costs.",
          "text": "Sometimes, further tests at the hospital are needed after the screening. In that case, part of the costs may be deducted from your health insurance excess."
        }
      },
      "8": {
        "question": "Is this screening right for me?",
        "questionLines": [
          "Is this screening",
          "right for me?"
        ],
        "front": {
          "title": "The screening programme is intended for women with no changes or symptoms affecting their breasts.",
          "text": "You can take part if you have no symptoms. Taking part is always your own choice."
        },
        "back": {
          "title": "If you have a change or symptom affecting your breasts, this screening is not for you.",
          "text": "For example, if you have a lump or a change to your nipple, contact your GP straight away and do not take part in the screening programme."
        }
      },
      "9": {
        "question": "How can I take part in the screening?",
        "questionLines": [
          "How can I take",
          "part in the",
          "screening?"
        ],
        "front": {
          "title": "Women aged 50 to 75 are invited to take part in the breast cancer screening programme.",
          "text": "You will automatically receive an invitation from Bevolkingsonderzoek Nederland when you turn 50. You will then receive a new invitation every two to three years, until the age of 75. The letter and leaflet you receive contain all the information."
        },
        "back": {
          "title": "If you are under 50 or over 75, you will not receive an invitation.",
          "text": "If you have a change or symptom affecting your breasts, contact your GP straight away."
        }
      }
    }
  },
  "pl": {
    "heroBefore": "Czy wziąć udział w programie ",
    "heroHighlight": "badań przesiewowych w kierunku raka piersi",
    "heroAfter": "?",
    "heroSubtitle": "Przedstawimy Ci wszystkie informacje, a Ty zdecydujesz, czy chcesz wziąć udział, czy nie.",
    "backLabel": "Wróć do pytań",
    "flipLabel": "Zobacz drugą stronę",
    "oneSideLabel": "Z jednej strony",
    "otherSideLabel": "Z drugiej strony",
    "questions": {
      "1": {
        "question": "Co daje udział w programie badań przesiewowych w kierunku raka piersi?",
        "front": {
          "title": "Badanie przesiewowe może wykryć raka piersi we wczesnym stadium.",
          "text": "Wczesne wykrycie raka piersi zwiększa szanse na skuteczne leczenie. Jeśli rak piersi zostanie wykryty we wczesnym stadium, leczenie często może być również łagodniejsze."
        },
        "back": {
          "title": "Badanie przesiewowe pokazuje tylko stan z danego momentu.",
          "text": "Dlatego zaproszenie na badanie otrzymujesz co 2–3 lata. U kobiet regularnie uczestniczących w badaniach przesiewowych ryzyko śmierci z powodu raka piersi jest znacznie niższe, niż u tych, które nie biorą w nich udziału."
        }
      },
      "2": {
        "question": "Czy badanie jest bolesne?",
        "front": {
          "title": "Uciskanie piersi może być nieprzyjemne lub bolesne.",
          "text": "To zależy od osoby. Średnio uczestniczki oceniają odczuwany ból <strong>na 4</strong> w skali od 0 (brak bólu) do 10 (najsilniejszy wyobrażalny ból)."
        },
        "back": {
          "title": "Uciskanie piersi trwa tylko chwilę.",
          "text": "Każda pierś jest prześwietlana 2 razy. Przed wykonaniem każdego prześwietlenia pierś jest uciskana przez kilka sekund. Jest to konieczne, aby uzyskać wyraźne zdjęcie rentgenowskie."
        }
      },
      "3": {
        "question": "Czy rak piersi zawsze zostaje wykryty?",
        "front": {
          "title": "Większość nieprawidłowości zostaje wykryta.",
          "text": "Każde zdjęcie jest oceniane przez dwóch lekarzy. Każdy z nich analizuje je niezależnie. Dzięki temu zwiększa się szansa na wykrycie raka piersi."
        },
        "back": {
          "title": "Badanie może nie wykryć raka piersi.",
          "text": "Spośród 10 przypadków raka piersi 7 z nich zostaje wykrytych. W 3 na 10 przypadków rak piersi nie zostaje wykryty w ramach programu badań przesiewowych."
        }
      },
      "4": {
        "question": "Czy prawidłowy wynik daje całkowitą pewność?",
        "front": {
          "title": "U większości kobiet wynik badania nie wykazuje żadnych nieprawidłowości.",
          "text": "Spośród 100 kobiet 98 z nich otrzymuje wynik „nie stwierdzono nieprawidłowości”. Taki wynik może dać poczucie spokoju."
        },
        "back": {
          "title": "Prawidłowy wynik nie daje całkowitej pewności.",
          "text": "Badanie pokazuje stan piersi w danym momencie. Czasami rak piersi może nie zostać zauważony. Rak piersi może również rozwinąć się w okresie pomiędzy dwoma badaniami."
        }
      },
      "5": {
        "question": "Czy skierowanie na dodatkowe badania jest powodem do niepokoju?",
        "front": {
          "title": "Skierowanie na dodatkowe badania może powodować niepokój i napięcie.",
          "text": "Po otrzymaniu skierowania konieczne jest wykonanie dodatkowych badań, aby upewnić się, czy rzeczywiście występuje jakaś nieprawidłowość. Oczekiwanie na wynik może być stresujące."
        },
        "back": {
          "title": "Skierowanie na dodatkowe badania nie oznacza, że masz raka piersi.",
          "text": "Spośród 1000 uczestniczek około 23 kobiety otrzymują skierowanie na dodatkowe badania. U 7 z nich zostaje wykryty rak piersi. U pozostałych 16 kobiet rak piersi nie zostaje wykryty."
        }
      },
      "6": {
        "question": "Czy leczenie jest zawsze konieczne?",
        "front": {
          "title": "Rak piersi jest prawie zawsze leczony.",
          "text": "Decyzję dotyczącą leczenia podejmujesz wspólnie z lekarzem. Wczesne leczenie raka piersi może uratować życie."
        },
        "back": {
          "title": "Czasami z perspektywy czasu okazuje się, że leczenie nie było konieczne.",
          "text": "W przypadku około 1 na 10 kobiet z perspektywy czasu okazuje się, że leczenie nie było potrzebne. Guz rósł tak wolno, że prawdopodobnie w ciągu życia nie spowodowałby żadnych dolegliwości."
        }
      },
      "7": {
        "question": "Czy udział w badaniu jest bezpłatny?",
        "front": {
          "title": "Udział w programie badań przesiewowych jest bezpłatny.",
          "text": "Badanie jest finansowane przez państwo, dlatego nie musisz za nie płacić."
        },
        "back": {
          "title": "Dodatkowe badania w szpitalu mogą jednak wiązać się z kosztami.",
          "text": "Czasami po badaniu przesiewowym konieczne jest wykonanie dodatkowych badań w szpitalu. W takim przypadku część kosztów może zostać odliczona od udziału własnego w ramach Twojego ubezpieczenia zdrowotnego."
        }
      },
      "8": {
        "question": "Czy to badanie jest odpowiednie dla mnie?",
        "front": {
          "title": "Program badań przesiewowych jest przeznaczony dla kobiet, u których nie występują zmiany ani dolegliwości dotyczące piersi.",
          "text": "Jeśli nie masz żadnych dolegliwości, możesz wziąć udział w badaniu. Udział w nim zawsze jest Twoją własną decyzją."
        },
        "back": {
          "title": "Zauważyłaś jakieś zmiany w piersiach lub odczuwasz dolegliwości z nimi związane? To badanie nie jest przeznaczone dla Ciebie.",
          "text": "Jeśli na przykład wyczuwasz guzek lub zauważasz zmianę w wyglądzie sutka, zgłoś się bezpośrednio do lekarza rodzinnego i nie bierz udziału w programie badań przesiewowych."
        }
      },
      "9": {
        "question": "Jak mogę wziąć udział w badaniu?",
        "front": {
          "title": "Kobiety w wieku od 50 do 75 lat otrzymują zaproszenie do udziału w programie badań przesiewowych w kierunku raka piersi.",
          "text": "Po ukończeniu 50. roku życia automatycznie otrzymasz zaproszenie na badania od organizacji Bevolkingsonderzoek Nederland. Następnie co 2–3 lata będziesz otrzymywać kolejne zaproszenie, aż do ukończenia 75. roku życia. Wszystkie informacje znajdują się w zaproszeniu i broszurze informacyjnej, które otrzymasz."
        },
        "back": {
          "title": "Masz mniej niż 50 lat lub więcej niż 75 lat? W takim przypadku nie otrzymasz zaproszenia na badania.",
          "text": "Jeśli zauważasz jakieś zmiany w piersiach lub odczuwasz dolegliwości z nimi związane, zgłoś się bezpośrednio do lekarza rodzinnego."
        }
      }
    }
  },
  "uk": {
    "heroBefore": "Брати участь у ",
    "heroHighlight": "скринінгу раку молочної залози",
    "heroAfter": "?",
    "heroSubtitle": "Ми зібрали для Вас усю інформацію, аби Ви могли прийняти рішення, чи брати участь.",
    "backLabel": "Назад до запитань",
    "flipLabel": "Подивитися інший бік",
    "oneSideLabel": "З одного боку",
    "otherSideLabel": "З іншого боку",
    "questions": {
      "1": {
        "question": "Що дає скринінг раку молочної залози?",
        "front": {
          "title": "Скринінг населення дозволяє виявити рак молочної залози на ранній стадії.",
          "text": "Раннє виявлення раку молочної залози підвищує шанси на успішне лікування. А якщо рак молочної залози виявляють на ранній стадії, лікування часто буває менш виснажливим."
        },
        "back": {
          "title": "Скринінг населення дає уявлення лише на конкретний момент його проведення.",
          "text": "Тому кожні 2-3 роки Ви отримуватимете нове запрошення. Жінки, які регулярно беруть участь у скринінгу, мають менший ризик померти від раку молочної залози, ніж жінки, які не приймають у них участі."
        }
      },
      "2": {
        "question": "Чи болюче це обстеження?",
        "front": {
          "title": "Стискання грудей може викликати дискомфорт або біль.",
          "text": "Це залежить від кожної конкретної людини. В середньому учасники ставлять <strong>оцінку 4</strong> за шкалою від 0 (відсутність болю) до 10 (найсильніший біль, який тільки можна уявити)."
        },
        "back": {
          "title": "Стискання грудей є дуже короткочасним.",
          "text": "Роблять по 2 знімки кожної груді. Перед кожним знімком груди стискають на кілька секунд. Це необхідно для того, щоб отримати гарне зображення."
        }
      },
      "3": {
        "question": "Чи завжди виявляють рак молочної залози?",
        "front": {
          "title": "Більшість відхилень виявляються.",
          "text": "Кожне фото переглядають 2 лікарі. Вони переглядають їх незалежно один від одного. Це збільшує ймовірність виявлення раку молочної залози."
        },
        "back": {
          "title": "Під час обстеження можна пропустити рак молочної залози.",
          "text": "З кожних 10 випадків раку молочної залози виявляють 7. У 3 з 10 випадків захворювання не виявляються в ході скринінгу."
        }
      },
      "4": {
        "question": "Чи дає хороший результат впевненість?",
        "front": {
          "title": "Більшість жінок отримують сприятливий результат.",
          "text": "З кожних 100 жінок 98 отримують результат «відхилень не виявлено». Це може дати відчуття спокою."
        },
        "back": {
          "title": "Навіть хороший результат не дає повної впевненості.",
          "text": "Дослідження є лише зрізом поточного стану. Іноді пухлину не помічають. Крім того, рак молочної залози може розвинутися в період між двома обстеженнями."
        }
      },
      "5": {
        "question": "Чи є це направлення приводом для занепокоєння?",
        "front": {
          "title": "Направлення може викликати занепокоєння та напругу.",
          "text": "Після направлення потрібно провести додаткове обстеження, щоб переконатися, чи є якась проблема. Очікування цих результатів може бути напруженим."
        },
        "back": {
          "title": "Направлення не завжди означає, що у Вас рак молочної залози.",
          "text": "З кожних 1000 учасників приблизно 23 жінки отримують направлення на додаткове обстеження. У 7 з них виявляють рак молочної залози. У решти 16 жінок рак молочної залози не знаходять."
        }
      },
      "6": {
        "question": "Чи завжди необхідне лікування?",
        "front": {
          "title": "Рак молочної залози майже завжди піддається лікуванню.",
          "text": "Ви обговорите це питання зі своїм лікарем. Якщо почати лікувати рак молочної залози на ранній стадії, це може врятувати життя."
        },
        "back": {
          "title": "Іноді, як виявляється згодом, лікування не потрібне.",
          "text": "Приблизно у 1 із 10 жінок лікування згодом виявляється непотрібним. Пухлина росла настільки повільно, що, ймовірно, не викликала б жодних скарг за життя пацієнта."
        }
      },
      "7": {
        "question": "Чи можу я взяти участь безкоштовно?",
        "front": {
          "title": "Участь у скринінгу раку молочної залози безкоштовна.",
          "text": "Обстеження оплачується державою. Тому вам не потрібно нічого платити."
        },
        "back": {
          "title": "Додаткове обстеження в лікарні може коштувати грошей.",
          "text": "Іноді після скринінгу виникає потреба в додатковій діагностиці в лікарні. У такому випадку частина витрат може бути віднесена до франшизи Вашої медичної страховки."
        }
      },
      "8": {
        "question": "Чи підходить мені це дослідження?",
        "front": {
          "title": "Скринінг призначений для жінок, у яких немає змін або скарг щодо грудей.",
          "text": "У вас немає скарг? Тоді ви можете взяти участь. Участь — це завжди Ваш власний вибір."
        },
        "back": {
          "title": "Чи помітили Ви якісь зміни у грудях або є скарги щодо грудей? Тоді це дослідження не для Вас.",
          "text": "Чи є у Вас, наприклад, ущільнення або зміна стану соска? У такому разі негайно зверніться до сімейного лікаря і не беріть участі у скринінгу населення."
        }
      },
      "9": {
        "question": "Як я можу взяти участь у дослідженні?",
        "front": {
          "title": "Жінки віком від 50 до 75 років отримують запрошення на скринінг раку молочної залози.",
          "text": "Починаючи з 50 років, Ви автоматично отримуватимете запрошення від організації «Bevolkingsonderzoek Nederland». Після цього нове запрошення приходитиме кожні 2–3 роки до досягнення 75 років. Уся інформація міститься у листі та брошурі, які Ви отримаєте."
        },
        "back": {
          "title": "Вам менше 50 років або більше 75 років? Тоді запрошення ви не отримаєте.",
          "text": "У Вас є якісь зміни у грудях або скарги щодо грудей? У такому разі негайно зверніться до сімейного лікаря."
        }
      }
    }
  },
  "tr": {
    "heroBefore": "Meme kanseri ",
    "heroHighlight": "toplum taramasına",
    "heroAfter": " katılmak mı, katılmamak mı?",
    "heroSubtitle": "Tüm bilgileri senin için sıralıyoruz, katılıp katılmamaya sen karar verirsin.",
    "backLabel": "Sorulara dön",
    "flipLabel": "Diğer tarafa bak",
    "oneSideLabel": "Bir yandan",
    "otherSideLabel": "Öte yandan",
    "questions": {
      "1": {
        "question": "Meme kanseri toplum taraması ne kazandırır?",
        "front": {
          "title": "Toplum taraması meme kanserini erken tespit edebilir.",
          "text": "Meme kanserinin erken tespit edilmesi, tedavinin başarılı olma olasılığını artırır. Ayrıca meme kanseri erken tespit edildiğinde tedavi de çoğu zaman daha hafif olabilir."
        },
        "back": {
          "title": "Toplum taraması yalnızca o an hakkında bir şey söyler.",
          "text": "Bu nedenle her 2 ila 3 yılda bir yeni bir davet alırsın. Toplum taramasına düzenli olarak katılan kadınların meme kanserinden hayatını kaybetme olasılığı, katılmayan kadınlara göre daha düşüktür."
        }
      },
      "2": {
        "question": "Tarama ağrı yapar mı?",
        "front": {
          "title": "Memelerin sıkıştırılması rahatsız edici veya ağrılı olabilir.",
          "text": "Bu kişiden kişiye değişir. Katılımcılar 0 (ağrı yok) ile 10 (düşünülebilecek en şiddetli ağrı) arasındaki bir ölçekte ortalama 4 puan verir."
        },
        "back": {
          "title": "Memelerin sıkıştırılması yalnızca kısa sürer.",
          "text": "Her memenin 2 görüntüsü çekilir. Her görüntü için meme birkaç saniye sıkıştırılır. Bu, iyi bir görüntü elde etmek için gereklidir."
        }
      },
      "3": {
        "question": "Meme kanseri her zaman tespit edilir mi?",
        "front": {
          "title": "Anormalliklerin çoğu tespit edilir.",
          "text": "Her görüntü 2 doktor tarafından incelenir. Birbirlerinden bağımsız olarak bakarlar. Böylece meme kanserinin tespit edilme olasılığı daha yüksek olur."
        },
        "back": {
          "title": "Tarama meme kanserini gözden kaçırabilir.",
          "text": "Her 10 meme kanseri vakasından 7'si tespit edilir. Her 10 vakadan 3'ü toplum taramasında tespit edilmez."
        }
      },
      "4": {
        "question": "İyi bir sonuç sana kesinlik verir mi?",
        "front": {
          "title": "Kadınların çoğu olumlu bir sonuç alır.",
          "text": "Her 100 kadından 98'i “anormallik yok” sonucunu alır. Bu, bir huzur duygusu verebilir."
        },
        "back": {
          "title": "İyi bir sonuç tam bir kesinlik vermez.",
          "text": "Tarama, anlık bir durum tespitidir. Bazen gözden kaçmış bir meme kanseri olabilir. Ayrıca iki tarama arasında da meme kanseri oluşabilir."
        }
      },
      "5": {
        "question": "Sevk, endişelenmek için bir neden midir?",
        "front": {
          "title": "Sevk edilmek endişe ve gerginlik yaratabilir.",
          "text": "Sevkten sonra, bir sorun olup olmadığından emin olmak için ek inceleme gerekir. O sonucu beklemek gerginlik yaratabilir."
        },
        "back": {
          "title": "Sevk, her zaman meme kanserin olduğu anlamına gelmez.",
          "text": "Her 1.000 katılımcıdan yaklaşık 23 kadın ek inceleme için sevk edilir. Bunların 7'sinde meme kanseri tespit edilir. Diğer 16 kadında meme kanseri tespit edilmez."
        }
      },
      "6": {
        "question": "Tedavi her zaman gerekli midir?",
        "front": {
          "title": "Meme kanseri neredeyse her zaman tedavi edilir.",
          "text": "Bunu doktorunla birlikte görüşürsün. Meme kanserinin erken tedavi edilmesi hayat kurtarabilir."
        },
        "back": {
          "title": "Bazen tedavinin aslında gerekli olmadığı sonradan anlaşılır.",
          "text": "Yaklaşık her 10 kadından 1'inde tedavinin aslında gerekli olmadığı sonradan anlaşılır. Tümör o kadar yavaş büyüyordu ki büyük olasılıkla yaşam boyunca hiçbir şikâyete yol açmayacaktı."
        }
      },
      "7": {
        "question": "Ücretsiz katılabilir miyim?",
        "front": {
          "title": "Toplum taramasına katılmak ücretsizdir.",
          "text": "Taramayı devlet öder. Bu nedenle kendin hiçbir şey ödemek zorunda değilsin."
        },
        "back": {
          "title": "Hastanede yapılan ek inceleme ise paraya mal olabilir.",
          "text": "Bazen toplum taramasından sonra hastanede ek inceleme gerekir. O zaman masrafların bir kısmı sağlık sigortanın muafiyet tutarından (eigen risico) düşülebilir."
        }
      },
      "8": {
        "question": "Bu tarama bana uygun mu?",
        "front": {
          "title": "Toplum taraması, memelerinde değişiklik veya şikâyet olmayan kadınlara yöneliktir.",
          "text": "Şikâyetin yok mu? O hâlde katılabilirsin. Katılmak her zaman senin kendi seçimindir."
        },
        "back": {
          "title": "Memelerinde bir değişiklik veya şikâyet mi var? O hâlde bu tarama sana göre değil.",
          "text": "Örneğin bir yumrun ya da değişmiş bir meme ucun mu var? O hâlde hemen aile hekimine git ve toplum taramasına katılma."
        }
      },
      "9": {
        "question": "Taramaya nasıl katılabilirim?",
        "front": {
          "title": "50 ile 75 yaş arasındaki kadınlar (75 yaş dâhil) meme kanseri toplum taraması için davet alır.",
          "text": "50 yaşından itibaren Bevolkingsonderzoek Nederland'dan (Hollanda Toplum Taraması Kurumu) kendiliğinden bir davet alırsın. Bundan sonra 75 yaşına kadar (75 dâhil) her 2 ila 3 yılda bir yeniden davet alırsın. Tüm bilgiler aldığın mektupta ve broşürde yer alır."
        },
        "back": {
          "title": "50 yaşından küçük veya 75 yaşından büyük müsün? O hâlde davet almazsın.",
          "text": "Memelerinde bir değişiklik veya şikâyet mi var? O hâlde hemen aile hekimine git."
        }
      }
    }
  },
  "ar": {
    "heroBefore": "هل تشاركين في برنامج ",
    "heroHighlight": "الفحص السكاني للكشف عن سرطان الثدي",
    "heroAfter": " أم لا؟",
    "heroSubtitle": "سنقدم لكِ بجميع المعلومات المتعلقة بذلك، وأنتِ تقررين ما إذا كنتِ ستشاركين أم لا.",
    "backLabel": "الرجوع إلى الأسئلة",
    "flipLabel": "مشاهدة الجانب الآخر",
    "oneSideLabel": "من جهة",
    "otherSideLabel": "من جهة أخرى",
    "questions": {
      "1": {
        "question": "ما هي الفائدة من برنامج الفحص السكاني للكشف عن سرطان الثدي؟",
        "front": {
          "title": "يمكن لبرنامج الفحص السكاني اكتشاف سرطان الثدي في مرحلة مبكرة.",
          "text": "إن اكتشاف سرطان الثدي في مرحلة مبكرة يزيد من فرصة نجاح العلاج. وعندما يتم اكتشاف سرطان الثدي في مرحلة مبكرة، غالبًا ما يكون العلاج أقل شدة أيضًا."
        },
        "back": {
          "title": "لا يعطي برنامج الفحص السكاني معلومات إلا عن الحالة في ذلك الوقت.",
          "text": "ولذلك تتلقين دعوة جديدة كل سنتين إلى ثلاث سنوات. النساء اللواتي يشاركن بانتظام في برنامج الفحص السكاني لديهن احتمال أقل للوفاة بسبب سرطان الثدي مقارنةً بالنساء اللواتي لا يشاركن."
        }
      },
      "2": {
        "question": "هل الفحص مؤلم؟",
        "front": {
          "title": "قد يكون ضغط الثديين معًا مزعجًا أو مؤلمًا.",
          "text": "ويختلف ذلك من شخص إلى آخر. في المتوسط، تعطي المشاركات <strong>درجة 4</strong> على مقياس من 0 (لا يوجد ألم) إلى 10 (أسوأ ألم يمكن تصوره)."
        },
        "back": {
          "title": "لا يستغرق ضغط الثديين معًا سوى وقت قصير.",
          "text": "تُلتقط صورتان لكل ثدي. يتم ضغط الثدي لبضع ثوانٍ لكل صورة. وهذا ضروري لالتقاط صورة جيدة."
        }
      },
      "3": {
        "question": "هل يتم دائمًا اكتشاف سرطان الثدي؟",
        "front": {
          "title": "يتم اكتشاف معظم تغيّرات غير طبيعية.",
          "text": "يتم فحص كل صورة من قِبل طبيبين. ويفحص كل منهما الصور بشكل مستقل عن الآخر. وبذلك تزداد فرصة اكتشاف سرطان الثدي."
        },
        "back": {
          "title": "قد لا يكتشف الفحص سرطان الثدي.",
          "text": "من بين كل 10 حالات من سرطان الثدي، يتم اكتشاف 7 حالات. ولا يتم اكتشاف 3 من كل 10 حالات من خلال برنامج الفحص السكاني."
        }
      },
      "4": {
        "question": "هل تمنحكِ النتيجة الجيدة اليقين؟",
        "front": {
          "title": "تحصل معظم النساء على نتيجة مطمئنة.",
          "text": "من بين كل 100 امرأة، تحصل 98 امرأة على نتيجة \"لا توجد أي تغيّرات غير طبيعية\". وقد يمنح ذلك شعورًا بالطمأنينة."
        },
        "back": {
          "title": "لا تمنح النتيجة الجيدة يقينًا كاملًا.",
          "text": "فالفحص هو صورة للحالة في لحظة معينة. وفي بعض الأحيان يكون هناك سرطان ثدي لم يتم اكتشافه. كما يمكن أن ينشأ سرطان الثدي في الفترة بين فحصين."
        }
      },
      "5": {
        "question": "هل الإحالة تستدعي القلق؟",
        "front": {
          "title": "قد تسبب الإحالة القلق والتوتر.",
          "text": "بعد الإحالة، يلزم إجراء فحوص إضافية للتأكد من وجود مشكلة من عدمه. وقد يكون انتظار نتيجة هذه الفحوص أمرًا يسبب التوتر."
        },
        "back": {
          "title": "لا تعني الإحالة دائمًا أنكِ مصابة بسرطان الثدي.",
          "text": "من بين كل 1,000 مشاركة، تتم إحالة نحو 23 امرأة لإجراء فحوص إضافية. يتم اكتشاف سرطان الثدي لدى 7 منهن. ولا يتم اكتشاف سرطان الثدي لدى النساء الـ16 الأخريات."
        }
      },
      "6": {
        "question": "هل العلاج ضروري دائمًا؟",
        "front": {
          "title": "يتم علاج سرطان الثدي في جميع الحالات تقريبًا.",
          "text": "وتناقشين هذا الأمر مع طبيبكِ وتتخذان القرار معًا. يمكن أن ينقذ علاج سرطان الثدي في مرحلة مبكرة الحياة."
        },
        "back": {
          "title": "في بعض الأحيان يتبين لاحقًا أن العلاج لم يكن ضروريًا.",
          "text": "وفي نحو حالة واحدة من كل 10 نساء، يتبين لاحقًا أن العلاج لم يكن ضروريًا. كان الورم ينمو ببطء شديد، ولذلك من المحتمل أنه لم يكن ليسبب أي أعراض خلال حياة المرأة."
        }
      },
      "7": {
        "question": "هل يمكنني المشاركة مجانًا؟",
        "front": {
          "title": "المشاركة في برنامج الفحص السكاني مجانية.",
          "text": "وتتحمل الحكومة تكاليف الفحص. ولذلك لا يتعين عليكِ دفع أي شيء بنفسكِ."
        },
        "back": {
          "title": "قد تترتب تكاليف على إجراء فحوص إضافية في المستشفى.",
          "text": "في بعض الأحيان تكون هناك حاجة إلى إجراء فحوص إضافية في المستشفى بعد برنامج الفحص السكاني. وفي هذه الحالة، قد يُخصم جزء من التكاليف من مبلغ التحمل الشخصي في تأمينكِ الصحي."
        }
      },
      "8": {
        "question": "هل هذا الفحص مناسبة لي؟",
        "front": {
          "title": "برنامج الفحص السكاني مخصص للنساء اللواتي لا يعانين من أي تغيرات أو أعراض في الثديين.",
          "text": "ألا تعانين من أي أعراض؟ إذن يمكنكِ المشاركة. المشاركة هي دائمًا خياركِ الشخصي."
        },
        "back": {
          "title": "هل لديكِ تغير أو أعراض في الثديين؟ إذن فهذا الفحص غير مناسبة لكِ.",
          "text": "هل لديكِ، على سبيل المثال، كتلة أو تغير في حلمة الثدي؟ إذن توجهي مباشرةً إلى طبيب الأسرة ولا تشاركي في برنامج الفحص السكاني."
        }
      },
      "9": {
        "question": "كيف يمكنني المشاركة في الفحص؟",
        "front": {
          "title": "تتلقى النساء من سن 50 عامًا وحتى 75 عامًا دعوة للمشاركة في برنامج الفحص السكاني للكشف عن سرطان الثدي.",
          "text": "ابتداءً من سن 50 عامًا، تتلقين تلقائيًا دعوة من مؤسسة Bevolkingsonderzoek Nederland. بعد ذلك، تتلقين دعوة جديدة كل سنتين إلى ثلاث سنوات، حتى بلوغكِ سن 75 عامًا. تجدين جميع المعلومات في الرسالة والمنشور اللذين تتلقينهما."
        },
        "back": {
          "title": "هل يقل عمركِ عن 50 عامًا أو يزيد على 75 عامًا؟ إذن لن تتلقي دعوة.",
          "text": "هل لديكِ تغير أو أعراض في الثديين؟ إذن توجهي مباشرةً إلى طبيب الأسرة."
        }
      }
    }
  }
};
