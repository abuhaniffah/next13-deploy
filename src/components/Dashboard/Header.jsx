"use client";
import { ArrowUUpLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Header = ({ title }) => {
  const router = useRouter();

  const handleBack = (event) => {
    event.preventDefault();
    router.back();
  };

  return (
    <div className="flex justify-between items-center mb-8">
      <button
        onClick={handleBack}
        className="text-yellow-500 hover:text-orange-600 transition duration-300 focus:outline-none"
      >
        <ArrowUUpLeft size={32} />
      </button>
      <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text">
        {title}
      </h3>
    </div>
  );
};
export default Header;
