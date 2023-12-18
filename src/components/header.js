import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/img/logo.png";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="bg-dark-grey opacity-90 fixed top-0 w-full z-50">
        <div className="container">
          <div className="navbar">
            <div className="navbar-start">
              <div className="dropdown" ref={dropdownRef}>
                <div tabIndex={0} role="button" className="btn lg:hidden" onClick={handleDropdownClick}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <details
                      className="dropdown"
                      onClick={(e) => {
                        e.target.parentElement.parentElement.parentElement.removeAttribute("open");
                      }}
                    >
                      <summary>Services</summary>
                      <ul className="p-2">
                        <li>
                          <Link href="/residential">Residential</Link>
                        </li>
                        <li>
                          <Link href="/commercial">Commercial</Link>
                        </li>
                        <li>
                          <Link href="/smart-homes">Smart Homes</Link>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <Link href="/careers">Careers</Link>
                  </li>
                  <li>
                    <Link href="/testimonials">Testimonials</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <Link href="/">
                <Image src={logo} alt="visca electric" width="285" height="57" />
              </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-white text-base">
                <li>
                  <Link href="/" className="hover:bg-red">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:bg-red">
                    About
                  </Link>
                </li>
                <li>
                  <details
                    className="dropdown"
                    onClick={(e) => {
                      e.target.parentElement.parentElement.parentElement.removeAttribute("open");
                    }}
                  >
                    <summary>Services</summary>
                    <ul className="p-2 text-black w-56 rounded-none">
                      <li>
                        <Link href="/residential" className="hover:bg-red hover:text-white rounded-none">
                          Residential
                        </Link>
                      </li>
                      <li>
                        <Link href="/commercial" className="hover:bg-red hover:text-white rounded-none">
                          Commercial
                        </Link>
                      </li>
                      <li>
                        <Link href="/smart-homes" className="hover:bg-red hover:text-white rounded-none">
                          Smart Homes
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <Link href="/careers" className="hover:bg-red">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="hover:bg-red">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:bg-red">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
