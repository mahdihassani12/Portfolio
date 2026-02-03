import { Code, Layout, Server, ShieldCheck, ArrowRight } from "lucide-react";

const Services = () => {
    return (
        <section className="min-h-[400px]  py-0 sm:py-[90px] flex items-center justify-center">
            <div className="container mx-auto px-4 sm:px-6 text-center flex flex-col items-center">

                {/* Badge */}
                <span className="mb-4 sm:mb-6 inline-block rounded-lg bg-violet-600 px-4 py-1.5 text-xs sm:text-sm font-semibold text-white">
                    My Services
                </span>

                {/* Heading */}
                <h1 className="
                    max-w-3xl
                    text-2xl sm:text-3xl lg:text-4xl
                    font-extrabold leading-tight text-slate-900
                ">
                    Outsmart the competition with best-in-class
                    SEO marketing services
                </h1>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full my-8">

                    {/* Card 1 */}
                    <div className="rounded-2xl bg-white p-8 text-left shadow-md hover:shadow-xl transition">
                        <Code className="mb-6 h-10 w-10 text-violet-600" />
                        <h3 className="mb-3 text-lg font-bold text-slate-900">
                            Web Development
                        </h3>
                        <p className="mb-6 text-sm text-slate-600 leading-relaxed">
                            Modern, scalable, and high-performance web applications built with best practices.
                        </p>
                        <button className="flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-violet-600 transition">
                            Read More <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Card 2 */}
                    <div className="rounded-2xl bg-white p-8 text-left shadow-md hover:shadow-xl transition">
                        <Layout className="mb-6 h-10 w-10 text-violet-600" />
                        <h3 className="mb-3 text-lg font-bold text-slate-900">
                            UI / UX Engineering
                        </h3>
                        <p className="mb-6 text-sm text-slate-600 leading-relaxed">
                            Pixel-perfect, user-focused interfaces that improve engagement and conversions.
                        </p>
                        <button className="flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-violet-600 transition">
                            Read More <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Card 3 */}
                    <div className="rounded-2xl bg-white p-8 text-left shadow-md hover:shadow-xl transition">
                        <Server className="mb-6 h-10 w-10 text-violet-600" />
                        <h3 className="mb-3 text-lg font-bold text-slate-900">
                            Backend Systems
                        </h3>
                        <p className="mb-6 text-sm text-slate-600 leading-relaxed">
                            Secure APIs, databases, and scalable architectures powering your applications.
                        </p>
                        <button className="flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-violet-600 transition">
                            Read More <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Card 4 */}
                    <div className="rounded-2xl bg-white p-8 text-left shadow-md hover:shadow-xl transition">
                        <ShieldCheck className="mb-6 h-10 w-10 text-violet-600" />
                        <h3 className="mb-3 text-lg font-bold text-slate-900">
                            Security & Optimization
                        </h3>
                        <p className="mb-6 text-sm text-slate-600 leading-relaxed">
                            Performance tuning, security audits, and best-practice hardening.
                        </p>
                        <button className="flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-violet-600 transition">
                            Read More <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Services
