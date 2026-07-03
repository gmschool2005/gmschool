import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  PhoneCall,
  Send,
  GraduationCap,
} from "lucide-react";

const contactDetails = {
  schoolName: "G. M. English School",
  location: "Chanpatia, Bihar",
  established: "2005",
  address:
    "Near Solar Plant, Ward No. 06, Chiran Chowk to Pakdihar Road, Chanpatia, Bihar – 845449",
  phoneDisplay: "+91 87894 29097",
  phoneHref: "8789429097",
  emailDisplay: "schoolgmenglish@gmail.com",
  emailHref: "schoolgmenglish@gmail.com",
  mapQuery:
    "Near Solar Plant, Ward No. 06, Chiran Chowk to Pakdihar Road, Chanpatia, Bihar 845449",
};

const hostelContact = {
  name: "Sandeep Kumar",
  role: "Hostel In-Charge",
  phoneDisplay: "+91 76320 15185",
  phoneHref: "7632015185",
};

export default function Contact() {
  const mapsUrl = "https://www.google.com/maps/dir/?api=1&destination=26.9506533,84.5429507";

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
              {contactDetails.schoolName} · Estd. {contactDetails.established}
            </span>

            <h1 className="mt-3 text-3xl font-bold tracking-wide md:text-4xl">
              Get In Touch
            </h1>

            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#D4AF37]" />

            <p className="mx-auto mt-3 max-w-xl text-sm text-blue-100">
              We would love to hear from you. Reach out to us for admissions,
              inquiries, or any information about {contactDetails.schoolName},{" "}
              {contactDetails.location}.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-50 border border-yellow-300 text-[#082C6C] mb-5">
            <GraduationCap className="w-5 h-5 text-yellow-600" />
            <span className="font-semibold">We're Here To Help</span>
          </div>

          <h2 className="text-4xl font-bold text-[#082C6C] mb-4">
            Reach Our School
          </h2>

          <div className="w-24 h-1 bg-yellow-500 rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Address Card */}
          <div className="relative bg-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 text-center">
            <div className="absolute inset-x-8 top-0 h-1 rounded-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#082C6C]">
              <MapPin className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-lg font-bold text-[#082C6C] mb-3">
              Visit Us
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm mb-6">
              {contactDetails.address}
            </p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#082C6C] hover:text-yellow-600 transition-colors"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </div>

          {/* Phone Card */}
          <div className="relative bg-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 text-center">
            <div className="absolute inset-x-8 top-0 h-1 rounded-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#082C6C]">
              <Phone className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-lg font-bold text-[#082C6C] mb-3">Call Us</h3>
            <p className="text-gray-600 leading-relaxed text-sm mb-6">
              Speak directly with our school office for admissions and
              general queries.
            </p>
            <a
              href={`tel:${contactDetails.phoneHref}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#082C6C] hover:text-yellow-600 transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              {contactDetails.phoneDisplay}
            </a>
          </div>

          {/* Email Card */}
          <div className="relative bg-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 text-center">
            <div className="absolute inset-x-8 top-0 h-1 rounded-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#082C6C]">
              <Mail className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-lg font-bold text-[#082C6C] mb-3">
              Email Us
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm mb-6">
              Write to us anytime, we typically respond within one business
              day.
            </p>
            <a
              href={`mailto:${contactDetails.emailHref}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#082C6C] hover:text-yellow-600 transition-colors break-all"
            >
              <Send className="w-4 h-4 shrink-0" />
              {contactDetails.emailDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      </div>

      {/* Direct Action Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Info Side */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[#082C6C] mb-5">
              <Clock className="w-5 h-5 text-[#082C6C]" />
              <span className="font-semibold">Office Hours</span>
            </div>

            <h2 className="text-4xl font-bold text-[#082C6C] mb-6">
              Speak To Us Directly
            </h2>

            <div className="w-24 h-1 bg-yellow-500 rounded-full mb-8"></div>

            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Our administrative office at {contactDetails.schoolName},{" "}
              {contactDetails.location}, welcomes parents and visitors
              Monday through Saturday. For quick assistance, call us or send
              an email using the buttons below.
            </p>

            <div className="grid grid-cols-2 gap-5">
              <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
                <Clock className="w-8 h-8 text-[#082C6C] mb-3" />
                <h3 className="font-bold text-[#082C6C]">Mon – Sat</h3>
                <p className="text-sm text-gray-600">9:00 AM – 4:00 PM</p>
              </div>

              <div className="bg-yellow-50 rounded-2xl p-5 border border-yellow-200">
                <MapPin className="w-8 h-8 text-yellow-700 mb-3" />
                <h3 className="font-bold text-[#082C6C]">Chanpatia</h3>
                <p className="text-sm text-gray-600">Bihar – 845449</p>
              </div>
            </div>

            {/* Hostel Enquiries */}
            <div className="mt-5 bg-white rounded-2xl p-5 border border-gray-200 shadow-md flex items-center justify-between gap-4 flex-wrap">
              <div>
                <h3 className="font-bold text-[#082C6C]">
                  For Hostel Enquiries
                </h3>
                <p className="text-sm text-gray-600">
                  {hostelContact.name} · {hostelContact.role}
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

          {/* Action Card */}
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-3xl opacity-20 blur-xl"></div>

            <div className="relative rounded-3xl border-4 border-yellow-400 bg-gradient-to-br from-[#082C6C] via-[#0D3B8E] to-[#164DA8] p-10 shadow-2xl text-white">
              <h3 className="text-2xl font-bold mb-2">
                {contactDetails.schoolName}
              </h3>
              <p className="text-blue-100 text-sm mb-8">
                {contactDetails.address}
              </p>

              <div className="flex flex-col gap-4">
                <a
                  href={`tel:${contactDetails.phoneHref}`}
                  className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 transition-colors px-8 py-4 rounded-xl font-semibold shadow-lg"
                >
                  <PhoneCall className="w-5 h-5" />
                  Call {contactDetails.phoneDisplay}
                </a>

                <a
                  href={`mailto:${contactDetails.emailHref}`}
                  className="flex items-center justify-center gap-3 bg-white text-[#082C6C] hover:bg-yellow-50 transition-colors px-8 py-4 rounded-xl font-semibold shadow-lg border border-yellow-300"
                >
                  <Mail className="w-5 h-5 text-yellow-600" />
                  Email Us
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20 text-center">
                <span className="text-xs uppercase tracking-widest text-yellow-300">
                  Established {contactDetails.established}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#082C6C] text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-400/40 bg-white/10 mb-6">
            <GraduationCap className="w-4 h-4 text-yellow-400" />
            <span>We Look Forward To Hearing From You</span>
          </div>

          <h2 className="text-4xl font-bold mb-6">
            Your Child's Journey Starts With A Conversation
          </h2>

          <div className="w-32 h-1 bg-yellow-400 mx-auto rounded-full mb-8"></div>

          <p className="text-blue-100 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            Whether you have questions about admissions, academics, or campus
            life, our team at {contactDetails.schoolName} is ready to assist
            you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${contactDetails.phoneHref}`}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 transition-colors px-8 py-4 rounded-xl font-semibold shadow-lg"
            >
              <PhoneCall className="w-5 h-5" />
              Call Now
            </a>
            <a
              href={`mailto:${contactDetails.emailHref}`}
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 transition-colors px-8 py-4 rounded-xl font-semibold text-[#082C6C] shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Send an Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

