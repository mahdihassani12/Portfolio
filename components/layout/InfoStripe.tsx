export default function InfoStrip() {
    return (
        <section className="w-full border border-black">
            <div className="grid grid-cols-1 md:grid-cols-3">
                {/* Item 1 */}
                <div className="flex items-center gap-4 p-[50px] text-center md:text-left md:justify-center border-b md:border-b-0 md:border-r border-black">
                    <div className="text-pink-500 text-4xl">✳</div>
                    <div>
                        <p className="text-base text-slate-600">
                            Need Any Consultations
                        </p>
                        <p className="text-lg font-semibold text-slate-900">
                            Call: +93 780088163
                        </p>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-center gap-4 p-[50px] text-center md:text-left md:justify-center border-b md:border-b-0 md:border-r border-black">
                    <div className="text-pink-500 text-4xl">✳</div>
                    <div>
                        <p className="text-base text-slate-600">
                            Email Address
                        </p>
                        <p className="text-lg font-semibold text-slate-900">
                            hassanim430@gmail.com
                        </p>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-center gap-4 p-[50px] text-center md:text-left md:justify-center">
                    <div className="text-pink-500 text-4xl">✳</div>
                    <div>
                        <p className="text-base text-slate-600">
                            Office Locations
                        </p>
                        <p className="text-lg font-semibold text-slate-900">
                            Herat, Afghanistan
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
