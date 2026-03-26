// schema_config.js
window.NEST_SCHEMA = {
    parent: {
        fields: [
            // --- SYSTEM FIELDS (Completely Hidden) ---
            { id: 'id', label: 'ID', type: 'int', hidden: true },
            { id: 'franchise_id', label: 'Franchise ID', type: 'int', hidden: true },
            { id: 'created_at', label: 'Created', type: 'epochms', hidden: true },

            // --- PRIMARY GUARDIAN (Main Section - 2 Column Layout) ---
            { 
                id: 'first_name', 
                label: 'First Name', 
                type: 'text', 
                required: true, 
                width: 'half', 
                tableDisplay: true 
            },
            { 
                id: 'last_name', 
                label: 'Last Name', 
                type: 'text', 
                required: true, 
                width: 'half', 
                tableDisplay: true 
            },
            { 
                id: 'email', 
                label: 'Email Address', 
                type: 'email', 
                width: 'half', 
                tableDisplay: true 
            },
            { 
                id: 'phone', 
                label: 'Phone Number', 
                type: 'text', 
                width: 'half', 
                tableDisplay: true 
            },
            { 
                id: 'address', 
                label: 'Physical Address', 
                type: 'textarea', 
                width: 'full', 
                tableDisplay: true 
            },
            { 
                id: 'is_active', 
                label: 'Active Status', 
                type: 'checkbox', 
                default: true, 
                width: 'full', 
                tableDisplay: true 
            },

            // --- SECONDARY PARENT (Section 2) ---
            { 
                id: 'second_parent_full_name', 
                label: 'Secondary Parent Name', 
                type: 'text', 
                width: 'full', 
                section: 'Secondary Guardian' 
            },
            { 
                id: 'second_parent_relationship', 
                label: 'Relationship', 
                type: 'text', 
                width: 'half', 
                section: 'Secondary Guardian' 
            },
            { 
                id: 'second_parent_phone_number', 
                label: 'Secondary Phone', 
                type: 'text', 
                width: 'half', 
                section: 'Secondary Guardian' 
            },
            { 
                id: 'second_parent_email_address', 
                label: 'Secondary Email', 
                type: 'email', 
                width: 'full', 
                section: 'Secondary Guardian' 
            },

            // --- EMERGENCY CONTACTS (Section 3) ---
            { 
                id: 'emergency_contact_1_name', 
                label: 'EC1 Full Name', 
                type: 'text', 
                width: 'half', 
                section: 'Emergency Contacts' 
            },
            { 
                id: 'emergency_contact_1_phone_number', 
                label: 'EC1 Phone', 
                type: 'text', 
                width: 'half', 
                section: 'Emergency Contacts' 
            },
            { 
                id: 'emergency_contact_1_relationship', 
                label: 'EC1 Relationship', 
                type: 'text', 
                width: 'full', 
                section: 'Emergency Contacts' 
            },
            { 
                id: 'emergency_contact_2_name', 
                label: 'EC2 Full Name', 
                type: 'text', 
                width: 'half', 
                section: 'Emergency Contacts' 
            },
            { 
                id: 'emergency_contact_2_phone_number', 
                label: 'EC2 Phone', 
                type: 'text', 
                width: 'half', 
                section: 'Emergency Contacts' 
            },

            // --- ADMIN / NOTES ---
            { 
                id: 'inactivation_reason_comments', 
                label: 'Inactivation Notes', 
                type: 'textarea', 
                width: 'full', 
                section: 'Administrative' 
            }
        ]
    }
};
