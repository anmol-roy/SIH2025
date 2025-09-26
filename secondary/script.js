
    // Language switcher functionality
    const languageSwitcher = document.getElementById('languageSwitcher');
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');
    const currentFlag = document.getElementById('currentFlag');
    const currentLang = document.getElementById('currentLang');
    const greetingText = document.getElementById('greetingText');
    const overlay = document.getElementById('overlay');

    // Complete translation data
    const translations = {
      en: {
        flag: '🇬🇧',
        code: 'EN',
        greeting: '👋 Welcome to LearnRural',
        page: {
          title: 'Primary Classes',
          description: 'Build strong foundations with interactive learning designed for young minds. Choose your class to start your educational journey.'
        },
        stats: {
          classes: 'Classes',
          subjects: 'Subjects',
          lessons: 'Lessons'
        },
        class6: {
          title: 'Class 9',
          description: 'Strengthen your foundation with interactive lessons and practical learning to prepare for higher studies'
        },
        class7: {
          title: 'Class 10',
          description: 'Boost your knowledge with engaging content and exam-focused practice for board success.'
        },
        login: 'Login'
      },
      hi: {
        flag: '🇮🇳',
        code: 'HI',
        greeting: '👋 नमस्ते! STEMify में आपका स्वागत है',
        page: {
          title: 'प्राथमिक कक्षाएं',
          description: 'युवा मस्तिष्क के लिए डिज़ाइन किए गए इंटरैक्टिव लर्निंग के साथ मजबूत नींव बनाएं। अपनी शैक्षिक यात्रा शुरू करने के लिए अपनी कक्षा चुनें।'
        },
        stats: {
          classes: 'कक्षाएं',
          subjects: 'विषय',
          lessons: 'पाठ'
        },
        class6: {
          title: 'कक्षा 9',
          description: 'इंटरएक्टिव पाठों और व्यावहारिक सीख के साथ अपनी नींव मजबूत करें और उच्च कक्षाओं की तैयारी करें।'
        },
        class7: {
          title: 'कक्षा 10',
          description: 'रोचक सामग्री और परीक्षा-केंद्रित अभ्यास से अपने ज्ञान को बढ़ाएँ और बोर्ड परीक्षा में सफलता पाएं।'
        },
        login: 'लॉगिन'
      },
      or: {
        flag: '🏛️',
        code: 'OD',
        greeting: '👋 ନମସ୍କାର! STEMify କୁ ସ୍ୱାଗତ',
        page: {
          title: 'ପ୍ରାଥମିକ ଶ୍ରେଣୀଗୁଡ଼ିକ',
          description: 'ଯୁବ ମନ ପାଇଁ ଡିଜାଇନ୍ ହୋଇଥିବା ଇଣ୍ଟରାକ୍ଟିଭ୍ ଶିକ୍ଷଣ ସହିତ ଦୃଢ଼ ଭିତ୍ତି ନିର୍ମାଣ କରନ୍ତୁ। ଆପଣଙ୍କର ଶିକ୍ଷାଗତ ଯାତ୍ରା ଆରମ୍ଭ କରିବା ପାଇଁ ଆପଣଙ୍କର ଶ୍ରେଣୀ ବାଛନ୍ତୁ।'
        },
        stats: {
          classes: 'ଶ୍ରେଣୀଗୁଡ଼ିକ',
          subjects: 'ବିଷୟଗୁଡ଼ିକ',
          lessons: 'ପାଠଗୁଡ଼ିକ'
        },
        class6: {
          title: 'ଶ୍ରେଣୀ 9',
          description: 'ଆକର୍ଷଣୀୟ ପାଠ ଏବଂ ପ୍ରାୟୋଗିକ ଶିକ୍ଷା ସହିତ ନିଜର ଭିତିକୁ ମଜବୁତ କରନ୍ତୁ ଏବଂ ଉଚ୍ଚ ଶ୍ରେଣୀ ପାଇଁ ପ୍ରସ୍ତୁତି କରନ୍ତୁ।'
        },
        class7: {
          title: 'ଶ୍ରେଣୀ 10',
          description: 'ରୋମାଞ୍ଚକ ସାମଗ୍ରୀ ଏବଂ ପରୀକ୍ଷା-କେନ୍ଦ୍ରିତ ଅଭ୍ୟାସ ସହିତ ନିଜର ଜ୍ଞାନକୁ ବୃଦ୍ଧି କରନ୍ତୁ ଏବଂ ବୋର୍ଡ ପରୀକ୍ଷାରେ ସଫଳତା ପାଆନ୍ତୁ।'
        },
        login: 'ଲଗଇନ୍'
      }
    };

    let currentLanguage = 'en';
    let isOpen = false;

    // Get nested property from object using dot notation
    function getNestedProperty(obj, path) {
      return path.split('.').reduce((current, key) => current && current[key], obj);
    }

    // Update all translatable elements
    function updateTranslations(langCode) {
      const langData = translations[langCode];
      if (!langData) return;

      // Update all elements with data-translate attribute
      document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = getNestedProperty(langData, key);
        if (translation) {
          element.textContent = translation;
        }
      });

      // Update greeting separately
      greetingText.textContent = langData.greeting;

      // Update login button
      const loginBtn = document.getElementById('loginBtn');
      if (loginBtn) {
        loginBtn.textContent = langData.login;
      }
    }

    // Toggle dropdown
    function toggleDropdown() {
      isOpen = !isOpen;
      languageSwitcher.classList.toggle('open', isOpen);
      
      if (isOpen) {
        updateActiveLanguage();
      }
    }

    // Update active language in dropdown
    function updateActiveLanguage() {
      const buttons = languageDropdown.querySelectorAll('button');
      buttons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLanguage);
      });
    }

    // Close dropdown
    function closeDropdown() {
      isOpen = false;
      languageSwitcher.classList.remove('open');
    }

    // Change language
    function changeLanguage(langCode) {
      if (translations[langCode]) {
        currentLanguage = langCode;
        const lang = translations[langCode];
        
        // Update button display
        currentFlag.textContent = lang.flag;
        currentLang.textContent = lang.code;
        
        // Update all translations
        updateTranslations(langCode);
        
        // Store preference
        localStorage.setItem('preferred-language', langCode);
        
        // Close dropdown
        closeDropdown();

        // Trigger custom event for other components
        window.dispatchEvent(new CustomEvent('languageChanged', {
          detail: { language: langCode }
        }));
      }
    }

    // Event listeners
    languageBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleDropdown();
    });

    languageDropdown.addEventListener('click', (e) => {
      e.stopPropagation();
      const button = e.target.closest('button[data-lang]');
      if (button) {
        changeLanguage(button.dataset.lang);
      }
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (isOpen && !languageSwitcher.contains(e.target)) {
        closeDropdown();
      }
    });

    // Close when pressing Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeDropdown();
        languageBtn.focus();
      }
    });

    // Load saved language preference
    function loadLanguagePreference() {
      const saved = localStorage.getItem('preferred-language');
      if (saved && translations[saved]) {
        changeLanguage(saved);
      } else {
        updateTranslations(currentLanguage);
      }
    }

    // Navigation function
    function navigateToLevel(path) {
      console.log(`Navigating to: ${path}`);
      // You can implement actual navigation here
      alert(`Would navigate to: ${path}`);
    }

    // Initialize
    document.addEventListener('DOMContentLoaded', () => {
      loadLanguagePreference();
      updateActiveLanguage();
    });

    // Login button functionality
    document.getElementById('loginBtn').addEventListener('click', () => {
      const loginTexts = {
        en: 'Login clicked!',
        hi: 'लॉगिन पर क्लिक किया गया!',
        or: 'ଲଗଇନ୍ କ୍ଲିକ୍ କରାଗଲା!'
      };
      alert(loginTexts[currentLanguage] || loginTexts.en);
    });

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
      if (isOpen) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          closeDropdown();
        }, 150);
      }
    });
  