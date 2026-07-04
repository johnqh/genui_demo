import { useEffect, useRef } from 'react';
import type { ActionLogEntry } from '@/hooks/useActionLog';

interface ActionLogProps {
  entries: ActionLogEntry[];
  onClear: () => void;
}

export default function ActionLog({ entries, onClear }: ActionLogProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [entries]);

  return (
    <div className="border-t border-border bg-muted">
      <div className="flex items-center justify-between px-4 py-2">
        <span className="text-xs font-medium text-muted-foreground">Action Log</span>
        <button
          onClick={onClear}
          className="text-xs text-muted-foreground hover:text-muted-foreground"
        >
          Clear
        </button>
      </div>
      <div ref={scrollRef} className="h-32 overflow-y-auto px-4 pb-2 font-mono text-xs">
        {entries.length === 0 && (
          <p className="text-muted-foreground italic">
            Interact with controls to see actions here...
          </p>
        )}
        {entries.map((entry, i) => (
          <div key={i} className="py-0.5 text-muted-foreground">
            <span className="text-muted-foreground">{entry.timestamp.toLocaleTimeString()}</span>{' '}
            {/* Decorative debug-log identifier highlight (syntax-coloring of the
                renderable id). Kept as a literal palette class: this app's theme
                tokens define no accent color to map it to. */}
            <span className="text-blue-500">{entry.renderableId}</span>{' '}
            <span className="text-foreground">{entry.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
