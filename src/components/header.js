import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/img/hero-logo.png";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
    console.log("triggered");
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    const handleWindowClick = (e) => {
      handleClickOutside(e);
      document.querySelectorAll(".dropdown").forEach((dropdown) => {
        if (!dropdown.contains(e.target)) {
          // Click was outside the dropdown, close it
          dropdown.open = false;
        }
      });
    };
    // Check if running on the client-side before adding the event listener
    if (typeof window !== "undefined") {
      window.addEventListener("click", handleWindowClick);

      return () => {
        window.removeEventListener("click", handleWindowClick);
      };
    }
  }, []);

  return (
    <>
      <div className="bg-dark-grey opacity-90 fixed top-0 w-full z-50">
        <div className="container">
          <div className="navbar p-0 lg:p-2">
            <div className="navbar-start">
              <div className="dropdown" ref={dropdownRef}>
                <div
                  tabIndex={0}
                  role="button"
                  className="btn lg:hidden bg-transparent rounded-none"
                  onClick={handleDropdownClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ham"
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
                      <ul className="p-2 text-sm">
                        <li>
                          <Link href="/smart-homes">Smart Homes</Link>
                        </li>
                        <li>
                          <Link href="/residential">Residential</Link>
                        </li>
                        <li>
                          <Link href="/commercial">Commercial</Link>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <Link href="/portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link href="/careers">Careers</Link>
                  </li>
                  <li>
                    <Link href="/testimonials">Testimonials</Link>
                  </li>
                  <li>
                    <Link href="/offer">Current Specials</Link>
                  </li>
                  <li>
                    <details
                      className="dropdown"
                      onClick={(e) => {
                        e.target.parentElement.parentElement.parentElement.removeAttribute("open");
                      }}
                    >
                      <summary>Contact</summary>
                      <ul className="p-2 text-sm">
                        <li>
                          <Link href="/contact">Contact Info</Link>
                        </li>
                        <li>
                          <Link href="/request-a-quote">Request A Quote</Link>
                        </li>
                        <li>
                          <Link href="/request-service-call">Request Service Call</Link>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/viscaelectric/" target="_blank" className="hover:bg-red">
                      <FontAwesomeIcon className="insta" icon={faInstagram} />
                    </Link>
                  </li>
                </ul>
              </div>
              <Link href="/">
                <Image className="logo mt-2 mb-2 ml-2 lg:ml-0" src={logo} alt="visca electric" width="285" height="57" />
              </Link>
            </div>
            {/* Desktop */}
            <div className="navbar-end hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-white">
                <li>
                  <Link href="/" className="hover:bg-red active:bg-red">
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
                    <ul className="p-2 text-white w-56 rounded-none bg-black">
                      <li>
                        <Link href="/smart-homes" className="hover:bg-red hover:text-white rounded-none">
                          Smart Homes
                        </Link>
                      </li>
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
                    </ul>
                  </details>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:bg-red">
                    Portfolio
                  </Link>
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
                  <Link href="/offer" className="hover:bg-red">
                    Current Specials
                  </Link>
                </li>
                <li>
                  <details
                    className="dropdown"
                    onClick={(e) => {
                      e.target.parentElement.parentElement.parentElement.removeAttribute("open");
                    }}
                  >
                    <summary>Contact</summary>
                    <ul className="p-2 text-white w-56 rounded-none bg-black">
                      <li>
                        <Link href="/contact" className="hover:bg-red hover:text-white rounded-none">
                          Contact Info
                        </Link>
                      </li>
                      <li>
                        <Link href="/request-a-quote" className="hover:bg-red hover:text-white rounded-none">
                          Request A Quote
                        </Link>
                      </li>
                      <li>
                        <Link href="/request-service-call" className="hover:bg-red hover:text-white rounded-none">
                          Request Service Call
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <Link href="https://www.instagram.com/viscaelectric/" target="_blank" className="hover:bg-red">
                    <FontAwesomeIcon className="insta" icon={faInstagram} />
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
