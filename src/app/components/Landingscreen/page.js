"use client";
import { useState } from "react";
import Link from "next/link";
import MainPage from "../MainPage/page";

export default function Home() {
  const [showText, setShowText] = useState(true);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const toggleText = () => {
    setShowText(!showText);
  };

  return (
    <div className="flex h-screen">
      <div
        className={`w-64 bg-F0F0F0 border-r border-9D9D9D transition-transform duration-300 transform  ${
          sidebarVisible ? "md:block block" : "md:block hidden"

        }
        ${
          showText ? '' : 'hide_text'
        }
        
        `}
      >
        <div >
          <div className="flex justify-items-center items-center flex-col logo_wrapper">
            <img
              src="main_logo.png"
              alt="Profile Icon"
              className="h-5 w-5 mr-2 logo mb-3"
            />
            {showText ? (
              <>
                <h1>TEBI numbers</h1>
                <h1>12345678</h1>
                <div className="flex justify-items-center items-center py-2 px-4 bg-rgb(168 85 247) rounded-lg text-1C1919 hover:text-black transition duration-300 sideBarbtn">
                  <button className="com_button">Secure your data</button>
                </div>
              </>
            ) : (
              <div>
                <h1>TEBI </h1>
                <h1>uid</h1>
              </div>
            )}
          </div>
          {showText ? (
            <div className="flex justify-around p-5">
              <div>
                <img
                  src="settings-svgrepo-com 2.png"
                  alt="Profile Icon"
                  className="h-5 w-5 mr-2 logo"
                />
              </div>
              <div>
                <img
                  src="conversation 2.png"
                  alt="Profile Icon"
                  className="h-5 w-5 mr-2 logo"
                />
              </div>
              <div>
                <img
                  src="User_Card_ID.png"
                  alt="Profile Icon"
                  className="h-5 w-5 mr-2 logo"
                />
              </div>
            </div>
          ) : (
            <div className="flex justify-around p-5">
              <img
                src="Frame 2910.png"
                alt="Profile Icon"
                className="h-5 w-5 mr-2 logo_hide"
              />
            </div>
          )}

          <ul className="p-2">
            <li className="mb-2">
              <Link href="/">
                <div className="flex justify-items-center items-center py-2 px-4 rounded bg-F8F8F8 border border-transparent hover:border hover:border-9D9D9D hover:bg-yellow-300 text-1C1919 hover:text-black transition duration-300 sideBarbtn">
                  <img
                    src="../../Main Icon.png"
                    alt="Settings Icon"
                    className="h-8 w-8 mr-2"
                  />
                  {showText && <h3>Dashboard</h3>}
                </div>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/hr">
                <div className="flex justify-items-center items-center py-2 px-4 rounded bg-F8F8F8 border border-transparent hover:border hover:border-9D9D9D hover:bg-yellow-300 text-1C1919 hover:text-black transition duration-300 sideBarbtn">
                  <img
                    src="Users.png"
                    alt="Profile Icon"
                    className="h-5 w-5 mr-2"
                  />
                  {showText && <h3>HR</h3>}
                </div>
              </Link>
            </li>
            <li>
              <Link href="/crm">
                <div className="flex items-center py-2 px-4 rounded bg-F8F8F8 border border-transparent hover:border hover:border-9D9D9D hover:bg-yellow-300 text-1C1919 hover:text-black transition duration-300 sideBarbtn">
                  <img
                    src="CRM icon light theme.png"
                    alt="Settings Icon"
                    className="h-5 w-5 mr-2"
                  />
                  {showText && <h3>CRM</h3>}
                </div>
              </Link>
            </li>
            <li>
              <Link href="/finance">
                <div className="flex items-center py-2 px-4 rounded bg-F8F8F8 border border-transparent hover:border hover:border-9D9D9D hover:bg-yellow-300 text-1C1919 hover:text-black transition duration-300 sideBarbtn">
                  <img
                    src="Finance Icon light theme.png"
                    alt="Settings Icon"
                    className="h-5 w-5 mr-2"
                  />
                  {showText && <h3>Finance</h3>}
                </div>
              </Link>
            </li>
            <li>
              <Link href="/analytics">
                <div className="flex items-center py-2 px-4 rounded bg-F8F8F8 border border-transparent hover:border hover:border-9D9D9D hover:bg-yellow-300 text-1C1919 hover:text-black transition duration-300 sideBarbtn">
                  <img
                    src="Analytics Icon light theme.png"
                    alt="Settings Icon"
                    className="h-5 w-5 mr-2"
                  />
                  {showText && <h3>Analytics</h3>}
                </div>
              </Link>
            </li>
            <li>
              <Link href="/assetsControl">
                <div className="flex items-center py-2 px-4 rounded bg-F8F8F8 border border-transparent hover:border hover:border-9D9D9D hover:bg-yellow-300 text-1C1919 hover:text-black transition duration-300 sideBarbtn">
                  <img
                    src="Window_Check.png"
                    alt="Settings Icon"
                    className="h-5 w-5 mr-2"
                  />
                  {showText && <h3>assets control</h3>}
                </div>
              </Link>
            </li>
            <li>
              <Link href="/support">
                <div className="flex items-center py-2 px-4 rounded bg-F8F8F8 border border-transparent hover:border hover:border-9D9D9D hover:bg-yellow-300 text-1C1919 hover:text-black transition duration-300 sideBarbtn">
                  <img
                    src="Window_Check.png"
                    alt="Settings Icon"
                    className="h-5 w-5 mr-2"
                  />
                  {showText && <h3>Support</h3>}
                </div>
              </Link>
            </li>
          </ul>
          <div className="w-full text-end">
            <button
              onClick={toggleText}
              className="p-2 mt-4 bg-white rounded side_Ber_button"
            >
              <img
                src="../../arrow.png"
                alt="Settings Icon"
                className="h-8 w-8 mr-2"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 p-4">
        <div className="flex-1 p-4">
          <button
            onClick={toggleSidebar}
            className="p-2 mt-4 bg-white rounded md:hidden"
          >
            <img
              src="menu_btn-removebg-preview.png" // Replace with your hamburger icon
              alt="Menu Icon"
              className="h-8 w-8"
            />
          </button>
        </div>
        <MainPage />
      </div>
    </div>
  );
}
