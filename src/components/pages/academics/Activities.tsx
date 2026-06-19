import {
  Trophy,
  Music,
  Palette,
  BookOpen,
  Microscope,
  Volleyball,
  Users,
  Star,
  ArrowRight,
} from "lucide-react";

const activities = [
  {
    title: "Sports & Athletics",
    icon: Volleyball,
    description:
      "Encouraging physical fitness, discipline, teamwork, and sportsmanship through a variety of indoor and outdoor games.",
    image:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0",
  },
  {
    title: "Cultural Activities",
    icon: Music,
    description:
      "Celebrating creativity and cultural heritage through music, dance, drama, and stage performances.",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81",
  },
  {
    title: "Art & Craft",
    icon: Palette,
    description:
      "Providing opportunities for artistic expression and imagination through various creative projects.",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f",
  },
  {
    title: "Literary Activities",
    icon: BookOpen,
    description:
      "Developing communication and language skills through debates, quizzes, speeches, and creative writing.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    title: "Science & Innovation",
    icon: Microscope,
    description:
      "Promoting curiosity, innovation, and scientific thinking through exhibitions and projects.",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
  },
  {
    title: "Leadership Programs",
    icon: Users,
    description:
      "Building confidence and responsibility through student councils, clubs, and leadership initiatives.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
];

const featuredPrograms = [
  "Annual Sports Meet",
  "Science Exhibition",
  "Inter-School Debate Competition",
  "Cultural Festival",
];

const stats = [
  { value: "50+", label: "Annual Activities" },
  { value: "1000+", label: "Student Participants" },
  { value: "100+", label: "Awards & Recognitions" },
  { value: "15+", label: "Clubs & Societies" },
];

export default function Activities() {
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
         Student Enrichment Programs
      </span>

      <h1 className="mt-3 text-3xl font-bold tracking-wide md:text-4xl">
         Co-Curricular &
              <span className="text-[#D4AF37]">
                {" "}
                Student Activities
              </span>
      </h1>

      <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#D4AF37]" />

      <p className="mx-auto mt-3 max-w-xl text-sm text-blue-100">
         We believe education extends beyond the classroom. Our
              comprehensive activity programs nurture leadership, creativity,
              teamwork, discipline, and confidence in every student.
      </p>
    </div>
  </div>
</section>
      

      {/* Gold Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>

      {/* Activities Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#082C6C]">
              Diverse Learning Experiences
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 bg-[#D4AF37] rounded-full"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity, index) => {
              const Icon = activity.icon;

              return (
                <div
                  key={index}
                  className="group overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-8">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#082C6C] text-white">
                      <Icon size={28} />
                    </div>

                    <h3 className="text-xl font-bold text-[#082C6C]">
                      {activity.title}
                    </h3>

                    <p className="mt-4 text-gray-600 leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#B22222] font-semibold uppercase tracking-wider">
                Signature Events
              </span>

              <h2 className="mt-4 text-4xl font-bold text-[#082C6C]">
                Programs That Inspire Excellence
              </h2>

              <div className="mt-5 h-1 w-24 bg-[#D4AF37] rounded-full"></div>

              <p className="mt-6 text-gray-600 leading-relaxed">
                Throughout the academic year, students participate in a wide
                range of events designed to foster confidence, leadership,
                innovation, and healthy competition.
              </p>

              <div className="mt-8 space-y-4">
                {featuredPrograms.map((program, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-md"
                  >
                    <Star className="text-[#D4AF37]" />
                    <span className="font-medium text-gray-700">
                      {program}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5"
                alt="Featured Activities"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="rounded-3xl border-t-4 border-[#D4AF37] bg-white p-8 text-center shadow-lg"
              >
                <Trophy className="mx-auto text-[#B22222]" size={40} />

                <h3 className="mt-4 text-4xl font-bold text-[#082C6C]">
                  {stat.value}
                </h3>

                <p className="mt-2 text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#082C6C]">
              Activity Gallery
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 bg-[#D4AF37] rounded-full"></div>

            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Capturing memorable moments of participation, achievement,
              creativity, and teamwork throughout the school year.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-3xl shadow-lg"
              >
                <img
                  src={`https://picsum.photos/600/400?random=${item}`}
                  alt="Gallery"
                  className="h-72 w-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="inline-flex items-center gap-2 rounded-full bg-[#B22222] px-8 py-4 font-semibold text-white shadow-lg hover:scale-105 transition">
              View Full Gallery
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}