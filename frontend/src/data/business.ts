import {
  FiBookOpen,
  FiCompass,
  FiGlobe,
  FiHome,
  FiNavigation,
  FiShield,
  FiUsers,
} from "react-icons/fi";

export const business = {
  name: "Skyways Travels and Tours Limited",
  shortName: "Skyways",
  founded: 1994,
  email: "reservations@skyways-travels.com",
  phones: ["0809 580 6824", "0809 580 6822"],
  phoneLinks: ["+2348095806824", "+2348095806822"],
};

export const services = [
  { icon: FiNavigation, title: "Flight ticket booking", text: "Domestic and international flight reservations, options, and ticketing support." },
  { icon: FiCompass, title: "Visa assistance", text: "Application and documentation support for eligible travellers to more than 30 countries." },
  { icon: FiShield, title: "Travel insurance", text: "Travel protection that helps you stay covered wherever your journey takes you." },
  { icon: FiHome, title: "Hotel reservations", text: "Hotel options and competitive rates across destinations worldwide." },
  { icon: FiGlobe, title: "Cruises", text: "Sea adventures, group sailings, and luxury cruise experiences." },
  { icon: FiCompass, title: "Vacation packages", text: "Coordinated, all-inclusive holidays shaped around your preferred experience." },
  { icon: FiUsers, title: "Private & group tours", text: "Purposeful tours within Nigeria and abroad for individuals, families, and groups." },
  { icon: FiBookOpen, title: "Study abroad services", text: "Support with admissions, visa preparation, and relocation planning." },
  { icon: FiBookOpen, title: "School excursions", text: "Safe educational trips for schools within Nigeria and internationally." },
];

export const faqs = [
  ["Are you IATA licensed?", "Yes. Skyways Travels and Tours is an IATA-licensed travel agent with more than 30 years of industry experience."],
  ["Do you assist with visa applications?", "Yes. We provide visa assistance and documentation support for eligible clients."],
  ["Can you book hotels and flights together?", "Yes. We create complete vacation packages that can include flights, hotels, tours, insurance, and other travel arrangements."],
  ["Do you organise school trips?", "Yes. We plan safe, educational school excursions within Nigeria and abroad."],
  ["What is your cancellation policy?", "Cancellation terms depend on the booking type and the relevant provider. The applicable terms are supplied with each booking or proposal."],
];
