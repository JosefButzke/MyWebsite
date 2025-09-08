import Image from "next/image";

export default function NoClick() {
  return (
    <div className="flex w-full items-center justify-center">
      <Image
        src="/deception-white-chicks.gif"
        alt="Cool GIF"
        width={500}
        height={500}
        className="mt-16 w-3/12"
        unoptimized
      />
    </div>
  );
}
