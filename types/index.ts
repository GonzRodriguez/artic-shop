interface IProduct {
  id: number;
  api_model: string;
  api_link: string;
  title: string;
  external_sku: number;
  image_url: string;
  web_url: string;
  description: string;
  price_display: string;
  min_compare_at_price: null;
  max_compare_at_price: null;
  min_current_price: number;
  max_current_price: number;
  artist_ids: number[];
  artwork_ids: [];
  exhibition_ids: [];
  last_updated_source: string;
  last_updated: string;
  timestamp: string;
}

interface IPagination {
  total: number;
  limit: number;
  offset: number;
  total_pages: number;
  current_page: number;
  prev_url: string;
  next_url: string;
}

interface IInfo {
    license_text: string,
    license_links: string[],
    version: string
}

interface IConfig {
  iiif_url: string
  website_url: string
}
export type { IProduct, IPagination, IInfo, IConfig };