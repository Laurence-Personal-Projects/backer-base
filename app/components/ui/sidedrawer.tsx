'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { X } from 'lucide-react';
import React from 'react';
import clsx from 'clsx';

type SideDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
};

const SideDrawer = ({ open, onOpenChange, children }: SideDrawerProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 z-50" />

        <Dialog.Title asChild>
            <VisuallyHidden>Menu</VisuallyHidden>
        </Dialog.Title>

        <Dialog.Content
          className={clsx(
            'z-[100] fixed top-0 right-0 h-full w-[80%] max-w-[300px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out',
            open ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex justify-end p-4">
            <Dialog.Close asChild>
              <button
                aria-label="Close"
                className="text-gray-700 hover:text-red-500 transition"
              >
                <X className="w-6 h-6" />
              </button>
            </Dialog.Close>
          </div>

          <div className="p-4">{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default SideDrawer;
