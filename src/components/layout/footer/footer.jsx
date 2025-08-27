"use client";
import Link from "next/link";
import Pintrest from "../../../../public/assets/svgs/pintrest.svg";
import Instagram from "../../../../public/assets/svgs/insta.svg";
import Facebook from "../../../../public/assets/svgs/facebook.svg";
import Twitter from "../../../../public/assets/svgs/twitter.svg";
import Youtube from "../../../../public/assets/svgs/youtube.svg";
import EnglishIcon from "../../../../public/assets/svgs/english-icon.svg";
import Arrow from "../../../../public/assets/svgs/select-arrow.svg";
import { useState } from "react";
import paymob from "../../../../public/assets/images/paymob.png";
import Image from "next/image";
const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Eng"); // Default selected option

  const options = [
    { value: "option1", label: "Eng", icon: <EnglishIcon /> },
    { value: "option2", label: "Ar", icon: <EnglishIcon /> },
  ];
  return (
    <>
      <footer className="bg-white py-5 max-md:ps-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 text-left gap-y-3 lg:gap-y-0">
            <div className="flex flex-col">
              <h3 className="color-text fs-lg font-bold capitalize mb-3">
                Top Categories
              </h3>

              <ul className="flex  flex-col gap-2">
                <li className="fs-sm color-text-muted capitalize transition-all duration-300 hover:pl-2">
                  <Link href="/pregnant-postpartum">Pregnant & Postpartum</Link>
                </li>
                <li className="fs-sm color-text-muted capitalize transition-all duration-300 hover:pl-2">
                  <Link href="/milks-foods">Milks & Foods</Link>
                </li>
                <li className="fs-sm color-text-muted capitalize transition-all duration-300 hover:pl-2">
                  <Link href="/diapers-wipes">Diapers & Wipes</Link>
                </li>
                <li className="fs-sm color-text-muted capitalize transition-all duration-300 hover:pl-2">
                  <Link href="/infant">Infant</Link>
                </li>
                <li className="fs-sm color-text-muted capitalize transition-all duration-300 hover:pl-2">
                  <Link href="/eat-drink-supplies">Eat & Drink Supplies</Link>
                </li>
                <li className="fs-sm color-text-muted capitalize transition-all duration-300 hover:pl-2">
                  <Link href="/baby-fashion">Baby Fashion</Link>
                </li>
                <li className="fs-sm color-text-muted capitalize transition-all duration-300 hover:pl-2">
                  <Link href="/baby-out">Baby Out</Link>
                </li>
                <li className="fs-sm color-text-muted capitalize transition-all duration-300 hover:pl-2">
                  <Link href="/toys-study">Toys & Study</Link>
                </li>
                <li className="fs-sm color-text-muted capitalize transition-all duration-300 hover:pl-2">
                  <Link href="/stroller-crib-chair">Stroller, Crib, Chair</Link>
                </li>
                <li className="fs-sm color-text-muted capitalize transition-all duration-300 hover:pl-2">
                  <Link href="/washes-bath">Washes & Bath</Link>
                </li>
                <li className="fs-sm color-text-muted capitalize transition-all duration-300 hover:pl-2">
                  <Link href="/homewares">Homewares</Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h3 className="color-text fs-lg font-bold capitalize mb-3">
                Company
              </h3>
              <ul className="flex flex-col gap-2">
                <li className="fs-sm color-text-muted capitalize transition-all duration-300 hover:pl-2">
                  <Link href="/about-swatbabymall">About Swatbabymall</Link>
                </li>
                <li className="fs-sm color-text-muted capitalize transition-all duration-300 hover:pl-2">
                  <Link href="/contact">Contact</Link>
                </li>
                <li className="fs-sm color-text-muted capitalize transition-all duration-300 hover:pl-2">
                  <Link href="/career">Career</Link>
                </li>
                <li className="fs-sm color-text-muted capitalize transition-all duration-300 hover:pl-2">
                  <Link href="/blog">Blog</Link>
                </li>
                <li className="fs-sm color-text-muted capitalize transition-all duration-300 hover:pl-2">
                  <Link href="/sitemap">Sitemap</Link>
                </li>
                <li className="fs-sm color-text-muted capitalize transition-all duration-300 hover:pl-2">
                  <Link href="/store-locations">Store Locations</Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h3 className="color-text fs-lg font-bold capitalize mb-3">
                Help Center
              </h3>
              <ul className="flex flex-col gap-2">
                <li className="fs-sm color-text-muted capitalize transition-all duration-300 hover:pl-2">
                  <Link href="/customer-service">Customer Service</Link>
                </li>
                <li className="fs-sm color-text-muted capitalize transition-all duration-300 hover:pl-2">
                  <Link href="/policy">Policy</Link>
                </li>
                <li className="fs-sm color-text-muted capitalize transition-all duration-300 hover:pl-2">
                  <Link href="/terms-conditions">Terms & Conditions</Link>
                </li>
                <li className="fs-sm color-text-muted capitalize transition-all duration-300 hover:pl-2">
                  <Link href="/track-order">Track Order</Link>
                </li>
                <li className="fs-sm color-text-muted capitalize transition-all duration-300 hover:pl-2">
                  <Link href="/faqs">FAQs</Link>
                </li>
                <li className="fs-sm color-text-muted capitalize transition-all duration-300 hover:pl-2">
                  <Link href="/my-account">My Account</Link>
                </li>
                <li className="fs-sm color-text-muted capitalize transition-all duration-300 hover:pl-2">
                  <Link href="/product-support">Product Support</Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="color-text fs-lg font-bold capitalize mb-3">
                Subscribe & Get <span className="color-primary">10%</span> OFF
              </h3>
              <div className="relative h-[48px] w-3/4 md:w-1/2 lg:w-full">
                <input
                  type="email"
                  className="w-full h-full ps-1 rounded-[10px] bg-secondary border-border border-gray-300 focus:outline-none fs-sm max-sm:fs-xs"
                  placeholder="Enter your email "
                />
                <button className="absolute h-full right-0 mt-[3px] px-2 rounded-tr-[10px] rounded-br-[10px] bg-primary color-white hover:bg-primary focus:outline-none fs-sm transform top-1/2 -translate-y-1/2 max-sm:fs-xs">
                  Subscribe
                </button>
              </div>
              <p className="fs-sm color-text-muted">
                By subscribing, you accept the{" "}
                <Link
                  href="/"
                  className="underline font-bold capitalize color-text fs-sm"
                >
                  Privacy Policy
                </Link>
              </p>
              <div className="flex flex-col gap-2">
                <p className="fs-sm color-text">
                  {" "}
                  Hotline 24/7 :{" "}
                  <a className="color-primary fs-sm font-bold">
                    {" "}
                    (+325) 3686 25 16{" "}
                  </a>{" "}
                </p>
                <p className="fs-sm color-text">
                  {" "}
                  Work Hours :{" "}
                  <span className="color-primary fs-sm font-bold">
                    {" "}
                    Monday-Saturday: 9.00am - 5.00pm
                  </span>{" "}
                </p>
                <p className="fs-sm color-text">
                  {" "}
                  Mail :{" "}
                  <a className="color-primary fs-sm font-bold">
                    {" "}
                    contact@swatbabymall.com{" "}
                  </a>{" "}
                </p>
              </div>
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-secondary flex justify-center items-center hover:cursor-pointer">
                  <Twitter />
                </div>
                <div className="w-6 h-6 rounded-full bg-secondary flex justify-center items-center hover:cursor-pointer">
                  <Facebook />
                </div>
                <div className="w-6 h-6 rounded-full bg-secondary flex justify-center items-center hover:cursor-pointer">
                  <Instagram />
                </div>
                <div className="w-6 h-6 rounded-full bg-secondary flex justify-center items-center hover:cursor-pointer">
                  <Youtube />
                </div>
                <div className="w-6 h-6 rounded-full bg-secondary flex justify-center items-center hover:cursor-pointer">
                  <Pintrest />
                </div>
              </div>
            </div>
          </div>
          {/* SECOND ROW */}
          <div className="w-1/2 mt-5 flex justify-between items-center max-sm:w-full">
            <div className="w-16 py-2">
              <div className={`relative w-full `}>
                <button
                  className="fs-sm bg-white py-1  px-3 rounded-md border border-border outline-none w-full shadow-md flex justify-between items-center transition-all duration-300 ease-in-out"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {selected}
                  <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none ">
                    <Arrow />
                  </span>
                </button>

                {isOpen && (
                  <div className="absolute left-0 w-full bg-white shadow-md rounded-md mt-1 border border-border z-10">
                    {options.map(({ icon, label, value }) => (
                      <button
                        key={value}
                        className="w-full fs-sm text-left p-1 hover:bg-gray-100 transition-all"
                        onClick={() => {
                          setSelected(label);
                          setIsOpen(false);
                        }}
                      >
                        {icon ? (
                          <div className="flex justify-evenly items-center gap-2">
                            <span>{label}</span>

                            <span className="">{icon}</span>
                          </div>
                        ) : (
                          <span>{label}</span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div>
              <Image
                width={1000}
                height={1000}
                src={paymob}
                alt="paymob image"
                className="w-10"
              />
            </div>
          </div>
          {/* THIRD ROW */}
          <div className="w-full flex justify-center border-t border-t-border mt-5 items-center">
            <p className="color-text-muted fs-sm py-2">
              © 2025 <span className="font-bold color-text">Invokers</span> .
              All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
