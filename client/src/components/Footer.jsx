import React from 'react';
import gallery1 from '../img/gallery-1.jpg'
import gallery2 from '../img/gallery-2.jpg'
import gallery3 from '../img/gallery-3.jpg'
import gallery4 from '../img/gallery-4.jpg'
import gallery5 from '../img/gallery-5.jpg'
import gallery6 from '../img/gallery-6.jpg'

function Footer() {
  return (
    <div>
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
    </div>
  );
}

export default Footer;
