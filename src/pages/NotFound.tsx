import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GlobalMessage from '@/components/GlobalMessage';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <div className="min-h-[60vh] flex items-center justify-center pt-32 pb-20 px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-2xl text-gray-600 mb-4">Oops! Page not found</p>
          <p className="text-lg text-gray-500 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <a 
            href="/" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Return to Home
          </a>
        </div>
      </div>
      <GlobalMessage />
      <Footer />
    </div>
  );
};

export default NotFound;

