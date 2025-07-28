'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/Button';

export function HomeSection() {
  const t = useTranslations();

  const handlePrimaryClick = () => {
    console.log('Primary button clicked!');
  };

  const handleSecondaryClick = () => {
    console.log('Secondary button clicked!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">{t('home')}</h1>
          <p className="mb-8 text-xl text-gray-600">Welcome to our application! Explore our button components below.</p>
        </div>

        <div className="rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-2xl font-semibold text-gray-900">Button Component Examples</h2>

          <div className="space-y-6">
            {/* Variants */}
            <div>
              <h3 className="mb-3 text-lg font-medium text-gray-700">Variants</h3>
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="primary"
                  onClick={handlePrimaryClick}
                >
                  Primary Button
                </Button>
                <Button
                  variant="secondary"
                  onClick={handleSecondaryClick}
                >
                  Secondary Button
                </Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
                <Button variant="destructive">Destructive Button</Button>
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h3 className="mb-3 text-lg font-medium text-gray-700">Sizes</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>

            {/* States */}
            <div>
              <h3 className="mb-3 text-lg font-medium text-gray-700">States</h3>
              <div className="flex flex-wrap gap-3">
                <Button isLoading>Loading</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>

            {/* Full Width */}
            <div>
              <h3 className="mb-3 text-lg font-medium text-gray-700">Full Width</h3>
              <div className="w-full">
                <Button fullWidth>Full Width Button</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
