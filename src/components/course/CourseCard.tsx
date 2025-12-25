import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Clock, Star, Eye, BarChart, Heart } from 'lucide-react';
import { addToFavorites, removeFromFavorites, isFavorite } from '@/lib/user-utils';
import { useState, useEffect } from 'react';
import { Course } from '@/lib/types';

interface CourseProps extends Course { }

export function CourseCard({ id, title, provider, thumbnail, duration, sourceUrl, affiliateUrl, isAudit, level, rating, views, category }: CourseProps) {
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

      {/* Thumbnail Section */}
      <div className="aspect-video w-full overflow-hidden bg-muted relative">
        <button
          onClick={toggleFavorite}
          className="absolute top-2 right-2 z-20 p-2 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm transition-all hover:scale-110"
        >
          <Heart size={18} className={`transition-colors ${isFav ? 'fill-red-500 text-red-500' : 'text-white'}`} />
        </button>
        <Image
          src={thumbnail}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
          <Badge variant="secondary" className="backdrop-blur-md bg-white/90 dark:bg-black/50 text-xs font-medium border-0 shadow-sm">
            <Clock size={10} className="mr-1" /> {duration}
          </Badge>
          <Badge variant="secondary" className="backdrop-blur-md bg-white/90 dark:bg-black/50 text-xs font-medium border-0 shadow-sm">
            <BarChart size={10} className="mr-1" /> {level}
          </Badge>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex justify-between items-start mb-3 gap-2">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider font-bold text-primary mb-1">
              {category}
            </span>
            <h3 className="line-clamp-2 text-lg font-bold leading-tight tracking-tight group-hover:text-primary transition-colors">
              {title}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Star size={12} className="fill-yellow-400 text-yellow-400" />
            <span className="font-medium text-foreground">{rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye size={12} />
            <span>{views}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>•</span>
            <span>{provider}</span>
          </div>
        </div>

        <div className="mt-auto pt-2 border-t border-border/50">
          <div className="flex items-center justify-between pt-3">
            {isAudit && (
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium px-2 py-0.5 rounded bg-emerald-100/50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
                Audit Free
              </span>
            )}
            {!isAudit && <span />}

            <Button asChild size="sm" className="gap-2 bg-foreground text-background hover:bg-foreground/90 transition-all shadow-lg hover:shadow-xl">
              <a
                href={affiliateUrl || sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Start <ExternalLink size={14} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
