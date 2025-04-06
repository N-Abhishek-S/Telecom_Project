import React from "react";
import PlanCard from "../plansComponent/PlansCard";
const plans = [
  {
    price: "₹199/month",
    name: "Basic Plan",
    features: ["Access to standard features", "Limited support", "Single user", "Basic analytics", "Email support"],
    bestFor: "Individuals getting started",
    popular: false
  },
  {
    price: "₹499/month",
    name: "Pro Plan",
    features: ["All Basic Plan features", "Priority support", "Multi-user access (up to 5)", "Advanced analytics", "Phone support"],
    bestFor: "Small teams",
    popular: true
  },
  {
    price: "₹999/month",
    name: "Business Plan",
    features: ["All Pro Plan features", "24/7 Support", "Custom integrations", "Unlimited users", "Dedicated account manager"],
    bestFor: "Growing businesses",
    popular: false
  },
  {
    price: "₹149/month",
    name: "Starter Plan",
    features: ["Limited features", "Community support", "Single user", "Basic storage", "Mobile access"],
    bestFor: "Students and hobbyists",
    popular: false
  },
  {
    price: "₹799/month",
    name: "Team Plan",
    features: ["All Pro features", "Up to 10 users", "Team collaboration tools", "Shared workspaces", "Monthly training sessions"],
    bestFor: "Department teams",
    popular: true
  },
  {
    price: "₹2,499/month",
    name: "Enterprise Plan",
    features: ["All Business Plan features", "SLA 99.9% uptime", "On-premise options", "Custom development", "Security audit"],
    bestFor: "Large organizations",
    popular: false
  },
  {
    price: "₹349/month",
    name: "Plus Plan",
    features: ["Basic features +", "Extended storage", "3 users", "Weekly backups", "Basic reporting"],
    bestFor: "Freelancers",
    popular: false
  },
  {
    price: "₹1,499/month",
    name: "Premium Plan",
    features: ["All Pro features", "15 users", "API access", "White-labeling", "Advanced security"],
    bestFor: "Agencies",
    popular: false
  },
  {
    price: "₹5,999/month",
    name: "Elite Plan",
    features: ["All Enterprise features", "Unlimited everything", "Dedicated server", "Personalized onboarding", "Quarterly strategy sessions"],
    bestFor: "High-growth companies",
    popular: false
  },
  {
    price: "₹99/month",
    name: "Lite Plan",
    features: ["Core features only", "Email support", "1 user", "Mobile app", "Community access"],
    bestFor: "Casual users",
    popular: false
  },
  {
    price: "₹1,999/month",
    name: "Professional Plan",
    features: ["All Premium features", "25 users", "Custom workflows", "Advanced integrations", "Training credits"],
    bestFor: "Professional services",
    popular: true
  },
  {
    price: "₹3,999/month",
    name: "Corporate Plan",
    features: ["All Professional features", "50 users", "Audit logs", "Compliance features", "Dedicated support team"],
    bestFor: "Mid-sized companies",
    popular: false
  },
  {
    price: "₹9,999/month",
    name: "Platinum Plan",
    features: ["All Elite features", "100+ users", "Global CDN", "Custom SLAs", "Executive dashboard"],
    bestFor: "Enterprise clients",
    popular: false
  },
  {
    price: "₹249/month",
    name: "Personal Pro",
    features: ["Enhanced personal features", "2 devices", "Ad-free experience", "Premium templates", "Priority email support"],
    bestFor: "Power individual users",
    popular: false
  },
  {
    price: "₹1,299/month",
    name: "Agency Plan",
    features: ["All Team features", "Client management tools", "White-label reports", "Sub-accounts", "Bulk operations"],
    bestFor: "Marketing agencies",
    popular: true
  },
  {
    price: "₹699/month",
    name: "Growth Plan",
    features: ["All Plus features", "10 users", "Marketing tools", "Automation features", "Medium storage"],
    bestFor: "Startups",
    popular: false
  },
  {
    price: "₹4,499/month",
    name: "Scale Plan",
    features: ["All Corporate features", "75 users", "Advanced automation", "Predictive analytics", "AI features"],
    bestFor: "Scaling businesses",
    popular: false
  },
  {
    price: "₹14,999/month",
    name: "Titanium Plan",
    features: ["All Platinum features", "200+ users", "Custom cloud deployment", "24/7 VIP support", "Bi-annual strategy reviews"],
    bestFor: "Global enterprises",
    popular: false
  },
  {
    price: "₹179/month",
    name: "Essential Plan",
    features: ["Core functionality", "Knowledge base access", "1 user", "Basic export", "Mobile notifications"],
    bestFor: "Budget-conscious users",
    popular: false
  },
  {
    price: "₹3,499/month",
    name: "Ultimate Plan",
    features: ["All Scale features", "90 users", "Custom branding", "Advanced permissions", "Workflow builder"],
    bestFor: "Established businesses",
    popular: false
  }
];

const Plans = ({
    Heading
}) => {
  return (
    <div className="min-h-screen mt bg-gray-100 py-12 px-6 md:px-16 lg:px-24">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">
        {Heading}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <PlanCard key={index} {...plan} />
      

        ))}
      </div>
    </div>
  );
};

export default Plans;
