import { Camera, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const galleryImages = [
  { src: "/images/gallery/img1.jpg", category: "campus", caption: "Campus Life" },
  { src: "/images/gallery/img2.jpg", category: "campus", caption: "Campus Life" },
  { src: "/images/gallery/img7.JPG", category: "campus", caption: "Campus Life" },
  { src: "/images/gallery/img23.jpg", category: "campus", caption: "Campus Life" },
  { src: "/images/gallery/img25.jpg", category: "campus", caption: "Campus Life" },
  { src: "/images/gallery/img26.jpg", category: "campus", caption: "Campus Life" },
  { src: "/images/gallery/img27.jpg", category: "campus", caption: "Campus Life" },
  { src: "/images/gallery/img41.jpg", category: "campus", caption: "Campus Life" },
  { src: "/images/gallery/img44.jpg", category: "campus", caption: "Campus Life" },
  
  { src: "/images/gallery/img3.JPG", category: "events", caption: "School Events" },
  { src: "/images/gallery/img4.JPG", category: "events", caption: "School Events" },
  { src: "/images/gallery/img5.JPG", category: "events", caption: "School Events" },
  { src: "/images/gallery/img21.JPG", category: "events", caption: "School Events" },
  { src: "/images/gallery/img50.jpg", category: "events", caption: "School Events" },
  { src: "/images/gallery/img51.jpg", category: "events", caption: "School Events" },
  { src: "/images/gallery/img53.jpg", category: "events", caption: "School Events" },
  { src: "/images/gallery/img54.jpg", category: "events", caption: "School Events" },
  { src: "/images/gallery/img55.jpg", category: "events", caption: "School Events" },
  { src: "/images/gallery/img56.jpg", category: "events", caption: "School Events" },
  { src: "/images/gallery/img57.jpg", category: "events", caption: "School Events" },
  { src: "/images/gallery/img58.jpg", category: "events", caption: "School Events" },
  { src: "/images/gallery/img59.jpg", category: "events", caption: "School Events" },
  { src: "/images/gallery/img60.jpg", category: "events", caption: "School Events" },
  { src: "/images/gallery/img61.jpg", category: "events", caption: "School Events" },
  
  { src: "/images/gallery/img10.JPG", category: "achievements", caption: "Achievements" },
  { src: "/images/gallery/img11.JPG", category: "achievements", caption: "Achievements" },
  { src: "/images/gallery/img20.JPG", category: "achievements", caption: "Achievements" },
  { src: "/images/gallery/img63.jpg", category: "achievements", caption: "Achievements" },
  { src: "/images/gallery/img64.jpg", category: "achievements", caption: "Achievements" },
  { src: "/images/gallery/img66.jpg", category: "achievements", caption: "Achievements" },
];

const categories = [
  { id: "all", label: "All Photos" },
  { id: "campus", label: "Campus Life" },
  { id: "achievements", label: "Achievements" },
  { id: "events", label: "School Events" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12);

  const filtered = activeCategory === "all"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const displayed = filtered.slice(0, visibleCount);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const navigate = useCallback(
    (dir : number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setTimeout(() => {
        setLightboxIndex((prev) => {
          const cur = prev === null ? 0 : prev;
          return (cur + dir + displayed.length) % displayed.length;
        });
        setIsAnimating(false);
      }, 150);
    },
    [displayed.length, isAnimating]
  );

  useEffect(() => {
    const handleKey = (e : KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, navigate]);

  // Reset visible count on category change
  const handleCategoryChange = (cat : string) => {
    setActiveCategory(cat);
    setVisibleCount(12);
  };

  return (
    <div className="bg-white">
      {/* ── Hero Section (unchanged) ── */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#082C6C] via-[#0D3B8E] to-[#164DA8] py-10 text-white">
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

      {/* ── Category Filter Tabs ── */}
      <section className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  activeCategory === cat.id
                    ? "bg-[#082C6C] text-white border-[#082C6C] shadow-md"
                    : "bg-white text-[#082C6C] border-[#082C6C]/30 hover:border-[#082C6C] hover:bg-[#082C6C]/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-2">
            {filtered.length} photo{filtered.length !== 1 ? "s" : ""}
            {activeCategory !== "all" ? ` in ${categories.find(c => c.id === activeCategory)?.label}` : ""}
          </p>
        </div>
      </section>

      {/* ── Gallery Grid ── */}
      <section className="py-14 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          {/* Masonry-style grid with varied heights */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {displayed.map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                className="group relative break-inside-avoid overflow-hidden rounded-2xl bg-gray-100 shadow-md cursor-pointer"
                onClick={() => openLightbox(index)}
                style={{
                  animation: `fadeSlideUp 0.4s ease both`,
                  animationDelay: `${(index % 6) * 60}ms`,
                }}
              >
                <img
                  src={image.src}
                  alt={image.caption || `Gallery ${index + 1}`}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#082C6C]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                  <div className="translate-y-3 group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-between">
                    <div>
                      <span className="inline-block bg-[#D4AF37] text-[#082C6C] text-xs font-bold px-2 py-0.5 rounded-full mb-1 capitalize">
                        {image.category === "campus"
                          ? "Campus Life"
                          : image.category === "events"
                          ? "School Events"
                          : "Achievements"}
                      </span>
                      <p className="text-white text-sm font-medium">{image.caption}</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 text-white">
                      <ZoomIn size={16} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load more */}
          {visibleCount < filtered.length && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setVisibleCount((v) => v + 9)}
                className="px-8 py-3 rounded-full border-2 border-[#082C6C] text-[#082C6C] font-semibold text-sm hover:bg-[#082C6C] hover:text-white transition-all duration-200"
              >
                Load more photos ({filtered.length - visibleCount} remaining)
              </button>
            </div>
          )}

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <Camera size={48} className="mx-auto mb-4 opacity-30" />
              <p className="text-lg">No photos in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition z-10"
          >
            <X size={22} />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-4 text-white/70 text-sm font-medium">
            {lightboxIndex + 1} / {displayed.length}
          </div>

          {/* Prev */}
          <button
            className="absolute left-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition z-10"
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Image */}
          <div
            className="max-w-5xl max-h-[85vh] mx-16 flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={displayed[lightboxIndex]?.src}
              alt={displayed[lightboxIndex]?.caption}
              className={`max-h-[78vh] max-w-full object-contain rounded-lg shadow-2xl transition-opacity duration-150 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            />
            <div className="text-center">
              <p className="text-white font-semibold text-base">
                {displayed[lightboxIndex]?.caption}
              </p>
              <span className="text-[#D4AF37] text-xs font-medium uppercase tracking-wider capitalize">
                {displayed[lightboxIndex]?.category === "campus"
                  ? "Campus Life"
                  : displayed[lightboxIndex]?.category === "events"
                  ? "School Events"
                  : "Achievements"}
              </span>
            </div>
          </div>

          {/* Next */}
          <button
            className="absolute right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition z-10"
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Thumbnail strip */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 px-4 max-w-full overflow-x-auto">
            {displayed.map((img, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                  i === lightboxIndex
                    ? "border-[#D4AF37] scale-110"
                    : "border-transparent opacity-50 hover:opacity-80"
                }`}
              >
                <img src={img.src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Animation keyframes */}
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
