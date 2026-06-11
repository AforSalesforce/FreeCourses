'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Clock, Star, Eye, BarChart, Heart, Sparkles } from 'lucide-react';
import { addToFavorites, removeFromFavorites, isFavorite } from '@/lib/user-utils';
import { useState, useEffect } from 'react';
import { Course } from '@/lib/types';

interface CourseProps extends Course { }

export function CourseCard({
  id,
  title,
  provider,
  thumbnail,
  duration,
  sourceUrl,
  affiliateUrl,
  isAudit,
  level,
  rating,
  views,
  category,
  isFeatured,
  isNew
}: CourseProps) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    setIsFav(isFavorite(id));
  }, [id]);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFav) {
      removeFromFavorites(id);
      setIsFav(false);
    } else {
      addToFavorites(id);
      setIsFav(true);
    }
  };

  return (
    <div className="group relative flex flex-col h-full overflow-hidden rounded-xl border border-border/50 bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary/20 hover:-translate-y-1">
      {/* Featured/New Badge */}
      {(isFeatured || isNew) && (
        <div className="absolute top-2 left-2 z-20">
          {isFeatured && (
            <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 shadow-md">
              <Sparkles size={10} className="mr-1" /> Featured
            </Badge>
          )}
          {isNew && !isFeatured && (
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 shadow-md">
              New
            </Badge>
          )}
        </div>
      )}

      {/* Thumbnail Section */}
      <div className="aspect-video w-full overflow-hidden bg-muted relative">
        <button
          onClick={toggleFavorite}
          className="absolute top-2 right-2 z-20 p-2 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm transition-all hover:scale-110"
          aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart size={16} className={`transition-colors ${isFav ? 'fill-red-500 text-red-500' : 'text-white'}`} />
        </button>
        <Image
          src={thumbnail}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badges on thumbnail */}
        <div className="absolute bottom-2 left-2 right-2 flex flex-wrap gap-1.5">
          <Badge variant="secondary" className="backdrop-blur-md bg-white/90 dark:bg-black/50 text-xs font-medium border-0 shadow-sm">
            <Clock size={10} className="mr-1" /> {duration}
          </Badge>
          <Badge variant="secondary" className="backdrop-blur-md bg-white/90 dark:bg-black/50 text-xs font-medium border-0 shadow-sm">
            <BarChart size={10} className="mr-1" /> {level}
          </Badge>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-4">
        {/* Category & Title */}
        <div className="mb-2">
          <span className="text-[10px] uppercase tracking-wider font-bold text-primary">
            {category}
          </span>
          <h3 className="line-clamp-2 text-base sm:text-lg font-bold leading-tight tracking-tight group-hover:text-primary transition-colors mt-1">
            <Link href={`/course/${id}`}>{title}</Link>
          </h3>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <Star size={12} className="fill-yellow-400 text-yellow-400" />
            <span className="font-medium text-foreground">{rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye size={12} />
            <span>{views}</span>
          </div>
          <span className="text-muted-foreground/50">•</span>
          <span className="truncate max-w-[120px]">{provider}</span>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-3 border-t border-border/50">
          <div className="flex items-center justify-between gap-2">
            {isAudit ? (
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium px-2 py-0.5 rounded bg-emerald-100/50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 whitespace-nowrap">
                Audit Free
              </span>
            ) : (
              <span className="text-[10px] text-blue-600 dark:text-blue-400 font-medium px-2 py-0.5 rounded bg-blue-100/50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 whitespace-nowrap">
                100% Free
              </span>
            )}

            <Button asChild size="sm" className="gap-1.5 bg-foreground text-background hover:bg-foreground/90 transition-all shadow-lg hover:shadow-xl text-xs sm:text-sm">
              <a
                href={affiliateUrl || sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Start <ExternalLink size={12} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
