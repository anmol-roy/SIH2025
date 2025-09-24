
    (() => {
      // Complete translation table with all required translations
      const translations = {
        en: {
          "math.title": "Mathematics",
          "math.description": "Learn numbers, fractions, geometry, algebra, and more with fun lessons and activities.",

          "progress.chapters": "Chapters",
          "progress.lessons": "Lessons",
          "progress.completion": "Completion",
          "progress.streak": "Day Streak",

          "chapter.numbers.title": "Numbers & Operations",
          "chapter.numbers.desc": "Learn whole numbers, addition, subtraction, multiplication, and division.",
          "chapter.numbers.lessons": "5 Lessons",

          "chapter.fractions.title": "Fractions & Decimals",
          "chapter.fractions.desc": "Understand fractions, decimals, and real-life applications.",
          "chapter.fractions.lessons": "6 Lessons",

          "chapter.geometry.title": "Geometry",
          "chapter.geometry.desc": "Explore shapes, angles, areas, and perimeters with interactive diagrams.",
          "chapter.geometry.lessons": "7 Lessons",

          "chapter.algebra.title": "Introduction to Algebra",
          "chapter.algebra.desc": "Learn variables, equations, and basic algebraic expressions.",
          "chapter.algebra.lessons": "5 Lessons",

          "chapter.mensuration.title": "Mensuration",
          "chapter.mensuration.desc": "Calculate areas, volumes, and real-life measurement problems.",
          "chapter.mensuration.lessons": "5 Lessons",

          "difficulty.easy": "Easy",
          "difficulty.medium": "Medium",
          "difficulty.hard": "Hard",

          "quick.title": "Quick Access",
          "action.quiz": "🎯 Take a Quiz",
          "action.practice": "📝 Daily Practice",
          "action.games": "🎮 Math Games",
          "action.leaderboard": "🏆 Leaderboard"
        },

        hi: {
          "math.title": "गणित",
          "math.description": "संख्या, भिन्न, ज्यामिति, बीजगणित और अधिक मजेदार गतिविधियों के साथ सीखें।",

          "progress.chapters": "अध्याय",
          "progress.lessons": "पाठ",
          "progress.completion": "पूर्णता",
          "progress.streak": "दिन की श्रृंखला",

          "chapter.numbers.title": "संख्या और संक्रिया",
          "chapter.numbers.desc": "पूर्ण संख्या, जोड़, घटाव, गुणा और भाग सीखें।",
          "chapter.numbers.lessons": "5 पाठ",

          "chapter.fractions.title": "भिन्न और दशमलव",
          "chapter.fractions.desc": "भिन्न, दशमलव और वास्तविक जीवन के अनुप्रयोग समझें।",
          "chapter.fractions.lessons": "6 पाठ",

          "chapter.geometry.title": "ज्यामिति",
          "chapter.geometry.desc": "इंटरैक्टिव आरेखों के साथ आकार, कोण, क्षेत्रफल और परिधि का पता लगाएं।",
          "chapter.geometry.lessons": "7 पाठ",

          "chapter.algebra.title": "बीजगणित का परिचय",
          "chapter.algebra.desc": "चर, समीकरण और बुनियादी बीजगणितीय व्यंजक सीखें।",
          "chapter.algebra.lessons": "5 पाठ",

          "chapter.mensuration.title": "क्षेत्रमिति",
          "chapter.mensuration.desc": "क्षेत्रफल, आयतन और वास्तविक जीवन की माप समस्याओं की गणना करें।",
          "chapter.mensuration.lessons": "5 पाठ",

          "difficulty.easy": "आसान",
          "difficulty.medium": "मध्यम",
          "difficulty.hard": "कठिन",

          "quick.title": "त्वरित पहुँच",
          "action.quiz": "🎯 प्रश्नोत्तरी हल करें",
          "action.practice": "📝 दैनिक अभ्यास",
          "action.games": "🎮 गणित खेल",
          "action.leaderboard": "🏆 लीडरबोर्ड"
        },

        or: {
          "math.title": "ଗଣିତ",
          "math.description": "ସଂଖ୍ୟା, ଭାଗ, ଜ୍ୟାମିତି, ବୀଜଗଣିତ ଓ ଅନ୍ୟାନ୍ୟକୁ ମଜାଦାର କାର୍ଯ୍ୟକଳାପ ସହିତ ଶିଖନ୍ତୁ।",

          "progress.chapters": "ଅଧ୍ୟାୟ",
          "progress.lessons": "ପାଠ",
          "progress.completion": "ସମାପ୍ତ",
          "progress.streak": "ଦିନ ଶୃଙ୍ଖଳା",

          "chapter.numbers.title": "ସଂଖ୍ୟା ଓ କାର୍ଯ୍ୟ",
          "chapter.numbers.desc": "ପୂର୍ଣ୍ଣ ସଂଖ୍ୟା, ଯୋଗ, ବିୟୋଗ, ଗୁଣନ ଏବଂ ଭାଗ ଶିଖନ୍ତୁ।",
          "chapter.numbers.lessons": "5 ପାଠ",

          "chapter.fractions.title": "ଭଗ୍ନାଂଶ ଓ ଦଶମିକ",
          "chapter.fractions.desc": "ଭଗ୍ନାଂଶ, ଦଶମିକ ଏବଂ ପ୍ରକୃତ ଜୀବନର ଅନୁପ୍ରୟୋଗ ବୁଝନ୍ତୁ।",
          "chapter.fractions.lessons": "6 ପାଠ",

          "chapter.geometry.title": "ଜ୍ୟାମିତି",
          "chapter.geometry.desc": "ଇଣ୍ଟରାକ୍ଟିଭ ଚିତ୍ର ସହିତ ଆକୃତି, କୋଣ, କ୍ଷେତ୍ରଫଳ ଓ ପରିସୀମା ଅନ୍ବେଷଣ କରନ୍ତୁ।",
          "chapter.geometry.lessons": "7 ପାଠ",

          "chapter.algebra.title": "ବୀଜଗଣିତର ପରିଚୟ",
          "chapter.algebra.desc": "ଚଳ, ସମୀକରଣ ଏବଂ ମୌଳିକ ବୀଜଗଣିତୀୟ ଅଭିବ୍ୟକ୍ତି ଶିଖନ୍ତୁ।",
          "chapter.algebra.lessons": "5 ପାଠ",

          "chapter.mensuration.title": "କ୍ଷେତ୍ରମିତି",
          "chapter.mensuration.desc": "କ୍ଷେତ୍ରଫଳ, ଆୟତନ ଏବଂ ପ୍ରକୃତ ଜୀବନର ମାପ ସମସ୍ୟାର ଗଣନା କରନ୍ତୁ।",
          "chapter.mensuration.lessons": "5 ପାଠ",

          "difficulty.easy": "ସହଜ",
          "difficulty.medium": "ମଧ୍ୟମ",
          "difficulty.hard": "କଠିନ",

          "quick.title": "ତ୍ୱରିତ ପ୍ରବେଶ",
          "action.quiz": "🎯 ପ୍ରଶ୍ନୋତ୍ତର",
          "action.practice": "📝 ପ୍ରତିଦିନ ପ୍ରାକ୍ଟିସ",
          "action.games": "🎮 ଗଣିତ ଖେଳ",
          "action.leaderboard": "🏆 ଲିଡରବୋର୍ଡ"
        }
      };

      // Store original texts for fallback
      const originalTexts = {};

      function cacheOriginalTexts() {
        document.querySelectorAll("[data-translate]").forEach(el => {
          const key = el.getAttribute("data-translate");
          if (!(key in originalTexts)) {
            originalTexts[key] = el.textContent.trim();
          }
        });
      }

      // Apply translations to elements with data-translate attributes
      function applyTranslations(lang) {
        document.querySelectorAll("[data-translate]").forEach(el => {
          const key = el.getAttribute("data-translate");
          const translated = translations[lang] && translations[lang][key];
          el.textContent = translated || originalTexts[key] || el.textContent;
        });
        localStorage.setItem("selectedLanguage", lang);
      }

      // Helper: set UI (flag + code)
      function setLanguageUI(lang, flag) {
        const currentFlag = document.getElementById("currentFlag");
        const currentLang = document.getElementById("currentLang");
        if (currentFlag) currentFlag.textContent = flag || currentFlag.textContent;
        if (currentLang) currentLang.textContent = (lang || "").toUpperCase();
      }

      // DOM interactions
      document.addEventListener("DOMContentLoaded", () => {
        cacheOriginalTexts();

        const switcher = document.getElementById("languageSwitcher");
        const langBtn = document.getElementById("languageBtn");
        const dropdown = document.getElementById("languageDropdown");
        const currentFlag = document.getElementById("currentFlag");
        const currentLang = document.getElementById("currentLang");

        // Load saved language or default to English
        const savedLang = localStorage.getItem("selectedLanguage") || "en";
        const savedBtn = dropdown ? dropdown.querySelector(`button[data-lang="${savedLang}"]`) : null;
        
        if (savedBtn) {
          setLanguageUI(savedLang, savedBtn.dataset.flag);
        } else {
          setLanguageUI(savedLang, currentFlag?.textContent || "🇬🇧");
        }
        applyTranslations(savedLang);

        // Toggle dropdown
        if (langBtn && switcher) {
          langBtn.addEventListener("click", (ev) => {
            ev.stopPropagation();
            switcher.classList.toggle("active");
          });
        }

        // Language selection buttons
        if (dropdown) {
          dropdown.querySelectorAll("button[data-lang]").forEach(btn => {
            btn.addEventListener("click", (ev) => {
              const lang = btn.dataset.lang;
              const flag = btn.dataset.flag || btn.querySelector(".flag")?.textContent;
              setLanguageUI(lang, flag);
              applyTranslations(lang);
              if (switcher) switcher.classList.remove("active");
            });
          });
        }

        // Click outside closes dropdown
        document.addEventListener("click", (ev) => {
          if (!switcher) return;
          if (!switcher.contains(ev.target)) {
            switcher.classList.remove("active");
          }
        });

        // Escape closes dropdown
        document.addEventListener("keydown", (ev) => {
          if (ev.key === "Escape" && switcher) {
            switcher.classList.remove("active");
          }
        });

        // Smart back button
        const backBtn = document.querySelector(".back-btn");
        if (backBtn) {
          backBtn.addEventListener("click", (ev) => {
            ev.preventDefault();
            if (window.history.length > 1) {
              window.history.back();
            } else {
              const fallback = backBtn.getAttribute("href") || "index.html";
              window.location.href = fallback;
            }
          });
        }
      });
    })();
  