import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    // Reset submission status after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#ff4d8d] to-[#ff3377] bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="text-gray-600 text-lg">
          We're here to help and answer any questions you might have
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-8">
          <div className="card p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-[#ff4d8d]" />
              Get in Touch
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-gray-600">support@taskmanager.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Phone className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-purple-600" />
                </div>
                <span className="text-gray-600">123 Task Street, Productivity City, 12345</span>
              </div>
            </div>
          </div>

          <div className="card p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Clock className="h-6 w-6 text-[#ff4d8d]" />
              Office Hours
            </h2>
            <div className="space-y-2 text-gray-600">
              <p className="flex items-center gap-2">
                <span className="w-32">Monday - Friday:</span>
                <span className="font-medium">9:00 AM - 6:00 PM</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-32">Saturday:</span>
                <span className="font-medium">10:00 AM - 4:00 PM</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-32">Sunday:</span>
                <span className="font-medium">Closed</span>
              </p>
            </div>
          </div>
        </div>

        <div className="card p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Send className="h-6 w-6 text-[#ff4d8d]" />
            Send us a Message
          </h2>
          {submitted ? (
            <div className="text-center py-8">
              <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-600 mb-2">Message Sent!</h3>
              <p className="text-gray-600">We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="input-field min-h-[150px]"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;