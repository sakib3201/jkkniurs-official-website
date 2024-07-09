"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const pages = [
  { name: "Home", href: "/" },
  { name: "Articles", href: "#" },
  { name: "Event", href: "#" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "#" },
];

const loginPage = { name: "Log in", href: "#" };

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  const isLinkActive = (path) => {
    return path === pathname;
  };

  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href={pages[0].href} className="-m-2.5">
              <div className="flex flex-col">
                <Image
                  className="h-8 w-auto"
                  src="logo/jkkniursLogo-cropped.svg"
                  alt="Logo"
                  width={32}
                  height={32}
                />
                <div className="text-center">
                  <h1 className="text-[12px] font-bold">JKKNIU</h1>
                  <p className="-mt-1 text-[5px] font-bold">Research Society</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Hamburger Menu */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon
                className="h-6 w-6 hover:text-red-400"
                aria-hidden="true"
              />
            </button>
          </div>

          {/* Navigation Page Names */}
          <div className="hidden lg:flex lg:gap-x-20">
            {pages.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`underline-effect text-lg leading-6 ${isLinkActive(item.href) ? "active-link" : ""}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Log in -> */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href={loginPage.href}>
              <button
                type="button"
                className="relative rounded-full bg-red-400 px-5 py-2 text-center text-sm font-bold text-white hover:bg-[#264653] active:bg-[#264653]"
              >
                {loginPage.name}
              </button>
            </Link>
          </div>
        </nav>

        {/* Navigation Bar */}
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black bg-opacity-70 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
          />
          <div className="fixed inset-0 z-50">
            <DialogPanel
              transition
              className="pointer-events-auto fixed inset-y-0 right-0 z-50 w-full max-w-md transform overflow-y-auto bg-white px-6 py-6 transition duration-500 ease-in-out data-[closed]:translate-x-full sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 sm:duration-700"
            >
              <div className="flex items-center justify-between">
                <Link
                  href={pages[0].href}
                  className="-m-2.5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex flex-col">
                    <Image
                      className="h-8 w-auto"
                      src="logo/jkkniursLogo-cropped.svg"
                      alt="Logo"
                      width={32}
                      height={32}
                    />
                    <div className="text-center">
                      <h1 className="text-[12px] font-bold">JKKNIU</h1>
                      <p className="-mt-1 text-[5px] font-bold">
                        Research Society
                      </p>
                    </div>
                  </div>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <XMarkIcon
                    className="h-6 w-6 hover:text-red-400"
                    aria-hidden="true"
                  />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {pages.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-red-400 hover:text-white ${isLinkActive(item.href) ? "bg-red-400 text-white" : ""}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <Link
                      href={loginPage.href}
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-red-400 hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {loginPage.name}
                    </Link>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </header>
    </div>
  );
}
