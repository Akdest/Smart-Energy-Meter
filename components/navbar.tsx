"use client";

import Link from "next/link";
import { Zap } from "lucide-react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Real-time Monitoring",
    href: "/features/monitoring",
    description: "Track your energy consumption in real-time with detailed analytics.",
  },
  {
    title: "Smart Alerts",
    href: "/features/alerts",
    description: "Get instant notifications about unusual consumption patterns.",
  },
  {
    title: "Cost Analysis",
    href: "/features/costs",
    description: "Analyze your energy costs and find ways to save money.",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to handle the mobile menu toggle

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Zap className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold">EnergyTrack</span>
        </Link>

        {/* Hamburger Icon for small screens */}
        <button
          className="block lg:hidden"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open menu</span>
          <div className="w-6 h-0.5 bg-primary mb-1.5"></div>
          <div className="w-6 h-0.5 bg-primary mb-1.5"></div>
          <div className="w-6 h-0.5 bg-primary"></div>
        </button>

        {/* Desktop Navigation Menu */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="space-x-6">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Features</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-4 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/pricing" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                )}>
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                )}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop-only buttons (Dashboard and Get Started visible only on lg and larger) */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
          <Button asChild>
            <Link href="/register">Get Started</Link>
          </Button>
        </div>
      </div>

      {/* Full-Screen Black Overlay and Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-[100vw] h-[100vh] bg-black/90 backdrop-blur-md transition-all duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-50`}
      >
        {/* Mobile Menu */}
        <div className="flex justify-end p-6">
          <button onClick={toggleMenu} className="text-white text-2xl">×</button>
        </div>
        <ul className="flex flex-col items-center justify-center space-y-8 text-white text-xl">
          <li><Link href="/features/monitoring">Real-time Monitoring</Link></li>
          <li><Link href="/features/alerts">Smart Alerts</Link></li>
          <li><Link href="/features/costs">Cost Analysis</Link></li>
          <li><Link href="/pricing">Pricing</Link></li>
          <li><Link href="/about">About</Link></li>

          {/* Add Dashboard and Get Started buttons inside mobile view */}
          <li>
            <Button variant="ghost" asChild>
              <Link href="/dashboard" className="text-white">Dashboard</Link>
            </Button>
          </li>
          <li>
            <Button asChild>
              <Link href="/register" className="text-black">Get Started</Link>
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>( 
  ({ className, title, children, ...props }, ref) => { 
    return ( 
      <li> 
        <NavigationMenuLink asChild> 
          <a 
            ref={ref} 
            className={cn( 
              "block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground", 
              className 
            )} 
            {...props} 
          > 
            <div className="text-sm font-medium leading-none">{title}</div> 
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground"> 
              {children} 
            </p> 
          </a> 
        </NavigationMenuLink> 
      </li> 
    ); 
  } 
); 
ListItem.displayName = "ListItem"; 
