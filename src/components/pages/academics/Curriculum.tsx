import {
  GraduationCap,
  BookOpen,
  Brain,
  Award,
  ClipboardCheck,
  Users,
  ArrowRight,
  School,
} from "lucide-react";

const academicLevels = [
  {
    title: "Primary Wing",
    classes: "Classes I - V",
    description:
      "A strong foundation in literacy, numeracy, creativity, and life skills through engaging and activity-based learning.",
  },
  {
    title: "Middle Wing",
    classes: "Classes VI - VIII",
    description:
      "Expanding conceptual understanding while nurturing analytical thinking, communication, and collaboration skills.",
  },
  
];

const features = [
  {
    icon: Brain,
    title: "Concept-Based Learning",
    description:
      "Encouraging deep understanding rather than rote memorization.",
  },
  {
    icon: Users,
    title: "Student-Centric Approach",
    description:
      "Interactive classrooms designed to engage and inspire learners.",
  },
  {
    icon: ClipboardCheck,
    title: "Continuous Assessment",
    description:
      "Regular evaluations to monitor progress and support improvement.",
  },
  {
    icon: Award,
    title: "Holistic Development",
    description:
      "Balancing academics, values, leadership, sports, and creativity.",
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
  "Physical Education",
  "Art & Craft",
  "Music & Performing Arts",
];

const stats = [
  { value: "CBSE", label: "National Curriculum" },
  { value: "100%", label: "Academic Focus" },
  { value: "21st", label: "Century Skills" },
  { value: "360°", label: "Student Development" },
];

export default function Curriculums() {
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
               Academic Excellence
            </span>

            <h1 className="mt-3 text-3xl font-bold tracking-wide md:text-4xl">
            CBSE
              <span className="text-[#D4AF37]"> Curriculum</span>
            </h1>

            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#D4AF37]" />

            <p className="mx-auto mt-3 max-w-xl text-sm text-blue-100">
              A structured and progressive academic framework designed in
              accordance with the Central Board of Secondary Education (CBSE),
              fostering knowledge, values, critical thinking, and lifelong
              learning.
            </p>
          </div>
        </div>
      </section>
    

      {/* Gold Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>

      {/* Curriculum Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-[#B22222] font-semibold uppercase tracking-wider">
                Curriculum Framework
              </span>

              <h2 className="mt-4 text-4xl font-bold text-[#082C6C]">
                Learning Aligned With CBSE Standards
              </h2>

              <div className="mt-5 h-1 w-24 bg-[#D4AF37] rounded-full"></div>

              <p className="mt-6 text-gray-600 leading-relaxed">
                Our curriculum follows the CBSE framework, emphasizing
                conceptual clarity, academic excellence, values education,
                creativity, communication, and practical application of
                knowledge.
              </p>

              <p className="mt-5 text-gray-600 leading-relaxed">
                Through a balanced blend of academics, co-curricular activities,
                skill development, and experiential learning, students are
                prepared to excel both in examinations and in life.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-10 shadow-xl border border-gray-100">
              <School className="text-[#082C6C]" size={50} />

              <h3 className="mt-6 text-2xl font-bold text-[#082C6C]">
                Educational Objectives
              </h3>

              <ul className="mt-6 space-y-4 text-gray-600">
                <li>• Academic Excellence & Conceptual Understanding</li>
                <li>• Critical Thinking & Problem Solving</li>
                <li>• Character Building & Ethical Values</li>
                <li>• Leadership & Communication Skills</li>
                <li>• Innovation & Creativity</li>
                <li>• National & Global Awareness</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Structure */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#082C6C]">
              Academic Structure
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 bg-[#D4AF37] rounded-full"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {academicLevels.map((level, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <GraduationCap
                  className="text-[#082C6C] mb-5"
                  size={42}
                />

                <h3 className="text-xl font-bold text-[#082C6C]">
                  {level.title}
                </h3>

                <p className="mt-2 text-[#B22222] font-semibold">
                  {level.classes}
                </p>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {level.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#082C6C]">
              Our Learning Approach
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 bg-[#D4AF37] rounded-full"></div>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="rounded-3xl bg-white p-8 shadow-lg border-t-4 border-[#D4AF37]"
                >
                  <Icon className="text-[#082C6C]" size={42} />

                  <h3 className="mt-5 text-xl font-bold text-[#082C6C]">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {feature.description}
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

            <div className="mx-auto mt-4 h-1 w-24 bg-[#D4AF37] rounded-full"></div>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {subjects.map((subject, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-5 shadow-md text-center font-semibold text-[#082C6C]"
              >
                <BookOpen className="mx-auto mb-3" size={24} />
                {subject}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-white">
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

                <p className="mt-3 text-gray-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission CTA */}
      <section className="bg-gradient-to-r from-[#082C6C] to-[#164DA8] py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">
            Building Future-Ready Learners
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-blue-100">
            Our CBSE curriculum nurtures intellectual growth, creativity,
            discipline, and leadership, preparing students for success in a
            rapidly evolving world.
          </p>

          <button className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#B22222] px-8 py-4 font-semibold text-white shadow-xl transition hover:scale-105">
            Explore Admissions
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}