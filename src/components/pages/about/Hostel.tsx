import {
  UtensilsCrossed,
  Camera,
  Zap,
  Users,
  IndianRupee,
  CheckCircle2,
  ArrowRight,
  BedDouble,
  PhoneCall,
} from "lucide-react";

import { Link } from "react-router-dom";

const facilities = [
  {
    icon: Zap,
    title: "24×7 Electricity",
    description:
      "Continuous power supply ensures uninterrupted study, comfort, and daily activities.",
  },
  {
    icon: Camera,
    title: "CCTV Surveillance",
    description:
      "The hostel premises are monitored through CCTV systems to enhance safety and security.",
  },
  {
    icon: Users,
    title: "Teacher Presence",
    description:
      "Dedicated teachers and supervisors remain available to guide and support students.",
  },
  {
    icon: UtensilsCrossed,
    title: "Quality Food",
    description:
      "Nutritious and hygienic meals are provided to support the health and well-being of students.",
  },
];

const hostelContact = {
  name: "Sandeep Kumar",
  role: "Hostel In-Charge",
  phoneDisplay: "+91 76320 15185",
  phoneHref: "7632015185",
};

const highlights = [
  "Safe & Secure Residential Environment",
  "Round-the-Clock Student Supervision",
  "Comfortable Accommodation Facilities",
  "Balanced Daily Routine & Discipline",
  "Healthy and Hygienic Food Services",
  "Supportive Academic Environment",
];

export default function Hostel() {
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
              Residential Facility
            </span>

            <h1 className="mt-3 text-3xl font-bold tracking-wide md:text-4xl">
              Hostel Facility
            </h1>

            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#D4AF37]" />

            <p className="mx-auto mt-3 max-w-xl text-sm text-blue-100">
              A safe, disciplined, and nurturing residential environment where
              students can focus on academics, personal growth, and holistic
              development under proper supervision and care.
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
                Comfortable Living
              </span>

              <h2 className="mt-4 text-4xl font-bold text-[#082C6C]">
                A Home Away From Home
              </h2>

              <div className="mt-5 h-1 w-24 rounded-full bg-[#D4AF37]" />

              <p className="mt-6 text-gray-600 leading-relaxed">
                Our hostel provides students with a safe, comfortable, and
                supportive residential environment. Emphasis is placed on
                discipline, academic focus, personal care, and overall
                well-being.
              </p>

              <p className="mt-5 text-gray-600 leading-relaxed">
                With continuous supervision, quality meals, and essential
                facilities, students can enjoy a balanced lifestyle that
                promotes both learning and personal growth.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/images/gallery/img23.jpg"
                alt="School Hostel"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facility Cards */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#082C6C]">
              Hostel Facilities
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-[#D4AF37]" />

            <p className="mt-6 max-w-3xl mx-auto text-gray-600">
              Essential facilities designed to ensure student comfort, safety,
              and well-being throughout their stay.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;

              return (
                <div
                  key={index}
                  className="rounded-3xl bg-white p-8 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#082C6C] text-white">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#082C6C]">
                    {facility.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hostel Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/images/gallery/img23.jpg"
                alt="Hostel Accommodation"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <span className="text-[#B22222] font-semibold uppercase tracking-wider">
                Student Well-Being
              </span>

              <h2 className="mt-4 text-4xl font-bold text-[#082C6C]">
                Safety, Care & Discipline
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

      {/* Fee Section */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-3xl bg-white p-10 shadow-xl border-t-4 border-[#D4AF37] text-center">
              <div className="flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#082C6C] text-white">
                  <IndianRupee size={32} />
                </div>
              </div>

              <h2 className="mt-6 text-3xl font-bold text-[#082C6C]">
                Hostel Fee
              </h2>

              <div className="mt-5 text-5xl font-bold text-[#082C6C]">
                ₹4000
              </div>

              <p className="mt-2 text-gray-500">
                Per Month
              </p>

              <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#D4AF37]" />

              <p className="mt-6 text-gray-600 leading-relaxed">
                Affordable hostel accommodation with essential facilities,
                supervision, security, and nutritious meals for students.
              </p>
            </div>

            {/* Hostel Enquiries */}
            <div className="mt-6 rounded-3xl bg-white p-6 shadow-lg border border-gray-200 flex items-center justify-between gap-4 flex-wrap">
              <div>
                <h3 className="font-bold text-[#082C6C]">
                  For Hostel Enquiries
                </h3>
                <p className="text-sm text-gray-600">
                  {hostelContact.name}
                </p>
              </div>
              <a
                href={`tel:${hostelContact.phoneHref}`}
                className="inline-flex items-center gap-2 bg-[#082C6C] hover:bg-[#0D3B8E] transition-colors text-white px-5 py-3 rounded-xl font-semibold text-sm shadow-lg shrink-0"
              >
                <PhoneCall className="w-4 h-4 text-yellow-400" />
                {hostelContact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#082C6C] to-[#164DA8] py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <BedDouble
            size={60}
            className="mx-auto text-[#D4AF37]"
          />

          <h2 className="mt-6 text-4xl font-bold">
            A Safe & Supportive Residential Experience
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-blue-100 leading-relaxed">
            Our hostel is designed to provide students with a secure,
            disciplined, and caring environment that supports both academic
            achievement and personal development.
          </p>

          <Link
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#B22222] px-8 py-4 font-semibold text-white shadow-xl hover:scale-105 transition"
            to="/contact"
          >
            Enquire About Hostel Admission
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}