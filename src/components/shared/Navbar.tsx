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
import Logo from "./Logo";
import { signOut } from "next-auth/react";

type TNavProps = {
  dashboard?: boolean;
  user?:
    | { name?: string | null; email?: string | null; image?: string | null }
    | undefined;
};

const Navbar = ({ dashboard = false, user }: TNavProps) => {
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
      className="sticky top-0 left-0 z-40 w-screen border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-gradient-to-b from-slate-100 via-slate-200 to-slate-300 dark:from-neutral-950 dark:to-neutral-900 px-5 py-2"
    >
      <div className="flex h-14 items-center justify-between container mx-auto">
        <div className={dashboard ? "invisible lg:visible" : "visible"}>
          <Logo />
        </div>

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

          {/* conditional render  */}
          {user && (
            <motion.div
              key={"/dashboard"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className=""
            >
              <Link
                href={"/dashboard"}
                className={`text-sm transition-colors hover:text-primary relative ${
                  pathname === "/dashboard"
                    ? "text-primary font-bold"
                    : "text-muted-foreground"
                }`}
              >
                {"Dashboard"}
                {pathname === "/dashboard" && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 top-full h-[2px] w-full bg-primary"
                  />
                )}
              </Link>
            </motion.div>
          )}
        </div>

        {/* Buttons  */}
        <div className="hidden md:flex items-center gap-2 justify-end">
          {user ? (
            <Button onClick={() => signOut()} effect={"gooeyRight"} size="sm">
              Logout
            </Button>
          ) : (
            <Link href={"/login"}>
              <Button effect={"gooeyRight"} size="sm">
                Login
              </Button>
            </Link>
          )}

          {/* Theme Button */}
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

                {/* conditional render  */}
                {user ? (
                  <>
                    <motion.div
                      key={"/dashboard"}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="mx-auto"
                    >
                      <Link
                        href={"/dashboard"}
                        className={`text-sm transition-colors hover:text-primary relative ${
                          pathname === "/dashboard"
                            ? "text-primary font-bold"
                            : "text-muted-foreground"
                        }`}
                      >
                        {"Dashboard"}
                        {pathname === "/dashboard" && (
                          <motion.div
                            layoutId="underline"
                            className="absolute left-0 top-full h-[2px] w-full bg-primary"
                          />
                        )}
                      </Link>
                    </motion.div>

                    <Button
                      onClick={() => signOut()}
                      effect={"gooeyRight"}
                      size="sm"
                      className="mx-auto"
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <Link href={"/login"} className="mx-auto">
                    <Button effect={"gooeyRight"} size="sm">
                      Login
                    </Button>
                  </Link>
                )}
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
