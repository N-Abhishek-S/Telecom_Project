import { useState, useEffect } from 'react';
import { FiUser, FiSmartphone, FiBarChart2, FiCreditCard, FiClock, FiSettings, FiHelpCircle, FiLogOut } from 'react-icons/fi';
import { FaMoneyBillWave, FaNetworkWired, FaUserEdit, FaPhoneAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Account = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setSidebarOpen(false);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-800 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">TeleConnect</h1>
          <div 
            className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold cursor-pointer"
            onClick={toggleSidebar}
          >
            JS
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar - Hidden on mobile unless toggled */}
          {(sidebarOpen || !isMobile) && (
            <aside className="w-full md:w-64 bg-white rounded-lg shadow-md p-4">
              <nav>
                <ul className="space-y-2">
                  <SidebarItem icon={<FiUser />} text="My Account" active />
                  <SidebarItem icon={<FiSmartphone />} text="My Plans" />
                  <SidebarItem icon={<FiBarChart2 />} text="Usage" />
                  <SidebarItem icon={<FiCreditCard />} text="Billing" />
                  <SidebarItem icon={<FiClock />} text="Usage History" />
                  <SidebarItem icon={<FiSettings />} text="Settings" />
                  <SidebarItem icon={<FiHelpCircle />} text="Support" />
                  <SidebarItem icon={<FiLogOut />} text="Logout" />
                </ul>
              </nav>
            </aside>
          )}

          <main className="flex-1">
            {/* Account Header */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">My Account</h2>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">Active</span>
            </div>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <OverviewCard title="Phone Number" value="+91 9420619032" />
              <OverviewCard title="Account Since" value="15 Jan 2022" />
              <OverviewCard title="Current Balance" value="₹249.00" />
            </div>

            {/* Current Plan */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-6 mb-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-bold mb-2 md:mb-0">Premium Unlimited Plan</h3>
                <p className="text-2xl font-bold">₹599/month</p>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Unlimited Calls
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  100GB High-Speed Data
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  100 SMS/day
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  OTT Subscription Included
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  International Roaming
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <NavLink to="/plans">
                <button className="bg-white text-blue-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition">
                  Change Plan
                </button>
                </NavLink>
                <button className="border border-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                  Renew Now
                </button>
              </div>
            </div>

            {/* Usage Summary */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Usage Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <UsageCard 
                  title="Data Usage" 
                  value="65.4GB/100GB" 
                  percentage={65} 
                  details={["Used: 65.4GB", "Remaining: 34.6GB"]} 
                />
                <UsageCard 
                  title="Voice Usage" 
                  value="Unlimited" 
                  percentage={100} 
                  details={["Last call: 12 min ago", "Total today: 47 min"]} 
                />
                <UsageCard 
                  title="SMS Usage" 
                  value="24/100" 
                  percentage={24} 
                  details={["Used: 24", "Remaining: 76"]} 
                />
                <UsageCard 
                  title="Validity" 
                  value="12 days left" 
                  percentage={60} 
                  details={["Started: 18 days ago", "Renews: 12 Jun 2023"]} 
                />
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h3>
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <ActivityItem 
                  icon={<FaMoneyBillWave />}
                  title="Payment Received"
                  description="₹599 for monthly subscription"
                  time="Today, 10:45 AM"
                />
                <ActivityItem 
                  icon={<FaNetworkWired />}
                  title="Data Usage Alert"
                  description="80% of your monthly data used"
                  time="Yesterday, 8:30 PM"
                />
                <ActivityItem 
                  icon={<FaUserEdit />}
                  title="Profile Updated"
                  description="You changed your email address"
                  time="2 days ago"
                />
                <ActivityItem 
                  icon={<FaPhoneAlt />}
                  title="International Call"
                  description="Call to USA (12 minutes)"
                  time="3 days ago"
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

// Reusable Components
const SidebarItem = ({ icon, text, active = false }) => (
  <li>
    <a
      href="#"
      className={`flex items-center p-3 rounded-lg transition ${active ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100 text-gray-700'}`}
    >
      <span className="mr-3">{icon}</span>
      {text}
    </a>
  </li>
);

const OverviewCard = ({ title, value }) => (
  <div className="bg-white p-4 rounded-xl shadow-sm">
    <h4 className="text-sm text-gray-500 mb-1">{title}</h4>
    <p className="text-xl font-bold text-gray-800">{value}</p>
  </div>
);

const UsageCard = ({ title, value, percentage, details }) => (
  <div className="bg-white p-4 rounded-xl shadow-sm">
    <div className="flex justify-between items-center mb-2">
      <h4 className="font-medium text-gray-700">{title}</h4>
      <span className="text-gray-600">{value}</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
      <div 
        className="bg-blue-600 h-2 rounded-full" 
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
    <div className="flex justify-between text-sm text-gray-500">
      <span>{details[0]}</span>
      <span>{details[1]}</span>
    </div>
  </div>
);

const ActivityItem = ({ icon, title, description, time }) => (
  <div className="flex items-start p-4 border-b border-gray-100 last:border-0">
    <div className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-4">
      {icon}
    </div>
    <div className="flex-1">
      <h4 className="font-bold text-gray-800">{title}</h4>
      <p className="text-gray-600 mb-1">{description}</p>
      <p className="text-xs text-gray-400">{time}</p>
    </div>
  </div>
);

export default Account;