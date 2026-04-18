import React from 'react';

function Footer() {

  const currentYear = new Date().getFullYear();

  // Map through links to keep the return statement clean
  const footerLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Contact Us", href: "mailto:contact@example.com" },
  ];

  return (
    <footer className="w-full py-8 border-t border-gray-200 bg-white mt-auto">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand/Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-lg font-bold text-gray-800 tracking-tight">
              User<span className="text-blue-600">Central</span>
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              Building the future of user management.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-500 hover:text-blue-600 hover:underline underline-offset-4 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Copyright Section */}
          <div className="text-center md:text-right">
            <p className="text-xs text-gray-400 font-light">
              © {currentYear} UserCentral Inc.
            </p>
            <p className="text-[10px] text-gray-300 uppercase tracking-widest mt-1">
              All rights reserved.
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;