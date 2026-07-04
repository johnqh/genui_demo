import { useTheme, Theme } from '@sudobility/components';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function DemoTopBar() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === Theme.DARK;

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 sm:px-6 h-14 border-b border-border bg-background">
      <h1 className="text-lg font-semibold text-foreground">GenUI Demo</h1>
      <button
        onClick={() => setTheme(isDark ? Theme.LIGHT : Theme.DARK)}
        className="p-2 rounded-lg hover:bg-accent text-muted-foreground"
        aria-label="Toggle dark mode"
      >
        {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
      </button>
    </header>
  );
}
