"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = searchRef.current.value.trim(); // Menghapus spasi di awal dan akhir
    keyword && router.push(`/search/${keyword}`); // Memastikan keyword tidak kosong sebelum melakukan pencarian
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch(event);
    }
  };

  return (
    <div className="relative box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;">
      <input 
        placeholder="cari anime...." 
        className="w-full p-2 rounded" 
        ref={searchRef}
        onKeyPress={handleKeyPress} // Menangani peristiwa keypress
      />
      <button className="absolute top-2 end-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
