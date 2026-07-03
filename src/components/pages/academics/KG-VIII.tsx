import {
  BookOpen,
  Pencil,
  Palette,
  Music,
  HeartHandshake,
  Lightbulb,
  Star,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import {Link} from "react-router-dom";

const learningAreas = [
  {
    icon: BookOpen,
    title: "Literacy Development",
    description:
      "Building strong reading, writing, speaking, and comprehension skills through engaging classroom experiences.",
  },
  {
    icon: Pencil,
    title: "Numeracy Skills",
    description:
      "Developing mathematical understanding through hands-on activities, exploration, and problem-solving.",
  },
  {
    icon: Lightbulb,
    title: "Creative Thinking",
    description:
      "Encouraging curiosity, imagination, and independent thinking through innovative learning experiences.",
  },
  {
    icon: HeartHandshake,
    title: "Values & Character",
    description:
      "Instilling responsibility, respect, empathy, discipline, and positive social behavior.",
  },
];

const subjects = [
  "English",
  "Hindi",
  "Mathematics",
  "Environmental Studies",
  "Computer Awareness",
  "General Knowledge",
  "Art & Craft",
  "Music",
  "Physical Education",
  "Urdu",
  "Sanskrit"
];

const highlights = [
  "CBSE-Aligned Foundational Curriculum",
  "Activity-Based Learning Methodology",
  "Smart Classrooms & Interactive Teaching",
  "Individual Attention & Personal Growth",
  "Art, Music & Creative Expression",
  "Sports & Physical Development",
];

const stats = [
  {
    value: "KG - VIII",
    label: "Classes Covered",
  },
  {
    value: "9+",
    label: "Learning Areas",
  },
  {
    value: "100%",
    label: "Child-Centered Learning",
  },
  {
    value: "CBSE",
    label: "Curriculum Framework",
  },
];

export default function Primary() {
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
              Classes KG - VIII
            </span>

            <h1 className="mt-3 text-3xl font-bold tracking-wide md:text-4xl">
            School Classes
            </h1>

            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#D4AF37]" />

            <p className="mx-auto mt-3 max-w-xl text-sm text-blue-100">
              Our Primary School programme lays the foundation for lifelong
              learning by nurturing curiosity, creativity, confidence, and
              strong academic fundamentals within a caring and supportive
              environment.
            </p>
          </div>
        </div>
      </section>
      
      {/* Gold Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-[#B22222] font-semibold uppercase tracking-wider">
                Foundation Years
              </span>

              <h2 className="mt-4 text-4xl font-bold text-[#082C6C]">
                Building Strong Foundations For Future Success
              </h2>

              <div className="mt-5 h-1 w-24 rounded-full bg-[#D4AF37]" />

              <p className="mt-6 text-gray-600 leading-relaxed">
                The primary years are a critical stage in a child’s educational
                journey. Our curriculum is designed to foster intellectual,
                emotional, social, and physical development through meaningful
                and engaging learning experiences.
              </p>

              <p className="mt-5 text-gray-600 leading-relaxed">
                We create a joyful environment where students develop confidence,
                communication skills, creativity, and a love for learning while
                achieving academic excellence.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/images/gallery/img25.jpg"
                alt="Primary School Students"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white p-8 shadow-lg text-center border-t-4 border-[#D4AF37]"
              >
                <h3 className="text-4xl font-bold text-[#082C6C]">
                  {stat.value}
                </h3>

                <p className="mt-3 text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Areas */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#082C6C]">
              Learning Areas
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-[#D4AF37]" />

            <p className="mt-6 max-w-3xl mx-auto text-gray-600">
              Our curriculum focuses on developing well-rounded learners through
              academic excellence, creativity, and character building.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {learningAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <div
                  key={index}
                  className="rounded-3xl bg-white p-8 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#082C6C] text-white">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#082C6C]">
                    {area.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#082C6C]">
              Core Subjects
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-[#D4AF37]" />
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-6 shadow-md flex items-center gap-4"
              >
                <BookOpen
                  size={22}
                  className="text-[#082C6C] flex-shrink-0"
                />

                <span className="font-semibold text-[#082C6C]">
                  {subject}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/images/gallery/img27.jpg"
                alt="Primary Learning"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <span className="text-[#B22222] font-semibold uppercase tracking-wider">
                Educational Highlights
              </span>

              <h2 className="mt-4 text-4xl font-bold text-[#082C6C]">
                Learning Through Discovery & Participation
              </h2>

              <div className="mt-5 h-1 w-24 rounded-full bg-[#D4AF37]" />

              <div className="mt-8 space-y-5">
                {highlights.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <CheckCircle2
                      size={22}
                      className="text-[#D4AF37] mt-1 flex-shrink-0"
                    />

                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Co-Curricular Section */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#082C6C]">
              Beyond The Classroom
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-[#D4AF37]" />
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Palette,
                title: "Art & Craft",
              },
              {
                icon: Music,
                title: "Music & Performing Arts",
              },
              {
                icon: Star,
                title: "Sports & Recreation",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-3xl bg-white p-10 text-center shadow-lg"
                >
                  <Icon
                    size={50}
                    className="mx-auto text-[#082C6C]"
                  />

                  <h3 className="mt-6 text-xl font-bold text-[#082C6C]">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#082C6C] to-[#164DA8] py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <GraduationCap
            size={60}
            className="mx-auto text-[#D4AF37]"
          />

          <h2 className="mt-6 text-4xl font-bold">
            Inspiring Young Learners Every Day
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-blue-100 leading-relaxed">
            We nurture confident, curious, and compassionate learners through a
            balanced blend of academics, creativity, values, and experiential
            learning.
          </p>
           <Link to = "/contact">
          <button className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#B22222] px-8 py-4 font-semibold text-white shadow-xl hover:scale-105 transition">
            Explore Admissions
            <ArrowRight size={18} />
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
}