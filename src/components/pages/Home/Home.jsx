import { Link } from "react-router-dom";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
const Home = () => {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto px-4 z-10 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Building Dreams, Crafting Reality
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Bharat Construction - Your trusted partner for quality
              construction solutions since 1995
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/services"
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                Our Services
              </Link>
              <Link
                to="/contact"
                className="bg-transparent hover:bg-white/20 border-2 border-white text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Services Preview Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Expertise
              </h2>
              <div className="w-20 h-1 bg-amber-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Residential Construction",
                  description:
                    "Custom homes and apartment complexes built with precision and care.",
                  icon: "🏠",
                },
                {
                  title: "Commercial Projects",
                  description:
                    "Office buildings, retail spaces, and industrial facilities.",
                  icon: "🏢",
                },
                {
                  title: "Renovation Services",
                  description:
                    "Transforming existing spaces with modern designs and materials.",
                  icon: "🔨",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                  <Link
                    to="/services"
                    className="mt-4 inline-block text-amber-600 hover:text-amber-700 font-medium transition"
                  >
                    Learn more →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Construction team"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  About Bharat Construction
                </h2>
                <p className="text-gray-600 mb-6">
                  Founded in 1995, Bharat Construction has grown from a small
                  local builder to one of the most trusted names in the
                  construction industry. Our commitment to quality, safety, and
                  timely delivery has earned us numerous awards and satisfied
                  clients.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "30+ Years of Experience",
                    "150+ Completed Projects",
                    "ISO 9001 Certified",
                    "100+ Skilled Professionals",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                        <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/about"
                  className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  Our Story
                </Link>
              </div>
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
            <Link
              to="/contact"
              className="inline-block bg-white text-amber-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
