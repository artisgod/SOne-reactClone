import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../i18n";
import logo from "../../assets/images/SOne_index_logo.png";
import th from "../../assets/images/SOne_index_iconthai.jpg";
import th2 from "../../assets/images/SOne_index_iconthai2.jpg";
import en from "../../assets/images/SOne_index_iconeng.jpg";
import en2 from "../../assets/images/SOne_index_iconeng2.jpg";
import menuBtn from "../../assets/images/SOne_index_menu01.png"
import menuBtn2 from "../../assets/images/SOne_index_menu02.png"
import fb from "../../assets/images/SOne_index_btfacebook1.png"
import fb2 from "../../assets/images/SOne_index_btfacebook.png"
import tw from "../../assets/images/SOne_index_bttwitter1.png"
import tw2 from "../../assets/images/SOne_index_bttwitter.png"
import yt from "../../assets/images/SOne_index_btyoutube1.png"
import yt2 from "../../assets/images/SOne_index_btyoutube.png"
import search1 from "../../assets/images/SOne_index_btsearch.jpg"
import mMenu from "../../assets/images/SOne_Mobile_menu.png"
import mMenuho from "../../assets/images/SOne_Mobile_menuho.png"
import { Link, useNavigate, useLocation } from "react-router-dom";


export default function Header() {

    const { t, i18n } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();

    const [hoveredItem, setHoveredItem] = useState(null)

    const [moMenu, setMoMenu] = useState(mMenu)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menuItems = [
        { path: "/", label: "Products & Services" },
        { path: "/promotions", label: "Promotions" },
        { path: "/newsevents", label: "News & Events" },
        { path: "/safetytips", label: "Safety Tips" },
        { path: "/faqs", label: "FAQs" },
        { path: "/location", label: "Location" },
    ];

    const handleHover = (item) => setHoveredItem(item);
    const handleLeave = () => setHoveredItem(null);

    const socialItems = [
        { name: "fb", defaultIcon: fb2, hoveredIcon: fb },
        { name: "tw", defaultIcon: tw2, hoveredIcon: tw },
        { name: "yt", defaultIcon: yt2, hoveredIcon: yt },
    ];

    const PageMenu = () => {
        return <ul className="flex gap-2 flex-col md:flex-row lg:gap-8 text-sm">
            {menuItems.map(({ path, label }) => (
                <Link
                    key={path}
                    to={path}
                    className={`flex gap-1 whitespace-nowrap items-center 
                        ${location.pathname === path ? "text-orange-500" : "text-white hover:text-orange-500 group"}`}
                >
                    <img
                        src={location.pathname === path ? menuBtn2 : menuBtn}
                        alt="Menu Icon"
                        className="w-6 h-6 transition-all duration-300 group-hover:hidden"
                    />
                    <img
                        src={menuBtn2}
                        alt="Menu Icon Hover"
                        className="w-6 h-6 hidden transition-all duration-300 group-hover:block"
                    />
                    {label}
                </Link>
            ))}
        </ul >
    }

    return (
        <div className="flex flex-col w-full">
            <div className="mx-auto w-full flex justify-between items-center">
                <img onClick={() => navigate("/")} src={logo} />
                <div className="flex-col  text-sm items-end flex gap-2">
                    <div className="flex gap-1">
                        <img
                            className="cursor-pointer"
                            src={t("lang") === "th" ? th : th2}
                            onClick={() => i18n.changeLanguage("th")}
                        />
                        <img
                            className="cursor-pointer"
                            src={t("lang") === "en" ? en : en2}
                            onClick={() => i18n.changeLanguage("en")}
                        />
                    </div>
                    <div className="hidden md:flex">
                        <input type="text" className="border focus:outline-none border-orange-500 p-1" placeholder={t("search")} />
                        <img
                            className="cursor-pointer border border-l-none border-orange-500 w-8"
                            src={search1}
                        />
                    </div>
                    <div className="hidden md:flex gap-1">
                        <a href="#" className="hover:text-orange-500">About S-ONE</a>|
                        <a href="#" className="hover:text-orange-500">Job Opportunity</a>|
                        <a href="#" className="hover:text-orange-500">Contact Us</a>|
                        <a href="#" className="hover:text-orange-500">Site Map</a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full gap-1 md:hidden">
                <a href="#" className="hover:text-orange-500">About S-ONE</a>|
                <a href="#" className="hover:text-orange-500">Job Opportunity</a>
            </div>
            <div className="flex justify-center w-full gap-1 md:hidden">
                <a href="#" className="hover:text-orange-500">Contact Us</a>|
                <a href="#" className="hover:text-orange-500">Site Map</a>
            </div>
            <div className="flex w-full md:hidden p-1">
                <input type="text" className="border w-full border-orange-500 p-1" placeholder="Search..." />
                <img
                    className="cursor-pointer border border-l-none border-orange-500 w-8"
                    src={search1}
                />
            </div>

            <div className="flex flex-col w-full bg-black rounded md:hidden p-1">
                <div className="flex w-full justify-between">
                    <div className="flex items-center gap-1 pl-1 justify-center">
                        {socialItems.map(({ name, defaultIcon, hoveredIcon }) => (
                            <img
                                key={name}
                                className="cursor-pointer"
                                src={hoveredItem === name ? hoveredIcon : defaultIcon}
                                onMouseEnter={() => handleHover(name)}
                                onMouseLeave={handleLeave}
                                alt={name}
                            />
                        ))}
                    </div>
                    <div
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        onMouseEnter={() => setMoMenu(mMenuho)}
                        onMouseLeave={() => setMoMenu(mMenu)}
                        className="w-auto ml-1">
                        <img
                            className="cursor-pointer w-10"
                            src={moMenu}
                        />
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="border-t pt-1 mt-1 border-orange-500">
                        <PageMenu />
                    </div>
                )}
            </div>
            <div className="hidden md:flex rounded bg-black p-2 justify-between">
                <PageMenu />
                <div className="flex items-center gap-1 justify-center">
                    {socialItems.map(({ name, defaultIcon, hoveredIcon }) => (
                        <img
                            key={name}
                            className="cursor-pointer"
                            src={hoveredItem === name ? hoveredIcon : defaultIcon}
                            onMouseEnter={() => handleHover(name)}
                            onMouseLeave={handleLeave}
                            alt={name}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
