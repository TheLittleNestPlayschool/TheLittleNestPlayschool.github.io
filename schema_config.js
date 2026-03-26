// schema_config.js
window.NEST_SCHEMA = {
    parent: {
        fields: [
            { id: 'id', label: 'ID', type: 'int', hidden: true },
            { id: 'franchise_id', label: 'Franchise ID', type: 'int', hidden: true },
            { id: 'first_name', label: 'First Name', type: 'text', required: true },
            { id: 'last_name', label: 'Last Name', type: 'text', required: true },
            { id: 'email', label: 'Email', type: 'email' },
            { id: 'phone', label: 'Phone', type: 'text' },
            { id: 'address', label: 'Address', type: 'text' },
            { id: 'is_active', label: 'Status', type: 'bool', default: true },
            { id: 'inactivation_reason_comments', label: 'Inactivation Reason', type: 'textarea', section: 'Admin' },
            // Secondary Parent Section
            { id: 'second_parent_full_name', label: '2nd Parent Name', type: 'text', section: 'Secondary Guardian' },
            { id: 'second_parent_relationship', label: 'Relationship', type: 'text', section: 'Secondary Guardian' },
            { id: 'second_parent_phone_number', label: '2nd Phone', type: 'text', section: 'Secondary Guardian' },
            { id: 'second_parent_email_address', label: '2nd Email', type: 'email', section: 'Secondary Guardian' },
            { id: 'second_parent_home_address', label: '2nd Address', type: 'text', section: 'Secondary Guardian' },
            // Emergency Contact 1
            { id: 'emergency_contact_1_name', label: 'EC1 Name', type: 'text', section: 'Emergency 1' },
            { id: 'emergency_contact_1_relationship', label: 'EC1 Relation', type: 'text', section: 'Emergency 1' },
            { id: 'emergency_contact_1_phone_number', label: 'EC1 Phone', type: 'text', section: 'Emergency 1' },
            // Emergency Contact 2
            { id: 'emergency_contact_2_name', label: 'EC2 Name', type: 'text', section: 'Emergency 2' },
            { id: 'emergency_contact_2_relationship', label: 'EC2 Relation', type: 'text', section: 'Emergency 2' },
            { id: 'emergency_contact_2_phone_number', label: 'EC2 Phone', type: 'text', section: 'Emergency 2' }
        ]
    }
};
