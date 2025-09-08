import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center">
      <h1 className="mt-16 text-6xl font-bold">Under Construction</h1>
      <Image
        src="/butt-minions.gif"
        alt="Cool GIF"
        width={500}
        height={500}
        className="mt-16 w-3/12"
        unoptimized
      />
      <a
        href="/no-click"
        className="absolute right-8 bottom-8 p-8 bg-white text-red-600 hover:scale-110 hover:bg-red-600 hover:border-white hover:text-white font-bold border-4 border-red-600 transition-all duration-300 cursor-pointer"
      >
        do not click
      </a>
    </div>
  );
}
