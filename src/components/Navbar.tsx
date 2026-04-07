import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
} from "@/components/Icons";
import { useThemeSwitch } from "@/components/Hooks/useThemeSwitch";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Logo from "./Logo";

type CustomLinkProps = {
  href: string;
  title: string;
  className?: string;
};

const CustomLink = ({ href, title, className = "" }: CustomLinkProps) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`${className}  group relative rounded lg:text-light lg:dark:text-dark`}
    >
      {title}
      <span
        className={`
              absolute -bottom-0.5 left-0 inline-block h-[1px] bg-dark transition-[width] duration-300 ease-out group-hover:w-full dark:bg-light
              ${router.asPath === href ? "w-full" : " w-0"} lg:bg-light lg:dark:bg-dark
              `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

type CustomMobileLinkProps = CustomLinkProps & {
  toggle: () => void;
};

const CustomMobileLink = ({
  href,
  title,
  className = "",
  toggle,
}: CustomMobileLinkProps) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    void router.push(href);
  };

  return (
    <button
      type="button"
      className={`${className}  group relative rounded lg:text-light lg:dark:text-dark`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`
              absolute -bottom-0.5 left-0 inline-block h-[1px] bg-dark transition-[width] duration-300 ease-out group-hover:w-full dark:bg-light
              ${router.asPath === href ? "w-full" : " w-0"} lg:bg-light lg:dark:bg-dark
              `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitch();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="relative z-1 flex w-full items-center justify-between px-32 py-8 font-medium z-10 dark:text-light
    lg:px-16 md:px-12 sm:px-8
    "
    >
      <button
        type="button"
        className="hidden flex-col items-center justify-center lg:flex"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        onClick={handleClick}
      >
        <span className="sr-only">Open main menu</span>
        <span
          className={`block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-out dark:bg-light ${isOpen ? "translate-y-1 rotate-45" : "-translate-y-0.5"}`}
        />
        <span
          className={`my-0.5 block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-out dark:bg-light ${isOpen ? "opacity-0" : "opacity-100"}`}
        />
        <span
          className={`block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-out dark:bg-light ${isOpen ? "-translate-y-1 -rotate-45" : "translate-y-0.5"}`}
        />
      </button>

      <div className="flex w-full items-center justify-between lg:hidden">
        <nav className="flex items-center justify-center">
          <CustomLink className="mr-4" href="/" title="Home" />
          <CustomLink className="mx-4" href="/about" title="About" />
          <CustomLink className="mx-4" href="/projects" title="Projects" />
          <CustomLink className="ml-4" href="/articles" title="Blogs" />
          <CustomLink className="ml-8" href="/contact" title="Contact" />
        </nav>
        <nav
          className="flex flex-wrap items-center justify-center
      "
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3 w-6 transition-transform hover:-translate-y-0.5 active:scale-90"
            href="https://github.com/Ericc-Hao"
            aria-label="Checkout my github profile"
          >
            <GithubIcon />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3 w-6 transition-transform hover:-translate-y-0.5 active:scale-90"
            href="https://www.linkedin.com/in/chenruihao/"
            aria-label="Checkout my linkedin profile"
          >
            <LinkedInIcon />
          </a>

          <button
            type="button"
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex h-6 w-6 items-center justify-center rounded-full p-1 ease
            ${mode === "light" ? "bg-dark  text-light" : "bg-light  text-dark"}
            `}
            aria-label="theme-switcher"
          >
            {mode === "light" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>
      {isOpen ? (
        <motion.div
          className="fixed top-1/2 left-1/2 z-50 flex min-w-[70vw] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-between rounded-lg bg-dark/90 py-32 backdrop-blur-md sm:min-w-[90vw] dark:bg-light/75"
          initial={{ scale: 0, x: "-50%", y: "-50%", opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <nav className="flex flex-col items-center justify-center">
            <CustomMobileLink
              toggle={handleClick}
              className="mr-4 lg:m-0 lg:my-2"
              href="/"
              title="Home"
            />
            <CustomMobileLink
              toggle={handleClick}
              className="mx-4 lg:m-0 lg:my-2"
              href="/about"
              title="About"
            />
            <CustomMobileLink
              toggle={handleClick}
              className="mx-4 lg:m-0 lg:my-2"
              href="/projects"
              title="Projects"
            />
            <CustomMobileLink
              toggle={handleClick}
              className="ml-4 lg:m-0 lg:my-2"
              href="/articles"
              title="Blogs"
            />
            <CustomMobileLink
              toggle={handleClick}
              className="ml-4 lg:m-0 lg:my-2"
              href="/contact"
              title="Contact"
            />
          </nav>
          <nav className="mt-2 flex items-center justify-center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="m-1 mx-3 w-6 rounded-full bg-light transition-transform hover:-translate-y-0.5 active:scale-90 dark:bg-dark sm:mx-1"
              href="https://github.com/Ericc-Hao"
              aria-label="Checkout my github profile"
            >
              <GithubIcon />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="m-1 mx-3 w-6 transition-transform hover:-translate-y-0.5 active:scale-90 sm:mx-1"
              href="https://www.linkedin.com/in/chenruihao/"
              aria-label="Checkout my linkedin profile"
            >
              <LinkedInIcon />
            </a>

            <button
              type="button"
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`m-1 ml-3 flex h-6 w-6 items-center justify-center rounded-full p-1 ease sm:mx-1
            ${mode === "light" ? "bg-dark  text-light" : "bg-light  text-dark"}
            `}
              aria-label="theme-switcher"
            >
              {mode === "light" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute top-2 left-[50%] translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
