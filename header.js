
    // Language switcher functionality
    const languageSwitcher = document.getElementById('languageSwitcher');
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');
    const currentFlag = document.getElementById('currentFlag');
    const currentLang = document.getElementById('currentLang');
    const greetingText = document.getElementById('greetingText');
    const overlay = document.getElementById('overlay');

    // Language data
    const languages = {
      en: {
        flag: '🇬🇧',
        code: 'EN',
        greeting: '👋 Welcome to LearnRural'
      },
      hi: {
        flag: '🇮🇳',
        code: 'HI',
        greeting: '👋 नमस्ते! LearnRural में आपका स्वागत है'
      },
      or: {
        flag: '🏛️',
        code: 'OD',
        greeting: '👋 ନମସ୍କାର! LearnRural କୁ ସ୍ୱାଗତ'
      }
    };

    let currentLanguage = 'en';
    let isOpen = false;

    // Toggle dropdown
    function toggleDropdown() {
      isOpen = !isOpen;
      languageSwitcher.classList.toggle('open', isOpen);
      
      if (isOpen) {
        // Update active state
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
      if (languages[langCode]) {
        currentLanguage = langCode;
        const lang = languages[langCode];
        
        // Update button display
        currentFlag.textContent = lang.flag;
        currentLang.textContent = lang.code;
        
        // Update greeting
        greetingText.textContent = lang.greeting;
        
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
      if (saved && languages[saved]) {
        changeLanguage(saved);
      }
    }

    // Initialize
    document.addEventListener('DOMContentLoaded', () => {
      loadLanguagePreference();
      updateActiveLanguage();
    });

    // Login button functionality (placeholder)
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
  