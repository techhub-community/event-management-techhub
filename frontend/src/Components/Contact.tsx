import React from 'react'
function Contact() {
  return (
    <div className="isolate px-6 py-24 sm:py-32 lg:px-8 mt-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-yellow-800 sm:text-4xl">Contact Us</h2>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="your-name" className="block text-sm font-semibold leading-6 text-gray-900">Your Name</label>
            <div className="mt-2.5">
              <input type="text" name="your-name" id="your-name" autoComplete="given-name" className="border-solid border-black block w-full rounded-xl border-2 px-3.5 py-2 text-gray-900" />
            </div>
          </div>
          <div>
            <label htmlFor="your-email" className="block text-sm font-semibold leading-6 text-gray-900">Your Email</label>
            <div className="mt-2.5">
              <input type="text" name="your-email" id="your-email" autoComplete="family-name" className="border-solid border-black block w-full rounded-xl border-2 px-3.5 py-2 text-gray-900" />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
            <div className="mt-2.5">
              <input type="text" name="message" id="message" autoComplete="given-name" className="border-solid border-black block w-full rounded-xl border-2 px-3.5 py-2 text-gray-900" />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-gray-900">Subject</label>
            <div className="mt-2.5">
              <input type="text" name="subject" id="subject" autoComplete="family-name" className="border-solid border-black block w-full rounded-xl border-2 px-3.5 py-2 text-gray-900" />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button type="submit" className="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;block w-245 h-31 rounded-md bg-yellow-600 px-3.5 py-2.5 text-center text-sm font-semibold text-black border-solid border-black border-2">Send Message</button>
        </div>
      </form>
    </div>
  );
}
export default Contact;