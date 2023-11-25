import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

const ActionButtons = () => {
  return (
    <div>
      <div className="md:hidden ">
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="space-y-4 items-start w-full text-lg text-black mt-10">
                  <Link href={'/'}>
                    <h3>Sign In</h3>
                  </Link>
                  <Link href={'/'}>
                    <h3>Get Started</h3>
                  </Link>
                  <Link href={'/'}>
                    <h3>Pricing</h3>
                  </Link>
                  <Link href={'/'}>
                    <h3>Features</h3>
                  </Link>
                  <Link href={'/'}>
                    <h3>Contact Us</h3>
                  </Link>
                  <Link href={'/'}>
                    <h3>About Us</h3>
                  </Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden  md:flex md:space-x-4">
        <Button variant={'ghost'} className="text-md font-[roboto] ">
          Sign In
        </Button>
        <Button className="text-md font-[roboto] text-white bg-blue-500 ">
          Get Started
        </Button>
      </div>
    </div>
  );
};
export default ActionButtons;
