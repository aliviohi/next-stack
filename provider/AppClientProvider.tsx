'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { DevTools } from './DevTools';
import { StoreProvider } from './StoreProvider';

export function AppClientProvider({ children, locale }: { children: React.ReactNode; locale: string }) {
  const queryClient = new QueryClient();
  // const headersList = await headers();
  // const cookies = parsedCookies(headersList.get('cookie') || '');
  // const userAgent = headersList.get('user-agent');

  return (
    <StoreProvider
      currentLang={locale}
      // userAgent={userAgent}
    >
      <QueryClientProvider client={queryClient}>
        {children}
        <DevTools />
        <Toaster
          richColors
          position="top-right"
        />
      </QueryClientProvider>
    </StoreProvider>
  );
}
