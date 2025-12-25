
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, ArrowRight, Trophy, Map, GraduationCap } from 'lucide-react';

const LEARNING_PATHS = [
    {
        id: 'fullstack-web',
        title: 'Full Stack Web Developer',
        description: 'Go from zero to hero. Learn HTML, CSS, JavaScript, React, and Node.js.',
        coursesIncluded: 5,
        duration: '6 Months',
        level: 'Beginner to Pro',
        color: 'from-blue-500 to-cyan-400',
        steps: ['HTML & CSS Basics', 'JavaScript Deep Dive', 'React Frontend', 'Node.js Backend', 'Deploying Apps']
    },
    {
        id: 'data-scientist',
        title: 'Data Scientist Career Path',
        description: 'Master Python, SQL, Machine Learning, and Data Visualization.',
        coursesIncluded: 4,
        duration: '8 Months',
        level: 'Intermediate',
        color: 'from-emerald-500 to-teal-400',
        steps: ['Python for Data Science', 'SQL Mastery', 'Machine Learning Basics', 'Deep Learning Specialization']
    },
    {
        id: 'ux-ui-designer',
        title: 'UX/UI Designer',
        description: 'Learn to design beautiful interfaces and user experiences using Figma.',
        coursesIncluded: 3,
        duration: '4 Months',
        level: 'Beginner',
        color: 'from-purple-500 to-pink-400',
        steps: ['Design Fundamentals', 'Figma Masterclass', 'Building a Portfolio']
    }
];

// Mapped to actual matching filters in the system
const PATH_LINKS: Record<string, string> = {
    'fullstack-web': '/?categories=Web%20Development',
    'data-scientist': '/?categories=AI%20%26%20Data%20Science',
    'ux-ui-designer': '/?categories=Design'
};

const ACADEMIC_ROADMAPS = [
    {
        id: 'school-foundation',
        title: 'High School Foundation (10th-12th)',
        description: 'Build a solid logic and math foundation before college.',
        steps: ['Mathematics (Calculus/Stats)', 'Intro to Coding (Python)', 'Computer Science Principles', 'Logic Puzzles'],
        icon: 'School',
        color: 'from-orange-400 to-red-400'
    },
    {
        id: 'btech-first-year',
        title: 'B.Tech First Year (Freshman)',
        description: 'Start your engineering journey with strong basics.',
        steps: ['C/C++ Programming', 'Data Structures Intro', 'Discrete Mathematics', 'Linux Basics'],
        icon: 'University',
        color: 'from-blue-400 to-indigo-500'
    },
    {
        id: 'placement-prep',
        title: 'Campus Placement Prep (Final Year)',
        description: 'Crack top tech companies with targeted preparation.',
        steps: ['Advanced DSA (LeetCode)', 'System Design', 'CS Core (OS/DBMS/CN)', 'Mock Interviews'],
        icon: 'Briefcase',
        color: 'from-green-400 to-emerald-600'
    }
];

export default function LearningPathsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">Curated Learning Paths</h1>
                <p className="text-xl text-muted-foreground">
                    Don't know where to start? Follow our step-by-step guides to master a new career skill completely for free.
                </p>
            </div>

            <div className="mb-20">
                <div className="flex items-center gap-3 mb-8">
                    <Trophy className="w-8 h-8 text-primary" />
                    <h2 className="text-2xl font-semibold tracking-tight">Professional Skill Tracks</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {LEARNING_PATHS.map((path) => (
                        <Card key={path.id} className="relative overflow-hidden flex flex-col border-border/50 bg-card hover:shadow-xl transition-all hover:-translate-y-1">
                            <div className={`h-2 w-full bg-gradient-to-r ${path.color}`} />
                            <CardHeader>
                                <div className="flex justify-between items-start mb-2">
                                    <div className="p-2 bg-primary/5 rounded-lg">
                                        <Map className="w-6 h-6 text-primary" />
                                    </div>
                                    <Badge variant="outline">{path.level}</Badge>
                                </div>
                                <CardTitle className="text-2xl">{path.title}</CardTitle>
                                <p className="text-sm text-muted-foreground mt-2">{path.description}</p>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <div className="space-y-4 mt-2">
                                    {path.steps.map((step, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-sm">
                                            <CheckCircle2 size={16} className="text-muted-foreground/50" />
                                            <span>{step}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="bg-muted/20 pt-6 border-t">
                                <div className="w-full">
                                    <div className="flex justify-between text-xs text-muted-foreground mb-4">
                                        <span>{path.coursesIncluded} Courses</span>
                                        <span>{path.duration}</span>
                                    </div>
                                    <Button className="w-full gap-2" asChild>
                                        <Link href={PATH_LINKS[path.id] || '/'}>
                                            Start Path <ArrowRight size={16} />
                                        </Link>
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Academic Roadmaps Section */}
            <div className="mb-20">
                <div className="flex items-center gap-3 mb-8">
                    <GraduationCap className="w-8 h-8 text-indigo-500" />
                    <h2 className="text-2xl font-semibold tracking-tight">Student Career Maps (10th - B.Tech)</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {ACADEMIC_ROADMAPS.map((roadmap) => (
                        <Card key={roadmap.id} className="relative overflow-hidden border-border/50 bg-card/50 hover:bg-card transition-all">
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${roadmap.color} opacity-10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2`} />
                            <CardHeader>
                                <CardTitle className="text-xl">{roadmap.title}</CardTitle>
                                <p className="text-sm text-muted-foreground">{roadmap.description}</p>
                            </CardHeader>
                            <CardContent>
                                <div className="relative border-l border-primary/20 ml-3 space-y-6 pb-2">
                                    {roadmap.steps.map((step, idx) => (
                                        <div key={idx} className="relative pl-6">
                                            <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary" />
                                            <p className="text-sm font-medium leading-none">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <div className="mt-20 rounded-2xl bg-gradient-to-br from-primary/10 via-background to-primary/5 border border-primary/10 p-8 md:p-12 text-center">
                <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Ready to Commit?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                    Create a free account to track your progress, save courses, and get certificates upon completion (coming soon).
                </p>
                <Button size="lg" className="shadow-lg shadow-primary/20">
                    Join for Free
                </Button>
            </div>
        </div>
    );
}


