import { FaTrophy, FaShieldAlt, FaUsers, FaChartLine, FaMapMarkerAlt, FaHeadset } from 'react-icons/fa';
import Founder from '../images/founder.jpg';
import { NavLink } from 'react-router-dom';
const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Connecting India, Empowering Lives</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            YourTelecom is revolutionizing digital connectivity with affordable, high-speed services across the nation.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-1 origin-top-left"></div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Journey</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2015, YourTelecom began as a small regional provider with a vision to bridge the digital divide in rural India.
              </p>
              <p className="text-gray-600 mb-4">
                Today, we serve over 10 million customers across 18 states with our cutting-edge 4G/5G network and fiber-optic broadband.
              </p>
              <p className="text-gray-600">
                Our commitment to transparency and customer-first approach has made us one of India's fastest growing telecom providers.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Telecom team working"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard icon={<FaUsers size={40} />} number="10M+" label="Happy Customers" />
            <StatCard icon={<FaMapMarkerAlt size={40} />} number="18" label="States Covered" />
            <StatCard icon={<FaChartLine size={40} />} number="98.7%" label="Network Uptime" />
            <StatCard icon={<FaHeadset size={40} />} number="24/7" label="Customer Support" />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard 
              icon={<FaShieldAlt size={32} />}
              title="Integrity"
              description="We believe in transparent pricing and honest communication with our customers."
            />
            <ValueCard 
              icon={<FaTrophy size={32} />}
              title="Excellence"
              description="Continuous innovation to deliver best-in-class network performance."
            />
            <ValueCard 
              icon={<FaUsers size={32} />}
              title="Community"
              description="Committed to digital inclusion and bridging the urban-rural divide."
            />
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Leadership</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember 
              name="Rajesh Kumar"
              role="Founder & CEO"
              image={Founder}
              bio="Telecom industry veteran with 25+ years experience"
            />
            <TeamMember 
              name="Priya Sharma"
              role="CTO"
              image="https://randomuser.me/api/portraits/women/44.jpg"
              bio="Led network infrastructure development at 3 telecom giants"
            />
            <TeamMember 
              name="Amit Patel"
              role="CFO"
              image="https://randomuser.me/api/portraits/men/75.jpg"
              bio="Former investment banker specializing in telecom"
            />
            <TeamMember 
              name="Neha Gupta"
              role="COO"
              image="https://randomuser.me/api/portraits/women/68.jpg"
              bio="Operations expert scaling businesses across India"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Better Connectivity?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join millions of satisfied customers enjoying seamless connectivity across India.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <NavLink to="/plans">
            <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
              View Plans
            </button>
            </NavLink>
            <button className="border-2 border-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Reusable Components
const StatCard = ({ icon, number, label }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm text-center">
    <div className="text-blue-600 mb-4 flex justify-center">{icon}</div>
    <h3 className="text-3xl font-bold text-gray-800 mb-2">{number}</h3>
    <p className="text-gray-600">{label}</p>
  </div>
);

const ValueCard = ({ icon, title, description }) => (
  <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TeamMember = ({ name, role, image, bio }) => (
  <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
    <img src={image} alt={name} className="w-full h-64 object-center" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800">{name}</h3>
      <p className="text-blue-600 mb-2">{role}</p>
      <p className="text-gray-600">{bio}</p>
    </div>
  </div>
);

export default About;