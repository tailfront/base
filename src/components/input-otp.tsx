/**
 * @file popover.tsx
 * @overview Accessible one-time password component with copy paste functionality.
 * @license https://github.com/tailfront/elements/blob/main/LICENSE
 * @example
 * @npm i react
 * @npm i --save-dev @types/react
 * @npm i clsx
 * @npm i tailwind-merge
 * @npm i input-otp
 */

import clsx from 'clsx';
import { OTPInput, OTPInputContext } from 'input-otp';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={twMerge(
      clsx(
        'flex items-center gap-2 has-[:disabled]:opacity-50',
        containerClassName,
      ),
    )}
    className={twMerge(clsx('disabled:cursor-not-allowed', className))}
    {...props}
  />
));
InputOTP.displayName = 'InputOTP';

const InputOTPGroup = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={twMerge(clsx('flex items-center border squircle', className))}
    {...props}
  />
));
InputOTPGroup.displayName = 'InputOTPGroup';

const InputOTPSlot = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      ref={ref}
      className={twMerge(
        clsx(
          'relative flex size-9 px-3 py-2 bg-container-50 border-l last:border-r text-type-950 border-y text-sm first:rounded-l-lg last:rounded-r-lg',
          isActive && 'z-10 ring ring-accent-100',
          className,
        ),
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-container-50 duration-1000" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = 'InputOTPSlot';

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props} className="text-sm text-type-950">
    -
  </div>
));
InputOTPSeparator.displayName = 'InputOTPSeparator';

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot };
