import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="overflow-hidden rounded-full m-auto">
        <Image 
          src="/duck.png"
          alt=""
          width="100"
          height="100"
          title="It's working!"
        />
      </div>
    </main>
  );
}