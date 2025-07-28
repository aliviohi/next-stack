import { NextIntlClientProvider } from 'next-intl';
import { AppClientProvider } from './AppClientProvider';

export function AppServerProvider({ children, locale }: { children: React.ReactNode; locale: string }) {
  return (
    <NextIntlClientProvider locale={locale}>
      <AppClientProvider locale={locale}>{children}</AppClientProvider>
    </NextIntlClientProvider>
  );
}
