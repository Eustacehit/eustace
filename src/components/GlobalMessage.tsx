import React from 'react';
import { Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const GlobalMessage = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <Globe className="h-16 w-16 text-white" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          We Function Globally
        </h2>
        <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
          No matter where you are in the world, we're here to help scale your business 
          with professional web solutions. Feel free to reach out and let's discuss how 
          we can transform your online presence.
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default GlobalMessage;
