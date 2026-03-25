"use client";

import { Menu, X } from "lucide-react";
import { allNavItems } from "../../lib/config";
import { useEffect, useState } from "react";
import { SwitchLang } from "./toggle-lang";
import { Messages, NamespaceKeys, useTranslations } from "next-intl";
import { Link, usePathname } from "@/src/i18n/navigation";

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
      className={`fixed top-0 left-0 right-0 z-50 text-foreground transition-all duration-300 ${isScroll ? "bg-background/60 backdrop-blur-md shadow-lg py-3" : "bg-background py-6"}`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href={"/"} className="flex items-center gap-3 group">
          <div className="size-10 border border-primary flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
            <span className="font-heading text-primary group-hover:text-background font-bold transition-colors duration-300">
              YWS
            </span>
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
                href={item.path}
                className={`uppercase text-sm font-medium ${pathname === item.path ? "text-primary" : ""} tracking-widest transition-colors duration-300 hover:text-primary`}
              >
                {t(item.id as NamespaceKeys<Messages, string>)}
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
                  href={item.path}
                  className={` capitalize  ${pathname.includes(item.path) ? "text-primary" : ""}`}
                  style={{ fontWeight: "normal" }}
                >
                  {t(item.id as NamespaceKeys<Messages, string>)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
