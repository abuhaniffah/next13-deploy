import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";

const UserActionButton = async () => {
    const user = await authUserSession();
    const actionLabel = user ? "Sign Out" : "Sign In";
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

    return (
        <div className="flex justify-between gap-2">
            {user ? (
                <Link
                    href="/users/dashboard"
                    className="inline-block rounded-full bg-blue-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-blue-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
                >
                    <span className="transition-all duration-200 transform hover:scale-105">Dashboard</span>
                </Link>
            ) : null}
            <Link
                href={actionURL}
                type="button"
                className="inline-block rounded-full border-2 border-purple-500 text-purple-500 hover:border-purple-600 hover:bg-purple-400 hover:bg-opacity-10 hover:text-purple-600 focus:border-purple-700 focus:text-purple-700 active:border-purple-800 active:text-purple-800 dark:border-purple-300 dark:text-purple-300 dark:hover:hover:bg-purple-300 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
                style={{
                    backgroundImage: "linear-gradient(to right, #fuchsia-600, #violet-600, #purple-600)"
                }}
            >
                <span className="transition-all duration-200 transform hover:scale-105">{actionLabel}</span>
            </Link>
        </div>
    );
};

export default UserActionButton;
