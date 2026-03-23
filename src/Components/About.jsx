import React from 'react'
import mishra from "../assets/mishra.jpeg";

const About = () => {
  return (
    <>
      <section class="min-h-screen flex items-center justify-center bg-gray-800 text-gray-300 px-4">
        <div class="max-w-5xl w-full bg-white shadow-xl rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">

          {/* <!-- Image Section --> */}
          <div class="w-40 h-40 md:w-60 md:h-60 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={mishra}   // 👈 yaha file name nahi, variable use hota hai
              alt="Mishra"
              className="rounded-3xl w-[200px] h-[300px] object-cover -mt-10"
            />
          </div>

          {/* <!-- Text Section --> */}
          <div class="text-center md:text-left">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              About Me
            </h2>

            <p class="text-gray-600 text-lg mb-4">
              Hello! I'm <span class="font-semibold text-blue-500">Raghav</span>, a passionate Full Stack Developer who loves building modern and responsive web applications.
            </p>

            <p class="text-gray-500 mb-6">
              I specialize in HTML, CSS, JavaScript, React, and backend technologies. I enjoy solving problems and creating user-friendly experiences.
            </p>

            {/* <!-- Button --> */}
            <button class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition duration-300">
              Contact Me
            </button>
          </div>

        </div>
      </section>
    </>
  )
}

export default About
