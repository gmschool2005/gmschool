export default function SchoolTiming() {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#082C6C] via-[#0D3B8E] to-[#164DA8] py-10 text-white">
  {/* Decorative Elements */}
  <div className="absolute inset-0">
    <div className="absolute left-0 top-0 h-24 w-24 rounded-full bg-white/5 blur-3xl" />
    <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-6xl px-6 lg:px-12">
    <div className="text-center">
      <span className="inline-flex items-center rounded-full border border-[#D4AF37]/40 bg-white/10 px-3 py-1 text-xs font-medium text-[#F7D774] backdrop-blur-sm">
        Academic Information
      </span>

      <h1 className="mt-3 text-3xl font-bold tracking-wide md:text-4xl">
        School Timing
      </h1>

      <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#D4AF37]" />

      <p className="mx-auto mt-3 max-w-xl text-sm text-blue-100">
       Structured learning hours designed to support academic excellence,
          discipline, and holistic student development.
      </p>
    </div>
  </div>
</section>


      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          {/* Timing Card */}
          <div className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#082C6C] to-[#0D3B8E] px-8 py-8 text-center text-white">
              <h2 className="text-3xl font-bold">Regular School Hours</h2>
              <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#D4AF37]"></div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              <div className="grid gap-8 md:grid-cols-2">
                {/* Time Card */}
                <div className="rounded-2xl border border-blue-100 bg-slate-50 p-8 text-center shadow-md">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#0D3B8E] text-3xl text-white">
                    🕒
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-[#082C6C]">
                    School Timing
                  </h3>

                  <div className="mx-auto mb-5 h-1 w-14 rounded-full bg-[#D4AF37]"></div>

                  <p className="text-3xl font-bold text-[#C8102E]">
                    9:00 AM – 2:30 PM
                  </p>
                </div>

                {/* Information Card */}
                <div className="rounded-2xl border border-blue-100 bg-slate-50 p-8 shadow-md">
                  <h3 className="mb-4 text-xl font-semibold text-[#082C6C]">
                    Important Note
                  </h3>

                  <div className="mb-5 h-1 w-14 rounded-full bg-[#D4AF37]"></div>

                  <p className="leading-relaxed text-slate-700">
                    The school follows a well-planned academic schedule to
                    ensure effective learning and overall student development.
                    Parents and students are encouraged to maintain punctuality
                    and regular attendance.
                  </p>

                  <div className="mt-6 rounded-xl border-l-4 border-[#C8102E] bg-red-50 p-4">
                    <p className="text-sm font-medium text-slate-700">
                      Timings may vary depending on seasonal conditions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="mt-12 rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-r from-[#FFF9E8] to-white p-8">
                <h3 className="mb-4 text-center text-2xl font-bold text-[#082C6C]">
                  Commitment to Excellence
                </h3>

                <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-[#D4AF37]"></div>

                <p className="mx-auto max-w-4xl text-center leading-relaxed text-slate-700">
                  At G.M. English School, every school day is carefully
                  structured to foster academic achievement, discipline, and
                  character development. Our schedule is designed to maximize
                  learning opportunities while maintaining a healthy balance for
                  students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}