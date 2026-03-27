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

    admin_type: {
        fields: [
            // SYSTEM
            { id: 'id', label: 'ID', type: 'int', hidden: true },
            { id: 'created_at', label: 'Created At', type: 'epochms', readonly: true },
            // CORE TYPE INFO
            { id: 'Admin_Type', label: 'Admin Type', type: 'text', width: 'full' }
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
            { id: 'full_lesson_plan', label: 'Full Lesson Plan', type: 'text', section: 'Visuals', width: 'full' }
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
            { id: 'comments', label: 'Comments', type: 'text', width: 'full' },
            // QUESTIONS/ANSWERS
            { id: 'question_1_id', label: 'Q1 ID', type: 'int', section: 'Answers', width: 'half' },
            { id: 'recorded_answer_1', label: 'Answer 1', type: 'text', section: 'Answers', width: 'half' },
            { id: 'question_2_id', label: 'Q2 ID', type: 'int', section: 'Answers', width: 'half' },
            { id: 'recorded_answer_2', label: 'Answer 2', type: 'text', section: 'Answers', width: 'half' },
            { id: 'question_3_id', label: 'Q3 ID', type: 'int', section: 'Answers', width: 'half' },
            { id: 'recorded_answer_3', label: 'Answer 3', type: 'text', section: 'Answers', width: 'half' },
            { id: 'question_4_id', label: 'Q4 ID', type: 'int', section: 'Answers', width: 'half' },
            { id: 'recorded_answer_4', label: 'Answer 4', type: 'text', section: 'Answers', width: 'half' },
            { id: 'question_5_id', label: 'Q5 ID', type: 'int', section: 'Answers', width: 'half' },
            { id: 'recorded_answer_5', label: 'Answer 5', type: 'text', section: 'Answers', width: 'half' },
            { id: 'question_6_id', label: 'Q6 ID', type: 'int', section: 'Answers', width: 'half' },
            { id: 'recorded_answer_6', label: 'Answer 6', type: 'text', section: 'Answers', width: 'half' },
            { id: 'question_7_id', label: 'Q7 ID', type: 'int', section: 'Answers', width: 'half' },
            { id: 'recorded_answer_7', label: 'Answer 7', type: 'text', section: 'Answers', width: 'half' },
            { id: 'question_8_id', label: 'Q8 ID', type: 'int', section: 'Answers', width: 'half' },
            { id: 'recorded_answer_8', label: 'Answer 8', type: 'text', section: 'Answers', width: 'half' },
            { id: 'question_9_id', label: 'Q9 ID', type: 'int', section: 'Answers', width: 'half' },
            { id: 'recorded_answer_9', label: 'Answer 9', type: 'text', section: 'Answers', width: 'half' },
            { id: 'question_10_id', label: 'Q10 ID', type: 'int', section: 'Answers', width: 'half' },
            { id: 'recorded_answer_10', label: 'Answer 10', type: 'text', section: 'Answers', width: 'half' },
            // DATABASE LINKS
            { id: 'student_id', label: 'Student ID', type: 'int', section: 'Database Links', width: 'half' },
            { id: 'teacher_id', label: 'Teacher ID', type: 'int', section: 'Database Links', width: 'half' },
            { id: 'franchise_id', label: 'Franchise ID', type: 'int', section: 'Database Links', width: 'full' }
        ]
    },

    student_assessment_filled: {
        fields: [
            // SYSTEM
            { id: 'id', label: 'ID', type: 'int', hidden: true },
            { id: 'created_at', label: 'Created At', type: 'epochms', readonly: true },
            // STUDENT LINK
            { id: 'student_id', label: 'Student ID', type: 'int', width: 'full' },
            // DATA LOG
            { id: 'question_1_id', label: 'Q1 ID', type: 'int', section: 'Logs', width: 'half' },
            { id: 'answer_1', label: 'Answer 1', type: 'text', section: 'Logs', width: 'half' },
            { id: 'question_2_id', label: 'Q2 ID', type: 'int', section: 'Logs', width: 'half' },
            { id: 'answer_2', label: 'Answer 2', type: 'text', section: 'Logs', width: 'half' },
            { id: 'question_3_id', label: 'Q3 ID', type: 'int', section: 'Logs', width: 'half' },
            { id: 'answer_3', label: 'Answer 3', type: 'text', section: 'Logs', width: 'half' },
            { id: 'question_4_id', label: 'Q4 ID', type: 'int', section: 'Logs', width: 'half' },
            { id: 'answer_4', label: 'Answer 4', type: 'text', section: 'Logs', width: 'half' },
            { id: 'question_5_id', label: 'Q5 ID', type: 'int', section: 'Logs', width: 'half' },
            { id: 'answer_5', label: 'Answer 5', type: 'text', section: 'Logs', width: 'half' },
            { id: 'question_6_id', label: 'Q6 ID', type: 'int', section: 'Logs', width: 'half' },
            { id: 'answer_6', label: 'Answer 6', type: 'text', section: 'Logs', width: 'half' },
            { id: 'question_7_id', label: 'Q7 ID', type: 'int', section: 'Logs', width: 'half' },
            { id: 'answer_7', label: 'Answer 7', type: 'text', section: 'Logs', width: 'half' },
            { id: 'question_8_id', label: 'Q8 ID', type: 'int', section: 'Logs', width: 'half' },
            { id: 'answer_8', label: 'Answer 8', type: 'text', section: 'Logs', width: 'half' },
            { id: 'question_9_id', label: 'Q9 ID', type: 'int', section: 'Logs', width: 'half' },
            { id: 'answer_9', label: 'Answer 9', type: 'text', section: 'Logs', width: 'half' },
            { id: 'question_10_id', label: 'Q10 ID', type: 'int', section: 'Logs', width: 'half' },
            { id: 'answer_10', label: 'Answer 10', type: 'text', section: 'Logs', width: 'half' }
        ]
    },

    student_assessment_questions: {
        fields: [
            // SYSTEM
            { id: 'id', label: 'ID', type: 'int', hidden: true },
            { id: 'created_at', label: 'Created At', type: 'epochms', readonly: true },
            // QUESTION DATA
            { id: 'the_question', label: 'Question', type: 'text', width: 'full' },
            { id: 'answer_1', label: 'Answer 1', type: 'text', section: 'Options', width: 'half' },
            { id: 'answer_2', label: 'Answer 2', type: 'text', section: 'Options', width: 'half' },
            { id: 'answer_3', label: 'Answer 3', type: 'text', section: 'Options', width: 'half' },
            { id: 'answer_4', label: 'Answer 4', type: 'text', section: 'Options', width: 'half' },
            { id: 'answer_5', label: 'Answer 5', type: 'text', section: 'Options', width: 'half' },
            { id: 'answer_6', label: 'Answer 6', type: 'text', section: 'Options', width: 'half' }
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
    }
};
