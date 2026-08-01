import React from 'react'
import mishra from "../assets/mishra.jpeg";
import { Link } from 'react-router';

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

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">
                Latest Internship Experience
              </h3>

              <div className="bg-gray-100 rounded-xl p-5 border-l-4 border-blue-500">
                <h4 className="text-xl font-bold text-gray-800">
                  Full Stack Web Development Intern
                </h4>

                <p className="text-blue-600 font-medium mb-3">
                  Upstare Research Pvt. Ltd.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>
                    Developed responsive and modern web applications using React.js, Tailwind CSS, Node.js, Express.js, and MongoDB.
                  </li>

                  <li>
                    Built and optimized multiple real-world projects with clean, reusable, and scalable code.
                  </li>

                  <li>
                    Integrated REST APIs, authentication, and database operations for full-stack applications.
                  </li>

                  <li>
                    Collaborated with the development team using Git and GitHub for version control and project management.
                  </li>

                  <li>
                    Improved application performance, responsiveness, and user experience by following industry best practices.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">
                Latest Internship Experience
              </h3>

              <div className="bg-gray-100 rounded-xl p-5 border-l-4 border-blue-500">
                <h4 className="text-xl font-bold text-gray-800">
                  Full Stack Web Development Intern
                </h4>

                <p className="text-blue-600 font-medium mb-3">
                  Sunsys Techsol Pvt. Ltd.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>
                    Integrated REST APIs, authentication, and database operations for full-stack applications.
                  </li>

                  <li>
                    Collaborated with the development team using Git and GitHub for version control and project management.
                  </li>

                  <li>
                    Improved application performance, responsiveness, and user experience by following industry best practices.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">
                Certifications
              </h3>

              <div className="bg-gray-100 rounded-xl p-5 border-l-4 border-green-500">
                <h4 className="text-xl font-bold text-gray-800">
                  Full Stack Web Development Certification
                </h4>

                <p className="text-green-600 font-medium mb-3">
                  Upstare Research Pvt. Ltd.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>
                    Successfully completed a Full Stack Web Development training program covering modern frontend and backend technologies.
                  </li>

                  <li>
                    Gained hands-on experience with HTML, CSS, JavaScript, React.js, Tailwind CSS, Node.js, Express.js, and MongoDB.
                  </li>

                  <li>
                    Successfully completed practical projects demonstrating real-world full-stack development skills.
                  </li>
                </ul>
              </div>
            </div>

            {/* <!-- Button --> */}
            <Link to="/contact">
            <button class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition duration-300">
              Contact Me
            </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  )
}

export default About
