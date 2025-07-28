'use client';

import { useEffect, useState } from 'react';

export function DevTools() {
  const [DevToolsComponent, setDevToolsComponent] = useState<React.ComponentType<{ initialIsOpen: boolean }> | null>(
    null,
  );

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      import('@tanstack/react-query-devtools').then((module) => {
        setDevToolsComponent(() => module.ReactQueryDevtools);
      });
    }
  }, []);

  if (!DevToolsComponent) {
    return null;
  }

  return <DevToolsComponent initialIsOpen={false} />;
}
