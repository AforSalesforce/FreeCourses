
import { Course } from './types';

export const courses: Course[] = [
    {
        id: 'cs50',
        title: 'CS50: Introduction to Computer Science',
        provider: 'Harvard University',
        thumbnail: 'https://images.unsplash.com/photo-1629904853716-f004b6b80635?q=80&w=2070&auto=format&fit=crop',
        duration: '12 weeks',
        level: 'Beginner',
        category: 'Computer Science',
        topics: ['C', 'Python', 'SQL', 'Algorithms'],
        rating: 4.9,
        views: '6M+',
        sourceUrl: 'https://cs50.harvard.edu/x/2024/',
        isAudit: true
    },
    {
        id: 'you-dont-know-js',
        title: 'You Don\'t Know JS (Yet)',
        provider: 'GitHub',
        thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=2070&auto=format&fit=crop',
        duration: 'Book Series',
        level: 'Advanced',
        category: 'Web Development',
        topics: ['JavaScript', 'Scope', 'Closures', 'Prototypes'],
        rating: 4.9,
        views: '175k Stars',
        sourceUrl: 'https://github.com/getify/You-Dont-Know-JS',
        isAudit: false
    },
    {
        id: 'ml-andrew-ng',
        title: 'Machine Learning Specialization',
        provider: 'DeepLearning.AI',
        thumbnail: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=1974&auto=format&fit=crop',
        duration: '3 months',
        level: 'Intermediate',
        category: 'AI & Data Science',
        topics: ['Machine Learning', 'NumPy', 'Python', 'Regression'],
        rating: 4.9,
        views: '900k',
        sourceUrl: 'https://www.coursera.org/specializations/machine-learning-introduction',
        affiliateUrl: 'https://coursera.pxf.io/c/12345/6789/1011?u=https%3A%2F%2Fwww.coursera.org%2Fspecializations%2Fmachine-learning-introduction',
        isAudit: true
    },
    {
        id: 'scrimba-react',
        title: 'Learn React for Free',
        provider: 'Scrimba',
        thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
        duration: '12 hours',
        level: 'Beginner',
        category: 'Web Development',
        topics: ['React', 'JSX', 'Hooks', 'Project-Based'],
        rating: 4.9,
        views: '250k',
        sourceUrl: 'https://scrimba.com/learn/learnreact',
        isAudit: false
    },
    {
        id: 'python-for-everybody',
        title: 'Python for Everybody (PY4E)',
        provider: 'University of Michigan',
        thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=2074&auto=format&fit=crop',
        duration: '14 hours',
        level: 'Beginner',
        category: 'Programming',
        topics: ['Python', 'Data Structures', 'Web Scraping'],
        rating: 4.9,
        views: '5M+',
        sourceUrl: 'https://www.py4e.com/',
        isAudit: false
    },
    {
        id: 'system-design-primer',
        title: 'The System Design Primer',
        provider: 'GitHub',
        thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
        duration: 'Self-paced',
        level: 'Advanced',
        category: 'Software Engineering',
        topics: ['System Design', 'Scalability', 'Architecture'],
        rating: 4.9,
        views: '260k Stars',
        sourceUrl: 'https://github.com/donnemartin/system-design-primer',
        isAudit: false
    },
    {
        id: 'ux-design-professional',
        title: 'Google UX Design Professional Certificate',
        provider: 'Google',
        thumbnail: 'https://images.unsplash.com/photo-1586717791821-3f44a5638d48?q=80&w=2070&auto=format&fit=crop',
        duration: '6 months',
        level: 'Beginner',
        category: 'Design',
        topics: ['UX', 'Figma', 'Wireframing', 'Prototyping'],
        rating: 4.8,
        views: '1M+',
        sourceUrl: 'https://www.coursera.org/professional-certificates/google-ux-design',
        isAudit: true
    },
    {
        id: 'aws-practitioner',
        title: 'AWS Cloud Practitioner Essentials',
        provider: 'AWS',
        thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
        duration: '6 hours',
        level: 'Beginner',
        category: 'Cloud Computing',
        topics: ['AWS', 'Cloud', 'Infrastructure', 'Security'],
        rating: 4.8,
        views: '3M+',
        sourceUrl: 'https://explore.skillbuilder.aws/learn/course/external/view/elearning/134/aws-cloud-practitioner-essentials',
        isAudit: false
    },
    {
        id: 'rust-microsoft',
        title: 'Take your first steps with Rust',
        provider: 'Microsoft',
        thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop',
        duration: '6 hours',
        level: 'Intermediate',
        category: 'Programming',
        topics: ['Rust', 'Error Handling', 'Memory Safety'],
        rating: 4.8,
        views: '500k',
        sourceUrl: 'https://learn.microsoft.com/en-us/training/paths/rust-first-steps/',
        isAudit: false
    },
    {
        id: 'figma-design',
        title: 'Figma: Design for Beginners',
        provider: 'Figma',
        thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop',
        duration: '4 hours',
        level: 'Beginner',
        category: 'Design',
        topics: ['Figma', 'UI Design', 'Prototyping'],
        rating: 4.9,
        views: '800k',
        sourceUrl: 'https://www.figma.com/resource-library/design-basics/',
        isAudit: false
    },
    {
        id: 'fullstack-open',
        title: 'Full Stack Open 2024',
        provider: 'University of Helsinki',
        thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
        duration: '14 weeks',
        level: 'Intermediate',
        category: 'Web Development',
        topics: ['React', 'Node.js', 'Express', 'MongoDB', 'GraphQL'],
        rating: 5.0,
        views: '100k+',
        sourceUrl: 'https://fullstackopen.com/en/',
        isAudit: false
    }
];

export const courseCategories = Array.from(new Set(courses.map(c => c.category)));
export const courseTopics = Array.from(new Set(courses.flatMap(c => c.topics)));

export const resources = [
    {
        id: 'roadmap-sh',
        title: 'roadmap.sh',
        type: 'Roadmap',
        description: 'Community driven roadmaps, articles and resources for developers.',
        url: 'https://roadmap.sh',
        tags: ['Career', 'Guidance']
    },
    {
        id: 'freecodecamp',
        title: 'freeCodeCamp',
        type: 'Platform',
        description: 'Learn to code for free. Build projects. Earn certifications.',
        url: 'https://www.freecodecamp.org',
        tags: ['Coding', 'Practice']
    },
    {
        id: 'mdn',
        title: 'MDN Web Docs',
        type: 'Documentation',
        description: 'Resources for developers, by developers. The official home of web standards.',
        url: 'https://developer.mozilla.org',
        tags: ['Web Dev', 'Reference']
    },
    {
        id: 'dev-to',
        title: 'DEV.to',
        type: 'Blog',
        description: 'A constructive and inclusive social network for software developers.',
        url: 'https://dev.to',
        tags: ['Community', 'Articles']
    },
    {
        id: 'css-tricks',
        title: 'CSS-Tricks',
        type: 'Blog',
        description: 'Daily articles about CSS, HTML, JavaScript, and all things web.',
        url: 'https://css-tricks.com',
        tags: ['CSS', 'Frontend']
    },
    {
        id: 'leet-code',
        title: 'LeetCode',
        type: 'Practice',
        description: 'The best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.',
        url: 'https://leetcode.com',
        tags: ['Interview', 'Algorithms']
    },
    {
        id: 'mit-ocw',
        title: 'MIT OpenCourseWare',
        type: 'Education',
        description: 'MIT puts almost all of its course materials online for free. Syllabi, lecture notes, and assignments.',
        url: 'https://ocw.mit.edu',
        tags: ['Engineering', 'University', 'Deep Dive']
    },
    {
        id: 'nptel',
        title: 'NPTEL',
        type: 'Education',
        description: 'Dense, mathematical, and highly respected lectures from IIT professors in India.',
        url: 'https://nptel.ac.in',
        tags: ['Engineering', 'Lecture', 'Advanced']
    },
    {
        id: 'engineer4free',
        title: 'Engineer4Free',
        type: 'Tutorials',
        description: 'Specialized site for civil, mechanical, and electrical engineering. Breaks down complex topics.',
        url: 'https://www.engineer4free.com',
        tags: ['Engineering', 'Tutorials']
    },
    {
        id: 'open-textbook-library',
        title: 'Open Textbook Library',
        type: 'Books',
        description: 'Legal, peer-reviewed, and free open textbooks.',
        url: 'https://open.umn.edu/opentextbooks',
        tags: ['Books', 'Reference']
    },
    {
        id: 'autodesk-student',
        title: 'Autodesk Student',
        type: 'Software',
        description: 'Free access to AutoCAD, Fusion 360, and other tools for students.',
        url: 'https://www.autodesk.com/education/edu-software/overview',
        tags: ['Tools', 'Software']
    },
    {
        id: 'vercel',
        title: 'Vercel',
        type: 'Hosting',
        description: 'Best for Next.js and React apps. Zero configuration deployment from GitHub.',
        url: 'https://vercel.com',
        tags: ['Hosting', 'Next.js', 'Frontend']
    },
    {
        id: 'netlify',
        title: 'Netlify',
        type: 'Hosting',
        description: 'Excellent for static sites and Jamstack apps with a generous free tier.',
        url: 'https://www.netlify.com',
        tags: ['Hosting', 'Static', 'Jamstack']
    },
    {
        id: 'github-pages',
        title: 'GitHub Pages',
        type: 'Hosting',
        description: 'Host static websites directly from your GitHub repository for free.',
        url: 'https://pages.github.com',
        tags: ['Hosting', 'Open Source', 'Static']
    },
    {
        id: 'render',
        title: 'Render',
        type: 'Hosting',
        description: 'Unified cloud to build and run all your apps and websites with free SSL.',
        url: 'https://render.com',
        tags: ['Hosting', 'Fullstack', 'Backend']
    }
];
