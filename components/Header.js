import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/outline";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";
import Darkmode from "./Darkmode";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-5 items-center">
        <a href="/" >
          <img width="200" src="wayang2.png" className=" px-1" />
        </a>

        <form className="flex flex-grow px-1 py-3 pt-1 pb-1 ml-10 mr-5 border border-red-600 shadow-lg max-w-3xl items-center ">
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none"
          />
          <button onClick={search}>
            <SearchIcon className="icons h-5 mr-3 text-gray-700" />
          </button>
        </form>
        <Darkmode />
      </div>
      <HeaderOptions />
    </header>
  );
}

export default Header;
