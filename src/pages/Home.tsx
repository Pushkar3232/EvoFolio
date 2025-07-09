// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  Sparkles, 
  Share2, 
  ArrowRight, 
  Star, 
  Users, 
  Zap,
  CheckCircle,
  Smartphone,
  Monitor,
  Tablet
} from 'lucide-react';

export const Home: React.FC = () => {
  const features = [
    {
      icon: Rocket,
      title: "Easy to Use",
      description: "Simple form-based interface to create professional portfolios in minutes, no coding required.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Sparkles,
      title: "Dynamic Content",
      description: "Automatically generated layouts that adapt to your content and showcase your work beautifully.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Share2,
      title: "Share Anywhere",
      description: "Get a unique URL for your portfolio that you can share with employers, clients, and your network.",
      color: "from-green-500 to-teal-500"
    }
  ];

  const benefits = [
    "No Code",
    "Mobile-responsive design",
    "Fast loading times",
    "Easy customization"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              Create Your Perfect
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Digital Portfolio
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Showcase your skills, projects, and achievements with stunning, dynamic portfolios. 
              Perfect for students, professionals, and creatives.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Link
              to="/create"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <span>Create Portfolio</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/portfolios"
              className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-blue-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto text-center"
            >
              View Examples
            </Link>
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-2xl sm:text-3xl font-bold text-gray-800">4.9</span>
              </div>
              <p className="text-gray-600">User Rating</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Users className="w-5 h-5 text-blue-500" />
                <span className="text-2xl sm:text-3xl font-bold text-gray-800">10K+</span>
              </div>
              <p className="text-gray-600">Portfolios Created</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Zap className="w-5 h-5 text-green-500" />
                <span className="text-2xl sm:text-3xl font-bold text-gray-800">2 min</span>
              </div>
              <p className="text-gray-600">Setup Time</p>
            </div>
          </div> */}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Why Choose EvoFolio?
            </h2>
            <p className="text-gray-600 text-lg">
              Everything you need to create a professional online presence
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Device Compatibility */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Works on All Devices
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Your portfolio looks perfect on desktop, tablet, and mobile devices
          </p>
        </div>
        
        <div className="flex justify-center items-center space-x-8 sm:space-x-12 opacity-60">
          <div className="text-center">
            <Monitor className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-500 text-sm">Desktop</p>
          </div>
          <div className="text-center">
            <Tablet className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-500 text-sm">Tablet</p>
          </div>
          <div className="text-center">
            <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-500 text-sm">Mobile</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-white max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            
          </p>
          <Link
            to="/create"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors duration-200 transform hover:scale-105"
          >
            <span>Create Your Portfolio Now</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};