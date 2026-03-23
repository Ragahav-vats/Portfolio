import React from 'react'
import { toast } from 'react-toastify';

export default function Contact() {
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
      <div className="bg-gray-800 text-white min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-6">Contact Me</h1>

        <p class="text-white">Email: yourmail@gmail.com</p>
        <p>Phone: +91 1234567890</p>

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

    </>
  )
}
