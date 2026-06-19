import {
  IndianRupee,
  GraduationCap,
  ShieldCheck,
  Receipt,
  CheckCircle2,
  ArrowRight,
  School,
} from "lucide-react";

const feeData = [
  {
    class: "KG Classes",
    fee: "₹700",
    description:
      "Affordable foundational education with a focus on early childhood development and joyful learning.",
  },
  {
    class: "Classes I – III",
    fee: "₹745",
    description:
      "Comprehensive primary education focused on literacy, numeracy, creativity, and character building.",
  },
  {
    class: "Classes IV – VIII",
    fee: "₹800",
    description:
      "Academic excellence combined with holistic development, leadership skills, and co-curricular growth.",
  },
];

const policies = [
  "Monthly fees are payable on or before the due date prescribed by the school.",
  "Fees once paid are generally non-refundable except under special circumstances approved by the management.",
  "Parents are requested to retain fee payment receipts for future reference.",
  "Fee revisions, if any, shall be communicated officially by the school administration.",
  "Additional charges for optional activities or educational tours may apply separately.",
];

const benefits = [
  "CBSE-Aligned Academic Programme",
  "Qualified & Experienced Faculty",
  "Safe and Supportive Learning Environment",
  "Co-Curricular & Sports Activities",
  "Smart Learning Resources",
  "Holistic Student Development",
];

export default function FeeStructure() {
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
              Admissions & Fees
            </span>

            <h1 className="mt-3 text-3xl font-bold tracking-wide md:text-4xl">
              Fee Structure
            </h1>

            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#D4AF37]" />

            <p className="mx-auto mt-3 max-w-xl text-sm text-blue-100">
              We are committed to providing quality education at an affordable
              fee structure while maintaining high academic standards and
              holistic development opportunities for every student.
            </p>
          </div>
        </div>
      </section>


      {/* Gold Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-[#B22222] font-semibold uppercase tracking-wider">
                Transparent Fee Policy
              </span>

              <h2 className="mt-4 text-4xl font-bold text-[#082C6C]">
                Affordable Education With Lasting Value
              </h2>

              <div className="mt-5 h-1 w-24 rounded-full bg-[#D4AF37]" />

              <p className="mt-6 text-gray-600 leading-relaxed">
                Our fee structure is designed to ensure accessibility while
                supporting a high-quality learning environment, modern teaching
                practices, and the overall growth and development of students.
              </p>

              <p className="mt-5 text-gray-600 leading-relaxed">
                We believe every child deserves access to excellent education,
                and we strive to maintain transparency in all financial matters.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/images/fee-structure.jpg"
                alt="School Fee Structure"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fee Cards */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#082C6C]">
              Monthly Fee Structure
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-[#D4AF37]" />

            <p className="mt-6 max-w-3xl mx-auto text-gray-600">
              A transparent fee structure designed to support quality education
              and holistic student development.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {feeData.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white p-8 shadow-xl border-t-4 border-[#D4AF37]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#082C6C] text-white">
                  <GraduationCap size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#082C6C]">
                  {item.class}
                </h3>

                <div className="mt-6 flex items-center gap-2">
                  <IndianRupee
                    size={28}
                    className="text-[#B22222]"
                  />

                  <span className="text-4xl font-bold text-[#082C6C]">
                    {item.fee.replace("₹", "")}
                  </span>

                  <span className="text-gray-500">
                    / month
                  </span>
                </div>

                <p className="mt-6 text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Table View */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            <div className="bg-[#082C6C] text-white p-6">
              <h2 className="text-2xl font-bold">
                Fee Summary
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8FAFC]">
                    <th className="px-6 py-5 text-left font-bold text-[#082C6C]">
                      Class
                    </th>
                    <th className="px-6 py-5 text-left font-bold text-[#082C6C]">
                      Monthly Fee
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-t">
                    <td className="px-6 py-5">KG Classes</td>
                    <td className="px-6 py-5 font-semibold">₹700</td>
                  </tr>

                  <tr className="border-t bg-[#FAFBFC]">
                    <td className="px-6 py-5">Classes I – III</td>
                    <td className="px-6 py-5 font-semibold">₹745</td>
                  </tr>

                  <tr className="border-t">
                    <td className="px-6 py-5">Classes IV – VIII</td>
                    <td className="px-6 py-5 font-semibold">₹800</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Policies */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <ShieldCheck
                className="text-[#082C6C]"
                size={60}
              />

              <h2 className="mt-6 text-4xl font-bold text-[#082C6C]">
                Fee Policies & Guidelines
              </h2>

              <div className="mt-5 h-1 w-24 rounded-full bg-[#D4AF37]" />
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-xl">
              <div className="space-y-5">
                {policies.map((policy, index) => (
                  <div key={index} className="flex gap-4">
                    <CheckCircle2
                      size={22}
                      className="text-[#D4AF37] mt-1 flex-shrink-0"
                    />

                    <span className="text-gray-700">
                      {policy}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#082C6C]">
              What Your Child Receives
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-[#D4AF37]" />
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white p-8 shadow-lg"
              >
                <Receipt
                  size={28}
                  className="text-[#082C6C]"
                />

                <h3 className="mt-4 font-semibold text-[#082C6C]">
                  {benefit}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#082C6C] to-[#164DA8] py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <School
            size={60}
            className="mx-auto text-[#D4AF37]"
          />

          <h2 className="mt-6 text-4xl font-bold">
            Ready To Begin Your Child's Journey?
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-blue-100 leading-relaxed">
            Join a nurturing educational environment focused on academic
            excellence, character development, and lifelong learning.
          </p>

          <button className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#B22222] px-8 py-4 font-semibold text-white shadow-xl hover:scale-105 transition">
            Apply For Admission
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}