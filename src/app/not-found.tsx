import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GraduationCap, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-6">
                <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight mb-2">404</h1>
            <h2 className="text-xl font-semibold mb-3">Page not found</h2>
            <p className="text-muted-foreground max-w-sm mb-8">
                The page you&apos;re looking for doesn&apos;t exist or has been moved. Try browsing our free courses instead.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild>
                    <Link href="/">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Courses
                    </Link>
                </Button>
                <Button variant="outline" asChild>
                    <Link href="/?q=">
                        <Search className="mr-2 h-4 w-4" /> Search Courses
                    </Link>
                </Button>
            </div>
        </div>
    );
}
