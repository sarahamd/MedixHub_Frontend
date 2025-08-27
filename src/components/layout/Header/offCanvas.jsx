"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left Section - Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-indigo-600">
            LOGO
          </div>

          {/* Center Section - Links (hidden on mobile) */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-indigo-600">
              Home
            </Link>
            <Link href="/about" className="hover:text-indigo-600">
              About
            </Link>
            <Link href="/services" className="hover:text-indigo-600">
              Services
            </Link>
            <Link href="/blog" className="hover:text-indigo-600">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-indigo-600">
              Contact
            </Link>
          </div>

          {/* Right Section - Buttons (hidden on mobile) */}
          <div className="hidden md:flex space-x-4">
            <button className="px-4 py-2 border rounded-lg hover:bg-indigo-50">
              Login
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-40" onClick={() => setIsOpen(false)}>
          <div
            className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg p-6 flex flex-col space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-indigo-600">Menu</h2>
            <Link href="/" className="hover:text-indigo-600" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="hover:text-indigo-600" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/services" className="hover:text-indigo-600" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link href="/blog" className="hover:text-indigo-600" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
            <Link href="/contact" className="hover:text-indigo-600" onClick={() => setIsOpen(false)}>
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
    </nav>
  );
}
