import Link from "next/link"
import InputSearch from "./inputSearch"
import UserActionButton from "./userActionButton"
const 
Navbar = () => {
    return (
        <header className="bg-gradient-to-r from-teal-400 to-green-400 md:py-8">
            <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2 ">
            <Link href="/" className="text-4xl font-extrabold bg-gradient-to-t from-fuchsia-600 via-violet-600 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">AbuAnimeList</Link>
            <InputSearch/>
            <UserActionButton/>
            </div>
        </header>
    )
}

export default Navbar

