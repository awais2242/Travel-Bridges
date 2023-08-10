import React, { TextareaHTMLAttributes } from 'react';
import cn from 'classnames';

export interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  inputClassName?: string;
  label?: string;
  name: string;
  error?: string;
  shadow?: boolean;
  variant?: 'normal' | 'solid' | 'outline';
}

const variantClasses = {
  normal:
    'bg-gray-100 border border-border-base focus:shadow focus:bg-light focus:border-accent',
  solid:
    'bg-gray-100 border border-border-100 focus:bg-light focus:border-accent',
  outline: 'border border-teal-400 placeholder-white focus:border-teal-500',
};

const TextArea = React.forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  const {
    className,
    label,
    name,
    error,
    variant = 'normal',
    shadow = false,
    inputClassName,
    ...rest
  } = props;
  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={name}
          className="block text-body-dark font-semibold text-sm leading-none mb-3"
        >
          {label}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        className={cn(
          'px-4 py-3 flex items-center bg-indigo-600 border border-teal-400 w-full rounded-md appearance-none transition duration-300 ease-in-out text-white text-sm focus:outline-none focus:ring-0',
          shadow && 'focus:shadow',
          variantClasses[variant],
          inputClassName
        )}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        rows={4}
        ref={ref}
        {...rest}
      />
      {error && <p className="my-2 text-xs text-red-500">{error}</p>}
    </div>
  );
});
TextArea.displayName = 'TextArea';
export default TextArea;
