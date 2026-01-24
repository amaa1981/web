"use client";
import "react-phone-number-input/style.css";
import { useState } from "react";
import { Badge, Button } from "@/components/ui";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NAVIGATION_LINKS } from "@/lib/constants";
import ContactDialog from "@/components/layout/ContactDialog";
import Link from "next/link";

// Updated navigation to point to specific pages under AISolutions
const navigation = [
  { name: "About Us", href: "/#about" },
  { name: "AI Hygiene Monitoring", href: "/AISolutions/food-hygiene" },
  { name: "AI Chatbot", href: "/AISolutions/chatbots" },
  { name: "AI Industrial Safety", href: "/AISolutions/industrial-safety" },
  // { name: "Services", href: "/#services" },
  // { name: "Products", href: "/#products" },
];

export default function HeaderContactButton() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav
        aria-label="Global"
        role="navigation"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">OpenCode</span>
            <img
              alt="OpenCode Solutions Logo"
              src="/images/opencode-logo-black.svg"
              className="w-auto h-8 sm:h-10 md:h-12"
            />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex lg:gap-x-12">
          <ul className="flex gap-x-12">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-md font-semibold text-gray-900 hover:text-[#13787F] transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button size="medium" onClick={() => setOpen(true)}>
            Contact Us
          </Button>
        </div>
        <ContactDialog open={open} onClose={() => setOpen(false)} />
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10 bg-black/20 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="-m-1.5 p-1.5">
              <span className="sr-only">OpenCode</span>
              <img
                alt="OpenCode Solutions Logo"
                src="/images/opencode-logo-black.svg"
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-500"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Button
                  size="small"
                  className="w-full"
                  onClick={() => {
                    setOpen(true);
                    setMobileMenuOpen(false);
                  }}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}