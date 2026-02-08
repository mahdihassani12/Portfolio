const About = () => {
    return (
        <section className="
            min-h-[400px]
            flex items-center justify-center
            px-6
            border-t border-b border-black
        ">
            <div className="flex flex-col md:flex-row w-full max-w-7xl">

                {/* Left Column – Image */}
                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <img
                        src="/growing.png"
                        alt="Growing illustration"
                        className="w-full max-w-md object-contain"
                    />
                </div>

                {/* Right Column – Content (middle border + padding) */}
                <div className="
                    w-full md:w-1/2
                    border-l border-black
                    px-10
                    py-[90px]
                ">
                    {/* Badge */}
                    <span className="inline-block mb-4 rounded-lg bg-violet-600 px-4 py-1.5 text-sm font-semibold text-white">
                        Learn About Me
                    </span>

                    {/* Heading */}
                    <h1 className="
                        mb-4
                        text-2xl sm:text-3xl md:text-4xl
                        font-extrabold leading-tight text-slate-900
                    ">
                        Get a Digital Marketing Plan that Drives Revenue.
                    </h1>

                    {/* Description */}
                    <p className="
                        text-base md:text-lg
                        leading-relaxed text-slate-600
                    ">
                        Drive more leads, sales, and revenue for your business with digital marketing services from WebFX, a full-service digital marketing agency that’s helped small-to-midsized businesses generate more than $3 billion in revenue from strategies like SEO, PPC, web design, and more.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default About
