import { useState, useEffect, useCallback } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import type { ThemeConfig, ThemeMode, ColorScheme } from '../types';

export function useTheme() {
  const [config, setConfig] = useLocalStorage<ThemeConfig>('theme-config', {
    mode: 'system',
    colorScheme: 'blue',
    fontSize: 'medium',
    reducedMotion: false,
    highContrast: false,
  });

  const [currentMode, setCurrentMode] = useState<ThemeMode>('light');

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;

    // Apply mode
    if (config.mode === 'system') {
      const systemMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setCurrentMode(systemMode);
      root.setAttribute('data-theme', systemMode);
    } else {
      setCurrentMode(config.mode);
      root.setAttribute('data-theme', config.mode);
    }

    // Apply color scheme
    root.setAttribute('data-color-scheme', config.colorScheme);

    // Apply font size
    root.setAttribute('data-font-size', config.fontSize);

    // Apply reduced motion
    if (config.reducedMotion) {
      root.setAttribute('data-reduced-motion', 'true');
    } else {
      root.removeAttribute('data-reduced-motion');
    }

    // Apply high contrast
    if (config.highContrast) {
      root.setAttribute('data-high-contrast', 'true');
    } else {
      root.removeAttribute('data-high-contrast');
    }
  }, [config]);

  // Listen for system theme changes
  useEffect(() => {
    if (config.mode === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

      const handleChange = () => {
        const systemMode = mediaQuery.matches ? 'dark' : 'light';
        setCurrentMode(systemMode);
        document.documentElement.setAttribute('data-theme', systemMode);
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [config.mode]);

  const setMode = useCallback(
    (mode: ThemeMode) => {
      setConfig((prev) => ({ ...prev, mode }));
    },
    [setConfig],
  );

  const setColorScheme = useCallback(
    (colorScheme: ColorScheme) => {
      setConfig((prev) => ({ ...prev, colorScheme }));
    },
    [setConfig],
  );

  const setFontSize = useCallback(
    (fontSize: 'small' | 'medium' | 'large') => {
      setConfig((prev) => ({ ...prev, fontSize }));
    },
    [setConfig],
  );

  const toggleReducedMotion = useCallback(() => {
    setConfig((prev) => ({ ...prev, reducedMotion: !prev.reducedMotion }));
  }, [setConfig]);

  const toggleHighContrast = useCallback(() => {
    setConfig((prev) => ({ ...prev, highContrast: !prev.highContrast }));
  }, [setConfig]);

  const resetTheme = useCallback(() => {
    setConfig({
      mode: 'system',
      colorScheme: 'blue',
      fontSize: 'medium',
      reducedMotion: false,
      highContrast: false,
    });
  }, [setConfig]);

  return {
    config,
    currentMode,
    setMode,
    setColorScheme,
    setFontSize,
    toggleReducedMotion,
    toggleHighContrast,
    resetTheme,
  };
}
