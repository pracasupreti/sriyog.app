'use client';

import React from 'react';
import RedSection from '@/components/RedSection';
import { FaRegEdit, FaUserShield, FaBullhorn, FaIdBadge } from 'react-icons/fa';
import { MdEmail, MdSend } from 'react-icons/md';

const Page: React.FC = () => {
  return (
    <div>
      <RedSection title="Contact" />

      <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36 py-8 flex flex-col md:flex-row gap-8">
        {/* Left Column */}
        <div className="md:w-1/2 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">Welcome to SRIYOG Support</h2>
            <p className="text-gray-600">
              Welcome to SRIYOG! We're located at Rem.Work, Kamalpokhari, Kathmandu, Nepal.
            </p>
          </div>

          <div className="relative h-72 w-full overflow-hidden rounded-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7064.395177333446!2d85.323272!3d27.711185!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef740a066ed089%3A0xaf7934e44a7b1e17!2sSRIYOG!5e0!3m2!1sen!2snp!4v1743568477291!5m2!1sen!2snp"
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            {[
              { title: 'Registration', desc: 'Easy Registration system to join as professional.', icon: <FaRegEdit className="text-2xl text-[#8b1414]" /> },
              { title: 'Membership', desc: 'Reasonable verification fee for yearly membership.', icon: <FaIdBadge className="text-2xl text-[#8b1414] " /> },
              { title: 'Promotion', desc: 'Various ways to promote your skills and profile.', icon: <FaBullhorn className="text-2xl text-[#8b1414] " /> },
              { title: 'Security', desc: 'Verified and secured platform to showcase your skills.', icon: <FaUserShield className="text-2xl text-[#8b1414]" /> },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div>{item.icon}</div>
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="md:w-1/2 bg-gray-100 p-8 rounded-md shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <MdEmail className="text-2xl text-[#8b1414]" />
            Send Your Queries
          </h2>

          <form className="space-y-5">
            {/* First and Last Name */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label className="block mb-1 text-sm font-medium text-gray-700">First Name</label>
                <input type="text" placeholder="First Name" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-red-200 bg-white" />
              </div>
              <div className="w-full">
                <label className="block mb-1 text-sm font-medium text-gray-700">Last Name</label>
                <input type="text" placeholder="Last Name" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-red-200 bg-white" />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Email address</label>
              <input type="email" placeholder="Enter email" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-red-200 bg-white" />
              <p className="text-xs text-gray-500 mt-1">We'll never share your email with anyone else.</p>
            </div>

            {/* Phone Fields */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label className="block mb-1 text-sm font-medium text-gray-700">Country Code</label>
                <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-red-200 bg-white">
                  <option>Nepal (+977)</option>
                  <option>India (+91)</option>
                </select>
              </div>
              <div className="w-full">
                <label className="block mb-1 text-sm font-medium text-gray-700">Phone Number</label>
                <input type="tel" placeholder="Enter phone number" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-red-200 bg-white" />
              </div>
              <div className="w-full">
                <label className="block mb-1 text-sm font-medium text-gray-700">Extension</label>
                <input type="text" placeholder="Extension" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-red-200 bg-white" />
              </div>
            </div>

            {/* Help Topic */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">What do you need help with?</label>
              <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-red-200 bg-white">
                <option>Registration</option>
                <option>Membership</option>
                <option>Promotion</option>
                <option>Security</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 ">Message</label>
              <textarea placeholder="Message" className="w-full p-2 border border-gray-300 rounded h-24 focus:outline-none focus:ring focus:ring-red-200 bg-white"></textarea>
            </div>

            {/* Submit */}
            <button type="submit" className="bg-[#8b1414] text-white px-5 py-2 rounded hover:bg-red-800 transition flex items-center gap-2">
              Submit
            </button>
          </form>
        </div>
      </div>
      <section className="w-full bg-gray-100">
  <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36 text-center pt-10 pb-10">
    <div className="flex flex-col lg:flex-row justify-center items-start gap-10">
      
      {/* Person 1 */}
      <div className="w-full lg:w-1/3 text-center px-4">
        <img src="/images/niranjan.png" alt="Niranjan Sharma" className="mx-auto rounded-full w-48 h-48 object-cover" />
        <p className="pt-4 font-semibold text-lg">Niranjan Sharma</p>
        <p className="text-gray-600">Project Manager</p>
        <a href="https://t.me/niranjanpm" target="_blank" className="mt-2 inline-block border border-[#8b1414] text-[#8b1414] px-4 py-1 rounded hover:bg-[#8b1414] hover:text-white transition">
          Telegram
        </a>
      </div>

      {/* Person 2 */}
      <div className="w-full lg:w-1/3 text-center px-4">
        <img src="/images/aashish.png" alt="Aashis Sunar" className="mx-auto rounded-full w-48 h-48 object-cover" />
        <p className="pt-4 font-semibold text-lg">Aashis Sunar</p>
        <p className="text-gray-600">Business Development Officer</p>
        <a href="https://wa.me/9779852024365" target="_blank" className="mt-2 inline-block border border-[#8b1414] text-[#8b1414] px-4 py-1 rounded hover:bg-[#8b1414] hover:text-white transition">
          WhatsApp
        </a>
      </div>

      {/* Person 3 */}
      <div className="w-full lg:w-1/3 text-center px-4">
        <img src="/images/surajjj.png" alt="Suraj Majhi" className="mx-auto rounded-full w-48 h-48 object-cover" />
        <p className="pt-4 font-semibold text-lg">Suraj Majhi</p>
        <p className="text-gray-600">Business Manager</p>
        <a href="https://t.me/sriyog" target="_blank" className="mt-2 inline-block border border-[#8b1414] text-[#8b1414] px-4 py-1 rounded hover:bg-[#8b1414] hover:text-white transition">
          Telegram
        </a>
      </div>
      
    </div>
  </div>
</section>

{/* <section className="w-full pt-10 pb-10 border-b border-gray-300"></section> */}

    </div>
  );
};

export default Page;
