import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

/**
 * Input — form text input with label and error display.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="space-y-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-body-sm font-medium text-content-secondary"
          >
            {label}
            {props.required && <span className="text-status-error ml-1" aria-hidden="true">*</span>}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className={cn(
            'w-full rounded-lg border bg-surface-secondary px-4 py-3',
            'text-body text-content-primary placeholder:text-content-tertiary placeholder:opacity-100',
            'transition-colors duration-200',
            'focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500',
            error
              ? 'border-status-error focus:ring-status-error/50 focus:border-status-error'
              : 'border-surface-border hover:border-surface-border/80',
            className
          )}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="text-caption text-status-error" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
