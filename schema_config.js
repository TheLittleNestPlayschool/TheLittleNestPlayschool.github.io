
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
    },

    student: {
        fields: [
            // SYSTEM
            { id: 'id', label: 'ID', type: 'int', hidden: true },
            { id: 'created_at', label: 'Entry Created', type: 'epochms', hidden: false, readonly: true },

            // CORE IDENTITY
            { id: 'name', label: 'Full Legal Name', type: 'text', required: true, width: 'full' },
            { id: 'preferred_name', label: 'Nickname / Preferred', type: 'text', width: 'half' },
            { id: 'gender', label: 'Gender', type: 'text', width: 'half' },
            { id: 'date_of_birth', label: 'Date of Birth', type: 'date', width: 'half' },
            { id: 'is_active', label: 'Enrollment Status', type: 'bool', default: true, width: 'half' },

            // ENROLLMENT DETAILS
            { id: 'session_enrolled', label: 'Session ID', type: 'int', section: 'Enrollment', width: 'half' },
            { id: 'start_date', label: 'Class Start Date', type: 'date', section: 'Enrollment', width: 'half' },
            { id: 'enrolled_date', label: 'Date Enrolled', type: 'date', section: 'Enrollment', width: 'half' },

            // BACKGROUND & ORIGIN
            { id: 'home_address', label: 'Home Address', type: 'text', section: 'Background', width: 'full' },
            { id: 'primary_language', label: 'Primary Language', type: 'text', section: 'Background', width: 'half' },
            { id: 'nationality', label: 'Nationality', type: 'text', section: 'Background', width: 'half' },

            // DATABASE LINKS
            { id: 'parent_id', label: 'Parent ID', type: 'int', section: 'Database Links', width: 'half' },
            { id: 'franchise_id', label: 'Franchise ID', type: 'int', section: 'Database Links', width: 'half' }
        ]
    },

    session: {
        fields: [
            // SYSTEM
            { id: 'id', label: 'ID', type: 'int', hidden: true },
            { id: 'created_at', label: 'Created At', type: 'epochms', hidden: false, readonly: true },
            
            // CORE SESSION INFO
            { id: 'name', label: 'Session Name', type: 'text', required: true, width: 'full' },
            { id: 'description', label: 'Description', type: 'text', width: 'full' },
            { id: 'is_active', label: 'Session Status', type: 'bool', default: true, width: 'half' },
            { id: 'max_students', label: 'Max Students', type: 'int', width: 'half' },

            // LOGISTICS
            { id: 'start_time_text', label: 'Start Time', type: 'text', section: 'Logistics', width: 'half' },
            { id: 'end_time_text', label: 'End Time', type: 'text', section: 'Logistics', width: 'half' },
            { id: 'scheduled_days', label: 'Scheduled Days', type: 'enum', list: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], section: 'Logistics', width: 'full' },

            // DATABASE LINKS
            { id: 'franchise_id', label: 'Franchise ID', type: 'int', section: 'Database Links', width: 'full', readonly: true }
        ]
    }
};
