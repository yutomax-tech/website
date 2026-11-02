'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ButtonLink } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Icon } from '@/components/ui/icon';

export default function MarketingError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Marketing page error:', error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 relative">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-gradient-radial from-brand-600/10 via-transparent to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />

      <Container narrow>
        <div className="rounded-2xl border border-status-error/30 bg-surface-secondary/90 p-8 md:p-12 text-center backdrop-blur-md shadow-xl">
          <div className="w-16 h-16 rounded-full bg-status-error/10 border border-status-error/30 text-status-error mx-auto flex items-center justify-center mb-6">
            <Icon name="alert-circle" size={32} />
          </div>

          <h1 className="text-3xl font-bold heading-gradient mb-3">
            Something went wrong
          </h1>

          <p className="text-body text-content-secondary max-w-md mx-auto mb-8">
            We encountered an unexpected error loading this page. This has been logged automatically.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" onClick={() => reset()}>
              Try Again
            </Button>
            <ButtonLink href="/" variant="secondary">
              Go to Homepage
            </ButtonLink>
          </div>
        </div>
      </Container>
    </div>
  );
}
