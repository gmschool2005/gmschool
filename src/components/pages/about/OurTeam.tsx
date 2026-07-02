import {
  GraduationCap,
  BookOpen,
  Award,
  Quote,
  Star,
} from "lucide-react";

import { Link } from "react-router-dom";

const principal = {
  name: "Mr. Rameshwar Singh",
  designation: "Principal",
  qualification: "B.Sc , B.Ed.",
  photo: "/images/gallery/principal.jpg",
  message:
    "Education is not just about academics, it is about shaping character, curiosity, and confidence. Every child who walks through our gates is nurtured to discover their fullest potential.",
};

const teachers = [
  {
    name: "Prithvi Raj Singh",
    subject: "Science & Mathematics",
    qualification: "B.Sc( Mathematics Hons. )",
    photo: "/images/gallery/tch1.jpg",
  },
  {
    name: "Saurabh Kumar",
    subject: "Mathematics & Social Science",
    qualification: "Graduate, D.El.Ed & CTET",
    photo: "/images/gallery/tch2.jpg",
  },
  {
    name: "Rahul Ojha",
    subject: "Computer",
    qualification: "Graduate & BSCIT",
    photo: "/images/gallery/tch3.jpg",
  },
  {
    name: "Sarfudeen Miyan",
    subject: "Sanskrit & Science",
    qualification: "Graduate, D.El.Ed & CTET",
    photo: "/images/gallery/tch4.jpg",
  },
  {
    name: "Sanjay Mishra",
    subject: "Hindi",
    qualification: "Post Graduate",
    photo: "/images/gallery/tch5.jpg",
  },
  {
    name: "Ranjan Chaubey",
    subject: "Social Science",
    qualification: "Graduate & D.El.Ed",
    photo: "/images/gallery/tch6.jpg",
  },
  {
    name: "Riti Kumari Barnwal",
    subject: "English",
    qualification: " Intermediate & D.El.Ed",
    photo: "/images/gallery/tch7.jpg",
  },
  {
    name: "Palak Kumari",
    subject: "General Knowledge",
    qualification: "Graduate",
    photo: "/images/gallery/tch8.jpg",
  },
  {
    name: "Shashi Bhushan Kumar",
    subject: "Social Science",
    qualification: "D.El.Ed & CTET",
    photo: "/images/gallery/tch9.jpg",
  },
  {
    name: "Sandeep Kumar",
    subject: "Hindi & Mathematics",
    qualification: "Graduate & D.El.Ed",
    photo: "/images/gallery/tch10.jpg",
  },
  {
    name: "Riya Kumari",
    subject: "Social Science",
    qualification: "Intermediate",
    photo: "/images/gallery/tch11.jpg",
  },
  {
    name: "Mohit Kumar",
    subject: "General Knowledge",
    qualification: "Intermediate",
    photo: "/images/gallery/tch12.jpg",
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
                src="/images/gallery/img7.jpg"
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

      {/* Principal's Message - Special Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-yellow-50 border border-yellow-300 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#082C6C]">
            <Star className="w-4 h-4 text-yellow-600" />
            From the Principal's Desk
          </span>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#082C6C] via-[#0D3B8E] to-[#164DA8] shadow-2xl">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-yellow-400/10 blur-3xl" />
          <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-white/5 blur-3xl" />

          <div className="relative grid md:grid-cols-[300px_1fr] gap-10 p-8 md:p-12 items-center">
            {/* Principal Photo */}
            <div className="mx-auto md:mx-0">
              <div className="relative">
                <div className="absolute -inset-2 rounded-2xl bg-yellow-400/30 blur-lg"></div>
                <div className="relative w-56 h-74 md:w-full md:h-72 overflow-hidden rounded-2xl border-4 border-yellow-400 shadow-xl">
                  <img
                    src={principal.photo}
                    alt={principal.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Principal Content */}
            <div className="text-white text-center md:text-left">
              <Quote className="w-10 h-10 text-yellow-400 mb-4 mx-auto md:mx-0" />
              <p className="text-lg md:text-xl leading-relaxed text-blue-50 italic mb-8">
                {principal.message}
              </p>

              <div className="w-16 h-1 bg-yellow-400 rounded-full mb-5 mx-auto md:mx-0"></div>

              <h3 className="text-2xl font-bold">{principal.name}</h3>
              <p className="text-yellow-300 font-semibold mt-1">
                {principal.designation}
              </p>
              <p className="text-blue-100 text-sm mt-1">
                {principal.qualification}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      </div>

      {/* Faculty Members */}
      <section className="max-w-7xl mx-auto px-6 py-20">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden bg-blue-50">
                <img
                  src={teacher.photo}
                  alt={teacher.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#082C6C] via-yellow-400 to-[#082C6C]" />
              </div>

              <div className="p-5 text-center">
                <h3 className="font-bold text-[#082C6C] text-lg">
                  {teacher.name}
                </h3>
                <p className="text-yellow-600 font-semibold text-sm mt-1">
                  {teacher.subject}
                </p>
                <p className="text-gray-500 text-sm mt-2 border-t border-gray-100 pt-2">
                  {teacher.qualification}
                </p>
              </div>
            </div>
          ))}
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
            <Link
              to="/contact"
            >
              Contact Our Team
            </Link>

          </button>
        </div>
      </section>
    </div>
  );
}