const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">BC</span>
              </div>
              <h3 className="text-xl font-bold">Bharat Construction</h3>
            </div>
            <p className="text-gray-400">
              Building India's future with quality construction since 1995. Your
              trusted partner for residential and commercial projects.
            </p>
            <div className="flex space-x-4">
              {["facebook", "twitter", "linkedin", "instagram"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-gray-400 hover:text-amber-500 transition duration-300"
                    aria-label={social}
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                      <i className={`fab fa-${social} text-lg`}></i>
                    </div>
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Projects", path: "/projects" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-amber-500 transition duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                "Residential Construction",
                "Commercial Buildings",
                "Interior Design",
                "Renovation",
                "Construction Consulting",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-500 transition duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold uppercase tracking-wider">
              Contact Us
            </h4>
            <address className="not-italic space-y-3">
              <div className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt mt-1 text-amber-500"></i>
                <p className="text-gray-400">
                  123 Construction Plaza, Mumbai, Maharashtra 400001
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-phone-alt text-amber-500"></i>
                <a
                  href="tel:+912212345678"
                  className="text-gray-400 hover:text-amber-500 transition duration-300"
                >
                  +91 22 1234 5678
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-envelope text-amber-500"></i>
                <a
                  href="mailto:info@bharatconstruction.com"
                  className="text-gray-400 hover:text-amber-500 transition duration-300"
                >
                  info@bharatconstruction.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-clock text-amber-500"></i>
                <p className="text-gray-400">Mon-Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </address>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gray-800 rounded-lg p-6 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-1">
                Subscribe to Our Newsletter
              </h4>
              <p className="text-gray-400">
                Get updates on our latest projects and offers
              </p>
            </div>
            <form className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-l-lg focus:outline-none text-gray-900 w-full md:w-64"
                required
              />
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-r-lg font-medium transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Bharat Construction. All rights
            reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-500 hover:text-amber-500 text-sm transition duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-amber-500 text-sm transition duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-amber-500 text-sm transition duration-300"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
