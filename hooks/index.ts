// Utility hooks
export { useLocalStorage } from './useLocalStorage';
export { useDebounce } from './useDebounce';
export { useMediaQuery, useIsMobile, useIsTablet, useIsDesktop, useIsLargeScreen } from './useMediaQuery';
export { useClickOutside } from './useClickOutside';
export { useAsync } from './useAsync';
export { usePrevious } from './usePrevious';
export { useKeyPress, useKeyCombo } from './useKeyPress';
export { useIntersectionObserver, useInfiniteScroll } from './useIntersectionObserver';

// Feature hooks
export { useAuth } from '../features/auth/hooks/useAuth';
export { useNotifications } from '../features/notifications/hooks/useNotifications';
export { useSearch } from '../features/search/hooks/useSearch';
export { useTheme } from '../features/theme/hooks/useTheme';
