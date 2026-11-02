import { forwardRef, type TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="space-y-1.5">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-body-sm font-medium text-content-secondary"
          >
            {label}
            {props.required && <span className="text-status-error ml-1" aria-hidden="true">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          aria-invalid={!!error}
          aria-describedby={error ? `${textareaId}-error` : undefined}
          className={cn(
            'w-full rounded-lg border bg-surface-secondary px-4 py-3 min-h-[120px] resize-y',
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
          <p id={`${textareaId}-error`} className="text-caption text-status-error" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
