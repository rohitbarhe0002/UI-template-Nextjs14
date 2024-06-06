"use client";
import { useState } from "react";
import Link from "next/link";
import MainPage from "./components/MainPage/page";
import Landingscreen from "./components/Landingscreen/page";



export default function Home() {
  const [showText, setShowText] = useState(true);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
    setShowText(!showText); // Toggle the text visibility
    if(sidebarVisible === true){

    }
  };

  return (
   <div>
    <Landingscreen></Landingscreen>
   </div>
  );
}
