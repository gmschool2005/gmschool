import { Award } from "lucide-react";

export default function MissionVision() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#082C6C] via-[#0D3B8E] to-[#164DA8] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 h-32 w-32 rounded-full border border-white"></div>
          <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full border border-white"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full border border-white/20 mb-6">
            <Award className="h-5 w-5 text-yellow-300" />
            <span className="text-sm tracking-wide uppercase">
              Our Foundation
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Contact Us
          </h1>

          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-300 mx-auto mt-6 rounded-full"></div>

          <p className="max-w-3xl mx-auto mt-8 text-lg md:text-xl text-blue-100 leading-relaxed">
            Building responsible citizens, nurturing excellence, and inspiring
            lifelong learners through quality education, strong values, and a
            commitment to holistic development.
          </p>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="flex justify-center py-10 bg-white">
        <div className="w-40 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
      </div>
      
    </div>
  );
}