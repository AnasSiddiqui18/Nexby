import { HeaderLinks, menu_links } from "@/constants";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { XIcon } from "lucide-react";

export function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }
  }, [open]);

  return (
    <div className="bg-dark-500 font-oxanium container rounded-md relative">
      <div className="h-20 text-brand-gray-100 flex justify-between items-center">
        <div
          className="flex justify-between w-full lg:w-fit items-center cursor-pointer"
          onClick={toggleMenu}
        >
          <img src="logo.png" alt="logo" className="h-8 lg:h-9" />
          <img
            src="menu-icon.png"
            alt="menu-icon"
            className="lg:hidden block h-6 w-6"
          />
        </div>

        <div className="space-x-6 max-lg:hidden">
          {HeaderLinks.map((link) => (
            <a
              key={link}
              className="~text-sm/xl hover:text-primary transition-colors duration-200"
              href="#"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex gap-2 max-lg:hidden text-brand-white-100">
          <Button
            variant="ghost"
            className="bg-transparent border-2 border-primary font-semibold rounded-none hover:bg-primary hover:text-black transition-colors duration-200"
          >
            Sign Up
          </Button>
          <Button
            variant="secondary"
            className="bg-primary border-2 border-primary font-semibold rounded-none text-black hover:bg-primary-dark transition-colors duration-200"
          >
            Login
          </Button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-10"
          onClick={closeMenu}
        />
      )}

      <div
        className={cn(
          "fixed top-0 left-0 h-screen w-80 bg-dark-200 shadow-md shadow-brand-gray-400 border-r border-brand-gray-600 text-brand-gray-100 transform transition-transform duration-300 ease-in-out z-20",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex justify-between items-center p-4 border-b border-brand-gray-600">
          <img src="logo.png" alt="logo" className="h-6" />
          <XIcon
            className="cursor-pointer hover:text-primary transition-colors duration-200"
            onClick={closeMenu}
          />
        </div>

        <div className="flex flex-col gap-3 p-4">
          {menu_links.map((link, index) => (
            <a
              key={index}
              className="hover:text-primary transition-colors duration-200"
              href="#"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-2 p-4">
          <Button
            variant="ghost"
            className="bg-transparent border-2 border-primary rounded-none hover:bg-primary hover:text-black transition-colors duration-200"
          >
            Sign Up
          </Button>
          <Button
            variant="secondary"
            className="bg-primary border-2 border-primary rounded-none text-black hover:bg-primary-dark transition-colors duration-200"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
