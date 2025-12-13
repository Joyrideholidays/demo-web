const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      location: "Gwalior",
      rating: 5,
      text: "Amazing experience with Joyride Holidays! They planned our Kashmir trip perfectly. Everything was top-notch.",
      tour: "Kashmir Tour",
    },
    {
      name: "Priya Verma",
      location: "Gwalior",
      rating: 5,
      text: "Booked our honeymoon to Maldives through Joyride. The trip was magical! Thank you for making it unforgettable!",
      tour: "Maldives Honeymoon",
    },
    {
      name: "Amit Gupta",
      location: "Morena",
      rating: 5,
      text: "Best travel agency in Gwalior! Family trip to Goa was excellent. Good hotels and great support throughout.",
      tour: "Goa Family Trip",
    },
    {
      name: "Sunita Jain",
      location: "Gwalior",
      rating: 5,
      text: "Joyride made our Dubai trip memorable. From visa to bookings, everything was smooth and professional.",
      tour: "Dubai Tour",
    },
    {
      name: "Vikram Singh",
      location: "Gwalior",
      rating: 5,
      text: "Corporate trip for 25 people to Rajasthan was perfectly organized. Will definitely book again!",
      tour: "Rajasthan Trip",
    },
    {
      name: "Neha Agarwal",
      location: "Gwalior",
      rating: 5,
      text: "Trustworthy agency with best rates for Thailand. Trip exceeded expectations. Very helpful team.",
      tour: "Thailand Tour",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-48 h-48 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <span className="text-blue-200 font-semibold text-xs uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-3">
            What Our Travelers Say
          </h2>
          <p className="text-blue-100 text-sm max-w-xl mx-auto">
            Don&apos;t just take our word for it - hear from our happy travelers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Rating */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 gradient-bg rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-xs">{testimonial.location}</p>
                  </div>
                </div>
                <span className="text-xs text-[var(--primary)] font-medium bg-blue-50 px-2 py-1 rounded-full">
                  {testimonial.tour}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <p className="text-blue-100 mb-3 text-sm">
            Ready to create your own travel story?
          </p>
          <a
            href="https://wa.me/917974957193?text=Hi! I saw the testimonials and I'm interested in booking a tour."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[var(--primary)] px-6 py-3 rounded-full font-semibold text-sm inline-flex items-center gap-2 hover:bg-blue-50 transition-colors shadow-lg"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Start Planning Your Trip
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
