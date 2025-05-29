import React, { useState } from 'react';
import useTheme from '../store/themeStore';
import toast from 'react-hot-toast';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const { theme } = useTheme();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    if(form.name.length < 3) {
      toast.error("Full Name must be at least 3 characters long.");
      return;
    }
    if(!/\S+@\S+\.\S+/.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if(form.message.length < 10) {
      toast.error("Message must be at least 10 characters long.");
      return;
    }
    toast.success("Message sent successfully!");
    setForm({ name: '', email: '', message: '' });
    // You can integrate with EmailJS, Formspree, or a backend here
  };

  return (
    <div className={
      `bg-[#0f0f1b] min-h-fit px-4 py-12 flex items-center justify-center border-t-2
      ${ theme ? "bg-dark-primary border-dark" : "bg-light-primary border-light"}
    `}>
      <div className={`max-w-xl w-full ${theme ? "bg-dark-secondary border-dark" : "bg-light-secondary border-light"}  p-8 rounded-lg light shadow-medium border `}>
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className={`block mb-1 text-sm font-medium ${theme ? "text-gray-300" : "text-gray-500"}`}>
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 ${theme ? "bg-dark-primary border-dark text-white" : "bg-light-primary border-light text-black"} border-2  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>
          <div>
            <label htmlFor="email" className={`block mb-1 text-sm font-medium ${theme ? "text-gray-300" : "text-gray-500"}`}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 ${theme ? "bg-dark-primary border-dark text-white" : "bg-light-primary border-light text-black"} border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>
          <div>
            <label htmlFor="message" className={`block mb-1 text-sm font-medium ${theme ? "text-gray-300" : "text-gray-500"}`}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className={`w-full px-4 py-2 ${theme ? "bg-dark-primary border-dark text-white" : "bg-light-primary border-light text-black"} border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-md text-white font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
