import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "So accurate it gave me goosebumps. The career insights were especially spot-on!",
      name: "Priya S.",
      location: "Mumbai",
      rating: 5,
      imageUrl: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "I've spent ₹5000 on astrology readings before — this was more valuable and insightful.",
      name: "Amit K.",
      location: "Bangalore",
      rating: 5,
      imageUrl: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "The spiritual insights helped me understand my life purpose. I've shared it with all my friends!",
      name: "Neha R.",
      location: "Delhi",
      rating: 5,
      imageUrl: "https://images.pexels.com/photos/6533887/pexels-photo-6533887.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-300">
            What Our Users Say
          </h2>
          <p className="text-gray-300">
            Join thousands who have discovered their cosmic blueprint with our AI-powered astrological insights.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-[#1B1F3B]/60 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex gap-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
              
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.imageUrl} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;