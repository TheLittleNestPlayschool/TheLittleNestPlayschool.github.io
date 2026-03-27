// schema_config.js
window.NEST_SCHEMA = {
    parent: {
        fields: [
            // SYSTEM
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
    },

    franchise: {
        fields: [
            // SYSTEM
            { id: 'id', label: 'ID', type: 'int', hidden: true },
            { id: 'created_at', label: 'Created At', type: 'epochms', readonly: true },

            // CORE FRANCHISE INFO
            { id: 'name', label: 'Franchise Name', type: 'text', width: 'full' },
            { id: 'address', label: 'Address', type: 'text', width: 'full' },
            { id: 'phone_number', label: 'Phone Number', type: 'text', width: 'half' },
            { id: 'royalty_rate', label: 'Royalty Rate', type: 'decimal', width: 'half' },
            { id: 'status', label: 'Status', type: 'enum', list: ["active", "on_hold", "closed", "pending_opening"], width: 'half' },
            { id: 'opening_date', label: 'Opening Date', type: 'date', width: 'half' },
            { id: 'franchise_email', label: 'Franchise Email', type: 'email', width: 'full' },

            // OWNERSHIP
            { id: 'owner_1_name', label: 'Owner 1 Name', type: 'text', section: 'Ownership', width: 'half' },
            { id: 'owner_1_phone', label: 'Owner 1 Phone', type: 'text', section: 'Ownership', width: 'half' },
            { id: 'owner_1_email', label: 'Owner 1 Email', type: 'email', section: 'Ownership', width: 'full' },
            { id: 'owner_2_name', label: 'Owner 2 Name', type: 'text', section: 'Ownership', width: 'half' },
            { id: 'owner_2_phone', label: 'Owner 2 Phone', type: 'text', section: 'Ownership', width: 'half' },
            { id: 'owner_2_email', label: 'Owner 2 Email', type: 'email', section: 'Ownership', width: 'full' },

            // ADMINISTRATIVE
            { id: 'business_tax_id', label: 'Tax ID', type: 'text', section: 'Administrative', width: 'half' },
            { id: 'internal_notes', label: 'Internal Notes', type: 'text', section: 'Administrative', width: 'half' },

            // SOCIAL MEDIA
            { id: 'social_fb', label: 'Facebook', type: 'text', section: 'Social', width: 'half' },
            { id: 'social_ig', label: 'Instagram', type: 'text', section: 'Social', width: 'half' },
            { id: 'social_li', label: 'LinkedIn', type: 'text', section: 'Social', width: 'half' },
            { id: 'social_tiktok', label: 'TikTok', type: 'text', section: 'Social', width: 'half' }
        ]
    },

    teacher: {
        fields: [
            // SYSTEM
            { id: 'id', label: 'ID', type: 'int', hidden: true },
            { id: 'created_at', label: 'Created At', type: 'epochms', readonly: true },

            // PERSONAL INFO
            { id: 'first_name', label: 'First Name', type: 'text', width: 'half' },
            { id: 'last_name', label: 'Last Name', type: 'text', width: 'half' },
            { id: 'email', label: 'Email', type: 'email', width: 'half' },
            { id: 'phone', label: 'Phone', type: 'text', width: 'half' },
            { id: 'address', label: 'Address', type: 'text', width: 'full' },
            { id: 'city', label: 'City', type: 'text', section: 'Location', width: 'half' },
            { id: 'brgy', label: 'Barangay', type: 'text', section: 'Location', width: 'half' },

            // EMPLOYMENT
            { id: 'is_active', label: 'Active Status', type: 'bool', section: 'Employment', width: 'half' },
            { id: 'start_date', label: 'Start Date', type: 'date', section: 'Employment', width: 'half' },
            { id: 'last_day_of_work', label: 'Last Day', type: 'date', section: 'Employment', width: 'half' },
            { id: 'daily_pay', label: 'Daily Pay', type: 'decimal', section: 'Employment', width: 'half' },
            { id: 'tin_number', label: 'TIN Number', type: 'text', section: 'Employment', width: 'full' },
            { id: 'inactivation_reason_comments', label: 'Inactivation Notes', type: 'textarea', section: 'Employment', width: 'full' },

            // DATABASE LINKS
            { id: 'user_id', label: 'User ID', type: 'int', section: 'Database Links', width: 'half' },
            { id: 'franchise_id', label: 'Franchise ID', type: 'int', section: 'Database Links', width: 'half' },
            { id: 'admin_type_id', label: 'Admin Type ID', type: 'int', section: 'Database Links', width: 'full' }
        ]
    },

    user: {
        fields: [
            // SYSTEM
            { id: 'id', label: 'ID', type: 'int', hidden: true },
            { id: 'created_at', label: 'Created At', type: 'epochms', readonly: true },

            // ACCOUNT INFO
            { id: 'name', label: 'Name', type: 'text', width: 'full' },
            { id: 'email', label: 'Email', type: 'email', width: 'half' },
            { id: 'password', label: 'Password', type: 'password', width: 'half' },
            { id: 'is_active', label: 'Active', type: 'bool', width: 'half' },
            { id: 'role', label: 'Role', type: 'text', width: 'half' },

            // DATABASE LINKS
            { id: 'admin_type_id', label: 'Admin Type ID', type: 'int', section: 'Database Links', width: 'full' }
        ]
    },

    competitor: {
        fields: [
            // SYSTEM
            { id: 'id', label: 'ID', type: 'int', hidden: true },
            { id: 'created_at', label: 'Created At', type: 'epochms', readonly: true },
            { id: 'last_updated', label: 'Last Updated', type: 'epochms', readonly: true },

            // CORE COMPETITOR INFO
            { id: 'name', label: 'Name', type: 'text', width: 'full' },
            { id: 'location', label: 'Location', type: 'text', width: 'half' },
            { id: 'address', label: 'Address', type: 'text', width: 'half' },
            { id: 'website_url', label: 'Website', type: 'text', section: 'Online Presence', width: 'half' },
            { id: 'facebook_url', label: 'Facebook', type: 'text', section: 'Online Presence', width: 'half' },

            // METRICS & SIZE
            { id: 'physical_size_sqft', label: 'Size (sqft)', type: 'int', section: 'Capacity', width: 'half' },
            { id: 'capacity_kids', label: 'Max Capacity', type: 'int', section: 'Capacity', width: 'half' },
            { id: 'enrolled_kids', label: 'Current Enrolled', type: 'int', section: 'Capacity', width: 'half' },
            { id: 'avg_entry_cost', label: 'Avg Cost', type: 'decimal', section: 'Capacity', width: 'half' },

            // INTELLIGENCE
            { id: 'teaching_staff', label: 'Staff Info', type: 'text', section: 'Intelligence', width: 'full' },
            { id: 'pivot_script', label: 'Pivot Script', type: 'text', section: 'Intelligence', width: 'full' },

            // DATABASE LINKS
            { id: 'primary_franchise_id', label: 'Primary Franchise ID', type: 'int', section: 'Database Links', width: 'full' }
        ]
    },

    dashboard_snapshots: {
        fields: [
            // SYSTEM
            { id: 'id', label: 'ID', type: 'int', hidden: true },
            { id: 'created_at', label: 'Created At', type: 'epochms', readonly: true },

            // SNAPSHOT DATA
            { id: 'snapshot_date', label: 'Snapshot Date', type: 'date', width: 'full' },
            { id: 'total_enrollment', label: 'Total Enrollment', type: 'int', section: 'Metrics', width: 'half' },
            { id: 'todays_change_enrollment', label: 'Daily Change', type: 'int', section: 'Metrics', width: 'half' },

            // DATABASE LINKS
            { id: 'franchise_id', label: 'Franchise ID', type: 'int', section: 'Database Links', width: 'full' }
        ]
    },

    message_raw: {
        fields: [
            // SYSTEM
            { id: 'id', label: 'ID', type: 'int', hidden: true },
            { id: 'created_at', label: 'Created At', type: 'epochms', readonly: true },

            // MESSAGE CORE
            { id: 'sender_external_id', label: 'External ID', type: 'text', width: 'half' },
            { id: 'direction', label: 'Direction', type: 'enum', list: ["incoming", "outgoing"], width: 'half' },
            { id: 'received_at', label: 'Received At', type: 'epochms', width: 'half' },
            { id: 'conversation_id', label: 'Conversation ID', type: 'text', width: 'half' },

            // PROFILE & CONTENT
            { id: 'first_name', label: 'First Name', type: 'text', section: 'Profile', width: 'half' },
            { id: 'last_name', label: 'Last Name', type: 'text', section: 'Profile', width: 'half' },
            { id: 'profile_pic', label: 'Profile Pic URL', type: 'text', section: 'Profile', width: 'full' },
            { id: 'payload', label: 'Payload', type: 'text', section: 'Message Details', width: 'full' },

            // PROCESSING STATUS
            { id: 'is_processed', label: 'Processed', type: 'bool', section: 'Status', width: 'half' },
            { id: 'is_enriched', label: 'Enriched', type: 'bool', section: 'Status', width: 'half' },
            { id: 'ai_error', label: 'AI Error', type: 'text', section: 'Status', width: 'full' }
        ]
    },

    uploader_media_vault: {
        fields: [
            // SYSTEM
            { id: 'id', label: 'ID', type: 'int', hidden: true },
            { id: 'created_at', label: 'Created At', type: 'epochms', readonly: true },

            // FILE DETAILS
            { id: 'file_name', label: 'File Name', type: 'text', width: 'half' },
            { id: 'file_type', label: 'File Type', type: 'text', width: 'half' },
            { id: 'file_url', label: 'File URL', type: 'text', width: 'full' },
            { id: 'expiry_date', label: 'Expiry Date', type: 'date', width: 'half' },
            { id: 'is_active', label: 'Active', type: 'bool', width: 'half' },

            // PROCESSING
            { id: 'is_processed', label: 'Processed', type: 'bool', section: 'Processing', width: 'half' },
            { id: 'processing_errors', label: 'Errors', type: 'text', section: 'Processing', width: 'half' },
            { id: 'metadata', label: 'Metadata', type: 'json', section: 'Processing', width: 'full' },

            // DATABASE LINKS
            { id: 'franchise_id', label: 'Franchise ID', type: 'int', section: 'Database Links', width: 'half' },
            { id: 'student_id', label: 'Student ID', type: 'int', section: 'Database Links', width: 'half' },
            { id: 'teacher_id', label: 'Teacher ID', type: 'int', section: 'Database Links', width: 'half' },
            { id: 'parent_id', label: 'Parent ID', type: 'int', section: 'Database Links', width: 'half' }
        ]
    },

    student_authorized_pickup: {
        fields: [
            // SYSTEM
            { id: 'id', label: 'ID', type: 'int', hidden: true },
            { id: 'created_at', label: 'Created At', type: 'epochms', readonly: true },

            // IDENTITY
            { id: 'name', label: 'Name', type: 'text', width: 'full' },
            { id: 'relationship', label: 'Relationship', type: 'text', width: 'half' },
            { id: 'phone', label: 'Phone', type: 'text', width: 'half' },
            { id: 'is_active', label: 'Is Active', type: 'bool', width: 'full' },

            // DATABASE LINKS
            { id: 'student_id', label: 'Student ID', type: 'int', section: 'Database Links', width: 'full' }
        ]
    },

    student_progress_question: {
        fields: [
            // SYSTEM
            { id: 'id', label: 'ID', type: 'int', hidden: true },
            { id: 'created_at', label: 'Created At', type: 'epochms', readonly: true },

            // QUESTION INFO
            { id: 'the_question', label: 'The Question', type: 'text', width: 'full' },
            { id: 'is_active', label: 'Is Active', type: 'bool', width: 'full' }
        ]
    },

    student_session_record: {
        fields: [
            // SYSTEM
            { id: 'id', label: 'ID', type: 'int', hidden: true },
            { id: 'created_at', label: 'Created At', type: 'epochms', readonly: true },

            // RECORD DATA
            { id: 'session_id', label: 'Session ID', type: 'int', width: 'half' },
            { id: 'student_id', label: 'Student ID', type: 'int', width: 'half' },
            { id: 'photo_urls_list', label: 'Photo URLs', type: 'text', section: 'Media', width: 'full' },
            { id: 'facebook_teaser_url', label: 'FB Teaser', type: 'text', section: 'Media', width: 'full' },
            { id: 'teacher_notes', label: 'Teacher Notes', type: 'textarea', section: 'Feedback', width: 'full' }
        ]
    },

    lead_profile: {
        fields: [
            // SYSTEM
            { id: 'id', label: 'ID', type: 'int', hidden: true },
            { id: 'created_at', label: 'Created At', type: 'epochms', readonly: true },

            // IDENTITY
            { id: 'first_name', label: 'First Name', type: 'text', width: 'half' },
            { id: 'last_name', label: 'Last Name', type: 'text', width: 'half' },
            { id: 'facebook_id', label: 'FB ID', type: 'text', section: 'Identity', width: 'half' },
            { id: 'phone', label: 'Phone', type: 'text', section: 'Identity', width: 'half' },

            // SALES INTELLIGENCE
            { id: 'winning_patterns', label: 'Winning Patterns', type: 'text', section: 'Intelligence', width: 'full' },
            { id: 'lead_status', label: 'Status', type: 'enum', list: ["new", "contacted", "enrolled", "lost"], section: 'Intelligence', width: 'half' },
            { id: 'next_action', label: 'Next Step', type: 'text', section: 'Intelligence', width: 'half' }
        ]
    },

    conversation: {
        fields: [
            // SYSTEM
            { id: 'id', label: 'ID', type: 'int', hidden: true },
            { id: 'created_at', label: 'Created At', type: 'epochms', readonly: true },

            // ROUTING
            { id: 'external_id', label: 'External ID', type: 'text', width: 'half' },
            { id: 'assigned_franchise_id', label: 'Franchise ID', type: 'int', width: 'half' },
            { id: 'assigned_admin_id', label: 'Admin ID', type: 'int', width: 'half' },
            { id: 'status', label: 'Status', type: 'enum', list: ["open", "pending", "closed"], width: 'half' }
        ]
    },

    session_details: {
        fields: [
            // SYSTEM
            { id: 'id', label: 'ID', type: 'int', hidden: true },
            { id: 'created_at', label: 'Created At', type: 'epochms', readonly: true },

            // LESSON CONTENT
            { id: 'session_num', label: 'Session Num', type: 'int', width: 'full' },
            { id: 'lesson_1_title', label: 'Lesson 1 Title', type: 'text', section: 'Lessons', width: 'half' },
            { id: 'lesson_1_cat', label: 'Lesson 1 Cat', type: 'enum', list: ["Alphabet", "Numbers", "Motor Skills", "Other"], section: 'Lessons', width: 'half' },
            { id: 'lesson_2_title', label: 'Lesson 2 Title', type: 'text', section: 'Lessons', width: 'half' },
            { id: 'lesson_2_cat', label: 'Lesson 2 Cat', type: 'enum', list: ["Alphabet", "Numbers", "Motor Skills", "Other"], section: 'Lessons', width: 'half' },

            // CURRICULUM DETAILS
            { id: 'manner_topic', label: 'Manner Topic', type: 'text', section: 'Curriculum', width: 'full' },
            { id: 'obj_text_1', label: 'Objective 1', type: 'text', section: 'Curriculum', width: 'half' },
            { id: 'obj_text_2', label: 'Objective 2', type: 'text', section: 'Curriculum', width: 'half' },
            { id: 'obj_text_3', label: 'Objective 3', type: 'text', section: 'Curriculum', width: 'full' },
            { id: 'physical_activity', label: 'Physical Activity', type: 'text', section: 'Curriculum', width: 'half' },
            { id: 'home_time_activity', label: 'Home Time Activity', type: 'text', section: 'Curriculum', width: 'half' },

            // VISUALS
            { id: 'theme_color', label: 'Theme Color', type: 'text', section: 'Visuals', width: 'half' },
            { id: 'map_icon_url', label: 'Map Icon URL', type: 'text', section: 'Visuals', width: 'half' },
            { id: 'full_lesson_plan', label: 'Full Lesson Plan', type: 'textarea', section: 'Visuals', width: 'full' }
        ]
    },

    enrollment: {
        fields: [
            // SYSTEM
            { id: 'id', label: 'ID', type: 'int', hidden: true },
            { id: 'created_at', label: 'Created At', type: 'epochms', readonly: true },
            // CORE ENROLLMENT INFO
            { id: 'status', label: 'Status', type: 'enum', list: ["active", "pending", "completed"], width: 'full' },
            { id: 'enrollment_date', label: 'Enrollment Date', type: 'date', width: 'half' },
            { id: 'start_date', label: 'Start Date', type: 'date', width: 'half' },
            { id: 'enrolled_date', label: 'Enrolled Date', type: 'date', width: 'full' },
            // DATABASE LINKS
            { id: 'student_id', label: 'Student ID', type: 'int', section: 'Database Links', width: 'half' },
            { id: 'franchise_id', label: 'Franchise ID', type: 'int', section: 'Database Links', width: 'half' },
            { id: 'teacher_id', label: 'Teacher ID', type: 'int', section: 'Database Links', width: 'full' }
        ]
    },

    student_assessment: {
        fields: [
            // SYSTEM
            { id: 'id', label: 'ID', type: 'int', hidden: true },
            { id: 'created_at', label: 'Created At', type: 'epochms', readonly: true },
            // ASSESSMENT INFO
            { id: 'assessment_date', label: 'Assessment Date', type: 'date', width: 'half' },
            { id: 'assessment_type', label: 'Assessment Type', type: 'text', width: 'half' },
            { id: 'comments', label: 'Comments', type: 'textarea', width: 'full' },
            // DATABASE LINKS
            { id: 'student_id', label: 'Student ID', type: 'int', section: 'Database Links', width: 'half' },
            { id: 'teacher_id', label: 'Teacher ID', type: 'int', section: 'Database Links', width: 'half' },
            { id: 'franchise_id', label: 'Franchise ID', type: 'int', section: 'Database Links', width: 'full' }
        ]
    },

    admin_type: {
        fields: [
            // SYSTEM
            { id: 'id', label: 'ID', type: 'int', hidden: true },
            { id: 'created_at', label: 'Created At', type: 'epochms', readonly: true },
            // CORE TYPE INFO
            { id: 'my_Type', label: 'Admin Type Name', type: 'text', width: 'full' }
        ]
    }
};
