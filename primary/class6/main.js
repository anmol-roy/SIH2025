// Language switcher functionality
const languageSwitcher = document.getElementById('languageSwitcher');
const languageBtn = document.getElementById('languageBtn');
const languageDropdown = document.getElementById('languageDropdown');
const currentFlag = document.getElementById('currentFlag');
const currentLang = document.getElementById('currentLang');
const greetingText = document.getElementById('greetingText');
const overlay = document.getElementById('overlay');

// Complete translation data for both pages
const translations = {
  en: {
    flag: '🇬🇧',
    code: 'EN',
    greeting: '👋 Welcome to STEMify',
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
      title: 'Class 6',
      description: 'Explore subjects and build strong basics with interactive content'
    },
    class7: {
      title: 'Class 7',
      description: 'Enhance knowledge and grow skills with advanced concepts'
    },
    class8: {
      title: 'Class 8',
      description: 'Get ready for secondary learning with comprehensive preparation'
    },
    login: 'Login',
    // Subjects page translations
    navigation: { back: "Back" },
    subjects: {
      title: "Choose Your Subject",
      description: "Explore different subjects and enhance your knowledge with interactive lessons and activities.",
      mathematics: {
        title: "Mathematics",
        description: "Build problem-solving skills with numbers, algebra, geometry, and mathematical reasoning.",
        lessons: "12 Chapters • 60 Lessons"
      },
      science: {
        title: "Science", 
        description: "Discover the wonders of physics, chemistry, biology through experiments and observations.",
        lessons: "15 Chapters • 75 Lessons"
      },
      social: {
        title: "Social Science",
        description: "Explore history, geography, civics, and understand society and human relationships.",
        lessons: "10 Chapters • 50 Lessons"
      },
      english: {
        title: "English",
        description: "Improve reading, writing, speaking, and grammar skills with stories and exercises.",
        lessons: "11 Chapters • 55 Lessons"
      }
    },
    progress: {
      subjects: "Subjects", chapters: "Chapters", lessons: "Lessons", completion: "Completion"
    },
    difficulty: { easy: "Easy", medium: "Medium", hard: "Hard" }
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
      title: 'कक्षा 6',
      description: 'इंटरैक्टिव सामग्री के साथ विषयों का अन्वेषण करें और मजबूत बुनियादी बातें बनाएं'
    },
    class7: {
      title: 'कक्षा 7',
      description: 'उन्नत अवधारणाओं के साथ ज्ञान बढ़ाएं और कौशल विकसित करें'
    },
    class8: {
      title: 'कक्षा 8',
      description: 'व्यापक तैयारी के साथ माध्यमिक शिक्षा के लिए तैयार हो जाएं'
    },
    login: 'लॉगिन',
    // Subjects page translations
    navigation: { back: "वापस" },
    subjects: {
      title: "अपना विषय चुनें",
      description: "विभिन्न विषयों का अन्वेषण करें और इंटरैक्टिव पाठों के साथ अपना ज्ञान बढ़ाएं।",
      mathematics: {
        title: "गणित",
        description: "संख्याओं, बीजगणित, ज्यामिति के साथ समस्या समाधान कौशल का निर्माण करें।",
        lessons: "12 अध्याय • 60 पाठ"
      },
      science: {
        title: "विज्ञान",
        description: "प्रयोगों के माध्यम से भौतिकी, रसायन विज्ञान, जीव विज्ञान की खोज करें।",
        lessons: "15 अध्याय • 75 पाठ"
      },
      social: {
        title: "सामाजिक विज्ञान", 
        description: "इतिहास, भूगोल, नागरिक शास्त्र का अन्वेषण करें।",
        lessons: "10 अध्याय • 50 पाठ"
      },
      english: {
        title: "अंग्रेजी",
        description: "कहानियों के साथ पढ़ने, लिखने, बोलने का कौशल सुधारें।",
        lessons: "11 अध्याय • 55 पाठ"
      }
    },
    progress: {
      subjects: "विषय", chapters: "अध्याय", lessons: "पाठ", completion: "पूर्णता"
    },
    difficulty: { easy: "आसान", medium: "मध्यम", hard: "कठिन" }
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
      title: 'ଶ୍ରେଣୀ ୬',
      description: 'ଇଣ୍ଟରାକ୍ଟିଭ୍ ବିଷୟବସ୍ତୁ ସହିତ ବିଷୟଗୁଡ଼ିକ ଅନ୍ୱେଷଣ କରନ୍ତୁ ଏବଂ ଦୃଢ଼ ମୂଳଦୁଆ ନିର୍ମାଣ କରନ୍ତୁ'
    },
    class7: {
      title: 'ଶ୍ରେଣୀ ୭',
      description: 'ଉନ୍ନତ ଧାରଣା ସହିତ ଜ୍ଞାନ ବୃଦ୍ଧି କରନ୍ତୁ ଏବଂ କୌଶଳ ବିକଶିତ କରନ୍ତୁ'
    },
    class8: {
      title: 'ଶ୍ରେଣୀ ୮',
      description: 'ବ୍ୟାପକ ପ୍ରସ୍ତୁତି ସହିତ ମାଧ୍ୟମିକ ଶିକ୍ଷଣ ପାଇଁ ପ୍ରସ୍ତୁତ ହୁଅନ୍ତୁ'
    },
    login: 'ଲଗଇନ୍',
    // Subjects page translations
    navigation: { back: "ପଛକୁ" },
    subjects: {
      title: "ଆପଣଙ୍କର ବିଷୟ ବାଛନ୍ତୁ",
      description: "ବିଭିନ୍ନ ବିଷୟ ଅନ୍ୱେଷଣ କରନ୍ତୁ ଏବଂ ଇଣ୍ଟରାକ୍ଟିଭ୍ ପାଠ ସହିତ ଜ୍ଞାନ ବୃଦ୍ଧି କରନ୍ଭୁ।",
      mathematics: {
        title: "ଗଣିତ",
        description: "ସଂଖ୍ୟା, ବୀଜଗଣିତ, ଜ୍ୟାମିତି ସହିତ ସମସ୍ୟା ସମାଧାନ କୌଶଳ ଗଢ଼ନ୍ତୁ।",
        lessons: "12 ଅଧ୍ୟାୟ • 60 ପାଠ"
      },
      science: {
        title: "ବିଜ୍ଞାନ",
        description: "ପ୍ରୟୋଗ ମାଧ୍ୟମରେ ପଦାର୍ଥ, ରସାୟନ, ଜୀବ ବିଜ୍ଞାନ ଆବିଷ୍କାର କରନ୍ତୁ।",
        lessons: "15 ଅଧ୍ୟାୟ • 75 ପାଠ"
      },
      social: {
        title: "ସାମାଜିକ ବିଜ୍ଞାନ",
        description: "ଇତିହାସ, ଭୂଗୋଳ, ନାଗରିକ ଶାସ୍ତ୍ର ଅନ୍ୱେଷଣ କରନ୍ତୁ।",
        lessons: "10 ଅଧ୍ୟାୟ • 50 ପାଠ"
      },
      english: {
        title: "ଇଂରାଜୀ",
        description: "କାହାଣୀ ସହିତ ପଢ଼ିବା, ଲେଖିବା, କହିବା କୌଶଳ ଉନ୍ନତ କରନ୍ତୁ।",
        lessons: "11 ଅଧ୍ୟାୟ • 55 ପାଠ"
      }
    },
    progress: {
      subjects: "ବିଷୟଗୁଡ଼ିକ", chapters: "ଅଧ୍ୟାୟଗୁଡ଼ିକ", lessons: "ପାଠଗୁଡ଼ିକ", completion: "ସମାପ୍ତି"
    },
    difficulty: { easy: "ସହଜ", medium: "ମଧ୍ୟମ", hard: "କଠିନ" }
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

  // Update greeting separately if it exists on this page
  if (greetingText) {
    greetingText.textContent = langData.greeting;
  }

  // Update login button if it exists on this page
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
  // alert(`Would navigate to: ${path}`);
}

// Subject navigation function
function navigateToSubject(subject) {
  const subjectNames = {
    mathematics: getNestedProperty(translations[currentLanguage], 'subjects.mathematics.title'),
    science: getNestedProperty(translations[currentLanguage], 'subjects.science.title'),
    'social-science': getNestedProperty(translations[currentLanguage], 'subjects.social.title'),
    english: getNestedProperty(translations[currentLanguage], 'subjects.english.title')
  };
  
  console.log(`Opening ${subjectNames[subject] || subject}...`);
  // alert(`${getNestedProperty(translations[currentLanguage], 'subjects.title')}: ${subjectNames[subject] || subject}`);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadLanguagePreference();
  updateActiveLanguage();
  
  // Subject card clicks (if on subjects page)
  // Subject card clicks (if on subjects page)
const subjectCards = document.querySelectorAll('.subject-card');
if (subjectCards.length > 0) {
  subjectCards.forEach(card => {
    card.addEventListener('click', (e) => {
      // Removed e.preventDefault() to allow navigation
      const subject = card.getAttribute('data-subject');
      navigateToSubject(subject);
    });
  });
}

  // Back button (if on subjects page)
  const backBtn = document.querySelector('.back-btn');
  if (backBtn) {
    backBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.history.length > 1 ? window.history.back() : window.location.href = '../index.html';
    });
  }
});

// Login button functionality
const loginBtn = document.getElementById('loginBtn');
if (loginBtn) {
  loginBtn.addEventListener('click', () => {
    const loginTexts = {
      en: 'Login clicked!',
      hi: 'लॉगिन पर क्लिक किया गया!',
      or: 'ଲଗଇନ୍ କ୍ଲିକ୍ କରାଗଲା!'
    };
    // alert(loginTexts[currentLanguage] || loginTexts.en);
  });
}

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