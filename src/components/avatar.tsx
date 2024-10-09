/**
 * @file avatar.tsx
 * @overview An image element with a fallback for representing the user.
 * @license https://github.com/tailfront/elements/blob/main/LICENSE
 * @example

  import {
  Avatar,
  AvatarFallback,
  AvatarImage
  } from "@/components/avatar"

  <Avatar>
    <AvatarImage
    src="https://avatars.githubusercontent.com/u/173272923?s=200&v=4"
    alt="@tailfront"
    />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>

 * @npm i react
 * @npm i --save-dev @types/react
 * @npm i @radix-ui/react-avatar
 * @npm i clsx
 * @npm i tailwind-merge
 */

import * as AvatarPrimitive from '@radix-ui/react-avatar';
import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={twMerge(
      clsx(
        'w-full',
        className
      )
    )}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={twMerge(
      clsx(
        'text-sm text-type-400 font-medium',
        className,
      ),
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={twMerge(
      clsx(
        'flex justify-center items-center bg-container-100 aspect-square rounded-full overflow-hidden',
        'w-10', // Default size
        className,
      ),
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

export { AvatarFallback, AvatarImage, Avatar };
