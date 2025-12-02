import React from "react";
import { BookOpen, Users, Calendar, Star } from "lucide-react";

const HowItWork = () => {
  const steps = [
    {
      id: 1,
      icon: <BookOpen className="w-10 h-10 text-indigo-600" />,
      title: "Create a Listing",
      description:
        "Offer your skill by creating a listing with details like price, schedule, and description.",
    },
    {
      id: 2,
      icon: <Users className="w-10 h-10 text-indigo-600" />,
      title: "Browse Skills",
      description:
        "Explore various local skills — from music and art to technology and fitness.",
    },
    {
      id: 3,
      icon: <Calendar className="w-10 h-10 text-indigo-600" />,
      title: "Book a Session",
      description:
        "Found something you like? Reserve a session easily and confirm your booking instantly.",
    },
    {
      id: 4,
      icon: <Star className="w-10 h-10 text-indigo-600" />,
      title: "Learn & Rate",
      description:
        "Attend your session, learn something new, and rate your experience to help others!",
    },
  ];

  return (
    <section className="py-16" style={{ background: "#FAF0F0" }}>
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          How GoEdu Works
        </h2>

        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Learn and share skills with people around you in just a few simple steps.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="
                rounded-2xl p-6 shadow-lg
                backdrop-blur-md bg-white/40
                border border-white/30 
                transition hover:bg-white/50 hover:shadow-xl
              "
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-700 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
