'use client';

import * as RadixDialog from '@radix-ui/react-dialog';
import { ReactNode } from 'react';
import clsx from 'clsx';
import Button from '@/app/components/ui/button';
import {
  Info,
  OctagonAlert,
  TriangleAlert,
  X
} from 'lucide-react';

// Size config map and inferred type
const dialogSizeMap = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
} as const;

type DialogSize = keyof typeof dialogSizeMap;

// Dialog type config and inferred type
const dialogTypeMap = {
  none: '',
  info: 'info',
  danger: 'danger',
  warning: 'warning',
} as const;

type DialogType = keyof typeof dialogTypeMap;

type DialogProps = {
  title: string;
  trigger: ReactNode; // 👈 Slot for trigger (e.g. Button)
  children: ReactNode; // 👈 Slot for dialog content
  footer?: ReactNode; // 👈 Slot for footer content
  size?: DialogSize; // 👈 Size of the dialog, defaults to 'md'
  type?: DialogType; // 👈 Type of dialog for icon and button variant
};

const Dialog = ({
  title,
  trigger,
  children,
  footer,
  size = 'md',
  type = 'none',
}: DialogProps) => {
  // 👇 Icon render based on dialog type
  const renderIcon = () => {
    switch (type) {
      case 'info':
        return <Info className="text-white p-2.5 rounded-full w-10 h-10 mr-2 bg-blue-500" />;
      case 'danger':
        return <OctagonAlert className="text-white p-2.5 rounded-full w-10 h-10 mr-2 bg-red-500" />;
      case 'warning':
        return <TriangleAlert className="text-white p-2.5 rounded-full w-10 h-10 mr-2 bg-orange-500" />;
      default:
        return null;
    }
  };

  // 👇 Button variant based on dialog type
  const closeVariant =
    type === 'danger'
      ? 'danger'
      : type === 'warning'
      ? 'warning'
      : 'info';

  return (
    <RadixDialog.Root>
      <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>

      <RadixDialog.Portal>
        <RadixDialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
        <RadixDialog.Content
          className={clsx(
            'dialog fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6 w-[90vw]',
            dialogSizeMap[size]
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center text-xl font-bold">
              {renderIcon()}
              <RadixDialog.Title className="dialog-title font-semibold text-xl">{title}</RadixDialog.Title>
            </div>

            <RadixDialog.Close asChild>
              <button
                className="dialog-close-button text-gray-500 hover:text-black"
                aria-label="Close"
              >
                <X />
              </button>
            </RadixDialog.Close>

          </div>

          {/* Body */}
          <div className="dialog-content text-gray-700 mb-6">{children}</div>

          {/* Footer */}
          <div className="dialog-footer border-t pt-4 flex justify-between items-center gap-4">
            <div>{footer}</div>
            <RadixDialog.Close asChild>
              <Button variant={closeVariant}>Close</Button>
            </RadixDialog.Close>
          </div>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};

export default Dialog;
