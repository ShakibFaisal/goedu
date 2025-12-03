import Swal from "sweetalert2";
import contactimg from "../assets/contact.avif";
const ContactUs = () => {
  const handlesubmit=(e)=>{
    e.preventDefault();
    Swal.fire("Message send successfully");

  }
  return (
    <section className="bg-[#f9f9f9]  py-16">
      <div className="max-w-11/12 mx-auto flex items-center flex-col-reverse md:flex-row">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-secondary my-8 text-center">
            Contact Us
          </h2>

          <p className="text-center text-gray-700 mb-12">
            Have questions or want to get in touch? Fill out the form below, and
            we'll get back to you as soon as possible.
          </p>

          <form onSubmit={handlesubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-6">
            <div>
              <label
                className="block text-gray-700 mb-2 font-medium"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name" required
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e94fe6]"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 mb-2 font-medium"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email" required
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e94fe6]"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 mb-2 font-medium"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message" required
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e94fe6]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-secondary transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        <div>
          <img src={contactimg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
