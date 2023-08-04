import Link from "next/link";

export default function ContentHeader() {
  return (
    <section>
      <div className="flex flex-row-reverse">
        <Link href="/">
          <img src="/logos/ola-content.svg" alt="ola logo" className="w-20"/>
        </Link>
      </div>
      <div className="border border-black"></div>
    </section>
  );
}
