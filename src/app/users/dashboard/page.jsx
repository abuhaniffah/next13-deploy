import Link from 'next/link';
import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";

const Page = async () => {
    const user = await authUserSession();

    return (
        <div className="text-gray-700 flex flex-col justify-center items-center mt-8">
            <h5 className="text-2xl font-bold mb-4">Welcome, {user?.name}</h5>
            <div className="rounded-full overflow-hidden border-4 border-white">
                <Image src={user?.image} alt="Profile Image" width={250} height={250} />
            </div>
            <div className="flex flex-wrap gap-4 py-8">
                <Link href="/users/dashboard/collection">
                    <div className="bg-yellow-400 text-gray-800 font-bold px-6 py-3 text-lg rounded-lg shadow-md hover:bg-yellow-500 hover:shadow-lg transition duration-300 cursor-pointer">
                        My Collection
                    </div>
                </Link>
                <Link href="/users/dashboard/comment">
                    <div className="bg-blue-400 text-gray-800 font-bold px-6 py-3 text-lg rounded-lg shadow-md hover:bg-blue-500 hover:shadow-lg transition duration-300 cursor-pointer">
                        My Comment
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Page;
