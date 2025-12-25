
export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string; // In a real app, this would be MDX or HTML
    date: string;
    coverImage: string;
    author: string;
    category: string;
}

export const blogPosts: BlogPost[] = [
    {
        slug: '2025-year-of-ai-upskilling',
        title: 'Why 2025 is the Year of AI Upskilling',
        excerpt: 'The job market is shifting rapidly. Here is why adding AI skills to your portfolio is no longer optional.',
        date: '2025-01-15',
        author: 'Education Team',
        category: 'Career Advice',
        coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
        content: `
            <p>The artificial intelligence revolution is not coming; it is here. As we move through 2025, the demand for AI literacy across all sectors—from marketing to engineering—is skyrocketing.</p>
            <h2>The Shift in Job Requirements</h2>
            <p>Analysis of over 1 million job postings reveals a 300% increase in keywords related to "Generative AI", "Prompt Engineering", and "LLM Integration". Employers are no longer looking for specialists who can verify code; they are looking for generalists who can leverage AI to multiply their output.</p>
            <h2>How to Start (For Free)</h2>
            <p>You don't need a PhD to get started. Platforms like Andrew Ng's DeepLearning.AI and Google Cloud Skills Boost offer free introductory courses that can get you up to speed in a weekend.</p>
        `
    },
    {
        slug: 'how-to-become-ux-designer-free',
        title: 'How to Become a UX Designer for Free',
        excerpt: 'A complete step-by-step roadmap to landing your first product design job without a bootcamp.',
        date: '2025-02-01',
        author: 'Sarah Jenkins',
        category: 'Guides',
        coverImage: 'https://images.unsplash.com/photo-1586717791821-3f44a5638d48?q=80&w=2070&auto=format&fit=crop',
        content: `
            <p>User Experience (UX) Design remains one of the most lucrative and creative tech careers. But the average bootcamp costs $10,000. Is it worth it? Probably not, when the resources are available for free.</p>
            <h2>Step 1: The Theory</h2>
            <p>Start with the Google UX Design Certificate (audit for free on Coursera). It covers the end-to-end design process.</p>
            <h2>Step 2: The Tools</h2>
            <p>Figma is the industry standard. It's free to use for individuals. Don't waste time learning Sketch or Adobe XD until you master Figma.</p>
        `
    },
    {
        slug: 'coursera-vs-udemy-data-science',
        title: 'Coursera vs. Udemy: Which is Better for Data Science?',
        excerpt: 'We bought and tested the top courses on both platforms. Here is the verdict.',
        date: '2025-02-10',
        author: 'Data Team',
        category: 'Reviews',
        coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
        content: `
            <p>Choosing between Coursera and Udemy often comes down to one question: Do you want a career or a specific skill?</p>
            <h2>Coursera: The Academic Route</h2>
            <p>If you want to be a Data Scientist at a FAANG company, the mathematical depth provided by university-backed Coursera specializations is non-negotiable.</p>
            <h2>Udemy: The Practitioner's Route</h2>
            <p>If you need to learn how to implement a Random Forest model in Python by tomorrow afternoon, Udemy's hands-on approach is superior.</p>
        `
    }
];
