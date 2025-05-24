export default function LocationMap() {
  return (
    <section className="w-full py-10 border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36">
        <div className="relative pb-[56.25%] h-0 overflow-hidden w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7064.395177333446!2d85.323272!3d27.711185!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef740a066ed089%3A0xaf7934e44a7b1e17!2sSRIYOG!5e0!3m2!1sen!2snp!4v1743568477291!5m2!1sen!2snp"
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
