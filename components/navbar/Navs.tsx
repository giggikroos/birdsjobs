'use client';
import * as React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const Navs = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="hidden md:flex">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-xl font-[roboto] font-bold">
            Get Started
          </NavigationMenuTrigger>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
export default Navs;
