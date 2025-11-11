"use client";
import logo from "@/src/assets/images/hint.jpg";
import { useRouter } from "next/navigation";

const NAV = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Lab", href: "/lab" },
];

const CHeader = () => {
  const router = useRouter();
  return (
    <header className="py-6 bg-[#1A0B2E] text-white  px-4">
      <div className="custom-container flex justify-between items-center w-full">
        {/* logo */}
        <div
          className="cursor-pointer border-3 border-(--main-color) h-12 w-12 rounded-full shadow-lg object-cover overflow-hidden"
          onClick={() => {
            router.push("/");
          }}
        >
          <img src={logo.src} alt="Logo" className="" />
        </div>
        {/* nav */}
        <nav className="flex items-center gap-6">
          {NAV.map((item) => (
            <button
              key={item.name}
              className="mx-2 text-lg hover:text-(--main-color) transition-colors cursor-pointer font-medium"
              onClick={() => {
                router.push(item.href);
              }}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default CHeader;
