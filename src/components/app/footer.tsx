import { footer_links } from "@/constants";
import { Button } from "../ui/button";

export function Footer() {
  return (
    <div className="text-primary bg-brand-purple-300 py-10 h-auto font-oxanium flex flex-col justify-center">
      <div className="container">
        <div className="flex justify-between w-full max-md:flex-col items-center">
          <div className="space-y-2 max-md:flex max-md:flex-col max-md:items-center max-md:text-center">
            <img src="logo.png" alt="#logo" className="h-8" />
            <p className="max-w-96">
              Transform your business. Embrace the future and let our AI tools
              reimagine your business.
            </p>
          </div>
          <div className="flex flex-col gap-5 md:items-end items-center text-end">
            <div className="flex flex-col gap-1">
              <h4 className="text-base hidden md:block">
                Take your Business to the Next Level with Nexby .
              </h4>
              <span className="text-brand-white-200 text-sm hidden md:block">
                Explore possibilities with Nexby AI solutions.
              </span>
            </div>

            <Button
              className="flex gap-3 rounded-none border-2 border-primary"
              variant="ghost"
            >
              Book a demo
              <img src="arrow-up.png" alt="no-img" className="size-3" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-3 max-md:items-center max-md:text-center">
          <div className="flex flex-col md:flex-row gap-3 mt-5">
            {footer_links.map((data) => {
              return (
                <span
                  key={data}
                  className="text-primary hover:text-primary cursor-pointer text-gray-300"
                >
                  {data}
                </span>
              );
            })}
          </div>

          <div className="h-[1px] w-full bg-brand-white-200 hidden md:block" />
        </div>

        <div className="flex gap-3 md:justify-between max-md:flex-col items-center mt-5">
          <div className="flex flex-col gap-3">
            <span className="text-primary text-gray-200">
              {`© ${new Date().getFullYear()} Nexby. All rights reserved.`}
            </span>

            <div className="flex gap-2">
              <span className="text-primary">Privacy Policy</span>
              <span className="text-primary">Terms of Service</span>
            </div>
          </div>

          <div className="flex gap-5">
            <img src="insta.png" alt="no-img" className="size-5" />
            <img src="fb.png" alt="no-img" className="size-5" />
            <img src="x.png" alt="no-img" className="size-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
