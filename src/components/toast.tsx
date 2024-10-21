/**
 * @file toast.tsx
 * @overview A succinct message that is displayed temporarily.
 * @license https://github.com/tailfront/elements/blob/main/LICENSE
 * @example

  const ToastDemo = () => {
    const { toast } = useToast()
    return (
      <Button
        onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:58",
        })
      }}
    >
    Show Toast
    </Button>
    )
  }

 * @npm i react
 * @npm i --save-dev @types/react
 * @npm i clsx
 * @npm i tailwind-merge
 * @npm i @radix-ui/react-toast
 * @npm i class-variance-authority
 */

import * as ToastPrimitive from '@radix-ui/react-toast';
import { IconX } from '@tabler/icons-react';
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-center justif-center justify-between space-x-4 overflow-hidden border rounded-md px-2 py-2 ',
  {
    variants: {
      variant: {
        default: 'bg-container-50 text-type-950',
        destructive: 'border-red-100 bg-red-50 text-red-800',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

const ToastProvider = ToastPrimitive.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.ToastViewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.ToastViewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Viewport
    ref={ref}
    className={twMerge(
      'fixed top-0 flex max-h-screen flex-col p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col',
      className,
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitive.ToastViewport.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Action
    ref={ref}
    {...props}
    className={twMerge(
      clsx(
        'inline-flex items-center justify-center rounded-lg border px-3 text-sm font-medium',
        className,
      ),
    )}
  />
));
ToastAction.displayName = ToastPrimitive.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Close
    ref={ref}
    className={twMerge(
      clsx(
        'absolute right-1.5 top-0.5 rounded-md p-1 opacity-0 group-hover:opacity-100',
        className,
      ),
    )}
    {...props}
  >
    <IconX className="size-4 " />
  </ToastPrimitive.Close>
));
ToastClose.displayName = ToastPrimitive.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Title
    ref={ref}
    className={twMerge('text-sm font-medium font-sans', className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitive.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Description
    ref={ref}
    className={twMerge(clsx('text-xs opacity-50 font-normal', className))}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitive.Description.displayName;

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitive.Root
      ref={ref}
      className={twMerge(clsx(toastVariants({ variant }), className))}
      {...props}
    />
  );
});
Toast.displayName = ToastPrimitive.Root.displayName;

export {
  type ToastActionElement,
  type ToastProps,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  Toast,
};
