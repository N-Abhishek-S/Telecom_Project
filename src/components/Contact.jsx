import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaHeadset, FaClock } from 'react-icons/fa';
import { HiSupport } from 'react-icons/hi';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent! We will contact you soon.');
    // In a real app, you would handle form submission here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">We're Here to Help</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Reach out to our team for any inquiries, support, or feedback.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-1 origin-top-left"></div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contact Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ContactOption
              icon={<FaPhoneAlt size={32} className="text-blue-600" />}
              title="Call Us"
              details={["24/7 Customer Support: +91 1800 123 4567", "Business Inquiries: +91 9420619032"]}
            />
            <ContactOption
              icon={<FaEnvelope size={32} className="text-blue-600" />}
              title="Email Us"
              details={["Support: support@yourtelecom.com", "Sales: nagargojeabhishek96@gmail.com"]}
            />
            <ContactOption
              icon={<FaMapMarkerAlt size={32} className="text-blue-600" />}
              title="Visit Us"
              details={["Head Office: 123 Tech Park, Bangalore", "Branch: 456 Business Tower, Mumbai"]}
            />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Support & FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Support & FAQ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <HiSupport size={28} className="text-blue-600 mr-4" />
                <h3 className="text-xl font-bold text-gray-800">Technical Support</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Having issues with your connection? Our technical team is available 24/7 to assist you.
              </p>
              <button className="text-blue-600 font-medium hover:underline">
                Visit Support Center →
              </button>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <FaClock size={28} className="text-blue-600 mr-4" />
                <h3 className="text-xl font-bold text-gray-800">Business Hours</h3>
              </div>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Customer Support:</span> 24/7
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Sales & Billing:</span> Mon-Sat, 9AM-6PM
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Offices:</span> Mon-Fri, 9AM-5PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Still Need Help?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our customer care team is always ready to assist you with any questions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
              Call Now
            </button>
            <button className="border-2 border-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition">
              Live Chat
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactOption = ({ icon, title, details }) => (
  <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition">
    <div className="flex items-center mb-4">
      <div className="mr-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
    <ul className="space-y-2">
      {details.map((detail, index) => (
        <li key={index} className="text-gray-600">{detail}</li>
      ))}
    </ul>
  </div>
);

export default ContactPage;