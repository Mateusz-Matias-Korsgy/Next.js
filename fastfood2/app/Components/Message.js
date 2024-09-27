'use client'
import { useState } from 'react';

export default function Message() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    businessName: '',
    contactNo: '',
    email: '',
    services: '',
    help: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-500">
            Ready to Be a Partner?
          </h2>
          <p className="mt-2 font-semibold text-black">
            Get in touch with us!
          </p>
          <p className="text-green-600 mt-2">
            Leave your details below so we can talk about how being an Ujali Partner can add to your success.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:border-orange-500"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:border-orange-500"
                required
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="businessName"
                placeholder="Business Name"
                value={formData.businessName}
                onChange={handleInputChange}
                className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:border-orange-500"
                required
              />
              <input
                type="text"
                name="contactNo"
                placeholder="Contact No."
                value={formData.contactNo}
                onChange={handleInputChange}
                className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:border-orange-500"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:border-orange-500 w-full"
              required
            />
            <input
              type="text"
              name="services"
              placeholder="What services do you offer?"
              value={formData.services}
              onChange={handleInputChange}
              className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:border-orange-500 w-full"
              required
            />
            <textarea
              name="help"
              placeholder="How can we help you?"
              value={formData.help}
              onChange={handleInputChange}
              className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:border-orange-500 w-full h-32"
              required
            />
            <button
              type="submit"
              className="bg-l-green text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
