import React, { useState } from 'react'
import raghav from "../assets/raghav.jpeg";
import wheather from "../assets/wheather.jpeg";
import movie from "../assets/movie.jpeg";
import image from "../assets/image.jpeg";
import website from "../assets/website.jpeg";

export default function Home() {

  const [readMore, setReadMore] = useState(false);
  return (
    <>
      {/* <!-- Portfolio Section Start --> */}
      <section class="bg-[#0f172a] text-white py-10 px-4">

        {/* <!-- Stats --> */}
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4 text-center border-b border-gray-700 pb-6">
          <div>
            <h2 class="text-xl font-bold">0</h2>
            <p class="text-gray-400 text-sm">Years Experience</p>
          </div>
          <div>
            <h2 class="text-xl font-bold">5+</h2>
            <p class="text-gray-400 text-sm">Projects Completed</p>
          </div>
          <div>
            <h2 class="text-xl font-bold">10+</h2>
            <p class="text-gray-400 text-sm">Skills Learned</p>
          </div>
          <div>
            <h2 class="text-xl font-bold">5+</h2>
            <p class="text-gray-400 text-sm">Certificates</p>
          </div>
          <div class="flex justify-center items-center text-3xl">🏆</div>
        </div>

        {/* <!-- About --> */}
        <div class="mt-8 border-b border-gray-700 pb-8 ">
          <h2 class="text-2xl font-semibold mb-4">
            <span class="text-blue-500">About  </span>
            Me
          </h2>

          <div class="flex flex-col md:flex-row items-center gap-6">
            {/* <img src="https://via.placeholder.com/150"
              class="rounded-lg w-36 h-36 object-cover" /> */}

            <img
              src={raghav}   // 👈 yaha file name nahi, variable use hota hai
              alt="Raghav"
              class="rounded-lg w-36 h-36 object-cover"
            />

            <div>
              <p class="text-gray-300 mb-4">
                I am a passionate Web Developer with experience in creating
                {readMore && (
                  "modern, responsive, and user-friendly websites using react, tailwind, and modern tools."
                )}
              </p>

              <div class="flex gap-4">
                <button class="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md" onClick={() => setReadMore(!readMore)}>
                  {readMore ? "Show Less -" : "Read More +"}
                </button>
                <a
                  href="/resume.pdf"
                  download="My_Resume.pdf"
                  className="border border-gray-500 px-4 py-2 rounded-md hover:bg-gray-700"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Services --> */}
        <div class="mt-8 border-b border-gray-700 pb-8">
          <h2 class="text-2xl font-semibold mb-4">
            <span class="text-blue-500">My  </span>
            Services
          </h2>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="bg-[#1e293b] p-6 rounded-lg text-center hover:bg-[#334155] transition text-lg font-semibold">
              {/* <div class="text-3xl mb-2">💻</div> */}

              💻  Web Design

            </div>
            <div class="bg-[#1e293b] p-6 rounded-lg text-center hover:bg-[#334155] transition text-lg font-semibold">
              🎨 UI/UX Design
            </div>
            <div class="bg-[#1e293b] p-6 rounded-lg text-center hover:bg-[#334155] transition text-lg font-semibold">
              📱 Java Development
            </div>
            <div class="bg-[#1e293b] p-6 rounded-lg text-center hover:bg-[#334155] transition text-lg font-semibold">
              🔍 Code Optimization
            </div>
          </div>
        </div>

        {/* <!-- Projects --> */}
        <div class="mt-8">
          <h2 class="text-2xl font-semibold mb-4">
            <span class="text-blue-500">Latest  </span>
            Projects
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">

            <div class="bg-[#1e293b] rounded-lg overflow-hidden">
              <img
                src={image}   // 👈 yaha file name nahi, variable use hota hai
                alt="Image"
                class="rounded-lg w-full h-36 object-cover"
              />
              <p class="p-3 text-center text-lg font-semibold">E-Commerce Website</p>
            </div>

            <div class="bg-[#1e293b] rounded-lg overflow-hidden">
              <img
                src={movie}   // 👈 yaha file name nahi, variable use hota hai
                alt="Movie"
                class="rounded-lg w-full h-36 object-cover"
              />
              <p class="p-3 text-center text-lg font-semibold">Movies Search Design</p>
            </div>

            <div class="bg-[#1e293b] rounded-lg overflow-hidden">
              <img
                src={website}   // 👈 yaha file name nahi, variable use hota hai
                alt="website"
                class="rounded-lg w-full h-36 object-cover"
              />
              <p class="p-3 text-center text-lg font-semibold">Corporate Website</p>
            </div>

            <div class="bg-[#1e293b] rounded-lg overflow-hidden">
              <img
                src={wheather}   // 👈 yaha file name nahi, variable use hota hai
                alt="wheather"
                class="rounded-lg w-full h-36 object-cover"
              />
              <p class="p-3 text-center text-lg font-semibold">Landing Page Design</p>
            </div>

          </div>

          <div class="text-center mt-6">
            <button class="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-md">
              View All Projects +
            </button>
          </div>
        </div>

      </section >
      {/* <!-- Portfolio Section End --> */}
    </>
  )
}
