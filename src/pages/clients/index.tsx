import Link from "next/link";

function Clients() {
  return (
    <div>
      <header className="p-5 bg-slate-700 text-white">Clients</header>
      <main className="m-5 flex gap-3">
        <Link href={"/clients/mk"}>Client MK</Link>
        <Link
          href={{ pathname: "/clients/sri", query: { test: "extravalue" } }}
        >
          Client Sri
        </Link>
      </main>
    </div>
  );
}

export default Clients;
