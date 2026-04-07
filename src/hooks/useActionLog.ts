import { useState, useCallback } from 'react';

export interface ActionLogEntry {
  timestamp: Date;
  renderableId: string;
  value: string;
}

export function useActionLog() {
  const [entries, setEntries] = useState<ActionLogEntry[]>([]);

  const addEntry = useCallback((renderableId: string, value: string) => {
    setEntries(prev => [...prev.slice(-49), { timestamp: new Date(), renderableId, value }]);
  }, []);

  const clearEntries = useCallback(() => {
    setEntries([]);
  }, []);

  return { entries, addEntry, clearEntries };
}
