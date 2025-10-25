// <!-- 🌐 SCRIPT SECTION -->
// <script>
  // 🌟 Generate UUID
  function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  // 🌟 Load or Generate User ID
  const userIdField = document.getElementById('userId');
  let userId = localStorage.getItem('stemify_user_id');
  if (!userId) {
    userId = generateUUID();
    localStorage.setItem('stemify_user_id', userId);
  }
  userIdField.value = userId;

  // 📋 Copy UUID
  document.getElementById('copyUUID').addEventListener('click', () => {
    navigator.clipboard.writeText(userIdField.value).then(() => {
      alert('✅ UUID copied to clipboard!');
    });
  });

  // 📸 Change Profile Photo
  const changePhotoBtn = document.getElementById('changePhotoBtn');
  const photoInput = document.getElementById('photoInput');
  const profileImage = document.getElementById('profileImage');

  changePhotoBtn.addEventListener('click', () => photoInput.click());
  photoInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => profileImage.src = e.target.result;
      reader.readAsDataURL(file);
    }
  });

  // 💾 Save Changes
  document.getElementById('saveChanges').addEventListener('click', () => {
    const profileData = {
      name: document.getElementById('fullName').value,
      email: document.getElementById('email').value,
      grade: document.getElementById('gradeLevel').value,
      language: document.getElementById('language').value,
      userId: userId
    };
    localStorage.setItem('stemify_profile', JSON.stringify(profileData));
    alert('✅ Profile saved successfully!');
  });

  // 🚪 Logout
  document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.clear();
    alert('👋 You have been logged out.');
    location.reload();
  });
{/* </script> */}