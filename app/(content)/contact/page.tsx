export default function ContactPage() {
  return (
    <section className="text-[1.3rem] sm:text-4xl">
      <div className="flex justify-center items-center">
        <img
          src="/images/ola-contact.png"
          alt="picture of oleksandra"
          className="w-[650px]"
        />
      </div>
      <div>
        <div className="border border-black"></div>
        <div className="py-2 flex flex-row justify-between">
          <div>PHONE: 0478 505 460</div>
          <img
            className="hidden sm:block w-5 sm:w-7 md:w-10"
            src="/images/arrow-up.svg"
            alt="arrow up"
          />
        </div>
        <div className="border border-black"></div>
        <div className="py-2">&nbsp;</div>
        <div className="border border-black"></div>
        <div className="py-2 flex flex-row justify-between">
          
          <img
            className="hidden sm:block w-5 sm:w-7 md:w-10"
            src="/images/arrow-up.svg"
            alt="arrow up"
          />
          <div className="sm:hidden"></div>
          <div>EMAIL: GUBKINAA11@GMAIL.COM</div>
        </div>
        <div className="border border-black"></div>
        <div className="py-2">&nbsp;</div>
        <div className="border border-black"></div>
        <div className="py-2">&nbsp;</div>
        <div className="border border-black"></div>
      </div>
    </section>
  );
}
