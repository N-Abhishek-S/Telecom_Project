import React from "react";
import PlansCom from "../components/plansComponent/PlansCom";

const plans = [
  {
    name: "Basic Plan",
    price: "₹199/month",
    features: ["Access to standard features", "Limited support", "Single user"],
  },
  {
    name: "Pro Plan",
    price: "₹499/month",
    features: ["All Basic Plan features", "Priority support", "Multi-user access"],
  },
  {
    name: "Enterprise Plan",
    price: "₹999/month",
    features: ["All Pro Plan features", "24/7 Support", "Custom integrations"],
  },
];

const Plans = () => {
  return (
 <div>
    <PlansCom Heading={"Plans"} />
    <PlansCom Heading={"Plans"} />
    <PlansCom Heading={"Plans"} />
    </div>
  );
};

export default Plans;