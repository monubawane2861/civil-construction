import { Link } from "react-router-dom";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";

const Services = () => {
  const services = [
    {
      title: "Residential Construction",
      icon: "🏡",
      description:
        "From dream homes to luxury villas, we build quality living spaces tailored to your needs.",
      features: [
        "Custom home design & construction",
        "Apartment complexes",
        "Villas & bungalows",
        "Green building solutions",
      ],
    },
    {
      title: "Commercial Projects",
      icon: "🏢",
      description:
        "Professional spaces designed for functionality, aesthetics, and long-term value.",
      features: [
        "Office buildings",
        "Retail spaces & malls",
        "Hotels & restaurants",
        "Industrial facilities",
      ],
    },
    {
      title: "Renovation & Remodeling",
      icon: "🔨",
      description:
        "Transforming existing spaces with innovative designs and quality craftsmanship.",
      features: [
        "Home renovations",
        "Commercial space upgrades",
        "Structural repairs",
        "Interior remodeling",
      ],
    },
    {
      title: "Construction Consulting",
      icon: "📋",
      description:
        "Expert guidance for your construction projects from conception to completion.",
      features: [
        "Project feasibility studies",
        "Cost estimation",
        "Quality control",
        "Contractor management",
      ],
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-32 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto px-4 z-10 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Comprehensive construction solutions tailored to your specific
              needs
            </p>
            <Link
              to="/contact"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Get a Free Quote
            </Link>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                What We Offer
              </h2>
              <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                With 30+ years of experience, we deliver exceptional quality
                across all our services. Each project receives our full
                attention and commitment to excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
                >
                  <div className="p-8">
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-amber-500 mt-0.5 mr-2 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium transition"
                    >
                      Enquire about this service
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Process
              </h2>
              <div className="w-20 h-1 bg-amber-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Consultation",
                  description:
                    "We discuss your vision, requirements, and budget",
                },
                {
                  step: "02",
                  title: "Planning",
                  description:
                    "Our experts create detailed plans and 3D renderings",
                },
                {
                  step: "03",
                  title: "Execution",
                  description:
                    "Quality construction with regular progress updates",
                },
                {
                  step: "04",
                  title: "Delivery",
                  description:
                    "Final inspection and handover of completed project",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-amber-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and estimate. Our team is
              ready to bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-amber-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Get in Touch
              </Link>
              <a
                href="tel:+912212345678"
                className="bg-transparent hover:bg-white/20 border-2 border-white text-white font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Services;
