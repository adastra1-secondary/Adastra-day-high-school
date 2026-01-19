// ==========================
// LOAD SCHOOL SETTINGS
// ==========================
fetch('data/settings.json')
  .then(response => response.json())
  .then(data => {
    // Update school name and motto
    const nameEl = document.getElementById('schoolName');
    const mottoEl = document.getElementById('schoolMotto');
    const logoEl = document.getElementById('schoolLogo');

    if (nameEl) nameEl.textContent = data.school_name;
    if (mottoEl) mottoEl.textContent = data.motto;
    if (logoEl) logoEl.src = data.logo;
  })
  .catch(err => console.error('Error loading settings.json:', err));

// ==========================
// LOAD STAFF LIST
// ==========================
fetch('data/staff.json')
  .then(response => response.json())
  .then(staff => {
    const staffContainer = document.getElementById('staffList');
    if (!staffContainer) return;

    staffContainer.innerHTML = ''; // clear any existing content

    staff.forEach(member => {
      staffContainer.innerHTML += `
        <div class="staff-card">
          <img src="${member.photo}" alt="${member.name}">
          <h3>${member.name}</h3>
          <p>${member.position}</p>
        </div>
      `;
    });
  })
  .catch(err => console.error('Error loading staff.json:', err));

// ==========================
// LOAD SUBJECTS OFFERED
// ==========================
fetch('data/subjects.json')
  .then(response => response.json())
  .then(subjects => {
    const subjectsList = document.getElementById('subjectsList');
    if (!subjectsList) return;

    subjectsList.innerHTML = ''; // clear any existing content

    subjects.forEach(sub => {
      subjectsList.innerHTML += `<li>${sub}</li>`;
    });
  })
  .catch(err => console.error('Error loading subjects.json:', err));
