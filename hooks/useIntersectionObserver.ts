import { useEffect, useRef, useState, useCallback } from 'react';

interface UseIntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export function useIntersectionObserver(options: UseIntersectionObserverOptions = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const elementRef = useRef<Element | null>(null);

  const callback = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsIntersecting(entry.isIntersecting);
    setEntry(entry);
  }, []);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(callback, options);
    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [callback, options]);

  const setElement = useCallback((element: Element | null) => {
    elementRef.current = element;
  }, []);

  return { setElement, isIntersecting, entry };
}

export function useInfiniteScroll(onLoadMore: () => void, options: UseIntersectionObserverOptions = {}) {
  const { setElement, isIntersecting } = useIntersectionObserver({
    rootMargin: '100px',
    ...options,
  });

  useEffect(() => {
    if (isIntersecting) {
      onLoadMore();
    }
  }, [isIntersecting, onLoadMore]);

  return { setElement };
}
