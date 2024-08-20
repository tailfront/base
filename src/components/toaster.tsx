/**
 * @file accordion.tsx
 * @overview Sandbox of components.
 */

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/toast';
import { useToast } from './use-toast';

const Toaster = (): JSX.Element => {
  const { toasts } = useToast();
  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, ...props }) => {
        return (
          <Toast
            key={id}
            {...props}
            className={`py-2 ${description ? '' : 'h-[48px]'}`}
          >
            <div className={'grid w-[213px] h-12 p-1 gap-1 items-center'}>
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>

            <div className="flex w-[75px] h-[48px] gap-1 items-center">
              {action}
              <ToastClose />
            </div>
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
};

export { Toaster };
