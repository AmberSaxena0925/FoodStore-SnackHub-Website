import { Feature } from '../types';
import { FeatureCard } from './FeatureCard';

interface CategorySectionProps {
  category: string;
  features: Feature[];
  selectedFeatureIds: Set<string>;
  onToggleFeature: (featureId: string) => void;
}

const categoryIcons: Record<string, string> = {
  Design: '🎨',
  Development: '💻',
  Features: '⚡',
  SEO: '🔍',
  Security: '🔒',
  Hosting: '🌐',
};

export function CategorySection({
  category,
  features,
  selectedFeatureIds,
  onToggleFeature,
}: CategorySectionProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">{categoryIcons[category] || '📋'}</span>
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{category}</h2>
        <span className="text-sm text-gray-500 dark:text-gray-400">({features.length} options)</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            feature={feature}
            isSelected={selectedFeatureIds.has(feature.id)}
            onToggle={onToggleFeature}
          />
        ))}
      </div>
    </div>
  );
}
