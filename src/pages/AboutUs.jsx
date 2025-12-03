import aboutimg from "../assets/about.avif"
const AboutUs = () => {

  return (
    <section className="max-w-11/12 mx-auto bg-[#f9f9f9] flex flex-col md:flex-row justify-between items-center py-16">
      <div className="max-w-6xl mx-auto px-6 text-center md:text-left">
        <h2 className="text-4xl font-bold text-primary mb-6">
          About Us
        </h2>
        <p className="text-gray-700 text-lg mb-4">
          At <span className="font-semibold text-secondary">GoEdu</span>, we are passionate about empowering learners everywhere. Our platform provides interactive courses, tutorials, and resources to help you gain new skills and expand your knowledge.
        </p>
        <p className="text-gray-700 text-lg mb-6">
          Whether you’re a beginner or an advanced learner, GoEdu connects you with a supportive learning community, making education accessible, engaging, and fun. Together, we grow, learn, and achieve more.
        </p>
        <a
          href="/contact"
          className="inline-block bg-primary text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-secondary transition-colors"
        >
          Contact Us
        </a>
      </div>
      <div>
        <img src={aboutimg} alt="" />
      </div>
    </section>
  );
};

export default AboutUs;
