import Link from "next/link";

export default function Footer() {
  return (
    <section className="bg-no-repeat bg-cover bg-[url('/bg-footer.png')] h-[270px] text-white text-4xl">
      <div className="p-6 pt-14">
        <div className="pb-4 flex flex-row justify-between">
          <div className="flex flex-col-reverse hover:cursor-pointer">
            <Link href="/">
              <img src="/ola-footer.svg" alt="ola logo" className="w-20" />
            </Link>
          </div>
          <div className="flex flex-col items-start">
            <div className="hover:underline">
              <Link href="/resume.pdf" target="_blank" download>
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
        </div>
        <div className="border border-white"></div>
      </div>
    </section>
  );
}