"use client";

import React from "react";
import { 
  Instagram, 
  Facebook, 
  Mail,
  PinIcon
} from "lucide-react";
import { Layout, LayoutColumn } from "@/components/Layout";
import { LocalizedLink } from "@/components/LocalizedLink";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-grayscale-50 py-8 md:py-20" aria-label="Site Footer">
      <Layout>
        <LayoutColumn className="col-span-13">
          <div className="flex max-lg:flex-col justify-between md:gap-20 max-md:px-4">
            {/* Logo and Social Links Section */}
            <div className="flex flex-1 max-lg:w-full max-lg:order-2 max-sm:flex-col justify-between sm:gap-30 lg:gap-20 md:items-start">
              {/* Brand Section */}
              <div className="max-w-35 md:flex-1 max-md:mb-9">
                <h1 className="text-lg md:text-xl mb-2 md:mb-6 !leading-[0.9]">
                  Charandhul
                </h1>
                <p className="text-xs text-gray-600">
                  Crafting timeless beauty with traditional brass and copper artistry.
                </p>
                <p className="text-xs mt-4">
                  &copy; {currentYear}, Charandhul. All rights reserved.
                </p>
              </div>

              {/* Links Grid */}
              <div className="flex gap-10 xl:gap-18 max-md:text-xs flex-1 justify-between lg:justify-center">
                {/* Help Links */}
                <div role="navigation" aria-label="Help links">
                  <h2 className="text-sm font-medium mb-4">Help</h2>
                  <ul className="flex flex-col gap-6 md:gap-3.5">
                    <li>
                      <LocalizedLink href="/faq" className="hover:text-gray-900 transition-colors">
                        FAQ
                      </LocalizedLink>
                    </li>
                    <li>
                      <LocalizedLink href="/connect" className="hover:text-gray-900 transition-colors">
                        Connect
                      </LocalizedLink>
                    </li>
                    <li>
                      <LocalizedLink href="/refund-and-cancel" className="hover:text-gray-900 transition-colors">
                        Returns
                      </LocalizedLink>
                    </li>
                  </ul>
                </div>

                {/* Social Links */}
                <div role="navigation" aria-label="Social media links">
                  <h2 className="text-sm font-medium mb-4">Social</h2>
                  <ul className="flex flex-col gap-6 md:gap-3.5">
                    <li>
                      <a 
                        href="https://www.instagram.com/agiloltd/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-gray-900 transition-colors"
                        aria-label="Visit our Instagram page"
                      >
                        <Instagram className="w-4 h-4" />
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://pinterest.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-gray-900 transition-colors"
                        aria-label="Visit our Pinterest page"
                      >
                        <PinIcon className="w-4 h-4" />
                        Pinterest
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-gray-900 transition-colors"
                        aria-label="Visit our Facebook page"
                      >
                        <Facebook className="w-4 h-4" />
                        Facebook
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Legal Links */}
                <div role="navigation" aria-label="Legal links">
                  <h2 className="text-sm font-medium mb-4">Legal</h2>
                  <ul className="flex flex-col gap-6 md:gap-3.5">
                    <li>
                      <LocalizedLink href="/privacy-policy" className="hover:text-gray-900 transition-colors">
                        Privacy Policy
                      </LocalizedLink>
                    </li>
                    <li>
                      <LocalizedLink href="/cookie-policy" className="hover:text-gray-900 transition-colors">
                        Cookie Policy
                      </LocalizedLink>
                    </li>
                    <li>
                      <LocalizedLink href="/terms-of-use" className="hover:text-gray-900 transition-colors">
                        Terms of Use
                      </LocalizedLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="flex-1 max-lg:w-full lg:max-w-90 xl:max-w-96 max-lg:order-1 max-md:mb-16">
              <h2 className="text-sm font-medium mb-4">Contact Us</h2>
              <a 
                href="mailto:team@charandhul.com" 
                className="flex items-center gap-2 hover:text-gray-900 transition-colors mb-4"
              >
                <Mail className="w-4 h-4" />
                team@charandhul.com
              </a>
              <p className="text-xs text-gray-600">
                We&rsquo;re here to help! Contact us for any queries about our products or services.
              </p>
            </div>
          </div>
        </LayoutColumn>
      </Layout>
    </footer>
  );
};

export default Footer;