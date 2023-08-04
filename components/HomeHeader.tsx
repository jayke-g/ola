import Link from "next/link";

export default function HomeHeader() {
  return (
    <section className="p-6 text-4xl font-normal">
      <div className="pb-4 flex flex-row justify-between">
        <div className="w-[475px]">
          Oleksandra Gubkina is a graphic designer from Ukraine based in Sydney,
          Australia. She works with brand identities and social media content.
        </div>
        <div className="w-[200px] flex flex-col justify-end hover:cursor-pointer">
          <Link href="https://prytulafoundation.org/en" target="_blank">
            <img src="/ola-home.svg" alt="ola logo" />
          </Link>
        </div>
      </div>
      <div className="border border-black"></div>
      <div className="py-4 flex flex-col items-start">
        <div className="pb-4 hover:underline">
          <a href="https://www.instagram.com/sasha_ga/" target="_blank">
            @sasha_ga
          </a>
        </div>
        <div className="hover:underline">
          <Link href="/resume.pdf" target="_blank">
            RESUME
          </Link>
        </div>
        <div className="hover:underline">
          <Link href="/about">ABOUT</Link>
        </div>
        <div className="hover:underline">
          <Link href="/contact">CONTACT</Link>
        </div>
      </div>

      <div className="border border-black"></div>
    </section>
  );
}
