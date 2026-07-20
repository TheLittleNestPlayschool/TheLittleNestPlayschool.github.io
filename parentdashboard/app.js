// --- Accordion Toggle Logic ---
function toggleAccordion(element) {
    const content = element.nextElementSibling;
    content.style.display = (content.style.display === "block") ? "none" : "block";
}

// --- Modal Logic ---
function openModal(id) {
    const modal = document.getElementById(id);
    modal.classList.add('show');

    if (id === 'my-data-modal') {
        fetch('profile.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('profile-content').innerHTML = data;
                // Populate with the existing data once loaded
                if (window.latestDashboardData) {
                    populateUI(window.latestDashboardData);
                }
            })
            .catch(error => console.error('Error loading profile.html:', error));
    }
}

function closeModal(id) {
    document.getElementById(id).classList.remove('show');
}

// --- Main Dashboard Loading Logic ---
// Store data globally to be accessible by modals
window.latestDashboardData = null;

async function loadDashboard() {
    const userId = localStorage.getItem('userId');
    if (!userId) { window.location.href = './login.html'; return; }

    try {
        const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:wtEDiEuV/parents?user_id=' + userId);
        const data = await response.json();
        window.latestDashboardData = data; // Store data

        // Mapping files to the grid containers in dashboard.html
        const files = [
            { id: 'ribbon-container', url: './ribbon.html' },
            { id: 'gauges-container', url: './gauges.html' },
            { id: 'current-container', url: './recap.html' },
            { id: 'upcoming-container', url: './upcoming.html' },
            { id: 'gallery-container', url: './gallery.html' }
        ];

        await Promise.all(files.map(async (file) => {
            const res = await fetch(file.url);
            if (res.ok) {
                const container = document.getElementById(file.id);
                if (container) container.innerHTML = await res.text();
            }
        }));

        populateUI(data);

        if (data.franchise_data?.current_session) {
            await loadSession(data.franchise_data.current_session);
            await loadUpcoming(data.franchise_data.current_session);
        }
    } catch (error) {
        console.error("Dashboard Load Error:", error);
    }
}

async function loadSession(sessionId) {
    try {
        const res = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:wtEDiEuV/get_session_details?session_number=${sessionId}`);
        const data = await res.json();
        if (data) {
            // Updated mapping for the new short description
            const descEl = document.getElementById('session-short-description');
            if (descEl) descEl.innerText = data.short_description || 'No summary available for today.';
            
            const fields = {
                'session-num': data.session_num, 
                'session-plan-name': data.session_plan_name,
                'session-description': data.session_description, 
                'lesson-1-title': data.lesson_1_title,
                'lesson-1-cat': data.lesson_1_cat, 
                'lesson-2-title': data.lesson_2_title,
                'lesson-2-cat': data.lesson_2_cat, 
                'manner-topic': data.manner_topic
            };
            for (const [id, value] of Object.entries(fields)) {
                const el = document.getElementById(id);
                if (el) el.innerText = value || 'N/A';
            }
        }
    } catch (err) { console.error("Session load error:", err); }
}

async function loadUpcoming(currentSessionId) {
    try {
        const res = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:wtEDiEuV/get_up_session_details?session_number=${currentSessionId}`);
        const data = await res.json();
        if (data) {
            const fields = {
                'up-session-num': data.session_num, 'up-session-plan-name': data.session_plan_name,
                'up-theme-color': data.theme_color, 'up-map-icon-url': data.map_icon_url,
                'up-session-description': data.session_description, 'up-lesson-1-title': data.lesson_1_title,
                'up-lesson-1-cat': data.lesson_1_cat, 'up-lesson-2-title': data.lesson_2_title,
                'up-lesson-2-cat': data.lesson_2_cat, 'up-manner-topic': data.manner_topic,
                'up-obj-1': data.obj_text_1, 'up-obj-2': data.obj_text_2, 'up-obj-3': data.obj_text_3,
                'up-physical-activity': data.physical_activity, 'up-home-time-activity': data.home_time_activity,
                'up-worksheet-plan-name': data.worksheet_plan_name, 'up-full-lesson-plan': data.full_lesson_plan
            };
            for (const [id, value] of Object.entries(fields)) {
                const el = document.getElementById(id);
                if (el) el.innerText = value || 'N/A';
            }
        }
    } catch (err) { console.error("Upcoming session error:", err); }
}

function populateUI(data) {
    const p = data.parent_data;
    if (p) {
        // These IDs are now within profile.html, loaded via modal
        const nameEl = document.getElementById('parent-name');
        if (nameEl) nameEl.innerText = `${p.first_name || ''} ${p.last_name || ''}`;
        
        const emailEl = document.getElementById('parent-email');
        if (emailEl) emailEl.innerText = p.email || 'N/A';
        
        const phoneEl = document.getElementById('parent-phone');
        if (phoneEl) phoneEl.innerText = p.phone || 'N/A';
        
        const addressEl = document.getElementById('parent-address');
        if (addressEl) addressEl.innerText = p.address || 'N/A';
    }
    if (data.student_data?.[0]) {
        const studentEl = document.getElementById('student-name');
        if (studentEl) studentEl.innerText = data.student_data[0].name || 'N/A';
    }
    if (data.franchise_data) {
        const locEl = document.getElementById('franchise-location');
        if (locEl) locEl.innerText = data.franchise_data.name || 'N/A';
    }
    const progress = data.student_progress || {};
    ['reading', 'writing', 'alphabet', 'numbers', 'manners'].forEach(type => {
        const el = document.getElementById(`gauge-${type}`);
        if (el) el.style.setProperty('--progress', `${progress[type] || 0}%`);
    });
}

document.addEventListener('DOMContentLoaded', loadDashboard);
