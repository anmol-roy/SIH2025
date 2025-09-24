document.addEventListener('DOMContentLoaded', function() {
  // Initialize Lucide Icons
  lucide.createIcons();

  // Language Selector Toggle
  const langBtn = document.getElementById('lang-btn');
  const langDropdown = document.getElementById('lang-dropdown');
  const avatarBtn = document.getElementById('avatar-btn');
  const profileMenu = document.getElementById('profile-menu');
  const notifBtn = document.getElementById('notif-btn');
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const sidebar = document.getElementById('sidebar');

  langBtn.addEventListener('click', () => {
    langDropdown.style.display = langDropdown.style.display === 'block' ? 'none' : 'block';
  });

  avatarBtn.addEventListener('click', () => {
    profileMenu.style.display = profileMenu.style.display === 'block' ? 'none' : 'block';
  });

  notifBtn.addEventListener('click', () => {
    alert("Notifications panel would open here.");
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.language-selector')) {
      langDropdown.style.display = 'none';
    }
    if (!e.target.closest('.avatar-dropdown')) {
      profileMenu.style.display = 'none';
    }
  });

  // Mobile Menu Toggle
  mobileMenuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    document.querySelector('.main-content').style.marginLeft = sidebar.classList.contains('collapsed') ? '0' : '280px';
  });

  // Navigation Tabs
  const navLinks = document.querySelectorAll('nav li a');
  const sections = document.querySelectorAll('.content-section');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);

      // Update active state in sidebar
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      // Show target section
      sections.forEach(section => {
        section.classList.remove('active');
      });
      document.getElementById(targetId).classList.add('active');

      // Close mobile menu on click
      if (window.innerWidth <= 768) {
        sidebar.classList.add('collapsed');
        document.querySelector('.main-content').style.marginLeft = '0';
      }
    });
  });

  // Logout Button
  document.getElementById('logout-btn').addEventListener('click', () => {
    alert("You have been logged out.");
    // In real app: window.location.href = '/login';
  });

  document.getElementById('logout-mobile').addEventListener('click', () => {
    alert("You have been logged out.");
    // In real app: window.location.href = '/login';
  });

  // Student Profile Modal
  const studentProfileModal = document.getElementById('student-profile-modal');
  const viewProfileBtns = document.querySelectorAll('.btn-small');
  const closeModal = document.querySelector('.close');

  viewProfileBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      studentProfileModal.style.display = 'flex';
    });
  });

  closeModal.addEventListener('click', () => {
    studentProfileModal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === studentProfileModal) {
      studentProfileModal.style.display = 'none';
    }
  });

  // Tab Switching in Student Profile
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const tabId = btn.getAttribute('data-tab');
      tabPanes.forEach(pane => {
        pane.classList.remove('active');
      });
      document.getElementById(`${tabId}-pane`).classList.add('active');
    });
  });

  // Connect Student
  document.getElementById('connect-btn').addEventListener('click', () => {
    const idInput = document.getElementById('student-id');
    const id = idInput.value.trim();
    if (id.length === 14 && id.startsWith('STU-')) {
      alert(`✅ Student ${id} connected successfully!`);
      idInput.value = '';
    } else {
      alert('❌ Please enter a valid 12-character Student ID (e.g., STU-XXXX-XXXX-XX)');
    }
  });

  // Charts
  const ctx1 = document.getElementById('classProgressChart').getContext('2d');
  const ctx2 = document.getElementById('quizPerformanceChart').getContext('2d');
  const ctx3 = document.getElementById('badgesEarnedChart').getContext('2d');

  new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: ['Class 8A', 'Class 8B', 'Class 9A'],
      datasets: [{
        label: 'Average Lesson Completion (%)',
        data: [78, 65, 82],
        backgroundColor: ['#3B82F6', '#7C3AED', '#10B981']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: (ctx) => `${ctx.dataset.label}: ${ctx.raw}%` } }
      },
      scales: {
        y: { beginAtZero: true, max: 100 }
      }
    }
  });

  new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [{
        label: 'Average Quiz Score (%)',
        data: [72, 78, 85, 81],
        borderColor: '#F59E0B',
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: (ctx) => `${ctx.dataset.label}: ${ctx.raw}%` } }
      }
    }
  });

  new Chart(ctx3, {
    type: 'doughnut',
    data: {
      labels: ['Math Wizard', 'Science Star', 'Explorer', 'Quick Learner'],
      datasets: [{
        data: [12, 8, 15, 5],
        backgroundColor: ['#10B981', '#7C3AED', '#3B82F6', '#F59E0B']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom' },
        tooltip: { callbacks: { label: (ctx) => `${ctx.label}: ${ctx.raw} students` } }
      }
    }
  });

  // Filter Students
  document.getElementById('filter-progress').addEventListener('change', function() {
    const filterValue = this.value;
    const studentCards = document.querySelectorAll('.student-card');

    studentCards.forEach(card => {
      const progressFill = card.querySelector('.progress-fill');
      const width = parseInt(progressFill.style.width);
      let show = true;

      if (filterValue === 'low' && width >= 50) show = false;
      if (filterValue === 'medium' && (width < 50 || width >= 80)) show = false;
      if (filterValue === 'high' && width < 80) show = false;

      card.style.display = show ? 'flex' : 'none';
    });
  });

  // Search Students
  document.getElementById('search-student').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const studentCards = document.querySelectorAll('.student-card');

    studentCards.forEach(card => {
      const name = card.querySelector('h4').textContent.toLowerCase();
      card.style.display = name.includes(query) ? 'flex' : 'none';
    });
  });

  // Highlight Struggling Students (Analytics Section)
  setTimeout(() => {
    const lowProgressStudents = Array.from(document.querySelectorAll('.student-card'))
      .filter(card => {
        const progressFill = card.querySelector('.progress-fill');
        return parseInt(progressFill.style.width) < 50;
      });

    lowProgressStudents.forEach(card => {
      card.style.borderLeft = '4px solid #EF4444';
    });
  }, 1000);

  // Add Lesson Modal (Placeholder)
  document.getElementById('add-lesson-btn').addEventListener('click', () => {
    alert("Add Lesson modal would open here.");
  });

  document.getElementById('create-quiz-btn').addEventListener('click', () => {
    alert("Create Quiz modal would open here.");
  });

  // Download Reports
  document.querySelector('.download-report .btn-primary').addEventListener('click', () => {
    alert("Downloading PDF report...");
  });

  document.querySelector('.download-report .btn-secondary').addEventListener('click', () => {
    alert("Exporting CSV data...");
  });
});