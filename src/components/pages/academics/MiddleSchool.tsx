import {
  BookOpen,
  Brain,
  Microscope,
  Globe,
  Users,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const programs = [
  {
    icon: Brain,
    title: "Critical Thinking",
    description:
      "Developing analytical and problem-solving skills through inquiry-based learning and classroom discussions.",
  },
  {
    icon: Microscope,
    title: "STEM Education",
    description:
      "Hands-on scientific exploration and mathematical reasoning to build future-ready learners.",
  },
  {
    icon: Globe,
    title: "Global Awareness",
    description:
      "Encouraging awareness of social, cultural, and environmental issues through collaborative learning.",
  },
  {
    icon: Users,
    title: "Leadership Development",
    description:
      "Building confidence, teamwork, responsibility, and communication skills through school activities.",
  },
];

const subjects = [
  "English",
  "Hindi",
  "Mathematics",
  "Science",
  "Social Science",
  "Computer Science",
  "General Knowledge",
  "Art Education",
  "Physical Education",
];

const highlights = [
  "CBSE-Aligned Academic Framework",
  "Smart Classroom Learning",
  "Project & Activity-Based Teaching",
  "Science & Computer Laboratories",
  "Regular Assessments & Feedback",
  "Sports & Co-Curricular Development",
];

const stats = [
  {
    value: "VI-VIII",
    label: "Classes Covered",
  },
  {
    value: "9+",
    label: "Core Subjects",
  },
  {
    value: "360°",
    label: "Student Development",
  },
  {
    value: "CBSE",
    label: "Academic Framework",
  },
];

export default function MiddleSchool() {
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
               Classes VI – VIII
            </span>

            <h1 className="mt-3 text-3xl font-bold tracking-wide md:text-4xl">
             Middle School
            </h1>

            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#D4AF37]" />

            <p className="mx-auto mt-3 max-w-xl text-sm text-blue-100">
              The Middle School years represent an important stage of academic,
              intellectual, and personal growth. Our curriculum encourages
              curiosity, critical thinking, collaboration, and responsible
              citizenship while preparing students for future academic success.
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
                Academic Foundation
              </span>

              <h2 className="mt-4 text-4xl font-bold text-[#082C6C]">
                Building Knowledge, Skills & Character
              </h2>

              <div className="mt-5 h-1 w-24 rounded-full bg-[#D4AF37]" />

              <p className="mt-6 text-gray-600 leading-relaxed">
                The Middle School programme bridges foundational learning and
                advanced academic preparation. Students are encouraged to
                explore concepts deeply, ask meaningful questions, and develop
                independent learning habits.
              </p>

              <p className="mt-5 text-gray-600 leading-relaxed">
                Through a balanced approach combining academics, co-curricular
                activities, leadership opportunities, and life skills, students
                develop confidence and readiness for the challenges of secondary
                education.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/images/middle-school.jpg"
                alt="Middle School Students"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white p-8 text-center shadow-lg border-t-4 border-[#D4AF37]"
              >
                <h3 className="text-4xl font-bold text-[#082C6C]">
                  {item.value}
                </h3>

                <p className="mt-3 text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Programs */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#082C6C]">
              Learning Approach
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-[#D4AF37]" />

            <p className="mt-6 max-w-3xl mx-auto text-gray-600">
              Our Middle School curriculum combines academic excellence with
              innovation, creativity, and holistic development.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {programs.map((program, index) => {
              const Icon = program.icon;

              return (
                <div
                  key={index}
                  className="rounded-3xl bg-white p-8 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#082C6C] text-white">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#082C6C]">
                    {program.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {program.description}
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

      {/* Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/images/classroom-learning.jpg"
                alt="Classroom Learning"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <span className="text-[#B22222] font-semibold uppercase tracking-wider">
                Academic Highlights
              </span>

              <h2 className="mt-4 text-4xl font-bold text-[#082C6C]">
                Excellence Beyond The Classroom
              </h2>

              <div className="mt-5 h-1 w-24 rounded-full bg-[#D4AF37]" />

              <div className="mt-8 space-y-5">
                {highlights.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <CheckCircle2
                      className="text-[#D4AF37] flex-shrink-0 mt-1"
                      size={22}
                    />

                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Section */}
      <section className="bg-[#082C6C] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <GraduationCap
            size={60}
            className="mx-auto text-[#D4AF37]"
          />

          <h2 className="mt-6 text-4xl font-bold">
            Preparing Students for Secondary School
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-blue-100 leading-relaxed">
            Through academic excellence, leadership opportunities, and holistic
            development, our Middle School programme equips students with the
            confidence, knowledge, and skills required for future success.
          </p>

          <button className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#B22222] px-8 py-4 font-semibold text-white shadow-xl hover:scale-105 transition">
            Learn More
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}