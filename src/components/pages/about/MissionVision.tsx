import { Award, BookOpen, Target, Eye, Star, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";


export default function MissionVision() {
  return (
    <div className="bg-white">
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
              OUR FOUNDATION
            </span>

            <h1 className="mt-3 text-3xl font-bold tracking-wide md:text-4xl">
              Mission & Vision
            </h1>

            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#D4AF37]" />

            <p className="mx-auto mt-3 max-w-xl text-sm text-blue-100">
              Building responsible citizens, nurturing excellence, and inspiring
              lifelong learners through quality education, strong values, and a
              commitment to holistic development.
            </p>
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="flex justify-center py-10 bg-white">
        <div className="w-40 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
      </div>

      {/* Mission & Vision Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Mission */}
          <div className="bg-white rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-blue-50 overflow-hidden">
            <div className="bg-[#082C6C] px-8 py-6 flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-[#D4AF37] flex items-center justify-center">
                <Target className="h-7 w-7 text-[#082C6C]" />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                <p className="text-blue-200 text-sm">
                  Purpose that drives every step
                </p>
              </div>
            </div>

            <div className="p-8">
              <p className="text-gray-700 leading-8 text-lg">
                Our mission is to provide a nurturing, inclusive, and inspiring
                learning environment where every student is empowered to achieve
                academic excellence, develop strong character, and become a
                responsible global citizen.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Deliver quality education with modern teaching practices.",
                  "Promote integrity, discipline, and respect for all.",
                  "Encourage creativity, innovation, and critical thinking.",
                  "Develop leadership and social responsibility.",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-blue-50"
                  >
                    <Star className="h-5 w-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-blue-50 overflow-hidden">
            <div className="bg-gradient-to-r from-[#0D3B8E] to-[#164DA8] px-8 py-6 flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-[#D4AF37] flex items-center justify-center">
                <Eye className="h-7 w-7 text-[#082C6C]" />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
                <p className="text-blue-200 text-sm">
                  Aspiration for the future
                </p>
              </div>
            </div>

            <div className="p-8">
              <p className="text-gray-700 leading-8 text-lg">
                Our vision is to be a leading educational institution that
                inspires excellence, cultivates values, and prepares students to
                thrive confidently in an ever-changing world while contributing
                positively to society.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Create future-ready learners with strong foundations.",
                  "Foster innovation and lifelong learning.",
                  "Build compassionate and ethical leaders.",
                  "Achieve excellence in academics and co-curricular activities.",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-blue-50"
                  >
                    <Star className="h-5 w-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#082C6C]">
              Core Values
            </h2>

            <div className="w-28 h-1 bg-[#D4AF37] mx-auto mt-5 rounded-full"></div>

            <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg">
              The principles that shape our culture, guide our decisions, and
              inspire our students every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Academic Excellence",
                text: "Commitment to high educational standards and continuous improvement.",
              },
              {
                icon: GraduationCap,
                title: "Lifelong Learning",
                text: "Encouraging curiosity, growth, and intellectual development.",
              },
              {
                icon: Award,
                title: "Integrity",
                text: "Promoting honesty, ethics, responsibility, and respect.",
              },
              {
                icon: Target,
                title: "Leadership",
                text: "Preparing students to lead confidently and serve society.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#D4AF37] hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="h-16 w-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                  <value.icon className="h-8 w-8 text-[#082C6C]" />
                </div>

                <h3 className="text-xl font-bold text-[#082C6C] mb-3">
                  {value.title}
                </h3>

                <p className="text-gray-600 leading-7">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#082C6C] to-[#164DA8] rounded-3xl p-10 md:p-14 text-center shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-52 h-52 border border-white rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 border border-white rounded-full"></div>
            </div>


            <div className="relative py-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Shaping Young Minds for a Brighter Tomorrow
              </h2>

              <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-3 rounded-full"></div>

              <p className="mt-4 text-blue-100 max-w-2xl mx-auto text-base md:text-lg leading-7">
                We believe education is not just about academic achievement but
                about building confident, compassionate, and responsible
                individuals ready to make a positive difference in the world.
              </p>

              <Link
                to="/"
                className="inline-block mt-8 px-8 py-4 bg-[#B91C1C] hover:bg-red-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
              >
                Explore Our School
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}