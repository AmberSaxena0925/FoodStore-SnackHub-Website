export interface Feature {
  id: string;
  name: string;
  description: string | null;
  category: string;
  base_price: number;
  is_popular: boolean;
  created_at: string;
}

export interface PricingPackage {
  id?: string;
  package_name: string;
  selected_features: string[];
  total_price: number;
  monthly_price: number;
  created_at?: string;
}

export interface SelectedFeature {
  feature: Feature;
  quantity: number;
}
