// schema_config.js
window.NEST_SCHEMA = {
    parent: {
        fields: [
            // SYSTEM (Only ID is hidden)
            { id: 'id', label: 'ID', type: 'int', hidden: true },
            { id: 'created_at', label: 'Registration Date', type: 'epochms', hidden: false, readonly: true },
            { id: 'franchise_id', label: 'Franchise ID', type: 'int', hidden: false, readonly: true },

            // PRIMARY GUARDIAN
            { id: 'first_name', label: 'First Name', type: 'text', required: true, width: 'half' },
            { id: 'last_name', label: 'Last Name', type: 'text', required: true, width: 'half' },
            { id: 'email', label: 'Primary Email', type: 'email', width: 'half' },
            { id: 'phone', label: 'Primary Phone', type: 'text', width: 'half' },
            { id: 'address', label: 'Physical Address', type: 'text', width: 'full' },
            { id: 'is_active', label: 'Account Status', type: 'bool', default: true },

            // SECONDARY GUARDIAN
            { id: 'second_parent_full_name', label: '2nd Parent Name', type: 'text', section: 'Secondary Guardian', width: 'half' },
            { id: 'second_parent_relationship', label: 'Relationship', type: 'text', section: 'Secondary Guardian', width: 'half' },
            { id: 'second_parent_phone_number', label: '2nd Phone', type: 'text', section: 'Secondary Guardian', width: 'half' },
            { id: 'second_parent_email_address', label: '2nd Email', type: 'email', section: 'Secondary Guardian', width: 'half' },
            { id: 'second_parent_home_address', label: '2nd Address', type: 'text', section: 'Secondary Guardian', width: 'full' },

            // EMERGENCY CONTACT 1
            { id: 'emergency_contact_1_name', label: 'EC1 Name', type: 'text', section: 'Emergency 1', width: 'half' },
            { id: 'emergency_contact_1_relationship', label: 'EC1 Relation', type: 'text', section: 'Emergency 1', width: 'half' },
            { id: 'emergency_contact_1_phone_number', label: 'EC1 Phone', type: 'text', section: 'Emergency 1', width: 'full' },

            // EMERGENCY CONTACT 2
            { id: 'emergency_contact_2_name', label: 'EC2 Name', type: 'text', section: 'Emergency 2', width: 'half' },
            { id: 'emergency_contact_2_relationship', label: 'EC2 Relation', type: 'text', section: 'Emergency 2', width: 'half' },
            { id: 'emergency_contact_2_phone_number', label: 'EC2 Phone', type: 'text', section: 'Emergency 2', width: 'full' },

            // ADMINISTRATIVE
            { id: 'inactivation_reason_comments', label: 'Admin/Inactivation Notes', type: 'textarea', section: 'Administrative', width: 'full' }
        ]
    }
};
