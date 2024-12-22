function ContactForm() {
    return (
      <main className="bg-gray-100 dark:bg-gray-900 flex items-center justify-center min-h-screen">
  

        <div className="container bg-white  dark:bg-gray-800 rounded-2xl shadow-sm  w-full max-w-3xl p-6  sm:p-8">
          <h1 className="text-2xl font-semibold text-center text-gray-800 dark:text-white pb-5">Contact Us</h1>
  
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="first-name" className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  First Name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="p-3 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-gray-700 dark:text-white transition"
                  placeholder="Name"
                />
              </div>
  
              <div className="flex flex-col gap-2">
                <label htmlFor="last_name" className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Last Name
                </label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  className="p-3 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-gray-700 dark:text-white transition"
                  placeholder="Last Name"
                />
              </div>
            </div>
  
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Email Address (required)
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="p-3 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-gray-700 dark:text-white transition"
                placeholder="example@mail.com"
              />
            </div>
  
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Subject (required)
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="p-3 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-gray-700 dark:text-white transition"
                placeholder="Your message topic"
              />
            </div>
  
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Message (required)
              </label>
              <textarea
                name="message"
                id="message"
                className="p-3 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-gray-700 dark:text-white transition h-28 "
                placeholder="Write your message here"
              ></textarea>
            </div>
  
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-lg font-medium rounded-lg shadow-md hover:from-pink-600 hover:to-purple-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    );
  }
  
  export default ContactForm;
  