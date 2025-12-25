
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, BookOpen, Globe, Code2 } from 'lucide-react';
import { resources } from '@/lib/data';
import Link from 'next/link';

export default function ResourcesPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <Button variant="ghost" className="mb-4 text-muted-foreground hover:bg-transparent" asChild>
                    <Link href="/">&larr; Back to Courses</Link>
                </Button>
                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    Essential Developer Resources
                </h1>
                <p className="text-xl text-muted-foreground">
                    A curated collection of the best blogs, documentation, and practice platforms to bookmark.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource) => (
                    <Card key={resource.id} className="group hover:shadow-lg transition-all border-border/50 hover:border-primary/50">
                        <CardHeader>
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 rounded-xl bg-secondary/50 group-hover:bg-primary/10 transition-colors text-primary">
                                    {resource.type === 'Blog' ? <BookOpen size={24} /> :
                                        resource.type === 'Documentation' ? <Code2 size={24} /> : <Globe size={24} />}
                                </div>
                                <Badge variant="secondary" className="font-mono text-xs">{resource.type}</Badge>
                            </div>
                            <CardTitle className="flex items-center gap-2">
                                {resource.title}
                            </CardTitle>
                            <CardDescription className="mt-2 text-base">
                                {resource.description}
                            </CardDescription>
                        </CardHeader>
                        <CardFooter className="pt-2">
                            <div className="flex flex-col w-full gap-4">
                                <div className="flex gap-2 flex-wrap">
                                    {resource.tags.map(tag => (
                                        <Badge key={tag} variant="outline" className="text-xs text-muted-foreground">#{tag}</Badge>
                                    ))}
                                </div>
                                <Button className="w-full gap-2 mt-2 group-hover:bg-primary" variant="secondary" asChild>
                                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                                        Visit Website <ExternalLink size={16} />
                                    </a>
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
