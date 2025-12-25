
export function getStreak(): number {
    if (typeof window === 'undefined') return 0;

    const lastVisit = localStorage.getItem('last_visit');
    const currentStreak = parseInt(localStorage.getItem('streak_count') || '0', 10);

    const today = new Date().toDateString();

    // First visit ever
    if (!lastVisit) {
        localStorage.setItem('last_visit', today);
        localStorage.setItem('streak_count', '1');
        return 1;
    }

    if (lastVisit === today) {
        return currentStreak;
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (lastVisit === yesterday.toDateString()) {
        const newStreak = currentStreak + 1;
        localStorage.setItem('streak_count', newStreak.toString());
        localStorage.setItem('last_visit', today);
        return newStreak;
    }

    // Streak broken
    localStorage.setItem('streak_count', '1');
    localStorage.setItem('last_visit', today);
    return 1;
}

export function addToFavorites(courseId: string) {
    if (typeof window === 'undefined') return;
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (!favorites.includes(courseId)) {
        favorites.push(courseId);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}

export function removeFromFavorites(courseId: string) {
    if (typeof window === 'undefined') return;
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const newFavorites = favorites.filter((id: string) => id !== courseId);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
}

export function getFavorites(): string[] {
    if (typeof window === 'undefined') return [];
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}

export function isFavorite(courseId: string): boolean {
    if (typeof window === 'undefined') return false;
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.includes(courseId);
}
