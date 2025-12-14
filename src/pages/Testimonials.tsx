
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GlobalMessage from '@/components/GlobalMessage';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Kimani",
      content: "Eustace Edwin delivered an exceptional website that exceeded our expectations. The design is modern, responsive, and perfectly captures our brand identity. Our conversion rates increased by 150% within the first month!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b15a5b87?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Missa",
      role: "Startup Founder",
      content: "The team at Websreal transformed our online presence completely. The e-commerce platform they built is intuitive, fast, and our sales have doubled since launch. Exceptional work and ongoing support!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Annet Williams",
      role: "Marketing Director",
      content: "Outstanding work on our fashion e-commerce platform. The user experience is seamless, the design is stunning, and the performance is incredible. Our average order value increased by 200%!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "James Bare",
      role: "Restaurant Owner",
      content: "The restaurant management system Websreal created for us is a game-changer. Online orders, table reservations, and POS integration work flawlessly. Our efficiency improved by 80%!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "William Otieno",
      role: "Creative Director",
      content: "Eustace Edwin created a great portfolio website for our agency. The animations are mesmerizing, the performance is excellent, and we've been featured on multiple design platforms!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "David Mwangi",
      role: "Real Estate Broker",
      content: "The real estate platform exceeded all expectations. Virtual tours, advanced search, and mobile optimization are perfect. Our property inquiries increased by 400% in just two months!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 11,
      name: "Priscilla Debra",
      role: "Business Owner",
      content: "Professional, reliable, and creative! Our corporate website perfectly represents our sustainability mission. The SEO optimization brought us to the first page of Google results!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 12,
      name: "Tyrone Alim",
      role: "Startup Founder",
      content: "From concept to launch, Websreal delivered excellence. The web application is fast, secure, and scalable. Their ongoing support has been invaluable for our growing startup!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Client Testimonials</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about working with Websreal and the results we've delivered.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">200%</div>
              <div className="text-gray-600">Average Growth</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <Quote className="h-8 w-8 text-blue-200" />
                  </div>
                  
                  <p className="text-gray-600 mb-6 italic leading-relaxed flex-grow">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Success Stories by Numbers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real clients - these are the outcomes that speak for themselves
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gradient-to-br from-green-50 to-emerald-100 border-green-200 text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-green-600 mb-2">400%</div>
                <div className="text-green-800 font-semibold mb-1">Property Inquiries</div>
                <div className="text-green-700 text-sm">Real Estate Platform</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200 text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-blue-600 mb-2">300%</div>
                <div className="text-blue-800 font-semibold mb-1">Sales Increase</div>
                <div className="text-blue-700 text-sm">E-commerce Store</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-50 to-violet-100 border-purple-200 text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
                <div className="text-purple-800 font-semibold mb-1">Active Users</div>
                <div className="text-purple-700 text-sm">Fitness App</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-orange-50 to-amber-100 border-orange-200 text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-orange-600 mb-2">80%</div>
                <div className="text-orange-800 font-semibold mb-1">Efficiency Boost</div>
                <div className="text-orange-700 text-sm">Restaurant System</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our Success Stories
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Ready to become our next success story? Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Start Your Project
              </button>
            </a>
            <a href="https://wa.me/254759719689" target="_blank" rel="noopener noreferrer">
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300">
                Get Free Consultation
              </button>
            </a>
          </div>
        </div>
      </section>

      <GlobalMessage />

      <Footer />
    </div>
  );
};

export default Testimonials;
