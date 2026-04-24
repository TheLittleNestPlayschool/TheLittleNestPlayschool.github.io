/**
 * security.js
 * Centralized Authentication & Query Logic
 */
const SecurityManager = {
    getAccessKey: () => localStorage.getItem('nestmind_access_key'),
    getLockedID: () => localStorage.getItem('locked_franchise_id'),

    // Logic to determine if current session is Head Office
    isHeadOffice: function() {
        return localStorage.getItem('is_head_office') === 'true';
    },

    // Generates the suffix for every API call
    getAuthQuery: function() {
        const key = this.getAccessKey();
        const fid = this.getLockedID();
        if (!key) return '';

        // Master Access: No franchise_id filter sent to Xano
        if (this.isHeadOffice()) {
            return `?access_key=${key}`;
        }
        
        // Branch Access: Strict filter required
        return `?franchise_id=${fid}&access_key=${key}`;
    },

    // Returns the label for the UI "Identity Lock" box
    getSystemLabel: function(branchName) {
        if (this.isHeadOffice()) return "SYSTEM MASTER • GLOBAL";
        return `${branchName.toUpperCase()} BRANCH`;
    }
};
window.SecurityManager = SecurityManager;
