import {
  FileText,
  UserCheck,
  GraduationCap,
  FileBadge,
  Phone,
  ArrowRight,
  CheckCircle2,
  School,
} from "lucide-react";

import {Link} from "react-router-dom"

const admissionSteps = [
  {
    icon: FileText,
    title: "Submit Application",
    description:
      "Complete the admission application form with accurate student and parent details.",
  },
   {
    icon: FileText,
    title: "Registration",
    description:
      "Complete the registration.",
  },
  {
    icon: FileBadge,
    title: "Document Verification",
    description:
      "Submit the required documents for verification and eligibility assessment.",
  },
  {
    icon: UserCheck,
    title: "Interaction & Assessment",
    description:
      "Students may participate in an age-appropriate interaction or assessment process.",
  },
  {
    icon: GraduationCap,
    title: "Admission Confirmation",
    description:
      "Upon successful completion of the admission process, confirmation will be provided.",
  },
];

const documents = [
  "Birth Certificate",
  "Passport Size Photographs",
  "Aadhaar Card (Student & Parent)",
  "Transfer Certificate (if applicable)",
  
];

const guidelines = [
  "Admissions are granted based on seat availability.",
  "All submitted documents must be authentic and complete.",
  "Incomplete applications may not be processed.",
  "The decision of the school administration shall be final.",
  "Parents are encouraged to visit the campus before admission.",
];

const stats = [
  {
    value: "5",
    label: "Simple Steps",
  },
  {
    value: "CBSE",
    label: "Curriculum",
  },
  {
    value: "100%",
    label: "Transparent Process",
  },
];

export default function AdmissionProcess() {
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
        Admissions
      </span>

      <h1 className="mt-3 text-3xl font-bold tracking-wide md:text-4xl">
        Admission Process
      </h1>

      <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#D4AF37]" />

      <p className="mx-auto mt-3 max-w-xl text-sm text-blue-100">
       We welcome aspiring learners to become part of our academic
              community. Our admission process is transparent, structured, and
              designed to ensure a smooth experience for students and parents.
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
                Begin Your Journey
              </span>

              <h2 className="mt-4 text-4xl font-bold text-[#082C6C]">
                A Simple & Student-Centric Admission Process
              </h2>

              <div className="mt-5 h-1 w-24 rounded-full bg-[#D4AF37]" />

              <p className="mt-6 text-gray-600 leading-relaxed">
                Our admission process is designed to identify students who will
                thrive in our nurturing academic environment while ensuring a
                smooth and convenient experience for parents.
              </p>

              <p className="mt-5 text-gray-600 leading-relaxed">
                We encourage families to explore our campus, meet our academic
                team, and understand the values and vision that guide our
                institution.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/images/admission-process.jpg"
                alt="Admission Process"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white p-8 shadow-lg border-t-4 border-[#D4AF37] text-center"
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

      {/* Admission Steps */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#082C6C]">
              Admission Steps
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-[#D4AF37]" />

            <p className="mt-6 max-w-3xl mx-auto text-gray-600">
              Follow these simple steps to complete the admission process.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {admissionSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="rounded-3xl bg-white p-8 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#082C6C] text-white">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#082C6C]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <School className="text-[#082C6C]" size={60} />

              <h2 className="mt-6 text-4xl font-bold text-[#082C6C]">
                Documents Required
              </h2>

              <div className="mt-5 h-1 w-24 rounded-full bg-[#D4AF37]" />

              <p className="mt-6 text-gray-600 leading-relaxed">
                Please ensure that the following documents are submitted along
                with the admission application form.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-xl">
              <div className="space-y-5">
                {documents.map((doc, index) => (
                  <div key={index} className="flex gap-4">
                    <CheckCircle2
                      size={22}
                      className="text-[#D4AF37] flex-shrink-0 mt-1"
                    />

                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto rounded-3xl bg-white shadow-xl p-10">
            <h2 className="text-3xl font-bold text-[#082C6C]">
              Important Guidelines
            </h2>

            <div className="mt-4 h-1 w-24 rounded-full bg-[#D4AF37]" />

            <div className="mt-8 space-y-5">
              {guidelines.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle2
                    size={22}
                    className="text-[#D4AF37] flex-shrink-0 mt-1"
                  />

                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#082C6C] to-[#164DA8] py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <Phone
            size={60}
            className="mx-auto text-[#D4AF37]"
          />

          <h2 className="mt-6 text-4xl font-bold">
            Need Assistance With Admissions?
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-blue-100 leading-relaxed">
            Our admissions team is available to guide you through every step of
            the process and answer any questions regarding eligibility,
            documentation, or admission procedures.
          </p>
              <Link to= "/contact">
          <button className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#B22222] px-8 py-4 font-semibold text-white shadow-xl hover:scale-105 transition">
            Contact Admissions Office
            <ArrowRight size={18} />
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
}