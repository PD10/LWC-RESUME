import SOCIAL from '@salesforce/resourceUrl/SOCIAL';

export const SOCIAL_LINKS = [
    {
        type: "github",
        label: "github/pritishdas",
        link: "https://github.com/PD10",
        icon: SOCIAL + '/SOCIAL/github.svg'
    },
    {
        type: "linkedin",
        label: "linkedin/pritishdas",
        link: "https://www.linkedin.com/in/pritishdas/",
        icon: SOCIAL + '/SOCIAL/linkedin.svg'
    },
    {
        type: "trailhead",
        label: "trailhead/pritishdas",
        link: "https://trailblazer.me/id/pd001",
        icon: SOCIAL + '/SOCIAL/trailhead.svg'
    }
];

export const USER_DETAILS = {
    NAME:'Pritish Das',
    ROLE:'Senior Software Engineer',
    EMAIL:'pritishdas01@gmail.com',
    PHONE:'9585431502'
};

export const CAREER_SUMMARY = {
    HEADING:"OBJECTIVE",
    DESCRIPTION: "Detail oriented professional with experience in application development. Seeking to take the next career step with a respected organization dedicated to world class quality and to achieve organizational goals in the spirit of teamwork by utilizing my experience, educational background, networking and technical skills.",
    // KEYS_POINTS:[
    //     "If You want to add summary points it comes here. and its optional",
    //     "keypoint 2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    //     "keypoint 3 Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    //     "keypoint 4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    // ]
};

export const EXPERIENCE_DATA = {
    HEADING: "Work Experience",
    EXPERIENCES: [
        {
            ROLE: "Senior Software Engineer",
            COMPANY_NAME: "Apisero",
            DURATION: "December 2021 - Present",
            // DESCRIPTION:
            //     "Your Job description goes hereiusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
            DESCRIPTION_POINTS: [
                "Salesforce Developer. Developed a POC project which helped to strengthen Salesforce Admin and Developer concepts(Apex, Trigger, Batch Apex, LWC). Developed a CPQ clone from scratch.",
                "Experience in designing Custom Objects, creating fields and relationships, validation rules, page layouts, record types and data security model.",
                "Developing efficient code using Apex classes, Apex triggers, Batch Apex and Async Apex, Test classes wherever necessary.",
                "Creating workflow rules, process builders, flows and approval process.",
                "Developing Lightning Web Components(LWC) by using JavaScript, Lightning Message Service(LMS), Lightning Design System(LDS)."
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used:',
                LIST: [
                    "Salesforce",
                    "Custom Objects",
                    "Validation Rules",
                    "Flows",
                    "Apex",
                    "Async Apex",
                    "Triggers",
                    "LWC",
                ]
            },
        },
        {
            ROLE: "Software Engineer 1",
            COMPANY_NAME: "Cerner(Oracle Health)",
            DURATION: "July 2019 - November 2021",
            // DESCRIPTION:
            //     "Your Job description goes here iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
            DESCRIPTION_POINTS: [
                "Used Salesforce.com to build POC(proof of concept) projects.",
                "Implemented OAuth2, uplifted from jersey 1.x to jersey 2.x, removed security vulnerabilities(CVEs), fixed defects/bugs, uplifted project by removing all old dependencies and replaced them with latest ones and worked on building API in a Jersey(Java Framework) application for the Department of Defense(DoD) and Veteran Affairs(VA) of the United States Government. Also worked on a Sweden deployment for the same project.",
                "Worked on an Enterprise Java application. Implemented circuit breaker functionality using resilience4j.",
                "Implemented API for pagination, filtering and sorting using Ruby on Rails.",
                "Developed frontend single-page CRUD applications using ReactJS(React Hooks, React functional components).",
                "Provided support to clients who used our platform.",
                "Used agile software development and methodologies."
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used:',
                LIST: [
                    "ReactJS",
                    "Java",
                    "Ruby on Rails",
                    "Salesforce",
                    "Agile",
                    "MySQL",
                ]
            }
        },
    ]
}

export const PERSONAL_PROJECTS = {
    HEADING: "PERSONAL PROJECTS",
    PROJECTS: [
        {
            ID: 1,
            PROJECT_NAME: "News App",
            DESCRIPTION:
                "Used Salesforce platform to build a news app from scratch using:",
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used:',
                LIST: [
                    "Salesforce",
                    "Apex",
                    "REST Callouts(NewsApi REST API)",
                    "Ligthning Web Components(LWC)",
                    "Navigation",
                    "Pagination",
                ]
            },
        },
        {
            ID: 2,
            PROJECT_NAME: "Job Application Tracker App(In Progress)",
            DESCRIPTION:
                "Using Salesforce to build a job application tracker app from scratch using:",
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used:',
                LIST: [
                    "Salesforce",
                    "Custom Objects",
                    "Flows",
                ]
            }
        },
    ]
};

 export const EDUCATION_DATA = {
     ICON: SOCIAL + '/SOCIAL/education.svg',
     HEADING: "EDUCATION",
     LIST:[
         {
             NAME: "BTech Computer Science and Engineering",
             UNIVERSITY_NAME: "VIT University, Vellore",
             DURATION: "2015 - 2019",
         },
     ]
 };

 export const AWARDS_DATA = {
     ICON: SOCIAL + '/SOCIAL/awards.svg',
     HEADING: "AWARDS",
     LIST: [
         {
             NAME: "NOTT Award",
             DESCRIPTION:"Award obtained in Cerner for going above and beyond in service.",
         },
     ]
 };

export const CERTIFICATION_DATA = {
    ICON: SOCIAL + '/SOCIAL/certification.svg',
    HEADING: "CERTIFICATIONS",
    LIST: [
        {
            NAME: "Salesforce Platform Developer 1",
        },
    ]
};

export const LANGUAGES_DATA = {
    HEADING: "LANGUAGES",
    LIST: [
        {
            NAME: "English",
            // LEVEL: "Native",
        },
        {
            NAME: "Hindi",
            // LEVEL: "Professional",
        },
        {
            NAME: "Bangla",
            // LEVEL: "Professional",
        },
    ]
};

export const SKILLS_DATA = {
    HEADING: "SKILLS & TOOLS",
    SKILLS:[
        {
            HEADING: "FRONTEND",
            SKILLS_LIST: [
                { NAME: "ReactJS" },
                { NAME: "LWC(Lightning Web Components; JS Framework)" },
                // { NAME: "Angular", LEVEL: "75" },
                { NAME: "JavaScript" },
                { NAME: "HTML5/CSS3" },
            ],
        },
        {
            HEADING: "BACKEND",
            SKILLS_LIST: [
                { NAME: "Java" },
                { NAME: "Apex" },
                // { NAME: "PHP", LEVEL: "98" },
            ],
        },
        {
            HEADING: "CRM",
            SKILLS_LIST: [
                { NAME: "Salesforce" },
                // { NAME: "Wordpress", LEVEL: "75" },
                // { NAME: "Drupal", LEVEL: "60" },
            ],
        }
    ],
    OTHERS_SKILLS:{
        HEADING: 'OTHERS',
        SKILLS_LIST: [
            "Git",
            "Github",
            "AWS Code Commit",
            "Code Review",
            "JIRA",
            "Jenkins",
            "Docker",
            "Kubernetes",
            "Apache",
            "MySQL",
            "MongoDB",
            "Postman"]
    }
};

export const INTERESTS_DATA = {
    HEADING: "Interests",
    LIST: ["Driving", "Sports", "Gaming"]
};