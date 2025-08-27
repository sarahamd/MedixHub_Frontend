"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "@public/assets/images/logo.png";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import { Switch } from "@headlessui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const { locale } = useParams();
  const [enabled, setEnabled] = useState(false);

  const isActive = (path, pathName) => {
    return pathName === path ? "text-primary" : "text-[#404040]";
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 ">
      <div className="container  w-full max-w-full">
        <div className=" px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* logo */}
            <div className="">
              <Image src={logo} alt="logo" />
            </div>

            {/* links */}
            <div className="hidden lg:flex  md:justify-center md:items-center md:gap-2.5">
              <Link
                href="/"
                className={`${isActive(
                  `/${locale}`,
                  pathName
                )} text-[18px] capitalize font-medium hover:text-primary `}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`${isActive(
                  `/${locale}/about`,
                  pathName
                )} text-[18px] capitalize font-medium hover:text-primary `}
              >
                About
              </Link>
              <Link
                href="/services"
                className={`${isActive(
                  `/${locale}/services`,
                  pathName
                )} text-[18px] capitalize font-medium hover:text-primary `}
              >
                Services
              </Link>
              <Link
                href="/blogs"
                className={`${isActive(
                  `/${locale}/blogs`,
                  pathName
                )} text-[18px] capitalize font-medium hover:text-primary `}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className={`${isActive(
                  `/${locale}/contact`,
                  pathName
                )} text-[18px] capitalize font-medium hover:text-primary `}
              >
                Contact
              </Link>
            </div>

            {/* buttons */}
            <div className="hidden lg:flex md:justify-center md:items-center md:gap-3">
              <div className="flex justify-center gap-2 items-center">
                {/* Switch */}
                <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  className={`${
                    enabled ? "bg-indigo-600" : "bg-gray-300"
                  } relative inline-flex h-4 w-9 items-center rounded-full transition`}
                >
                  <span
                    className={`${
                      enabled ? "translate-x-5" : "translate-x-1"
                    } inline-flex h-3 w-3 transform items-center justify-center rounded-full bg-white shadow-lg transition`}
                  >
                    {enabled ? (
                      <FaMoon className="text-indigo-600" size={15} />
                    ) : (
                      <FaSun className="text-yellow-500" size={15} />
                    )}
                  </span>
                </Switch>
                <span>
                  <GrLanguage className="text-title" />
                </span>
              </div>
              <button className="w-[150px] h-[40px] rounded-[12px] bg-[#4200FF] font-medium text-[16px] text-white">
                Login
              </button>
            </div>

            {/* mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md hover:bg-gray-100"
              >
                {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
