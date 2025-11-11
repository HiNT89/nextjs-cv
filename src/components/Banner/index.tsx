import me_banner from "@/src/assets/images/me-banner.png";
import arrow from "@/src/assets/images/Vector.png";

const Banner = () => {
  return (
    <section className="custom-container pt-10 md:pt-20 px-4">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0">
        <div className="relative w-full md:w-auto flex justify-center md:justify-start">
          <img
            src={me_banner.src}
            alt="Me Banner"
            className="w-48 h-48 md:w-auto md:h-auto object-contain"
          />
          <p className="text-white text-sm md:text-base top-4 -right-50 absolute hidden md:block">
            <img
              src={arrow.src}
              alt="arrow"
              className="absolute  -left-[90px] -bottom-10"
            />
            Hello! I Am{" "}
            <b className="text-(--main-color) italic">Nguyen Trung Hieu</b>
          </p>
        </div>

        <div className="text-white md:ml-1 flex flex-col justify-center text-center md:text-left">
          <p className="text-white text-sm mb-4 md:hidden">
            Hello! I Am{" "}
            <b className="text-(--main-color) italic">Nguyen Trung Hieu</b>
          </p>

          <h1 className="text-xs md:text-sm mb-2 font-light tracking-wider">
            A Fullstack Developer
          </h1>
          <div className="text-2xl md:text-4xl font-bold leading-tight mb-4">
            <span className="block">Who builds both the story and </span>
            <span className="block">
              the{" "}
              <span className="text-purple-400 relative">
                cover
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-purple-400 rounded-full transform rotate-1"></div>
              </span>
              ...
            </span>
          </div>
          <p className="text-xs md:text-sm font-light">
            Because what's beauty without function?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
