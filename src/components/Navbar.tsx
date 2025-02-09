"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import ThemeButton from "./ThemeButton";

const Navbar = ({ dashboard = false }: { dashboard?: boolean }) => {
  const pathname = usePathname();
  const routes = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-5 py-2"
    >
      <div className="flex h-14 items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`lg:mx-auto ${dashboard ? "invisible" : "visible"}`}
        >
          <Link href="/" className="font-bold text-xl">
            Portfolio
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 md:mx-auto">
          {routes.map((route) => (
            <motion.div
              key={route.path}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className=""
            >
              <Link
                href={route.path}
                className={`text-sm transition-colors hover:text-primary relative ${
                  pathname === route.path
                    ? "text-primary font-bold"
                    : "text-muted-foreground"
                }`}
              >
                {route.name}
                {pathname === route.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 top-full h-[2px] w-full bg-primary"
                  />
                )}
              </Link>
            </motion.div>
          ))}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" size="sm">
              Login
            </Button>
          </motion.div>
          <ThemeButton />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeButton />
          <Sheet>
            <SheetTrigger asChild>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle></SheetTitle>
              <SheetDescription></SheetDescription>
              <motion.div
                className="flex flex-col gap-4 mt-6"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {routes.map((route, i) => (
                  <motion.div
                    key={route.path}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="text-center"
                  >
                    <Link
                      href={route.path}
                      className={`text-sm transition-colors hover:text-primary ${
                        pathname === route.path
                          ? "text-primary font-bold"
                          : "text-muted-foreground"
                      }`}
                    >
                      {route.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mx-auto"
                >
                  <Button variant="outline" size="sm">
                    Login
                  </Button>
                </motion.div>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
