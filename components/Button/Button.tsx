import { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import styles from './styles.module.css';
import type { ButtonProps } from './types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled = false,
      fullWidth = false,
      className,
      ...props
    },
    ref,
  ) => {
    const buttonClasses = cn(
      styles.button,
      styles[variant],
      styles[size],
      fullWidth && styles.fullWidth,
      isLoading && styles.loading,
      className,
    );

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <div className={styles.spinner} />}
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
