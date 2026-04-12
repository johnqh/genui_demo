import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MasterDetailLayout } from '@sudobility/components';
import DemoTopBar from '@/components/DemoTopBar';
import ActionLog from '@/components/ActionLog';
import { useActionLog } from '@/hooks/useActionLog';
import { CATEGORIES } from './categories';
import CategoryDetail from './CategoryDetail';
import type { IRenderable } from '@sudobility/genui';

export default function DemoPage() {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [mobileView, setMobileView] = useState<'navigation' | 'content'>('navigation');
  const { entries, addEntry, clearEntries } = useActionLog();

  const selectedCategory = CATEGORIES.find(c => c.id === category) ?? CATEGORIES[0];

  const handleCategorySelect = (id: string) => {
    navigate(`/${id}`);
    setMobileView('content');
  };

  const handleAction = (value: string, renderable: IRenderable) => {
    addEntry(renderable.id, value);
  };

  const masterContent = (
    <div className="py-2">
      {CATEGORIES.map(cat => (
        <button
          key={cat.id}
          onClick={() => handleCategorySelect(cat.id)}
          className={`w-full text-left px-4 py-3 transition-colors ${
            cat.id === selectedCategory.id
              ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-r-2 border-blue-600'
              : 'text-theme-text-primary hover:bg-theme-hover-bg'
          }`}
        >
          <div className="font-medium text-sm">{cat.label}</div>
          <div className="text-xs text-theme-text-tertiary mt-0.5">{cat.description}</div>
        </button>
      ))}
    </div>
  );

  const detailContent = <CategoryDetail categoryId={selectedCategory.id} onAction={handleAction} />;

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <DemoTopBar />
      <div className="flex-1 min-h-0 flex flex-col">
        <MasterDetailLayout
          masterContent={masterContent}
          detailContent={detailContent}
          masterTitle="Categories"
          detailTitle={selectedCategory.label}
          masterWidth={260}
          mobileView={mobileView}
          onBackToNavigation={() => setMobileView('navigation')}
          stickyMaster
          stickyTopOffset={56}
        />
      </div>
      <ActionLog entries={entries} onClear={clearEntries} />
    </div>
  );
}
