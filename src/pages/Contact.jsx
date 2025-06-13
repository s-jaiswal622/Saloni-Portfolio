const Contact = () => {
    return (
      <section className="py-16 px-4 max-w-4xl mx-auto text-white">
        <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>
  
        <div className="bg-gray-900 p-8 rounded-xl shadow-xl">
          <form className="grid gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-gray-800 p-3 rounded border border-gray-700"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-gray-800 p-3 rounded border border-gray-700"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="bg-gray-800 p-3 rounded border border-gray-700"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
            >
              Send Message
            </button>
          </form>
  
          <div className="mt-10 text-center">
            <a
              href="/SaloniJaiswal_Resume.pdf"
              download
              className="text-blue-400 hover:underline"
            >
              📄 Download My Resume
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  