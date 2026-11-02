'use client';

import { useEffect } from 'react';
import { Button, ButtonLink } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Icon } from '@/components/ui/icon';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to monitoring if configured
    console.error('Unhandled runtime error:', error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 relative">
      <Container narrow>
        <div className="rounded-2xl border border-status-error/30 bg-surface-secondary/90 p-8 md:p-12 text-center backdrop-blur-md shadow-xl">
          <div className="w-16 h-16 rounded-full bg-status-error/10 border border-status-error/30 text-status-error mx-auto flex items-center justify-center mb-6">
            <Icon name="alert-circle" size={32} />
          </div>

          <h1 className="text-3xl font-bold heading-gradient mb-3">
            System Execution Error
          </h1>

          <p className="text-body text-content-secondary max-w-md mx-auto mb-8">
            An unexpected error occurred during rendering. Our automated monitoring has recorded this event.
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
