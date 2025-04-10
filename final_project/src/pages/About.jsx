import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, Shield, Star, Users, Zap, Plus } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#ff4d8d] to-[#ff3377] bg-clip-text text-transparent">
          About Task Manager
        </h1>
        <p className="text-gray-600 text-lg">
          Your personal productivity companion
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <div className="card p-6 hover:shadow-lg transition-shadow">
          <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
            <CheckCircle className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Simple & Intuitive</h2>
          <p className="text-gray-600">
            Designed with simplicity in mind, making task management effortless and enjoyable.
          </p>
        </div>

        <div className="card p-6 hover:shadow-lg transition-shadow">
          <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
            <Clock className="h-8 w-8 text-purple-600" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Stay Organized</h2>
          <p className="text-gray-600">
            Keep track of your tasks with priorities, due dates, and organized lists.
          </p>
        </div>

        <div className="card p-6 hover:shadow-lg transition-shadow">
          <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
            <Shield className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Secure & Reliable</h2>
          <p className="text-gray-600">
            Your data is safely stored and always accessible when you need it.
          </p>
        </div>
      </div>

      <div className="card p-8 mb-12 hover:shadow-lg transition-shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Task Manager?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4">
            <div className="bg-pink-100 p-2 rounded-lg">
              <Star className="h-6 w-6 text-[#ff4d8d]" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Quality First</h3>
              <p className="text-gray-600">
                Built with attention to detail and focus on user experience.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-yellow-100 p-2 rounded-lg">
              <Users className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">User Focused</h3>
              <p className="text-gray-600">
                Designed based on real user feedback and needs.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Zap className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Fast & Efficient</h3>
              <p className="text-gray-600">
                Optimized performance for a smooth experience.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-2 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Always Improving</h3>
              <p className="text-gray-600">
                Regular updates and new features based on feedback.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Start Managing Your Tasks Today</h2>
        <p className="text-gray-600 mb-6">
          Join thousands of users who have improved their productivity with Task Manager.
        </p>
        <Link
          to="/new-list"
          className="btn-primary inline-flex items-center space-x-2"
        >
          <Plus className="h-5 w-5" />
          <span>Create Your First List</span>
        </Link>
      </div>
    </div>
  );
};

export default About;