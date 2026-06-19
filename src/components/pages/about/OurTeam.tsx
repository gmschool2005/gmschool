import {
  Users,
  GraduationCap,
  BookOpen,
  Award,
  Mail,
} from "lucide-react";

const teachers = [
  {
    name: "Mrs. Anjali Sharma",
    subject: "English",
    qualification: "M.A., B.Ed.",
    experience: "12 Years Experience",
  },
  {
    name: "Mr. Rajesh Kumar",
    subject: "Mathematics",
    qualification: "M.Sc., B.Ed.",
    experience: "15 Years Experience",
  },
  {
    name: "Mrs. Priya Singh",
    subject: "Science",
    qualification: "M.Sc., B.Ed.",
    experience: "10 Years Experience",
  },
  {
    name: "Mr. Amit Verma",
    subject: "Computer Science",
    qualification: "MCA, B.Ed.",
    experience: "8 Years Experience",
  },
  {
    name: "Mrs. Neha Sinha",
    subject: "Social Science",
    qualification: "M.A., B.Ed.",
    experience: "11 Years Experience",
  },
  {
    name: "Mr. Vikash Kumar",
    subject: "Hindi",
    qualification: "M.A., B.Ed.",
    experience: "9 Years Experience",
  },
  {
    name: "Mrs. Poonam Gupta",
    subject: "Primary Coordinator",
    qualification: "M.Ed.",
    experience: "14 Years Experience",
  },
  {
    name: "Mr. Sandeep Mishra",
    subject: "Physical Education",
    qualification: "B.P.Ed., M.P.Ed.",
    experience: "7 Years Experience",
  },
];

export default function OurTeam() {
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
              Dedicated Faculty & Staff
            </span>

            <h1 className="mt-3 text-3xl font-bold tracking-wide md:text-4xl">
              Meet Our Team
            </h1>

            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#D4AF37]" />

            <p className="mx-auto mt-3 max-w-xl text-sm text-blue-100">
              Our experienced and passionate educators are committed to nurturing
              academic excellence, character development, creativity, and
              leadership among students.
            </p>
          </div>
        </div>
      </section>


      {/* Faculty Introduction */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Team Image */}
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-3xl opacity-20 blur-xl"></div>

            <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-yellow-400">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Teaching Faculty"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-50 border border-yellow-300 text-[#082C6C] mb-5">
              <GraduationCap className="w-5 h-5 text-yellow-600" />
              <span className="font-semibold">Academic Excellence</span>
            </div>

            <h2 className="text-4xl font-bold text-[#082C6C] mb-6">
              Inspiring Minds, Building Futures
            </h2>

            <div className="w-24 h-1 bg-yellow-500 rounded-full mb-8"></div>

            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Our faculty consists of highly qualified educators with extensive
              experience in their respective disciplines. They continuously
              update their teaching methodologies to provide engaging,
              student-centered learning experiences.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg mb-8">
              Beyond academics, our teachers serve as mentors, guiding students
              toward confidence, discipline, integrity, and lifelong learning.
            </p>

            <div className="grid grid-cols-2 gap-5">
              <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
                <Award className="w-8 h-8 text-[#082C6C] mb-3" />
                <h3 className="font-bold text-[#082C6C]">Qualified Faculty</h3>
                <p className="text-sm text-gray-600">
                  Experienced and trained educators.
                </p>
              </div>

              <div className="bg-yellow-50 rounded-2xl p-5 border border-yellow-200">
                <BookOpen className="w-8 h-8 text-yellow-700 mb-3" />
                <h3 className="font-bold text-[#082C6C]">
                  Modern Teaching
                </h3>
                <p className="text-sm text-gray-600">
                  Innovative and interactive learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      </div>

      {/* Faculty Members */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082C6C]">
            Our Esteemed Faculty Members
          </h2>

          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            A team of dedicated professionals committed to academic excellence,
            student success, and holistic development.
          </p>
        </div>

        <div className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-gray-200">
          <table className="w-full">
            <thead>
              <tr className="bg-[#082C6C] text-white">
                <th className="px-6 py-4 text-left font-semibold">S. No.</th>
                <th className="px-6 py-4 text-left font-semibold">Teacher Name</th>
                <th className="px-6 py-4 text-left font-semibold">Designation</th>
                <th className="px-6 py-4 text-left font-semibold">Qualification</th>
              </tr>
            </thead>

            <tbody>
              {teachers.map((teacher, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-blue-50 transition-colors"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4 font-medium text-[#082C6C]">
                    {teacher.name}
                  </td>
                  <td className="px-6 py-4">{teacher.subject}</td>
                  <td className="px-6 py-4">{teacher.qualification}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#082C6C] text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-400/40 bg-white/10 mb-6">
            <Award className="w-4 h-4 text-yellow-400" />
            <span>Committed to Student Success</span>
          </div>

          <h2 className="text-4xl font-bold mb-6">
            Excellence Through Dedicated Educators
          </h2>

          <div className="w-32 h-1 bg-yellow-400 mx-auto rounded-full mb-8"></div>

          <p className="text-blue-100 text-lg leading-relaxed max-w-3xl mx-auto">
            Our teachers are the backbone of our institution, shaping future
            leaders through knowledge, values, discipline, and innovation.
          </p>

          <button className="mt-10 bg-red-600 hover:bg-red-700 transition-colors px-8 py-4 rounded-xl font-semibold shadow-lg">
            Contact Our Academic Team
          </button>
        </div>
      </section>
    </div>
  );
}