import React, { useState, useEffect, useRef } from "react";
const testimonials = [
  {
    name: "Sophia Martinez",
    avatar: "https://randomuser.me/api/portraits/women/26.jpg",
    stars: 4,
    theme: "bg-[#FFF6C7] border border-[#FFE782]",
    text: "This platform has completely changed the way I manage my work. It’s intuitive, reliable, and makes everything so much easier!",
  },
  {
    name: "Sarah Johnson",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    stars: 5,
    theme: "bg-[#D8F3FE] border border-[#BEE7FA]",
    text: "This company has completely transformed the way we work. Their commitment to quality and innovation is unmatched. Highly recommended!",
  },
  {
    name: "James Lee",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    stars: 5,
    theme: "bg-[#E6F4EA] border border-[#ABEBC6]",
    text: "Exceptional service and support throughout our collaboration. Truly a valuable partner.",
  },
  {
    name: "Emily Davis",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    stars: 4,
    theme: "bg-[#FFF0F1] border border-[#FDAAA5]",
    text: "Professional, knowledgeable team delivering on promises with great attention to detail.",
  },
  {
    name: "Michael Brown",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    stars: 5,
    theme: "bg-[#F0F8FF] border border-[#A9D0F5]",
    text: "Innovative solutions that truly raised the bar for our business processes. Highly recommend!",
  },
];

const Stars = ({ count }: any) => (
  <div className="flex mt-1 mb-2">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        width={24}
        height={24}
        className={`mx-[2px] ${
          i < count ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <polygon points="10,2 12.09,7.36 18,7.64 13.5,11.5 15,17.27 10,13.77 5,17.27 6.5,11.5 2,7.64 7.91,7.36" />
      </svg>
    ))}
  </div>
);

// 3. Main carousel component
const TestimonialCarousel = () => {
  const [idx, setIdx] = useState(0);
  const timeoutRef = useRef();

  // Auto-slide every 3 seconds
  useEffect(() => {
    //@ts-ignore
    timeoutRef.current = setTimeout(() => {
      setIdx((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearTimeout(timeoutRef.current);
  }, [idx]);


  const prev = () =>
    setIdx((curr) => (curr === 0 ? testimonials.length - 1 : curr - 1));
  const next = () =>
    setIdx((curr) => (curr === testimonials.length - 1 ? 0 : curr + 1));

  const t = testimonials[idx];

  return (
    <section className="w-full flex justify-center py-16 bg-transparent">
      <div
        className={`relative w-full max-w-4xl mx-4 rounded-2xl shadow-xl ${t.theme} p-10 transition-colors duration-300 border`}
        style={{
          minHeight: 280,
          boxShadow: "4px 8px 0 0 #e6e6e6",
        }}
      >
        <div className="flex items-start gap-6">
          <img
            src={t.avatar}
            alt={t.name}
            className="w-20 h-20 rounded-full border-4 border-white object-cover shadow"
          />
          <div>
            <div className="text-2xl md:text-[1.6rem] font-bold mb-1 text-black">
              {t.name}
            </div>
            <Stars count={t.stars} />
            <div className="text-lg md:text-xl font-normal mt-3 text-gray-800">
              {t.text}
            </div>
          </div>
        </div>
        {/* Carousel Controls */}
        <div className="flex justify-center items-center mt-8 gap-4">
          <button
            aria-label="Previous"
            onClick={prev}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-200 transition"
          >
            <span>&larr;</span>
          </button>
          {testimonials.map((_, dotIdx) => (
            <span
              key={dotIdx}
              className={`inline-block w-3 h-3 rounded-full mx-[4px] ${
                idx === dotIdx ? "bg-blue-700" : "bg-gray-300"
              }`}
            />
          ))}
          <button
            aria-label="Next"
            onClick={next}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-200 transition"
          >
            <span>&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
