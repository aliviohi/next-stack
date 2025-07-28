export interface SearchFilters {
  category?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  location?: string;
  dateRange?: {
    start: string;
    end: string;
  };
  tags?: string[];
  sortBy?: 'relevance' | 'date' | 'price' | 'rating';
  sortOrder?: 'asc' | 'desc';
}

export interface SearchResult<T = unknown> {
  id: string;
  title: string;
  description?: string;
  url?: string;
  type: 'user' | 'product' | 'article' | 'service';
  data: T;
  relevance: number;
  highlights?: {
    field: string;
    snippet: string;
  }[];
}

export interface SearchState<T = unknown> {
  query: string;
  results: SearchResult<T>[];
  filters: SearchFilters;
  isLoading: boolean;
  totalResults: number;
  currentPage: number;
  hasMore: boolean;
}

export interface SearchSuggestion {
  text: string;
  type: 'query' | 'filter' | 'recent';
  count?: number;
}

export interface SearchHistoryItem {
  query: string;
  timestamp: string;
  resultCount: number;
}
