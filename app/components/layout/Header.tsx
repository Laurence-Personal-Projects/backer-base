'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AnchorButton from '@/app/components/ui/anchorbutton';
import SideDrawer from '@/app/components/ui/sidedrawer';
import { Menu } from 'lucide-react';

const Header = () => {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Navigation links config  
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#be-a-backer', label: 'Be A Backer' },
    { href: '#the-base', label: 'The Base' },
    { href: '/', image: '/images/main-logo-@2x.webp' },
    { href: '#organization', label: 'Organization' },
    { href: '/sign-up', label: 'Sign Up', isAnchorBtn: true },
  ];

  // Mobile menu links config
  const mobileMenu = [
    { href: '/', label: 'Home' },
    { href: '#be-a-backer', label: 'Be A Backer' },
    { href: '#the-base', label: 'The Base' },
    { href: '#organization', label: 'Organization' },
  ];

  // Active route check  
  const isActive = (href: string) => pathname === href;

  return (
    <header className="w-full px-[24px] py-[24px] sticky top-0 z-[99] backdrop-blur-sm mb-[-72px] md:mb-[-80px] lg:mb-[-120px]">
      <div className="w-full max-w-[1170px] mx-auto p-0">
        {/* Desktop */}
        <div className="w-full hidden lg:flex flex-wrap gap-[24px] xl:gap-[60px] justify-center items-center">
          {navLinks.map((link, index) => {
            if (link.image) {
              return (
                <Link key={index} href={link.href}>
                  <img
                    src={link.image}
                    alt="Main Logo"
                    className="max-w-full w-[180px] md:w-[200px] xl:w-[270px]"
                  />
                </Link>
              );
            }

            if (link.isAnchorBtn) {
              return (
                <AnchorButton
                  key={index}
                  href={link.href}
                  variant="transparent_white"
                  additionalClassName={`py-[12px] px-[24px] md:py-[16px] md:px-[40px] flex items-center justify-center uppercase font-bold ${
                    isActive(link.href)
                      ? 'bg-[#FBFBE6] text-[#1E1E1E] border-[#FBFBE6]'
                      : ''
                  }`}
                >
                  {link.label}
                </AnchorButton>
              );
            }

            return (
              <Link
                key={index}
                href={link.href}
                className={`text-primary font-bold duration-300 linear hover:text-red-orange ${
                  isActive(link.href) ? 'text-red-orange' : ''
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile */}
        <div className="w-full lg:hidden flex justify-between items-center">
          <Link href="/">
            <img
              src="/images/main-logo-@2x.webp"
              alt="Main Logo"
              className="max-w-full w-[160px] md:w-[200px] xl:w-[270px]"
            />
          </Link>

          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="text-primary"
          >
            <Menu className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]" />
          </button>
        </div>

        <SideDrawer open={drawerOpen} onOpenChange={setDrawerOpen}>
          <div className="w-full flex justify-between flex-col min-h-[90vh] pb-[24px]">
            <nav className="flex flex-col space-y-4">
            {mobileMenu.map((link, index) => {

                return (
                  <Link
                    key={index}
                    href={link.href}
                    className={`font-bold duration-300 linear hover:text-red-orange ${
                      isActive(link.href) ? 'text-red-orange' : 'text-gray-black'
                    }`}
                    onClick={() => setDrawerOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <AnchorButton
              href="/sign-up"
              additionalClassName="mt-[24px] py-[12px] px-[24px] md:py-[16px] md:px-[40px] flex items-center justify-center uppercase font-bold w-full bg-[#F1CDE5] text-[#1E1E1E] border border-[#F1CDE5] hover:bg-transparent hover:text-[#F1CDE5] hover:border-[#F1CDE5] transition duration-300 linear"
            >
              Sign Up
            </AnchorButton>
          </div>
        </SideDrawer>
      </div>
    </header>
  );
};

export default Header;
