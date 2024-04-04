import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Dashboard/Header";
import prisma from "@/libs/prisma";
import { authUserSession } from "@/libs/auth-libs";

const Page = async () => {
  const user = await authUserSession();
  const collection = await prisma.collection.findMany({
    where: { user_email: user.email },
  });

  

  return (
    <section className="mt-4 px-4">
      <Header title={"My Collection"} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 ">
        {collection.map((collect, index) => {
          return (
            <Link key={index} href={`/anime/${collect.anime_mal_id}`} className="relative shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
              <Image
                src={collect.anime_image}
                alt={collect.anime_image}
                width={350}
                height={350}
                className="w-full"
              />
              <div className="absolute flex justify-center items-center bottom-0 w-full h-16 bg-gradient-to-r from-cyan-500 to-blue-500">
                <h5 className="text-xl text-center ">{collect.anime_title}</h5>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
