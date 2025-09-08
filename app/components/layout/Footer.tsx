'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Footer = () => {
  const pathname = usePathname();

  //navigation links
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#be-a-backer', label: 'Be A Backer' },
    { href: '#the-base', label: 'The Base' },
    { href: '#organization', label: 'Organization' },
    { href: '/contact-us', label: 'Contact Us', isHighlight: true },
  ];

  // Active route check
  const isActive = (href: string) => pathname === href;

  return (
    <footer className="w-full border-dashed border-[#fff] border-t-[3px] px-[24px] pb-[24px] pt-[60px] lg:pt-[160px]">
      <div className="wrapper">

        <div className="flex justify-between flex-wrap w-full gap-[60px] md:gap-0">

          {/* Footer Nav */}
          <div className="w-full md:w-[33%] animate__animated is_animate" data-animation="animate__fadeInUp" data-delay="0">
            <ul className="flex flex-col w-full gap-[16px] md:gap-[24px]">
              {navLinks.map((link, index) => {
                const baseClasses = 'text-primary linear duration-300 hover:text-red-orange';
                const textSize = link.isHighlight ? 'text-[16px] md:text-[32px]' : 'text-[16px] md:text-[20px]';
                const font = link.isHighlight ? 'font-normal md:font-bold' : '';
                const spacing = link.isHighlight ? 'md:mt-[24px]' : '';

                return (
                  <li className={`w-full ${spacing}`} key={index}>
                    <Link
                      href={link.href}
                      className={`${baseClasses} ${textSize} ${font} ${isActive(link.href) ? 'text-red-orange' : ''}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-[33%] md:text-center animate__animated is_animate" data-animation="animate__fadeInUp" data-delay="0.3">
            <h4 className="text-white text-[28px] font-bold md:text-[32px] mb-[16px] md:mb-[24px]">Follow Us</h4>
            <a
              href="mailto:backerbase@studio.com"
              className="inline-block text-white text-[16px] md:text-[20px] linear hover:text-red-orange duration-300"
            >
              backerbase@studio.com
            </a>

            <ul className="mt-[16px] md:mt-[60px] flex md:justify-center flex-wrap gap-[16px]">
              {[
                { href: 'https://instagram.com', img: '/images/instagram.png', alt: 'instagram' },
                { href: 'https://facebook.com', img: '/images/facebook.png', alt: 'facebook' },
                { href: 'https://twitter.com', img: '/images/twitter-x.png', alt: 'twitter-x' },
              ].map((social, index) => (
                <li key={index}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[24px] md:w-[40px] block"
                  >
                    <img src={social.img} alt={social.alt} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Slogan */}
          <div className="w-full md:w-[33%] md:text-right flex flex-col gap-[24px] pl-0 md:pl-[24px] animate__animated is_animate" data-animation="animate__fadeInUp" data-delay="0.6">
            <h4 className="text-white text-[24px] font-bold md:text-[32px]">
              Empowering Dreamers, <br />
              One Backer at A Time.
            </h4>
            <p className="text-[16px] md:text-[20px] text-white">
              A Dynamic Platform Connecting <br />
              Dreams with Individual & <br />
              Corporate Support.
            </p>
          </div>

        </div>

        <div className="w-full animate__animated is_animate" data-animation="animate__fadeIn" data-delay="0.6">
          {/*Copyright and Legal Page Links */}
          <ul className="flex lg:justify-between flex-wrap items-center w-full gap-y-[16px] lg:gap-y-[60px] text-white mt-[60px] lg:mt-[130px]">
            <li className='w-full lg:w-[33%]'>
              <p className='text-[16px] lg:text-[20px]'>&copy; 2025 BackerBase. All Rights Reserved.</p>
            </li>
            <li className='w-full lg:w-[33%] lg:text-center'>
              <Link
                href="/terms-and-conditions"
                className={`text-[16px] lg:text-[20px] linear duration-300 hover:text-red-orange ${
                  pathname === '/terms-and-conditions' ? 'text-red-orange' : ''
                }`}
              >
                Terms & Conditions
              </Link>
            </li>
            <li className='w-full lg:w-[33%] lg:text-right'>
              <Link
                href="/privacy-policy"
                className={`text-[16px] lg:text-[20px] linear duration-300 hover:text-red-orange ${
                  pathname === '/privacy-policy' ? 'text-red-orange' : ''
                }`}
              >
                Privacy Policy
              </Link>
            </li>
          </ul>

          {/*Footer Logo*/}
          <Link href="/" className='max-w-full w-full relative mt-[60px] lg:mt-[80px] block'>
            <img src="images/footer-logo-big-@2x.webp"/>
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
