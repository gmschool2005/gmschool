export default function ComingSoon() {
  
  return (

    <>
    <section className="relative overflow-hidden bg-gradient-to-r from-[#082C6C] via-[#0D3B8E] to-[#164DA8] py-10 text-white">
  {/* Decorative Elements */}
  <div className="absolute inset-0">
    <div className="absolute left-0 top-0 h-24 w-24 rounded-full bg-white/5 blur-3xl" />
    <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-6xl px-6 lg:px-12">
    <div className="text-center">
      <span className="inline-flex items-center rounded-full border border-[#D4AF37]/40 bg-white/10 px-3 py-1 text-xs font-medium text-[#F7D774] backdrop-blur-sm">
        Online
      </span>

      <h1 className="mt-3 text-3xl font-bold tracking-wide md:text-4xl">
        Apply Online
      </h1>

      <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#D4AF37]" />
    </div>
  </div>
</section>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-6">
      
     
      <div className="max-w-2xl text-center">
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          We Will Update Soon
        </h1>

        {/* Description */}
        <p className="text-lg text-slate-600 leading-relaxed mb-8">
          This section is currently under development. We are working hard to
          bring you updated information and exciting new content.
        </p>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-blue-700 font-medium">
          <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
          Updating Content
        </div>
      </div>
    </div>
    </>
  );
}