import React from "react";

function Testimonial() {
  const testimonials = [
    {
      name: "Alemu Lema",
      feedback: "Naomi is a fantastic frontend developer. Highly recommended!"
    },
    {
      name: "Mark Abebe",
      feedback: "Very professional and delivered high-quality work on time."
    },
    {
      name: "Lina Belete",
      feedback: "Creative, detail-oriented, and easy to work with!"
    }
  ];

  return (
    <section id="testimonial">
      <h2>Testimonials</h2>
      <div className="testimonial-container">
        {testimonials.map((t, index) => (
          <div className="testimonial" key={index}>
            <h3>{t.name}</h3>
            <p>"{t.feedback}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonial;
