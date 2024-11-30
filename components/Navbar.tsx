"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { MessageCircle, Upload, Download } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 hidden md:block">
        <div className="container flex h-16 items-center">
          <div className="mr-8">
            <Link href="/" className="flex items-center space-x-2 group">
              <span className="font-mono text-xl font-bold tracking-tight transition-colors duration-200 group-hover:text-primary">
                ImageShare
              </span>
            </Link>
          </div>
          <div className="flex gap-8 relative">
            {[
              { href: "/", label: "Share ", icon: <Upload className="w-4 h-4" /> },
              { href: "/receive", label: "Receive ", icon: <Download className="w-4 h-4" /> },
              { href: "/chat", label: "Chat", icon: <MessageCircle className="w-4 h-4" /> },
            ].map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative py-1 text-sm font-medium transition-all duration-200 hover:text-foreground/80 flex items-center gap-1.5",
                    isActive ? "text-foreground" : "text-foreground/60"
                  )}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-desktop"
                      className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-foreground"
                      animate={{ opacity: 1, scale: [0.8, 1] }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t md:hidden">
        <div className="container flex h-16 items-center justify-around">
          {[
            { href: "/", label: "Share", icon: <Upload className="w-5 h-5" /> },
            { href: "/receive", label: "Receive", icon: <Download className="w-5 h-5" /> },
            { href: "/chat", label: "Chat", icon: <MessageCircle className="w-5 h-5" /> },
          ].map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center gap-1 py-1 text-xs font-medium transition-all duration-200 hover:text-foreground/80",
                  isActive ? "text-foreground" : "text-foreground/60"
                )}
              >
                {item.icon}
                <span>{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="navbar-mobile"
                    className="absolute top-0 h-0.5 w-12 bg-foreground"
                    animate={{ opacity: 1, scale: [0.8, 1] }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
