// --- Accordion Toggle Logic ---
function toggleAccordion(element) {
    const content = element.nextElementSibling;
    content.style.display = (content.style.display === "block") ? "none" : "block";
}

// --- Main Dashboard Loading Logic ---
async function loadDashboard() {
    const userId = localStorage.getItem('userId');
    if (!userId) { window.location.href = './login.html'; return; }

    try {
        const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:wtEDiEuV/parents?user_id=' + userId);
        const data = await response.json();

        const files = [
            { id: 'ribbon-container', url: './ribbon.html' },
            { id: 'profile-container', url: './profile.html' },
            { id: 'gauges-container', url: './gauges.html' },
            { id: 'current-container', url: './recap.html' },
            { id: 'upcoming-container', url: './adventure.html' },
            { id: 'gallery-container', url: './gallery.html' }
        ];

        await Promise.all(files.map(async (file) => {
            const res = await fetch(file.url);
            if (res.ok) {
                document.getElementById(file.id).innerHTML = await res.text();
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
            const fields = {
                'session-num': data.session_num, 'session-plan-name': data.session_plan_name,
                'theme-color': data.theme_color, 'map-icon-url': data.map_icon_url,
                'session-description': data.session_description, 'lesson-1-title': data.lesson_1_title,
                'lesson-1-cat': data.lesson_1_cat, 'lesson-2-title': data.lesson_2_title,
                'lesson-2-cat': data.lesson_2_cat, 'manner-topic': data.manner_topic,
                'obj-1': data.obj_text_1, 'obj-2': data.obj_text_2, 'obj-3': data.obj_text_3,
                'physical-activity': data.physical_activity, 'home-time-activity': data.home_time_activity,
                'worksheet-plan-name': data.worksheet_plan_name, 'full-lesson-plan': data.full_lesson_plan
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
        document.getElementById('parent-name').innerText = `${p.first_name || ''} ${p.last_name || ''}`;
        document.getElementById('parent-email').innerText = p.email || 'N/A';
        document.getElementById('parent-phone').innerText = p.phone || 'N/A';
        document.getElementById('parent-address').innerText = p.address || 'N/A';
    }
    if (data.student_data?.[0]) {
        document.getElementById('student-name').innerText = data.student_data[0].name || 'N/A';
    }
    if (data.franchise_data) {
        document.getElementById('franchise-location').innerText = data.franchise_data.name || 'N/A';
    }
    const progress = data.student_progress || {};
    ['reading', 'writing', 'alphabet', 'numbers', 'manners'].forEach(type => {
        const el = document.getElementById(`gauge-${type}`);
        if (el) el.style.setProperty('--progress', `${progress[type] || 0}%`);
    });
}

document.addEventListener('DOMContentLoaded', loadDashboard);
