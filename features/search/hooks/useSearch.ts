import { useState, useCallback, useEffect } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import type { SearchState, SearchFilters, SearchResult, SearchSuggestion, SearchHistoryItem } from '../types';

export function useSearch<T = unknown>() {
  const [searchState, setSearchState] = useState<SearchState<T>>({
    query: '',
    results: [],
    filters: {},
    isLoading: false,
    totalResults: 0,
    currentPage: 1,
    hasMore: false,
  });

  const [searchHistory, setSearchHistory] = useLocalStorage<SearchHistoryItem[]>('search-history', []);
  const debouncedQuery = useDebounce(searchState.query, 500);

  // Perform search when debounced query changes
  useEffect(() => {
    if (debouncedQuery.trim()) {
      performSearch(debouncedQuery, searchState.filters);
    } else {
      setSearchState((prev) => ({ ...prev, results: [], totalResults: 0, hasMore: false }));
    }
  }, [debouncedQuery, searchState.filters]);

  const performSearch = useCallback(async (query: string, filters: SearchFilters) => {
    setSearchState((prev) => ({ ...prev, isLoading: true }));

    try {
      // TODO: Implement actual search API call
      console.log('Searching for:', query, 'with filters:', filters);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock results
      const mockResults: SearchResult<T>[] = [
        {
          id: '1',
          title: `Result for "${query}"`,
          description: 'This is a mock search result',
          type: 'product',
          data: {} as T,
          relevance: 0.95,
        },
      ];

      setSearchState((prev) => ({
        ...prev,
        results: mockResults,
        totalResults: mockResults.length,
        hasMore: false,
        isLoading: false,
      }));

      // Add to search history
      addToHistory(query, mockResults.length);
    } catch (error) {
      console.error('Search error:', error);
      setSearchState((prev) => ({ ...prev, isLoading: false }));
    }
  }, []);

  const updateQuery = useCallback((query: string) => {
    setSearchState((prev) => ({ ...prev, query, currentPage: 1 }));
  }, []);

  const updateFilters = useCallback((filters: Partial<SearchFilters>) => {
    setSearchState((prev) => ({
      ...prev,
      filters: { ...prev.filters, ...filters },
      currentPage: 1,
    }));
  }, []);

  const clearFilters = useCallback(() => {
    setSearchState((prev) => ({ ...prev, filters: {}, currentPage: 1 }));
  }, []);

  const loadMore = useCallback(() => {
    if (searchState.hasMore && !searchState.isLoading) {
      setSearchState((prev) => ({ ...prev, currentPage: prev.currentPage + 1 }));
      // TODO: Implement pagination
    }
  }, [searchState.hasMore, searchState.isLoading]);

  const addToHistory = useCallback(
    (query: string, resultCount: number) => {
      const historyItem: SearchHistoryItem = {
        query,
        timestamp: new Date().toISOString(),
        resultCount,
      };

      setSearchHistory((prev) => {
        const filtered = prev.filter((item) => item.query !== query);
        return [historyItem, ...filtered].slice(0, 10); // Keep only last 10 searches
      });
    },
    [setSearchHistory],
  );

  const clearHistory = useCallback(() => {
    setSearchHistory([]);
  }, [setSearchHistory]);

  const getSuggestions = useCallback(
    (query: string): SearchSuggestion[] => {
      if (!query.trim()) return [];

      const suggestions: SearchSuggestion[] = [];

      // Add recent searches that match
      const recentMatches = searchHistory
        .filter((item) => item.query.toLowerCase().includes(query.toLowerCase()))
        .map((item) => ({
          text: item.query,
          type: 'recent' as const,
          count: item.resultCount,
        }));

      suggestions.push(...recentMatches);

      // TODO: Add more sophisticated suggestions
      return suggestions.slice(0, 5);
    },
    [searchHistory],
  );

  return {
    ...searchState,
    updateQuery,
    updateFilters,
    clearFilters,
    loadMore,
    searchHistory,
    clearHistory,
    getSuggestions,
  };
}
