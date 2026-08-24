"use client";

import { Menu, X } from "lucide-react";
import { allNavItems } from "../../lib/config";
import { useEffect, useState } from "react";
import { SwitchLang } from "./toggle-lang";
import { Messages, NamespaceKeys, useTranslations } from "next-intl";
import { Link, usePathname } from "@/src/i18n/navigation";
import Image from "next/image";

export function Header() {
  const pathname = usePathname();
  const t = useTranslations("Common.nav");

  const [isScroll, setIsScroll] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScroll(window.scrollY > 50);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // function handleClickOutside(e: MouseEvent) {
    //   const menu = document.getElementById("mobile-menu");
    //   if (menu && !menu.contains(e.target as Node)) setOpenMenu(false);
    // }

    // document.addEventListener("click", handleClickOutside);
    // return () => document.removeEventListener("click", handleClickOutside);
  }, [openMenu]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 text-foreground transition-all duration-300 ${isScroll ? "bg-[#2a2a2a99] backdrop-blur-md shadow-lg py-3" : "bg-[#0a0a0a] py-6"}`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href={"/"} className="flex items-center gap-3 group">
          <div className="size-10  flex items-center justify-center">
            <Image
              src={"/logo-white-gpt.png"}
              alt="logo de Yvernaux Web Solutions"
              width={5}
              height={5}
              className="size-full"
            />
          </div>
          <div className="hidden md:block">
            <p className="text-lg">Yvernaux</p>
            <p className="text-primary text-xs">Web Solutions</p>
          </div>
        </Link>
        <ul className="hidden md:flex items-center gap-4 md:gap-6 xl:gap-8">
          {allNavItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path === "/about" ? "#" : item.path}
                // ${item.path === "/about" || item.path === "/projects" ? "opacity-25 cursor-not-allowed transition-none hover:text-foreground" : ""}
                style={{
                  color: `${item.path === "/about" || item.path === "/projects" ? "var(--color-foreground)" : ""}`,
                }}
                className={`uppercase text-sm text-foreground font-medium ${pathname === item.path ? "text-primary" : ""} ${item.path === "/about" ? "opacity-25 cursor-not-allowed transition-none" : ""} tracking-widest transition-colors duration-300 hover:text-primary`}
              >
                {t((item.id + ".label") as NamespaceKeys<Messages, string>)}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          <SwitchLang />
          <button
            className="md:hidden p-2"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {!openMenu ? <Menu size={24} /> : <X size={24} />}
          </button>
        </div>
      </nav>
      {openMenu && (
        <nav
          id="mobile-menu"
          className="fixed inset-0 h-screen backdrop-blur-xs top-16 bg-background/90 text-foreground w-full transition-transform duration-300 ease-in-out md:hidden"
        >
          <ul className="flex flex-col p-6 gap-4 ">
            {allNavItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.path === "/about" ? "#" : item.path}
                  className={` capitalize  ${pathname === item.path ? "text-primary" : ""} ${item.path === "/about" ? "opacity-25 cursor-not-allowed transition-none" : ""}`}
                  style={{ fontWeight: "normal" }}
                  onClick={() => setOpenMenu(!openMenu)}
                >
                  {t((item.id + ".label") as NamespaceKeys<Messages, string>)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
