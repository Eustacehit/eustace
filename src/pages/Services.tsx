
import React from 'react';
import { Code, Smartphone, ShoppingCart, Search, Wrench, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GlobalMessage from '@/components/GlobalMessage';

const Services = () => {
  const services = [
    {
      icon: <Code className="h-12 w-12" />,
      title: "Website Design",
      description: "Beautiful, responsive designs that convert visitors into customers with modern UI/UX principles.",
      features: [
        "Responsive Design for All Devices",
        "Modern UI/UX Design",
        "Brand Identity Integration",
        "User Experience Optimization",
        "Cross-browser Compatibility"
      ],
      startingPrice: "$300"
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: "Frontend Development",
      description: "Interactive, fast-loading frontends built with the latest technologies and best practices.",
      features: [
        "React/Next.js Development",
        "TypeScript Implementation",
        "Performance Optimization",
        "Component Architecture",
        "State Management"
      ],
      startingPrice: "$500"
    },
    {
      icon: <Code className="h-12 w-12" />,
      title: "Backend Development",
      description: "Robust server-side solutions with secure APIs, databases, and cloud integration.",
      features: [
        "API Development & Integration",
        "Database Design & Management",
        "User Authentication Systems",
        "Cloud Deployment",
        "Security Implementation"
      ],
      startingPrice: "$600"
    },
    {
      icon: <ShoppingCart className="h-12 w-12" />,
      title: "E-commerce Development",
      description: "Complete online stores with payment integration, inventory management, and analytics.",
      features: [
        "Payment Gateway Integration",
        "Inventory Management",
        "Order Processing Systems",
        "Admin Dashboard",
        "Analytics & Reporting"
      ],
      startingPrice: "$800"
    },
    {
      icon: <Search className="h-12 w-12" />,
      title: "SEO Optimization",
      description: "Comprehensive SEO strategies to improve your website's visibility and search rankings.",
      features: [
        "Technical SEO Audit",
        "Keyword Research & Strategy",
        "On-page Optimization",
        "Performance Optimization",
        "Analytics Setup"
      ],
      startingPrice: "$150"
    },
    {
      icon: <Wrench className="h-12 w-12" />,
      title: "Website Maintenance",
      description: "Ongoing support to keep your website secure, updated, and performing at its best.",
      features: [
        "Regular Security Updates",
        "Content Management",
        "Performance Monitoring",
        "Backup & Recovery",
        "Technical Support"
      ],
      startingPrice: "$80/month"
    }
  ];

  const pricingTiers = [
    {
      name: "Personal Portfolio",
      price: "350",
      description: "Perfect for individuals and freelancers",
      features: [
        "Responsive Design",
        "5 Pages Maximum",
        "Contact Form",
        "SEO Optimization",
        "Mobile Friendly",
        "1 Month Support"
      ]
    },
    {
      name: "Small Business",
      price: "500",
      description: "Ideal for small businesses and startups",
      features: [
        "Custom Design",
        "Up to 10 Pages",
        "CMS Integration",
        "Advanced SEO",
        "Social Media Integration",
        "2 Months Support",
        "Analytics Setup"
      ],
      popular: true
    },
    {
      name: "E-commerce Store",
      price: "800",
      description: "Complete online store solution",
      features: [
        "Custom E-commerce Design",
        "Payment Integration",
        "Product Management",
        "Inventory System",
        "Order Management",
        "6 Months Support",
        "Training Included"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Comprehensive web development solutions tailored to your business needs. 
            From design to deployment, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="text-blue-600 mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center mt-auto">
                    <div className="text-2xl font-bold text-blue-600 mb-4">
                      Starting at {service.startingPrice}
                    </div>
                    <Link to="/contact">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our pricing reflects the quality, experience, and ongoing support we provide. 
              These are minimum starting prices - final costs depend on your specific requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative ${tier.popular ? 'ring-2 ring-blue-600 transform scale-105' : ''} hover:shadow-xl transition-all duration-300`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <p className="text-gray-600 mb-4">{tier.description}</p>
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      ${tier.price}
                      <span className="text-lg text-gray-600 font-normal">+</span>
                    </div>
                    <p className="text-sm text-gray-500">Minimum starting price</p>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/contact">
                    <Button className={`w-full ${tier.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'} text-white`}>
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 max-w-4xl mx-auto">
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why These Prices?</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Quality & Experience</h4>
                  <p className="text-gray-600 text-sm">3+ years of proven expertise delivering high-quality, professional websites.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Custom Solutions</h4>
                  <p className="text-gray-600 text-sm">Every website is tailored to your specific needs and business goals.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Ongoing Support</h4>
                  <p className="text-gray-600 text-sm">Comprehensive support and maintenance to keep your website running smoothly.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Modern Technology</h4>
                  <p className="text-gray-600 text-sm">Built with the latest technologies for performance, security, and scalability.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your requirements and create a custom solution for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="https://wa.me/254759719689" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl">
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      <GlobalMessage />

      <Footer />
    </div>
  );
};

export default Services;
