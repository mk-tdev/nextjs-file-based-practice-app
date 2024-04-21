import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="p-5 bg-slate-700 text-white">Main Header</header>
      <main className="m-5 flex gap-3">
        <Link href={"/about"}>Go to About</Link>
        <Link href={"/clients"}>Go to Clients</Link>
      </main>
    </>
  );
}
