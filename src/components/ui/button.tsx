import cn from 'classnames';
import React, { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 'normal' | 'outline' | 'custom';
  size?: 'big' | 'medium'| 'medium2' | 'small';
  active?: boolean;
  loading?: boolean;
  disabled?: boolean;
}
const classes = {
  root: 'inline-flex items-center justify-center shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-teal-400',
  normal:
    'bg-teal-400 text-indigo-950 border border-transparent hover:bg-teal-500 hover:text-white',
  custom: 'border border-transparent',
  outline:
    'border-2 rounded-none bg-transparent text-body hover:text-light hover:bg-teal-400 hover:border-teal-400',
  loading:
    'h-4 w-4 ltr:ml-2 rtl:mr-2 rounded-full border-2 border-transparent border-t-2 animate-spin',
  disabled:
    'border border-teal-400 bg-teal-400 hover:bg-gray-300 border-border-400 text-body cursor-not-allowed',
  disabledOutline: 'border border-border-base text-muted cursor-not-allowed',
  small: 'px-3 py-0 h-9 text-sm h-10',
  medium: 'px-5 py-0 h-12',
  medium2: 'px-5 py-5 h-9',
  big: 'px-10 py-0 h-14',
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      className,
      variant= 'normal',
      size ='medium' ,
      children,
      active,
      loading = false,
      disabled = false,
      ...rest
    } = props;
    const classesName = cn(
      classes.root,
      {
        [classes.normal]: !disabled && variant === 'normal',
        [classes.disabled]: disabled && variant === 'normal',
        [classes.outline]: !disabled && variant === 'outline',
        [classes.disabledOutline]: disabled && variant === 'outline',
        [classes.small]: size === 'small',
        [classes.medium]: size === 'medium',
        [classes.medium2]: size === 'medium2',
        [classes.big]: size === 'big',
      },
      className
    );

    return (
      <button
        aria-pressed={active}
        data-variant={variant}
        ref={ref}
        className={classesName}
        disabled={disabled}
        {...rest}
      >
        {children}
        {loading && (
          <span
            className={classes.loading}
            style={{
              borderTopColor:
                variant === 'outline' ? 'currentColor' : '#ffffff',
            }}
          />
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;