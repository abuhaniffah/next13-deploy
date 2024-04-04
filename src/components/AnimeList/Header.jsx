import Link from "next/link";

const Header = ({ title, LinkHref, linkTitle }) => {
  return (
    <div className="flex justify-between p-4 items-center">
      <h1 className="text-3xl font-bold text-blue-600">{title}</h1>
      {
        LinkHref && linkTitle ? (
          <Link href={LinkHref}>
            <span className="text-lg text-blue-600 font-semibold hover:underline hover:text-blue-800 transition-all cursor-pointer">
              {linkTitle}
            </span>
          </Link>
        ) : null
      }
    </div>
  );
};

export default Header;
