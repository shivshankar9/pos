<div className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-100 min-h-screen p-8">
  <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">
    {/* Hero Section */}
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-12 text-center">
      <h1 className="text-5xl font-bold leading-tight">
        Unlock Your Full Potential
      </h1>
      <p className="mt-6 text-lg">
        Seamlessly connect to opportunities and accelerate your career with our
        exclusive tools and resources.
      </p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 px-10 py-4 bg-yellow-400 text-blue-900 font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition duration-300"
      >
        Subscribe Now
      </motion.button>
      <img
        src="/images/ui-hero-image.svg"
        alt="Hero Visual"
        className="absolute right-10 top-10 w-48 opacity-80"
      />
      <img
        src="/images/user-friendly-tools.svg"
        alt="Tools Visual"
        className="absolute left-10 bottom-10 w-48 opacity-80"
      />
    </div>

    {/* Features Section */}
    <div className="p-12">
      <h2 className="text-4xl font-bold text-center mb-10">
        Empowering Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Smart Connections",
            description:
              "Get personalized job recommendations and network insights.",
            icon: "/images/connection.svg",
          },
          {
            title: "Instant Resume Analysis",
            description:
              "Optimize your CV for top-tier jobs using our AI tools.",
            icon: "/images/resume.svg",
          },
          {
            title: "Verified Opportunities",
            description: "Access exclusive roles, guaranteed to be authentic.",
            icon: "/images/opportunity.svg",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="p-8 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition group"
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-16 h-16 mx-auto mb-6"
            />
            <h3 className="text-xl font-semibold group-hover:text-indigo-600">
              {feature.title}
            </h3>
            <p className="text-gray-600 mt-4">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Subscription Callouts */}
    <div className="bg-gradient-to-r from-indigo-100 via-white to-gray-100 p-12">
      <h2 className="text-4xl font-bold text-center mb-12">Choose Your Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            plan: "Starter",
            price: "$10/month",
            highlights: ["Basic tools", "Standard support"],
            bgClass: "bg-gray-50",
          },
          {
            plan: "Pro",
            price: "$25/month",
            highlights: [
              "All Starter features",
              "AI enhancements",
              "Priority support",
            ],
            bgClass: "bg-yellow-100",
            popular: true,
          },
          {
            plan: "Elite",
            price: "$50/month",
            highlights: [
              "All Pro features",
              "1-on-1 coaching",
              "Exclusive invites",
              "Priority listing access",
            ],
            bgClass: "bg-gray-50",
          },
        ].map((tier, index) => (
          <div
            key={index}
            className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition ${
              tier.bgClass
            } ${tier.popular ? "border-4 border-yellow-400" : ""}`}
          >
            <h3 className="text-2xl font-bold mb-4">{tier.plan}</h3>
            <p className="text-3xl font-semibold">{tier.price}</p>
            <ul className="mt-6 space-y-2 text-gray-600">
              {tier.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="mr-2 text-green-500">✔</span>
                  {highlight}
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
            >
              {tier.popular ? "Join Pro Now" : "Subscribe"}
            </motion.button>
          </div>
        ))}
      </div>
    </div>

    {/* Why Trust Us Section */}
    <div className="p-12">
      <h2 className="text-4xl font-bold text-center mb-10">Why Trust Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {[
          {
            image: "/images/authentic-jobs.svg",
            title: "Authentic Opportunities",
            description:
              "Every opportunity we share is verified for authenticity, ensuring you only get the best.",
          },
          {
            image: "/images/user-experience.svg",
            title: "Exceptional User Experience",
            description:
              "Our platform is designed with user satisfaction in mind, making navigation seamless and intuitive.",
          },
        ].map((item, index) => (
          <div key={index} className="flex gap-8 items-center">
            <img src={item.image} alt={item.title} className="w-24 h-24" />
            <div>
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>;
