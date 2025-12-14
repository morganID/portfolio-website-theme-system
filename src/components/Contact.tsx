import { Mail, MapPin, Send } from 'lucide-react';
import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (placeholder)
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0.01, 0.05, 0.95] }}
          >
            <h3 className="text-2xl text-gray-900 mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Email</h4>
                  <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                    your.email@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-600">Your City, Country</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl text-white shadow-md">
              <h4 className="mb-2">Available for Freelance</h4>
              <p className="text-sm opacity-95 leading-relaxed">
                I'm currently available for freelance projects and full-time opportunities. 
                Let's build something amazing together!
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0.01, 0.05, 0.95] }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-gray-900 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3.5 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-white shadow-sm"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl hover:shadow-lg transition-all"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}