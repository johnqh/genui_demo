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
    <div className="border-t border-theme-border bg-theme-bg-secondary">
      <div className="flex items-center justify-between px-4 py-2">
        <span className="text-xs font-medium text-theme-text-secondary">Action Log</span>
        <button
          onClick={onClear}
          className="text-xs text-theme-text-tertiary hover:text-theme-text-secondary"
        >
          Clear
        </button>
      </div>
      <div ref={scrollRef} className="h-32 overflow-y-auto px-4 pb-2 font-mono text-xs">
        {entries.length === 0 && (
          <p className="text-theme-text-tertiary italic">
            Interact with controls to see actions here...
          </p>
        )}
        {entries.map((entry, i) => (
          <div key={i} className="py-0.5 text-theme-text-secondary">
            <span className="text-theme-text-tertiary">
              {entry.timestamp.toLocaleTimeString()}
            </span>{' '}
            <span className="text-blue-500">{entry.renderableId}</span>{' '}
            <span className="text-theme-text-primary">{entry.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
