export default function Hero() {
    return (
        <section className="min-h-[400px] flex items-center py-0 sm:py-[90px]">
            <div className="container mx-auto px-0 sm:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    {/* Badge */}
                    <span className="inline-block mb-4 sm:mb-6 rounded-lg bg-violet-600 px-3 py-1.5 text-xs sm:text-sm font-semibold text-white">
                        Full Stack Developer
                    </span>

                    {/* Heading */}
                    <h1 className="
            mb-4 sm:mb-6
            text-2xl sm:text-4xl md:text-5xl lg:text-6xl
            font-extrabold leading-tight text-slate-900
          ">
                        I Build Modern <br />
                        Web Applications
                    </h1>

                    {/* Description */}
                    <p className="
            mb-6 sm:mb-8
            text-sm sm:text-base md:text-lg
            leading-relaxed text-slate-600
          ">
                        I’m a full stack developer specializing in building scalable,
                        high-performance web applications using modern technologies.
                        From clean user interfaces to robust backend systems, I turn
                        ideas into reliable digital products.
                    </p>

                    {/* CTA */}
                    <button className="
            inline-flex items-center gap-2
            rounded-md bg-pink-500
            px-6 py-3 sm:px-8 sm:py-4
            text-xs sm:text-sm
            font-semibold text-white
            transition hover:bg-pink-600
          ">
                        Discover More
                        <span aria-hidden>→</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
