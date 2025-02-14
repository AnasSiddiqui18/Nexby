const BUTTON_STYLES = {
  base: "h-8 sm:h-10 w-32 sm:w-40 border-2 border-primary rounded-full overflow-hidden flex items-center justify-center gap-2 sm:gap-3 bg-black text-sm sm:text-base relative",
  shadow: "absolute -right-2 top-0 size-12 sm:size-14",
};

const IMAGE_STYLES = {
  desktop:
    "hidden lg:block absolute top-0 -right-0 bottom-0 h-full w-[600px] max-xl:w-[500px] border-2 border-brand-purple-300 shadow-xl shadow-brand-purple-200",
  mobile:
    "lg:hidden w-full flex justify-end translate-x-56 [@media(max-width:425px)]:translate-x-20 max-sm:translate-x-40 h-full max-sm:mt-10 border-2 border-brand-purple-300 shadow-xl shadow-brand-purple-200",
};

export function Hero() {
  return (
    <div className="text-primary flex flex-col lg:flex-row font-oxanium relative overflow-hidden h-[calc(100vh-80px)] max-lg:h-[100vh] pt-10">
      <div className="flex flex-1 flex-col gap-4 xl:gap-3 justify-center container">
        <h1 className="~text-2xl/5xl">Nexby AI HR Recruiter</h1>
        <h3 className="~text-lg/3xl tracking-wide">Faster than you think</h3>
        <p className="~text-sm/xl !leading-loose max-lg:leading-loose tracking-wider max-w-xl">
          Nexby AI, we are pioneering a new way of recruitment by leveraging
          cutting-edge automation technology. Hire Pro, our platform streamlines
          the hiring process by automating candidate screening, allowing
          businesses to save time, reduce costs, and identify the most suitable
          candidates quickly and efficiently.
        </p>
        <button className={BUTTON_STYLES.base}>
          Book a demo
          <div className="flex">
            <img className="h-4 sm:h-5" src="/arrow-right.png" alt="Arrow" />
            <img className="h-4 sm:h-5" src="/arrow-right.png" alt="Arrow" />
          </div>
          <img
            src="/button-shadow.png"
            alt="Button Shadow"
            className={BUTTON_STYLES.shadow}
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
