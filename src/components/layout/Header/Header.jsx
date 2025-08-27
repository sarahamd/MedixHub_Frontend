"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "@public/assets/images/logo.png";
import Image from "next/image";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 ">

      <div className="container">
        <div className=" px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="">
              <Image src={logo} alt="logo" />
            </div>

            <div className="hidden md:flex  md:justify-center md:items-center md:gap-2.5">
              <Link
                href="/"
                className="text-[18px] text-[#404040] capitalize font-medium hover:text-primary underline"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-[18px] text-[#404040] capitalize font-medium hover:text-indigo-700 "
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-[18px] text-[#404040] capitalize font-medium hover:text-indigo-700 "
              >
                Services
              </Link>
              <Link
                href="/blog"
                className="text-[18px] text-[#404040] capitalize font-medium hover:text-indigo-700 "
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-[18px] text-[#404040] capitalize font-medium hover:text-indigo-700 "
              >
                Contact
              </Link>
            </div>

            <div className="hidden md:flex md:justify-center md:items-center md:gap-3">
              <button className="w-[150px] h-[40px]  py-2  rounded-[8px] bg-[#4200FF] font-medium text-[16px] text-white">
                Login
              </button>
              <button className="w-[150px] h-[40px] py-2 rounded-[8px] bg-transparent border border-sky-500 font-medium text-[16px] text-[#4200ff]">
                Sign Up
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md hover:bg-gray-100"
              >
                {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-40"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg p-6 flex flex-col space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold text-indigo-600">Menu</h2>
              <Link href="/" className="" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link
                href="/services"
                className=""
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link href="/blog" className="" onClick={() => setIsOpen(false)}>
                Blog
              </Link>
              <Link
                href="/contact"
                className=""
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-4 border-t flex flex-col space-y-3">
                <button className="px-4 py-2 border rounded-lg hover:bg-indigo-50">
                  Login
                </button>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
