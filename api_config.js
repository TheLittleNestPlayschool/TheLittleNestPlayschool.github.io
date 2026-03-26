const NEST_ENDPOINTS = {
    // --- FRANCHISE (Workspace: mXEfdJlg) ---
    franchise: {
        list:   "https://x8ki-letl-twmt.n7.xano.io/api:mXEfdJlg/franchise", // GET (All)
        create: "https://x8ki-letl-twmt.n7.xano.io/api:mXEfdJlg/franchise", // POST
        get:    "https://x8ki-letl-twmt.n7.xano.io/api:mXEfdJlg/franchise/{franchise_id}", // GET (One)
        update: "https://x8ki-letl-twmt.n7.xano.io/api:mXEfdJlg/franchise/{franchise_id}", // POST/PATCH
        delete: "https://x8ki-letl-twmt.n7.xano.io/api:mXEfdJlg/franchise/{franchise_id}"  // DELETE
    },

    // --- PARENT (Workspace: 8Je8Zszx) ---
    parent: {
        list:   "https://x8ki-letl-twmt.n7.xano.io/api:8Je8Zszx/parent",
        create: "https://x8ki-letl-twmt.n7.xano.io/api:8Je8Zszx/parent",
        get:    "https://x8ki-letl-twmt.n7.xano.io/api:8Je8Zszx/parent/{parent_id}",
        update: "https://x8ki-letl-twmt.n7.xano.io/api:8Je8Zszx/parent/{parent_id}",
        delete: "https://x8ki-letl-twmt.n7.xano.io/api:8Je8Zszx/parent/{parent_id}"
    },

    // --- SESSION (Workspace: mUsV7Zqx) ---
    session: {
        list:   "https://x8ki-letl-twmt.n7.xano.io/api:mUsV7Zqx/session",
        create: "https://x8ki-letl-twmt.n7.xano.io/api:mUsV7Zqx/session",
        get:    "https://x8ki-letl-twmt.n7.xano.io/api:mUsV7Zqx/session/{session_id}",
        update: "https://x8ki-letl-twmt.n7.xano.io/api:mUsV7Zqx/session/{session_id}",
        delete: "https://x8ki-letl-twmt.n7.xano.io/api:mUsV7Zqx/session/{session_id}"
    },

    // --- STUDENT (Workspace: iEHfqd-N) ---
    student: {
        list:   "https://x8ki-letl-twmt.n7.xano.io/api:iEHfqd-N/student",
        create: "https://x8ki-letl-twmt.n7.xano.io/api:iEHfqd-N/student",
        get:    "https://x8ki-letl-twmt.n7.xano.io/api:iEHfqd-N/student/{student_id}",
        update: "https://x8ki-letl-twmt.n7.xano.io/api:iEHfqd-N/student/{student_id}",
        delete: "https://x8ki-letl-twmt.n7.xano.io/api:iEHfqd-N/student/{student_id}"
    }

    // ... I will continue adding the others as you provide them
};

window.NEST_ENDPOINTS = NEST_ENDPOINTS;
