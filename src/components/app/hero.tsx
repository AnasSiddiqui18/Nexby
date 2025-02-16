import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const BUTTON_STYLES = {
  base: "h-14 w-32 sm:w-48 border-2 border-primary rounded-full overflow-hidden flex items-center justify-center gap-2 sm:gap-3 bg-black text-sm sm:text-base relative",
  shadow: "absolute -right-5 -top-4 size-12 sm:size-20",
};

const IMAGE_STYLES = {
  desktop:
    "hidden lg:block absolute top-10 -right-0 bottom-0 h-full w-[600px] max-xl:w-[500px] mt-5",
  mobile:
    "lg:hidden w-full flex justify-end translate-x-56 [@media(max-width:425px)]:translate-x-20 max-sm:translate-x-40 h-full max-sm:mt-10",
};

export function Hero() {
  const [isOpacityLow, setIsOpacityLow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOpacityLow(!isOpacityLow);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
    //
  }, [isOpacityLow]);

  return (
    <div className="text-primary flex flex-col lg:flex-row font-oxanium relative overflow-hidden h-[calc(100vh-80px)] max-lg:h-[100vh] pt-10">
      <div className="flex flex-1 flex-col gap-6 justify-start mt-5 container">
        <div>
          <h1 className="~text-2xl/5xl">Nexby AI HR Recruiter</h1>
          <h3 className="~text-lg/3xl tracking-wide">Faster than you think</h3>
        </div>

        <p className="~text-sm/xl max-lg:leading-loose tracking-wider max-w-2xl">
          Nexby AI, we are pioneering a new way of recruitment by leveraging
          cutting-edge automation technology. Hire Pro, our platform streamlines
          the hiring process by automating candidate screening, allowing
          businesses to save time, reduce costs, and identify the most suitable
          candidates quickly and efficiently.
        </p>
        <button className={cn(`${BUTTON_STYLES.base}`)}>
          <span className="text-base lg:text-xl">Book a demo</span>
          <div className="flex">
            <img className="h-4 sm:h-5" src="/arrow-right.png" alt="Arrow" />
            <img className="h-4 sm:h-5" src="/arrow-right.png" alt="Arrow" />
          </div>
          <img
            src="/button-shadow.png"
            alt="Button Shadow"
            className={cn(
              `${
                BUTTON_STYLES.shadow
              } duration-1000 ease-in-out transition-opacity ${
                isOpacityLow ? "opacity-60" : "opacity-100"
              } `
            )}
          />
        </button>
      </div>

      <div className={IMAGE_STYLES.desktop}>
        <img
          src="hero-img.png"
          alt="Nexby AI Hero"
          className="max-w-5xl h-full"
          loading="lazy"
        />
      </div>

      <div className={IMAGE_STYLES.mobile}>
        <img
          src="hero-img.png"
          alt="Nexby AI Hero"
          className="max-lg:w-full w-[700px]"
          loading="lazy"
        />
      </div>
    </div>
  );
}
