import React from 'react'
import { getDatabase, ref, set } from "firebase/database";
import app from '../../firebase/config';
import { toast } from 'react-toastify';

export default function Footer() {

  const formHandler = (event) => {
    event.preventDefault();
    event.target.reset();

    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value
    }
    const db = getDatabase(app);
    set(ref(db, 'users/' + Date.now()), data);

    toast.success('Your Response Submit Sucessfully !!');
    console.log(data);
  }
  return (
    <>
      <section class="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-gray-300 py-12 px-6">
        <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

          {/* <!-- LEFT SIDE --> */}
          <div class="space-y-8">

            {/* <!-- Testimonials --> */}
            <div>
              <h2 class="text-xl font-semibold text-white mb-4">Client Testimonials</h2>

              <div class="bg-[#1e293b]/80 p-5 rounded-xl border border-gray-700 shadow">
                <p class="italic mb-3">
                  Raghav did an amazing job. Highly professional and delivered on time!”
                </p>

                <div class="text-yellow-400 mb-2">★★★★★</div>
                <p class="text-sm text-gray-400">— Raghav Mishra</p>
              </div>
            </div>

            {/* <!-- Contact Form --> */}
            <div>
              <h2 class="text-xl font-semibold text-white mb-4">Let's Connect</h2>

              <div class="bg-[#1e293b]/80 p-5 rounded-xl border border-gray-700 shadow">
                <h3 class="mb-3 text-gray-200">Get In Touch</h3>

                <form class="space-y-3" onSubmit={formHandler}>
                  <input type="text" placeholder="Your Name"
                    name='name'
                    class="w-full p-2 rounded bg-[#0f172a] border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 outline-none" />

                  <input type="email" placeholder="Your Email"
                    name='email'
                    class="w-full p-2 rounded bg-[#0f172a] border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 outline-none" />

                  <textarea placeholder="Your Message"
                    name='message'
                    class="w-full p-2 rounded bg-[#0f172a] border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 outline-none"></textarea>

                  <button class="w-full bg-gradient-to-r from-blue-500 to-cyan-400 py-2 rounded text-white">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

          </div>

          {/* <!-- RIGHT SIDE --> */}
          <div class="space-y-8">

            {/* <!-- Skills --> */}
            <div>
              <h2 class="text-xl font-semibold text-white mb-4">Skills & Tools</h2>

              <div class="bg-[#1e293b]/80 p-5 rounded-xl border border-gray-700 shadow space-y-4">

                {/* <!-- Skill --> */}
                <div>
                  <div class="flex justify-between text-sm mb-1">
                    <span>HTML / CSS</span>
                    <span>90%</span>
                  </div>
                  <div class="w-full bg-gray-700 h-2 rounded">
                    <div class="bg-yellow-400 h-2 rounded w-[90%]"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between text-sm mb-1">
                    <span>JavaScript</span>
                    <span>80%</span>
                  </div>
                  <div class="w-full bg-gray-700 h-2 rounded">
                    <div class="bg-orange-400 h-2 rounded w-[80%]"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between text-sm mb-1">
                    <span>React / Next</span>
                    <span>75%</span>
                  </div>
                  <div class="w-full bg-gray-700 h-2 rounded">
                    <div class="bg-cyan-400 h-2 rounded w-[75%]"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between text-sm mb-1">
                    <span>Java</span>
                    <span>60%</span>
                  </div>
                  <div class="w-full bg-gray-700 h-2 rounded">
                    <div class="bg-blue-500 h-2 rounded w-[75%]"></div>
                  </div>
                </div>

              </div>
            </div>
            {/* 
      <!-- Contact Info --> */}
            <div>
              <h2 class="text-xl font-semibold text-white mb-4">Contact Info</h2>

              <div class="bg-[#1e293b]/80 p-5 rounded-xl border border-gray-700 shadow space-y-4">

                <div class="flex items-center gap-3">
                  <span class="bg-blue-500/20 p-2 rounded-full">📧</span>
                  <p>raghavmishra98601@gmail.com</p>
                </div>

                <div class="flex items-center gap-3">
                  <span class="bg-blue-500/20 p-2 rounded-full">📞</span>
                  <p>+91 6287755372</p>
                </div>

                <div class="flex items-center gap-3">
                  <span class="bg-blue-500/20 p-2 rounded-full">📍</span>
                  <p>Varanasi, India</p>
                </div>

              </div>
            </div>
            {/* <!-- Social Icons Section --> */}
            <div class="flex justify-center items-center gap-6 mt-6">

              {/* <!-- Instagram --> */}
              <a href="https://instagram.com/raghavmishra459" target="_blank"
                class="text-gray-600 hover:text-pink-500 text-2xl transition duration-300">
                <i class="fab fa-instagram"></i>
              </a>

              {/* <!-- Linkdedin --> */}
              <a href="https://www.linkedin.com/in/raghav-mishra-9060652a0/" target="_blank"
                class="text-gray-600 hover:text-blue-600 text-2xl transition duration-300">
                <i class="fa-brands fa-linkedin"></i>
              </a>

              {/* <!-- GitHub --> */}
              <a href="https://github.com/Ragahav-vats?tab=repositories" target="_blank"
                class="text-gray-600 hover:text-black text-2xl transition duration-300">
                <i class="fab fa-github"></i>
              </a>

              {/* <!-- Twitter --> */}
              <a href="https://twitter.com/your_username" target="_blank"
                class="text-gray-600 hover:text-sky-500 text-2xl transition duration-300">
                <i class="fab fa-twitter"></i>
              </a>

            </div>

          </div>

        </div>

        {/* <!-- Footer Bottom --> */}
        <div class="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          © 2026 Raghav Mishra. All Rights Reserved
        </div>
      </section>
    </>
  )
}
