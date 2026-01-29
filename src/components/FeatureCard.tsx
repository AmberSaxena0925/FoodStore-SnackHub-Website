import { Check, X } from 'lucide-react';
import { Feature } from '../types';

interface FeatureCardProps {
  feature: Feature;
  isSelected: boolean;
  onToggle: (featureId: string) => void;
}

export function FeatureCard({ feature, isSelected, onToggle }: FeatureCardProps) {
  return (
    <div
      onClick={() => onToggle(feature.id)}
      className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-lg ${
        isSelected
          ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 dark:border-emerald-400'
          : 'border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-400'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">{feature.name}</h3>
            {feature.is_popular && (
              <span className="px-2 py-0.5 text-xs font-medium bg-emerald-500 dark:bg-emerald-600 text-white rounded-full">
                Popular
              </span>
            )}
          </div>
          {feature.description && (
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{feature.description}</p>
          )}
          <p className="text-sm font-bold text-gray-900 dark:text-emerald-400">
            ₹{feature.base_price.toLocaleString('en-IN')}
          </p>
        </div>
        <div
          className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
            isSelected ? 'bg-emerald-500 dark:bg-emerald-600' : 'bg-gray-200 dark:bg-gray-700'
          }`}
        >
          {isSelected ? (
            <Check className="w-4 h-4 text-white" />
          ) : (
            <X className="w-4 h-4 text-gray-400 dark:text-gray-500" />
          )}
        </div>
      </div>
    </div>
  );
}
