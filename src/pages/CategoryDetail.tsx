import { GenUI } from '@sudobility/genui';
import type { GenUIActionHandler, IRenderable } from '@sudobility/genui';
import { categoryData } from '@/data';

const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined;

interface CategoryDetailProps {
  categoryId: string;
  onAction: GenUIActionHandler;
}

export default function CategoryDetail({ categoryId, onAction }: CategoryDetailProps) {
  const renderables: IRenderable[] = categoryData[categoryId] ?? [];

  if (renderables.length === 0) {
    return (
      <p className="text-muted-foreground p-4 italic">No demos available for this category.</p>
    );
  }

  return (
    <div className="space-y-6 p-4">
      {renderables.map(r => (
        <div key={r.id} className="space-y-2">
          <code className="text-xs text-muted-foreground bg-accent px-2 py-0.5 rounded">
            {r.view?.layout}
          </code>
          <GenUI renderable={r} onAction={onAction} googleMapsApiKey={googleMapsApiKey} />
        </div>
      ))}
    </div>
  );
}
