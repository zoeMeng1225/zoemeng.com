import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 mt-32 mb-20 text-sm md:text-base">
        <section className="mb-16">
        <h1 className="font-medium text-black mb-6">Zoe Meng</h1>
          <p className="text-gray-600 leading-relaxed mb-4">
            Senior Frontend Engineer. Building performant software and web experiences. 
          </p>
          <p className="text-gray-600 leading-relaxed">
            Based in Fremont, California.
          </p>
      </section>
    </main>

  );
}
