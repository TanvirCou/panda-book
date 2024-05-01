import Image from "next/image";
import bgPic from "../../public/book-bg.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center relative">
      <Image src={bgPic} alt="Panda-book home page picture" placeholder="blur" fill className="object-cover blur-sm"/>

      <div className="bg-white absolute flex flex-col items-center justify-around w-80 h-[40vh] rounded-md shadow-md">
        <p className="text-3xl font-bold font-[poppins] text-purple-700">Panda-Book</p>
        <Link href="/store" className="bg-purple-600 text-white font-medium px-4 py-2 rounded-md">Go to the Store</Link>
      </div>
    </div>
  );
}
