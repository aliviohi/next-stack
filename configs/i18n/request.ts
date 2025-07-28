import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Define the locales you want to support
export const locales = ['en', 'de'];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as string)) notFound();

  return {
    locale: locale as string,
    messages: (await import(`../../locales/${locale}.json`)).default,
  };
});
