const Destinations = () => {
  const destinations = [
    {
      name: "Kashmir",
      location: "India",
      image: "/destinations/kashmir.jpg",
      price: "15,999",
      duration: "5N/6D",
      badge: "Popular",
      badgeClass: "badge-popular",
    },
    {
      name: "Goa",
      location: "India",
      image: "/destinations/goa.jpg",
      price: "12,999",
      duration: "4N/5D",
      badge: "Best Seller",
      badgeClass: "badge-popular",
    },
    {
      name: "Kerala",
      location: "India",
      image: "/destinations/kerala.jpg",
      price: "18,999",
      duration: "5N/6D",
      badge: null,
      badgeClass: "",
    },
    {
      name: "Rajasthan",
      location: "India",
      image: "/destinations/rajasthan.jpg",
      price: "14,999",
      duration: "5N/6D",
      badge: null,
      badgeClass: "",
    },
    {
      name: "Dubai",
      location: "UAE",
      image: "/destinations/dubai.jpg",
      price: "45,999",
      duration: "4N/5D",
      badge: "International",
      badgeClass: "badge-new",
    },
    {
      name: "Thailand",
      location: "Asia",
      image: "/destinations/thailand.jpg",
      price: "35,999",
      duration: "5N/6D",
      badge: "Sale",
      badgeClass: "badge-sale",
    },
    {
      name: "Maldives",
      location: "Asia",
      image: "/destinations/maldives.jpg",
      price: "65,999",
      duration: "4N/5D",
      badge: "Honeymoon",
      badgeClass: "badge-new",
    },
    {
      name: "Singapore",
      location: "Asia",
      image: "/destinations/singapore.jpg",
      price: "55,999",
      duration: "5N/6D",
      badge: null,
      badgeClass: "",
    },
  ];

  return (
    <section id="destinations" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-[var(--primary)] font-semibold text-xs uppercase tracking-wider">
            Explore Destinations
          </span>
          <h2 className="section-title mt-2">Popular Tour Packages</h2>
          <p className="section-subtitle">
            Handpicked destinations with the best deals for your next adventure
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" id="packages">
          {destinations.map((dest, index) => (
            <div key={index} className="destination-card card-hover group">
              {/* Image placeholder with gradient */}
              <div className="relative h-48 img-placeholder overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/40 to-teal-500/40 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-white/50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                {/* Badge */}
                {dest.badge && (
                  <div className={`absolute top-3 left-3 badge ${dest.badgeClass}`}>
                    {dest.badge}
                  </div>
                )}

                {/* Price tag */}
                <div className="absolute top-3 right-3 price-tag text-xs">
                  From ₹{dest.price}
                </div>

                {/* Overlay */}
                <div className="destination-overlay py-3 px-4">
                  <div className="flex items-center gap-1 text-xs text-white/80 mb-0.5">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {dest.location}
                  </div>
                  <h3 className="text-base font-bold text-white">{dest.name}</h3>
                  <span className="text-xs text-white/80">{dest.duration}</span>
                </div>
              </div>

              {/* Card content */}
              <div className="bg-white p-3 rounded-b-xl border border-t-0 border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-0.5 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-3 h-3 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                      <span className="text-gray-600 text-xs ml-1">(4.8)</span>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/917974957193?text=Hi! I'm interested in the ${dest.name} tour package (${dest.duration}) starting from ₹${dest.price}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--primary)] hover:text-[var(--primary-dark)] font-semibold text-xs flex items-center gap-1"
                  >
                    Enquire
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-8">
          <a
            href="https://wa.me/917974957193?text=Hi! I want to know about all available tour packages."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            View All Packages
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
