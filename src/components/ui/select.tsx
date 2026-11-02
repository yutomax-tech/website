'use client';

import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react';
import { cn } from '@/lib/utils';

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  id?: string;
  label?: string;
  error?: string;
  options: SelectOption[];
  /** Shown (muted) while no option is selected. */
  placeholder?: string;
  /** Selected option value; '' means nothing selected. */
  value: string;
  onValueChange: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
  /** Renders a hidden input so the value is included in native form submissions. */
  name?: string;
  className?: string;
}

const TYPEAHEAD_RESET_MS = 600;

/**
 * Select — custom, theme-styled dropdown (select-only combobox pattern).
 * Replaces the native <select>, whose option list is drawn by the OS and
 * ignores the site's styling.
 *
 * Keyboard: ↑/↓ open & move, Home/End, Enter/Space select, Esc close,
 * Tab closes, printable characters jump to a matching option.
 */
export function Select({
  id,
  label,
  error,
  options,
  placeholder = 'Select an option',
  value,
  onValueChange,
  disabled,
  required,
  name,
  className,
}: SelectProps) {
  const autoId = useId();
  const baseId = id ?? `select-${autoId}`;
  const labelId = `${baseId}-label`;
  const listId = `${baseId}-listbox`;
  const errorId = `${baseId}-error`;
  const optionId = (index: number) => `${baseId}-option-${index}`;

  const [isOpen, setIsOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(-1);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const typeahead = useRef({ text: '', time: 0 });

  const selectedIndex = options.findIndex((opt) => opt.value === value);
  const selected = selectedIndex >= 0 ? options[selectedIndex] : undefined;
  const lastIndex = options.length - 1;

  const open = (index = Math.max(selectedIndex, 0)) => {
    if (disabled) return;
    setHighlighted(index);
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
    buttonRef.current?.focus();
  };

  const choose = (index: number) => {
    const opt = options[index];
    if (opt) onValueChange(opt.value);
    close();
  };

  // Close when clicking/tapping outside.
  useEffect(() => {
    if (!isOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [isOpen]);

  // Keep the highlighted option visible while navigating with the keyboard.
  useEffect(() => {
    if (!isOpen || highlighted < 0) return;
    listRef.current
      ?.querySelector<HTMLElement>(`[data-index="${highlighted}"]`)
      ?.scrollIntoView({ block: 'nearest' });
  }, [isOpen, highlighted]);

  const findByTypeahead = (char: string): number => {
    const now = Date.now();
    const state = typeahead.current;
    state.text = now - state.time > TYPEAHEAD_RESET_MS ? char : state.text + char;
    state.time = now;
    const query = state.text.toLowerCase();
    return options.findIndex((opt) => opt.label.toLowerCase().startsWith(query));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (isOpen) setHighlighted((i) => Math.min(lastIndex, i + 1));
        else open();
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (isOpen) setHighlighted((i) => Math.max(0, i - 1));
        else open();
        break;
      case 'Home':
        if (isOpen) {
          e.preventDefault();
          setHighlighted(0);
        }
        break;
      case 'End':
        if (isOpen) {
          e.preventDefault();
          setHighlighted(lastIndex);
        }
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (!isOpen) open();
        else if (highlighted >= 0) choose(highlighted);
        break;
      case 'Escape':
        if (isOpen) {
          e.preventDefault();
          close();
        }
        break;
      case 'Tab':
        if (isOpen) setIsOpen(false);
        break;
      default:
        if (e.key.length === 1 && !e.metaKey && !e.ctrlKey && !e.altKey) {
          const match = findByTypeahead(e.key);
          if (match < 0) break;
          if (isOpen) setHighlighted(match);
          else open(match);
        }
    }
  };

  return (
    <div ref={rootRef} className="space-y-1.5">
      {label && (
        <label id={labelId} htmlFor={baseId} className="block text-body-sm font-medium text-content-secondary">
          {label}
          {required && <span className="text-status-error ml-1" aria-hidden="true">*</span>}
        </label>
      )}

      <div className="relative">
        <button
          ref={buttonRef}
          id={baseId}
          type="button"
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls={listId}
          aria-labelledby={label ? `${labelId} ${baseId}` : undefined}
          aria-activedescendant={isOpen && highlighted >= 0 ? optionId(highlighted) : undefined}
          aria-required={required || undefined}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          disabled={disabled}
          onClick={() => (isOpen ? setIsOpen(false) : open())}
          onKeyDown={handleKeyDown}
          className={cn(
            'flex w-full items-center justify-between gap-3 rounded-lg border bg-surface-secondary px-4 py-3 text-left',
            'text-body transition-colors duration-200',
            'focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500',
            'disabled:cursor-not-allowed disabled:opacity-50',
            isOpen && 'ring-2 ring-brand-500/50 border-brand-500',
            error
              ? 'border-status-error focus:ring-status-error/50 focus:border-status-error'
              : 'border-surface-border hover:border-brand-500/30',
            className
          )}
        >
          <span className={cn('truncate', selected ? 'text-content-primary' : 'text-content-tertiary')}>
            {selected ? selected.label : placeholder}
          </span>
          <svg
            className={cn(
              'h-4 w-4 shrink-0 text-content-secondary transition-transform duration-200',
              isOpen && 'rotate-180 text-brand-300'
            )}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {name && <input type="hidden" name={name} value={value} />}

        {isOpen && (
          <ul
            ref={listRef}
            id={listId}
            role="listbox"
            aria-labelledby={label ? labelId : undefined}
            tabIndex={-1}
            className={cn(
              'absolute inset-x-0 top-full z-50 mt-2 max-h-64 overflow-y-auto p-1.5',
              'rounded-lg border border-brand-500/20 bg-surface-elevated shadow-2xl shadow-black/60',
              'animate-fade-in'
            )}
          >
            {options.map((opt, index) => {
              const isSelected = index === selectedIndex;
              const isHighlighted = index === highlighted;
              return (
                <li
                  key={opt.value}
                  id={optionId(index)}
                  data-index={index}
                  role="option"
                  aria-selected={isSelected}
                  onPointerEnter={() => setHighlighted(index)}
                  // Keep focus on the trigger so keyboard handling continues to work.
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => choose(index)}
                  className={cn(
                    'flex cursor-pointer items-center justify-between gap-3 rounded-md px-3 py-2.5 text-body-sm transition-colors',
                    isHighlighted ? 'bg-brand-500/15 text-content-primary' : 'text-content-secondary',
                    isSelected && 'font-medium text-brand-200'
                  )}
                >
                  <span>{opt.label}</span>
                  {isSelected && (
                    <svg className="h-4 w-4 shrink-0 text-brand-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {error && (
        <p id={errorId} className="text-caption text-status-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
