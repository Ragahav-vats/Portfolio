import React from 'react'

const Service = () => {
  return (
    <>
      <body class="bg-gray-100 text-gray-800">
        <div class="flex items-center justify-center h-screen">
          <div class="text-center">
            {/* <!-- Main Error Text --> */}
            <h1 class="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
            <p class="text-lg text-gray-600 mb-8">Oops! The page you are looking for could not be found.</p>

            {/* <!-- 4 Words Section --> */}
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-center mb-8">
              <div class="text-center p-6 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                <p class="text-xl font-semibold">Lost</p>
              </div>
              <div class="text-center p-6 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                <p class="text-xl font-semibold">Disconnected</p>
              </div>
              <div class="text-center p-6 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                <p class="text-xl font-semibold">Missing</p>
              </div>
              <div class="text-center p-6 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                <p class="text-xl font-semibold">Unavailable</p>
              </div>
            </div>

            {/* <!-- Button Section --> */}
            <div class="mb-6">
              <a href="/" class="px-8 py-4 bg-green-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-green-700 focus:ring-4 focus:ring-green-300 transition duration-300">
                Go to Homepage
              </a>
            </div>

            {/* <!-- Additional Text --> */}
            <p class="text-lg text-gray-700">It seems the page you're looking for no longer exists or has moved. Try returning to the homepage.</p>
          </div>
        </div>
      </body>
    </>
  )
}

export default Service
