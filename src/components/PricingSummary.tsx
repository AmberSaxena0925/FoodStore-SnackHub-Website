import { Download, Save, Trash2 } from 'lucide-react';
import { Feature } from '../types';

interface PricingSummaryProps {
  selectedFeatures: Feature[];
  onClear: () => void;
  onSave: () => void;
  onExport: () => void;
}

export function PricingSummary({
  selectedFeatures,
  onClear,
  onSave,
  onExport,
}: PricingSummaryProps) {
  const totalPrice = selectedFeatures.reduce(
    (sum, feature) => sum + Number(feature.base_price),
    0
  );
  const monthlyPrice = Math.round(totalPrice / 12);

  return (
    <div className="sticky top-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Your Custom Package</h2>
        <p className="text-emerald-100 text-sm">
          {selectedFeatures.length} feature{selectedFeatures.length !== 1 ? 's' : ''}{' '}
          selected
        </p>
      </div>

      <div className="p-6">
        {selectedFeatures.length === 0 ? (
          <div className="text-center py-8">
            <div className="text-gray-400 dark:text-gray-600 mb-2">
              <svg
                className="w-16 h-16 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
            </div>
            <p className="text-gray-500 dark:text-gray-400">Select features to build your package</p>
          </div>
        ) : (
          <>
            <div className="max-h-64 overflow-y-auto mb-4 space-y-2">
              {selectedFeatures.map((feature) => (
                <div
                  key={feature.id}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                      {feature.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{feature.category}</p>
                  </div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-emerald-400 ml-3">
                    ₹{feature.base_price.toLocaleString('en-IN')}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t-2 border-gray-200 dark:border-gray-700 pt-4 mb-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    ₹{totalPrice.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex items-center justify-between text-lg">
                  <span className="font-bold text-gray-900 dark:text-gray-100">Total (One-time)</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">
                    ₹{totalPrice.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg border border-emerald-200 dark:border-emerald-800">
                  <span className="text-sm text-emerald-900 dark:text-emerald-200">Or pay monthly</span>
                  <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                    ₹{monthlyPrice.toLocaleString('en-IN')}/month
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <button
                onClick={onSave}
                className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                <Save className="w-5 h-5" />
                Save Package
              </button>
              <button
                onClick={onExport}
                className="w-full flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                <Download className="w-5 h-5" />
                Export Catalog
              </button>
              <button
                onClick={onClear}
                className="w-full flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                <Trash2 className="w-5 h-5" />
                Clear All
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
