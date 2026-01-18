import React from "react";
// Import images
import carousel1 from '../img/carousel-1.jpg'
import carousel2 from '../img/carousel-2.jpg'
import carousel3 from '../img/carousel-3.jpg'
import aboutImg from '../img/about.jpg'
import featureImg from '../img/feature.jpg'
import quoteImg from '../img/quote.jpg'
import img1 from '../img/img-600x400-1.jpg'
import img2 from '../img/img-600x400-2.jpg'
import img3 from '../img/img-600x400-3.jpg'
import img4 from '../img/img-600x400-4.jpg'
import img5 from '../img/img-600x400-5.jpg'
import img6 from '../img/img-600x400-6.jpg'
import team1 from '../img/team-1.jpg'
import team2 from '../img/team-2.jpg'
import team3 from '../img/team-3.jpg'
import testimonial1 from '../img/testimonial-1.jpg'
import testimonial2 from '../img/testimonial-2.jpg'
import testimonial3 from '../img/testimonial-3.jpg'
import gallery1 from '../img/gallery-1.jpg'
import gallery2 from '../img/gallery-2.jpg'
import gallery3 from '../img/gallery-3.jpg'
import gallery4 from '../img/gallery-4.jpg'
import gallery5 from '../img/gallery-5.jpg'
import gallery6 from '../img/gallery-6.jpg'

const Contact = () => {
  return (
    <>
      {/* Topbar starts */}
      <div className="hidden lg:flex bg-gray-900 text-gray-300 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between w-full px-6 py-2">
          <div className="flex gap-6">
            <span>📍 123 Street, New York, USA</span>
            <span>⏰ Mon - Fri : 09.00 AM - 09.00 PM</span>
          </div>
          <div className="flex gap-4">
            <span>📞 +012 345 6789</span>
            <div className="flex gap-3">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-linkedin-in"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar ends*/}

      {/* Page header start */}
            <div
              className="relative w-full py-24 mb-16 bg-center bg-cover"
              style={{ backgroundImage: `url(${carousel1})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60"></div>
      
              {/* Content */}
              <div className="relative max-w-7xl mx-auto px-6">
                <h1
                  className="text-5xl md:text-6xl font-bold text-white mb-4 ml-7
                             animate-slideDown"
                >
                  Contact
                </h1>
      
                {/* Breadcrumb */}
                <nav aria-label="breadcrumb">
                  <ol
                    className="flex flex-wrap items-center gap-2 text-sm
                               animate-slideDown delay-150"
                  >
                    <li>
                      <a
                        href="#"
                        className="text-white/80 hover:text-white transition"
                      >
                        Home
                      </a>
                    </li>
                    <li className="text-white/60">/</li>
                    <li className="text-white font-medium">Contact</li>
                  </ol>
                </nav>
              </div>
            </div>
            {/* Page header end */}

      {/* Contact Section */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 px-6">

          {/* Contact Form */}
          <div>
            <h6 className="text-blue-600 font-semibold mb-2">Contact Us</h6>
            <h2 className="text-3xl font-bold mb-4">
              Feel Free To Contact Us
            </h2>
            <p className="text-gray-600 mb-8">
              The contact form is currently inactive. You can integrate it with
              backend later.
            </p>

            <form className="grid gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-4 border rounded"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-4 border rounded"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="p-4 border rounded"
              />

              <textarea
                placeholder="Message"
                className="p-4 border rounded h-32"
              ></textarea>

              <button className="bg-blue-600 text-white px-8 py-3 rounded-full w-fit">
                Send Message
              </button>
            </form>
          </div>

          {/* Google Map */}
          <div className="h-[400px]">
            <iframe
              className="w-full h-full rounded"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer Start */}
              <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-400 mt-20">
                <div className="max-w-7xl mx-auto px-6 py-16">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      
                    {/* Brand / Address */}
                    <div>
                      <h4 className="text-white text-xl font-semibold mb-4">Solartec</h4>
                      <p className="mb-4 text-sm leading-relaxed">
                        Powering a sustainable future with innovative solar & renewable
                        energy solutions.
                      </p>
      
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-3">
                          <i className="fa fa-map-marker-alt text-blue-500"></i>
                          123 Street, New York, USA
                        </li>
                        <li className="flex items-center gap-3">
                          <i className="fa fa-phone-alt text-blue-500"></i>
                          +012 345 67890
                        </li>
                        <li className="flex items-center gap-3">
                          <i className="fa fa-envelope text-blue-500"></i>
                          info@example.com
                        </li>
                      </ul>
      
                      {/* Social */}
                      <div className="flex gap-3 mt-6">
                        {["twitter", "facebook-f", "youtube", "linkedin-in"].map((icon) => (
                          <a
                            key={icon}
                            href="#"
                            className="w-10 h-10 flex items-center justify-center rounded-full
                               border border-gray-700 text-gray-400
                               hover:bg-blue-600 hover:border-blue-600 hover:text-white
                               transition-all duration-300"
                          >
                            <i className={`fab fa-${icon}`}></i>
                          </a>
                        ))}
                      </div>
                    </div>
      
                    {/* Quick Links */}
                    <div>
                      <h5 className="text-white text-lg font-semibold mb-5">
                        Quick Links
                      </h5>
                      <ul className="space-y-3 text-sm">
                        {["About Us", "Contact Us", "Our Services", "Terms & Conditions", "Support"].map(
                          (item) => (
                            <li key={item}>
                              <a
                                href="#"
                                className="hover:text-blue-500 transition-colors duration-300"
                              >
                                {item}
                              </a>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
      
                    {/* Gallery */}
                    <div>
                      <h5 className="text-white text-lg font-semibold mb-5">
                        Project Gallery
                      </h5>
                      <div className="grid grid-cols-3 gap-3">
                        {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6].map(
                          (img, i) => (
                            <div
                              key={i}
                              className="overflow-hidden rounded-lg group"
                            >
                              <img
                                src={img}
                                alt="Gallery"
                                className="w-full h-full object-cover
                                   group-hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                          )
                        )}
                      </div>
                    </div>
      
                    {/* Newsletter */}
                    <div>
                      <h5 className="text-white text-lg font-semibold mb-5">
                        Newsletter
                      </h5>
                      <p className="text-sm mb-5">
                        Subscribe to get the latest updates on renewable energy.
                      </p>
      
                      <div className="relative">
                        <input
                          type="email"
                          placeholder="Your email address"
                          className="w-full rounded-full bg-gray-800 text-sm
                             px-5 py-3 pr-28 text-white
                             focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                        <button
                          className="absolute top-1/2 right-1 -translate-y-1/2
                             rounded-full bg-blue-600 px-5 py-2 text-sm text-white
                             hover:bg-blue-700 transition"
                        >
                          Sign Up
                        </button>
                      </div>
                    </div>
      
                  </div>
                </div>
      
                {/* Bottom Bar */}
                <div className="border-t border-gray-800">
                  <div className="max-w-7xl mx-auto px-6 py-6
                          flex flex-col md:flex-row
                          items-center justify-between
                          text-sm gap-4">
                    <p>
                      © <span className="text-white font-medium">Solartec</span>. All Rights Reserved.
                    </p>
      
                    <p>
                      Designed by{" "}
                      <a
                        href="https://htmlcodex.com"
                        className="text-blue-500 hover:underline"
                      >
                        HTML Codex
                      </a>{" "}
                      • Distributed by{" "}
                      <a
                        href="https://themewagon.com"
                        className="text-blue-500 hover:underline"
                      >
                        ThemeWagon
                      </a>
                    </p>
                  </div>
                </div>
              </footer>
              {/* Footer End */}
      {/* <!-- Back to Top --> */}
      <a
        href="#"
        className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center rounded-full shadow-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-300 no-underline"
      >
        <i class="fa-solid fa-arrow-up"></i>
      </a>
    </>
  );
};

export default Contact;
