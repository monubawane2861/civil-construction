import { useState } from "react";
import {
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import Footer from "../../common/Footer/Footer";
import Header from "../../common/Header/Header";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Thank you for your message! We will contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const openWhatsApp = () => {
    const phoneNumber = "919876543210"; // Replace with your WhatsApp number
    const message =
      "Hello Bharat Construction, I would like to inquire about your services.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <>
      <Header />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-32 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto px-4 z-10 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Get in touch with our team for inquiries or project discussions
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Contact Form */}
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-700 mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Contact Information
                </h2>

                {/* WhatsApp Button */}
                <div
                  onClick={openWhatsApp}
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-lg p-4 mb-8 flex items-center cursor-pointer transition duration-300"
                >
                  <FaWhatsapp className="text-2xl mr-3" />
                  <div>
                    <h3 className="font-bold">Chat on WhatsApp</h3>
                    <p className="text-sm">
                      Typically replies within 30 minutes
                    </p>
                  </div>
                </div>

                {/* Contact Cards */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <FaPhone className="text-amber-600 text-xl mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-800">Phone</h3>
                      <a
                        href="tel:+912212345678"
                        className="text-gray-600 hover:text-amber-600 transition"
                      >
                        +91 22 1234 5678
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <FaEnvelope className="text-amber-600 text-xl mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-800">Email</h3>
                      <a
                        href="mailto:info@bharatconstruction.com"
                        className="text-gray-600 hover:text-amber-600 transition"
                      >
                        info@bharatconstruction.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <FaMapMarkerAlt className="text-amber-600 text-xl mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-800">Address</h3>
                      <p className="text-gray-600">
                        123 Construction Plaza, Mumbai, Maharashtra 400001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <FaClock className="text-amber-600 text-xl mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-800">Working Hours</h3>
                      <p className="text-gray-600">
                        Monday - Saturday: 9:00 AM - 6:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8">
                  <h3 className="font-bold text-gray-800 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {["facebook", "twitter", "linkedin", "instagram"].map(
                      (social) => (
                        <a
                          key={social}
                          href="#"
                          className="w-10 h-10 bg-gray-200 hover:bg-amber-600 rounded-full flex items-center justify-center text-gray-700 hover:text-white transition duration-300"
                          aria-label={social}
                        >
                          <i className={`fab fa-${social}`}></i>
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-96 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.715313035682!2d72.8248973153779!3d19.04372225793419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c96a34dc4401%3A0x3ffc07e83942b13f!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Bharat Construction Location"
          ></iframe>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
