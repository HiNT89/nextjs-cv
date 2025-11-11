import me_banner from "@/src/assets/images/me-banner.png";
import arrow from "@/src/assets/images/Vector.png";

const Banner = () => {
  return (
    <section className="custom-container pt-20">
      <div className="flex items-center">
        <div className="relative">
          <img src={me_banner.src} alt="Me Banner" />
          <p className="text-white  top-4 -right-50 absolute">
            <img
              src={arrow.src}
              alt="arrow"
              className="absolute  -left-[90px] -bottom-10"
            />
            Hello! I Am{" "}
            <b className="text-(--main-color) italic">Nguyen Trung Hieu</b>
          </p>
        </div>

        <div className="text-white ml-1 flex flex-col justify-center">
          <h1 className="text-sm mb-2 font-light tracking-wider">
            A Fullstack Developer
          </h1>
          <div className="text-4xl font-bold leading-tight mb-4">
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
          <p className="text-sm font-light">
            Because what’s beauty without function?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
