import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api.data?.map((anime) => {
        return (
          <Link href={`/anime/${anime.mal_id}`} key={anime.mal_id}>
            <div className="relative overflow-hidden rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
              <Image
                src={anime.images.webp.image_url}
                alt={anime.title}
                width={360}
                height={360}
                layout="responsive"
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-end justify-center p-4 bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 hover:opacity-100">
                <h3 className="text-white font-bold text-center">{anime.title}</h3>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
