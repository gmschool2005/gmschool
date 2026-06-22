import { Camera, Award, School } from "lucide-react";

const galleryImages = [
  "/images/gallery/img1.jpeg",
  "/images/gallery/img2.jpeg",
  "/images/gallery/img3.JPG",
  "/images/gallery/img4.JPG",
  "/images/gallery/img5.JPG",
  "/images/gallery/img6.JPG",
  "/images/gallery/img7.JPG",
  "/images/gallery/img8.JPG",
  "/images/gallery/img9.JPG",
  "/images/gallery/img10.JPG",
  "/images/gallery/img11.JPG",
  "/images/gallery/img12.JPG",
  "/images/gallery/img13.JPG",
  "/images/gallery/img14.JPG",
  "/images/gallery/img15.JPG",
  "/images/gallery/img16.JPG",
  "/images/gallery/img17.JPG",
  "/images/gallery/img18.JPG",
  "/images/gallery/img19.JPG",
  "/images/gallery/img20.JPG",
  "/images/gallery/img21.JPG",

 
];



export default function Gallery() {
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
           School Memories
            </span>

            <h1 className="mt-3 text-3xl font-bold tracking-wide md:text-4xl">
         Photo Gallery
            </h1>

            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#D4AF37]" />

            <p className="mx-auto mt-3 max-w-xl text-sm text-blue-100">
             Explore moments of learning, achievement, creativity, sportsmanship,
            and student life that define our vibrant school community.
            </p>
          </div>
        </div>
      </section>
      

      {/* Gold Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />





      {/* Gallery Grid */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl bg-white shadow-lg"
              >
                <div className="overflow-hidden">
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#082C6C]">
              Memories That Inspire
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-[#D4AF37]" />
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
              <Camera
                size={50}
                className="mx-auto text-[#082C6C]"
              />

              <h3 className="mt-6 text-xl font-bold text-[#082C6C]">
                Campus Life
              </h3>

              <p className="mt-4 text-gray-600">
                Everyday moments that showcase learning, friendship, and growth.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
              <Award
                size={50}
                className="mx-auto text-[#082C6C]"
              />

              <h3 className="mt-6 text-xl font-bold text-[#082C6C]">
                Achievements
              </h3>

              <p className="mt-4 text-gray-600">
                Celebrating student success in academics, sports, and cultural
                events.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
              <School
                size={50}
                className="mx-auto text-[#082C6C]"
              />

              <h3 className="mt-6 text-xl font-bold text-[#082C6C]">
                School Events
              </h3>

              <p className="mt-4 text-gray-600">
                Capturing important occasions, celebrations, and institutional
                milestones.
              </p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}