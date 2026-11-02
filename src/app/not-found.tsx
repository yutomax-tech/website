
import { ButtonLink } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Icon } from '@/components/ui/icon';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-radial from-brand-600/15 via-transparent to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />

      <Container narrow>
        <div className="text-center">
          <div className="eyebrow mb-6">
            <span>ERROR 404</span>
          </div>

          <h1 className="text-4xl xs:text-5xl sm:text-7xl font-extrabold font-mono tracking-tight heading-gradient mb-4">
            Endpoint Not Found
          </h1>

          <p className="text-body-lg text-content-secondary max-w-md mx-auto mb-10">
            The architecture node or URL you requested does not exist or has been restructured.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ButtonLink href="/" variant="primary" size="lg">
              <Icon name="arrow-right" size={16} className="rotate-180" />
              <span>Return to Homepage</span>
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary" size="lg">
              <span>Contact Engineering Support</span>
            </ButtonLink>
          </div>
        </div>
      </Container>
    </div>
  );
}
