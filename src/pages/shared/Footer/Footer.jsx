import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6">
              <img src="logo.png" className="w-16" alt="" />
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <p className="text-sm">123 Main Street, City</p>
              <p className="text-sm">info@example.com</p>
              <p className="text-sm">+1 234 567 890</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6">
              <h3 className="text-lg font-bold mb-4">About Us</h3>
              <p className="text-sm">
                At Your Football Academia, we are passionate about nurturing the
                next generation of football stars. Our dedicated team of coaches
                and trainers provide top-notch training programs and resources
                to help aspiring footballers unlock their full potential. From
                technical skills to tactical knowledge, we are committed to
                developing well-rounded athletes who excel both on and off the
                field. Join us on this exciting journey to greatness!
              </p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6">
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="text-sm">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Courses</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-sm">
              &copy; 2023 Your Football Academia. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
