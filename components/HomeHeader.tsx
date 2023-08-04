import Link from "next/link";

export default function HomeHeader() {
  return (
    <section className="p-6 text-4xl font-normal">
      <div className="pb-4 flex flex-row justify-end sm:justify-between">
        <div className="w-[475px] hidden sm:block">
          <Link href="/contact" className="hover:underline">
            Oleksandra Gubkina
          </Link>{" "}
          is a graphic designer from Ukraine based in Sydney, Australia. She
          works with brand identities and social media content.
        </div>
        <div className="w-20 flex flex-row-reverse sm:w-[200px] sm:flex sm:flex-col justify-end hover:cursor-pointer">
          <Link href="https://prytulafoundation.org/en" target="_blank">
            <img src="/logos/ola-home.svg" alt="ola logo" />
          </Link>
        </div>
      </div>
      <div className="border border-black"></div>
      <div className="py-4 flex flex-col items-start">
        <div className="pb-4 hover:underline">
          <Link href="https://www.instagram.com/sasha_ga/" target="_blank">
            @sasha_ga
          </Link>
        </div>
        <div className="hover:underline">
          <Link href="/files/Gubkina_designer_CV.pdf" target="_blank">
            RESUME
          </Link>
        </div>
        <div className="hover:underline">
          <Link href="https://www.behance.net/olala" target="_blank">
            BEHANCE
          </Link>
        </div>
        <div className="hover:underline">
          <Link href="/contact">CONTACT</Link>
        </div>
      </div>
      <div className="border border-black"></div>
    </section>
  );
}
