"use client";

import { motion } from "framer-motion";
import { FaProjectDiagram, FaBlog } from "react-icons/fa";
import { MdEmail, MdDashboard, MdMenu, MdClose } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";

const Sidebar = () => {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const sidebarLinks = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <MdDashboard className="h-5 w-5" />,
    },
    {
      name: "Project Management",
      path: "/dashboard/project-management",
      icon: <FaProjectDiagram className="h-5 w-5" />,
    },
    {
      name: "Blog Management",
      path: "/dashboard/blog-management",
      icon: <FaBlog className="h-5 w-5" />,
    },
    {
      name: "Messages",
      path: "/dashboard/messages",
      icon: <MdEmail className="h-5 w-5" />,
    },
  ];

  return (
    <div className="sticky flex min-h-screen">
      {/* Mobile Toggle Button */}
      <Button
        variant="ghost"
        size="icon"
        className={`lg:hidden fixed ${
          isMobileOpen ? "left-64 ml-2" : "left-4 "
        } top-4 z-50`}
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? (
          <MdClose className="h-6 w-6" />
        ) : (
          <MdMenu className="h-6 w-6" />
        )}
      </Button>

      {/*Mobile Sidebar */}
      <motion.div
        initial={{ x: -250 }}
        animate={{ x: isMobileOpen ? 0 : -250 }}
        className={`fixed lg:hidden left-0 top-0 h-screen bg-background border-r z-50
          ${isMobileOpen ? "w-64" : "lg:w-64 max-lg:w-0"}`}
      >
        {/* Logo  */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`md:mx-auto p-4 text-center`}
        >
          <Link href="/dashboard" className="font-bold text-xl">
            Portfolio
          </Link>
        </motion.div>
        <div className="flex flex-col h-full overflow-y-auto">
          {sidebarLinks.map((link) => (
            <Link
              href={link.path}
              key={link.path}
              onClick={() => setIsMobileOpen(false)}
            >
              <motion.div
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-3 px-6 py-3 cursor-pointer transition-colors
                  ${
                    pathname === link.path
                      ? "text-primary border-r-2 border-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary"
                  }`}
              >
                {link.icon}
                <span className="whitespace-nowrap">{link.name}</span>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Desktop Sidebar */}
      <div className="fixed left-0 top-0 bg-background border-r z-50 hidden lg:flex flex-col h-full overflow-y-auto">
        {/* Logo  */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`md:mx-auto p-4 text-center`}
        >
          <Link href="/dashboard" className="font-bold text-xl">
            Portfolio
          </Link>
        </motion.div>
        {sidebarLinks.map((link) => (
          <Link
            href={link.path}
            key={link.path}
            onClick={() => setIsMobileOpen(false)}
          >
            <motion.div
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-3 px-6 py-3 cursor-pointer transition-colors
                  ${
                    pathname === link.path
                      ? "text-primary border-r-2 border-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary"
                  }`}
            >
              {link.icon}
              <span className="whitespace-nowrap">{link.name}</span>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </div>
  );
};

export default Sidebar;
