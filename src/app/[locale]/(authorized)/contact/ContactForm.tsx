function ContactForm() {
  return (
    <main className="bg-gray-100 dark:bg-gray-900 flex items-center justify-center flex-grow py-20">
      <div className="container bg-white dark:bg-gray-800 rounded-2xl w-full max-w-3xl p-6 sm:p-8">
        <h1 className="text-2xl font-semibold text-center text-gray-800 dark:text-white pb-5">Get in Touch</h1>

        <form className="space-y-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-3">
              <label htmlFor="full-name" className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                name="full-name"
                id="full-name"
                className="p-3 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-800 dark:bg-gray-700 dark:text-white transition"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="phone" className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="p-3 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-800 dark:bg-gray-700 dark:text-white transition"
                placeholder="(123) 456-7890"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="email" className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="p-3 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-800 dark:bg-gray-700 dark:text-white transition"
              placeholder="example@mail.com"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="category" className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Inquiry Category
            </label>
            <select
              name="category"
              id="category"
              className="p-3 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-800 dark:bg-gray-700 dark:text-white transition"
            >
              <option value="">Select a Category</option>
              <option value="support">Support</option>
              <option value="feedback">Feedback</option>
              <option value="general">General Inquiry</option>
            </select>
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="message" className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="p-3 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-800 dark:bg-gray-700 dark:text-white transition h-32"
              placeholder="Type your message here"
            ></textarea>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="subscribe"
              name="subscribe"
              className="rounded border-gray-300 text-purple-800 focus:ring-purple-800 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="subscribe" className="text-sm text-gray-600 dark:text-gray-300">
              Subscribe to our newsletter
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-purple-700 to-purple-800 text-white text-lg font-medium rounded-lg hover:bg-gradient-to-r hover:from-purple-800 hover:to-purple-900 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}

export default ContactForm;
