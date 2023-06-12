import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#28263B] text-white font-mono py-8 rounded-t-lg mt-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6">
              <h3 className="text-lg font-bold mb-4">About Us</h3>
              <p className="text-sm">
                At Your Football Academia, we are passionate about nurturing the
                next generation of football stars. Our dedicated team of coaches
                and trainers provide top-notch training programs and resources
                to help aspiring footballers unlock their full potential. Join
                us on this exciting journey to greatness!
              </p>

              <div className="form-control w-80">
                <h3 className="mt-4 uppercase">Stay Connected</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="input input-bordered w-full pr-16"
                  />
                  <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                    JOIN
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6">
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
              <h3 className="text-lg font-bold mt-8">Social Links</h3>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/ibrahim.siddiqueee"><FaFacebook  className="text-[#82D135]" size={60}/>
                </a>
                <a href="https://www.linkedin.com/in/ibrahim-siddiqueee/"><FaLinkedin className="text-[#82D135]" size={60}/>
                </a>
                <a href="https://github.com/Ibrahim-ST"><FaGithub className="text-[#82D135]" size={60}/>
                </a>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6">
              <img src="logo.png" className="w-16" alt="" />
              <h3 className="text-2xl font-bold  mb-4">Farmhouse Academy </h3>
              <p className="text-sm">123 Main Street, City</p>
              <p className="text-sm">info@example.com</p>
              <p className="text-sm">+1 234 567 890</p>
              <div className="  mt-6">
                <p className="text-sm">
                  &copy; 2023 Your Football Academia. <br /> All rights
                  reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
