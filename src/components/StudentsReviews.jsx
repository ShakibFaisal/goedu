import React, { useEffect, useState } from "react";
import { Star } from "lucide-react"; 


const StudentReviews = () => {
    const [reviews, setReviews] = useState([]);
    
    
      useEffect(() => {
        fetch("/review.json")
          .then((res) => res.json())
          .then((data) => setReviews(data))
          
      }, []);
    
  return (
    <section className="bg-base-200 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          What Our Students Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="bg-white shadow-lg rounded-2xl p-6 text-left hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={r.photo}
                  alt={r.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <h3 className="font-semibold text-lg">{r.name}</h3>
                  <p className="text-sm text-gray-500">{r.course}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{r.review}</p>

              <div className="flex items-center">
                {[...Array(r.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-secondary fill-secondary"
                  />
                ))}
                {[...Array(5 - r.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-gray-300 fill-gray-300"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentReviews;
