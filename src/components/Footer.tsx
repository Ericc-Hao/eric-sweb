import Layout from "./Layout";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:border-light dark:text-light sm:text-base
    "
    >
      <Layout className="flex items-center justify-center py-8 lg:flex-col lg:py-6">
        <span>&copy; {new Date().getFullYear()} All Rights Reserved By CH.</span>
      </Layout>
    </footer>
  );
};

export default Footer;
