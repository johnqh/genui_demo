import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MasterDetailLayout } from '@sudobility/components';
import { colors } from '@sudobility/design';
import DemoTopBar from '@/components/DemoTopBar';
import ActionLog from '@/components/ActionLog';
import SEOHead from '@/components/SEOHead';
import { buildHowToSchema } from '@/components/buildHowToSchema';
import { useActionLog } from '@/hooks/useActionLog';
import { CATEGORIES } from './categories';
import CategoryDetail from './CategoryDetail';
import type { IRenderable } from '@sudobility/genui';

export default function DemoPage() {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [mobileView, setMobileView] = useState<'navigation' | 'content'>('navigation');
  const { entries, addEntry, clearEntries } = useActionLog();
  const { t } = useTranslation('app');
  const { t: tHowTo } = useTranslation('howto');

  const seoTitle = t('seo.demo.title');
  const seoDescription = t('seo.demo.description');
  const seoKeywords = t('seo.demo.keywords', { returnObjects: true }) as string[];

  const howToSchema = buildHowToSchema(
    tHowTo('home.name'),
    tHowTo('home.description'),
    tHowTo('home.steps', { returnObjects: true }) as { name: string; text: string }[]
  );

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
              ? // Selected: primary-tinted bg/text from the design system. The
                // border-r-2 accent indicator stays a literal palette class: this
                // app's theme tokens define no accent/primary border color, so a
                // semantic swap would need new design tokens (out of scope here).
                `${colors.component.badge.primary.base} ${colors.component.badge.primary.dark} border-r-2 border-blue-600`
              : 'text-foreground hover:bg-accent'
          }`}
        >
          <div className="font-medium text-sm">{cat.label}</div>
          <div className="text-xs text-muted-foreground mt-0.5">{cat.description}</div>
        </button>
      ))}
    </div>
  );

  const detailContent = <CategoryDetail categoryId={selectedCategory.id} onAction={handleAction} />;

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        structuredData={howToSchema}
      />
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
