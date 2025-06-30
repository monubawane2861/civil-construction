import { Link } from "react-router-dom";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
const About = () => {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        {/* Hero Section */}
        <section className="relative py-32 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto px-4 z-10 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Building excellence since 1995 - Discover the people and values
              behind Bharat Construction
            </p>
          </div>
        </section>

        {/* Company History Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Our Journey
                </h2>
                <p className="text-gray-600 mb-6">
                  Founded in 1995 by Mr. Rajesh Sharma, Bharat Construction
                  began as a small family business with just 10 employees.
                  Today, we've grown into one of the most respected construction
                  firms in the region, with over 150 completed projects and a
                  team of 100+ skilled professionals.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { value: "30+", label: "Years Experience" },
                    { value: "150+", label: "Projects Completed" },
                    { value: "100+", label: "Team Members" },
                    { value: "25+", label: "Awards Won" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-4 rounded-lg text-center"
                    >
                      <p className="text-3xl font-bold text-amber-600">
                        {item.value}
                      </p>
                      <p className="text-gray-600">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1681823687646-e78d2da9b71a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Construction site"
                    className="rounded-lg shadow-xl w-full h-auto"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                    <p className="text-amber-600 font-bold">Since 1995</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Core Values
              </h2>
              <div className="w-20 h-1 bg-amber-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Quality",
                  description:
                    "We never compromise on materials or workmanship, ensuring every project meets our high standards.",
                  icon: "🏆",
                },
                {
                  title: "Integrity",
                  description:
                    "Honest communication and ethical practices guide every decision we make.",
                  icon: "🤝",
                },
                {
                  title: "Innovation",
                  description:
                    "We embrace new technologies and methods to deliver better results.",
                  icon: "💡",
                },
                {
                  title: "Safety",
                  description:
                    "Our zero-accident policy protects both workers and clients.",
                  icon: "🛡️",
                },
                {
                  title: "Sustainability",
                  description:
                    "We implement eco-friendly practices in all our projects.",
                  icon: "🌱",
                },
                {
                  title: "Community",
                  description:
                    "We give back through local initiatives and employment opportunities.",
                  icon: "🏘️",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Meet Our Leadership
              </h2>
              <div className="w-20 h-1 bg-amber-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Rajesh Sharma",
                  position: "Founder & CEO",
                  bio: "With 40+ years in construction, Rajesh's vision guides our company.",
                  img: "https://randomuser.me/api/portraits/men/75.jpg",
                },
                {
                  name: "Priya Sharma",
                  position: "Operations Director",
                  bio: "Ensures every project runs smoothly and meets deadlines.",
                  img: "https://randomuser.me/api/portraits/women/68.jpg",
                },
                {
                  name: "Amit Patel",
                  position: "Head of Engineering",
                  bio: "Technical expert overseeing all structural aspects.",
                  img: "https://randomuser.me/api/portraits/men/32.jpg",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-amber-600 mb-3">{member.position}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Achievements
              </h2>
              <div className="w-20 h-1 bg-amber-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { year: "2022", award: "Best Commercial Project" },
                { year: "2020", award: "Safety Excellence Award" },
                { year: "2018", award: "Innovation in Construction" },
                { year: "2016", award: "Sustainable Builder of the Year" },
                { year: "2014", award: "Customer Choice Award" },
                { year: "2012", award: "Regional Construction Excellence" },
                { year: "2010", award: "Quality Assurance Certification" },
                { year: "2008", award: "Fastest Growing Company" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <p className="text-amber-600 font-bold text-xl mb-2">
                    {item.year}
                  </p>
                  <p className="text-gray-800">{item.award}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-amber-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build With Us?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Whether you're planning a home renovation or a large commercial
              project, we'd love to discuss how we can help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-amber-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Contact Us
              </Link>
              <Link
                to="/services"
                className="bg-transparent hover:bg-white/20 border-2 border-white text-white font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
