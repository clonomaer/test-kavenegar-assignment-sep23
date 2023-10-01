import React from "react";
import { defaultLocale } from "../locales/default";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 p-4 text-center">
      <p>&copy; 2023 {defaultLocale.main.appTitle}</p>
    </footer>
  );
};

export default Footer;
