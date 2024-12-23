import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">Get in Touch</h2>
        <p className="text-indigo-200 text-center mb-12 max-w-2xl mx-auto">
          Let's discuss how we can work together to bring your ideas to life
        </p>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-indigo-500/20">
            <h3 className="text-xl font-semibold mb-6 text-white">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-indigo-400 mr-4" size={20} />
                <span className="text-indigo-200">satyakumarchaudhary603@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-indigo-400 mr-4" size={20} />
                <span className="text-indigo-200">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-indigo-400 mr-4" size={20} />
                <span className="text-indigo-200">San Francisco, CA</span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 bg-white/10 backdrop-blur-md p-8 rounded-xl border border-indigo-500/20">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-indigo-200 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white/5 border border-indigo-500/20 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-indigo-200 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white/5 border border-indigo-500/20 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-indigo-200 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 bg-white/5 border border-indigo-500/20 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 px-6 rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;