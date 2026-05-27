import { ServiceItem, BenefitItem, TestimonialItem } from "./types";

export const servicesData: ServiceItem[] = [
  {
    id: "seeds-crop",
    title: "Seeds & Crop Supplies",
    description: "High-yield, climate-adapted premium seeds, cover crops, and forage mixes tailored specifically for Pennsylvania's unique microclimates.",
    longDescription: "We partner with leading agricultural growers to deliver certified, high-germination hybrid seeds, native PA cover crops, and pasture grasses. Fully adapted to mid-Atlantic soils for maximizing yields and improving soil structure year-round.",
    iconName: "Sprout",
    imageUrl: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "fertilizers-nutrients",
    title: "Fertilizers & Nutrients",
    description: "Custom-blended liquid and dry soil nutrients designed to restore depletion and promote vibrant organic or conventional crop growth.",
    longDescription: "From organic composts and mineral lime additions to advanced soil starters and micronutrients, our customized fertilization plans are mixed according to your specific PA farm soil test results. Optimize nitrogen uptake safely.",
    iconName: "Leaf",
    imageUrl: "/src/assets/images/fertilizer_premium_1779912280648.png"
  },
  {
    id: "equipment-support",
    title: "Farming Equipment Support",
    description: "Support solutions, spare parts pipeline, GPS guiding technology setup, and specialized utility supplies for heavy and light equipment.",
    longDescription: "Minimize downtime in the fields. We supply top-tier replacement items, lubrication products, custom field-tooling setups, and precision agriculture GPS calibration services to keep Pennsylvania's tractors moving forward.",
    iconName: "Wrench",
    imageUrl: "/src/assets/images/equipment_support_premium_1779912351371.png"
  },
  {
    id: "irrigation-solutions",
    title: "Irrigation Solutions",
    description: "Highly efficient drip-lines, sprinkler networks, solar water pumps, and layout plans designed to preserve precious PA groundwater.",
    longDescription: "Custom water distribution planning. We deliver modular drip line tapes, impact sprinkler mounts, poly-piping bundles, and smart controllers that ensure even moisture without wasteful runoff during damp springs or dry PA summers.",
    iconName: "Droplets",
    imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "livestock-essentials",
    title: "Livestock & Farm Essentials",
    description: "Nutritious animal feed, secure fencing, modern hygiene solutions, and complete barn structural accessories.",
    longDescription: "Premium poultry feeds, equine grains, and specialized cattle supplements engineered for Pennsylvania dairy and meat operations. Complete with premium electric fencing, barn supplies, and clean sanitizing formulas.",
    iconName: "ShieldAlert", // We can use 'Bird' or 'Shield' as fallback inside component
    imageUrl: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "agricultural-consulting",
    title: "Agricultural Consulting",
    description: "Expert soil testing analysis, local crop-rotation mapping, conservation strategy guidance, and grant qualification audits.",
    longDescription: "Work with our Pennsylvania-certified agronomists. We visit your acreage, run comprehensive chemical assays on your topsoil, structure organic transit schemes, and help you unlock regional PA conservation funding.",
    iconName: "BarChart3",
    imageUrl: "/src/assets/images/consulting_premium_1779912527623.png"
  }
];

export const benefitsData: BenefitItem[] = [
  {
    id: "benefit-expertise",
    title: "Pennsylvania Soil Expertise",
    description: "With decades of experience traversing Pennsylvania farmlands, our soil strategies are tuned exactly to PA conditions.",
    iconName: "MapPin"
  },
  {
    id: "benefit-quality",
    title: "Premium Certified Brand Stock",
    description: "We work strictly with vetted, certified manufacturers to guarantee seed purity of 99.8% and highly stable organic nutrient profiles.",
    iconName: "Award"
  },
  {
    id: "benefit-support",
    title: "Reliable Local PA Support",
    description: "Our phone lines are open with local specialists ready to dispatch solutions. Pennsylvania farmers are family to us.",
    iconName: "PhoneCall"
  },
  {
    id: "benefit-pricing",
    title: "Fair, Affordable Pricing",
    description: "We lower overhead costs and coordinate localized supply runs to offer extremely competitive bulk rates that keep margins healthy.",
    iconName: "TrendingDown"
  },
  {
    id: "benefit-service",
    title: "Rapid Same-Day Delivery",
    description: "Our localized warehousing across PA permits ultra-rapid delivery on essential seeds and harvest items when timing is thin.",
    iconName: "Zap"
  },
  {
    id: "benefit-solutions",
    title: "Farmer-First Approach",
    description: "We are hands-on. If an item fails or a layout doesn't work, we drive to your acreage and make it right immediately.",
    iconName: "Heart"
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Benjamin Stoltzfus",
    role: "Dairy Farm Owner",
    location: "Lancaster County, PA",
    quote: "FarmsFriend completely turned our dairy yield around. Their premium grass seed mixes sprouted in record time, and the customized soil balancing restored our high-nitrogen grazing pasture. Their delivery truck drove right up to our silo exactly when promised. Highly recommended PA partner!",
    avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150",
    rating: 5
  },
  {
    id: "test-2",
    name: "Clara Myers",
    role: "Organic Vegetable Producer",
    location: "Susquehanna Valley, PA",
    quote: "Securing organic fertilizers that meet high-grade nitrogen regulations can be tedious in PA. FarmsFriend supplied certified composts and micronutrients directly to our greenhouses. Their agronomist visited our site twice to review the soil assays. Excellent, farmer-focused service.",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
    rating: 5
  },
  {
    id: "test-3",
    name: "Jeremiah Vance",
    role: "Acreage Grain Cultivator",
    location: "Lehigh Valley, PA",
    quote: "When our irrigation pump line blew during a major dry wave, we thought we'd lose the entire sweet corn crop. I called FarmsFriend at 6 AM, and they delivered replacement coupling valves and drip tapes by 9 AM. Absolute life-savers. Vetted Pennsylvanian speed and reliability.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    rating: 5
  }
];
