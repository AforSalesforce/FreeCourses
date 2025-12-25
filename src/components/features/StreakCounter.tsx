
'use client';

import { useEffect, useState } from 'react';
import { getStreak } from '@/lib/user-utils';
import { Flame } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export function StreakCounter() {
    const [streak, setStreak] = useState(0);

    useEffect(() => {
        // Delay to ensure client-side hydration
        const s = getStreak();
        setStreak(s);
    }, []);

    if (streak === 0) return null;

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-100 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-900 cursor-help transition-all hover:scale-105">
                        <Flame className="w-4 h-4 text-orange-500 fill-orange-500 animate-pulse" />
                        <span className="text-sm font-bold text-orange-700 dark:text-orange-400">{streak}</span>
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p className="font-semibold">Day Streak!</p>
                    <p className="text-xs text-muted-foreground">Come back tomorrow to keep it going.</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
