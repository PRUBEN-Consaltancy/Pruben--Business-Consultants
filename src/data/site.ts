import registrationServices from "@/assets/business-registration-services.jpg.asset.json";
import structureMatters from "@/assets/structure-matters.jpg.asset.json";
import afterYouSubmit from "@/assets/after-you-submit.jpg.asset.json";
import tpin from "@/assets/tpin-registration.jpg.asset.json";
import startingBusiness from "@/assets/starting-business-easy.jpg.asset.json";
import retailShop from "@/assets/register-retail-shop.jpg.asset.json";
import proposals from "@/assets/proposals-win-projects.jpg.asset.json";
import funding from "@/assets/project-funding-proposal.jpg.asset.json";
import getFunded from "@/assets/get-funded-ngo.jpg.asset.json";
import research from "@/assets/research-dissertation.jpg.asset.json";
import cv from "@/assets/cv-resume-writing.jpg.asset.json";
import masterclass from "@/assets/customer-service-masterclass.jpg.asset.json";
import portrait from "@/assets/consultant-portrait.jpg.asset.json";

export const images = {
  registrationServices: registrationServices.url,
  structureMatters: structureMatters.url,
  afterYouSubmit: afterYouSubmit.url,
  tpin: tpin.url,
  startingBusiness: startingBusiness.url,
  retailShop: retailShop.url,
  proposals: proposals.url,
  funding: funding.url,
  getFunded: getFunded.url,
  research: research.url,
  cv: cv.url,
  masterclass: masterclass.url,
  portrait: portrait.url,
};

export const contact = {
  whatsapp: "265999379547",
  whatsappDisplay: "+265 999 379 547",
  phone: "+265 881 267 827",
  email: "prubenconsult@gmail.com",
  office: "Galaxy House, 2nd Floor, Room #3 (Opp. Kandodo Cornershop), Blantyre CBD",
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;

export const registrationTypes = [
  "Sole Proprietorship",
  "Partnership Registration",
  "NGO Registration",
  "Private Limited Company (Ltd)",
  "Public Limited Company (PLC)",
  "TPIN Registration",
  "Tax Clearance Certificate (TCC)",
  "Income Tax Return",
  "PPDA Certificate",
  "Business / Funding Proposal",
  "CV & Resume Writing",
  "Research & Dissertation Support",
  "Not Sure — Need Advice",
];

export const coreServices = [
  {
    n: "01",
    title: "Sole Proprietorship",
    body: "The simplest and fastest way to legally trade under your own business name in Malawi.",
    image: images.retailShop,
    alt: "Small retail clothing business owner in Malawi",
  },
  {
    n: "02",
    title: "Partnership Registration",
    body: "Formalise your partnership, including full preparation of the partnership agreement.",
    image: images.startingBusiness,
    alt: "Entrepreneur ready to start a registered business",
  },
  {
    n: "03",
    title: "NGO Registration",
    body: "Full NGO Board registration — unlock donor funding, tax exemptions and government partnerships.",
    image: images.getFunded,
    alt: "Handshake sealing an NGO funding partnership",
  },
  {
    n: "04",
    title: "Private Limited Company (Ltd)",
    body: "A separate legal entity with limited liability — required for tenders, investment and scale.",
    image: images.structureMatters,
    alt: "Corporate towers representing incorporated companies",
  },
  {
    n: "05",
    title: "Public Limited Company (PLC)",
    body: "For companies offering shares to the public — full PLC registration and compliance support.",
    image: images.registrationServices,
    alt: "PRUBEN business registration services team",
  },
];

export const complianceServices = [
  {
    title: "TPIN Registration",
    body: "Taxpayer Identification Number at MRA — required for every registered business.",
  },
  {
    title: "Tax Clearance Certificate (TCC)",
    body: "Needed for tenders, contracts and NGO operations. We handle the full application.",
  },
  {
    title: "Income Tax Return",
    body: "Professional preparation of business income tax returns — accurate and filed on time.",
  },
  {
    title: "PPDA Certificate",
    body: "Public Procurement & Disposal of Assets certificate — unlock government contracts.",
  },
];

export const advisoryServices = [
  {
    title: "Business & Tender Proposals",
    body: "Professionally written business proposals that win projects, contracts and new clients.",
    image: images.proposals,
    alt: "Consultant preparing a professional business proposal",
    points: ["Win big projects", "Investment-ready documents", "Tender-compliant formatting"],
  },
  {
    title: "Funding & Grant Proposals",
    body: "Grant, donor and investment proposals for NGOs and businesses — clear, convincing, on time.",
    image: images.funding,
    alt: "Analyst preparing a project funding proposal",
    points: ["Local & international donors", "M&E frameworks", "Project implementation support"],
  },
  {
    title: "Research, Dissertation & Data",
    body: "Data collection, analysis and proof-reading support for theses, research and projects.",
    image: images.research,
    alt: "Student working on dissertation research",
    points: ["Data collection", "Statistical analysis", "Editing & proof-reading"],
  },
  {
    title: "CV & Resume Writing",
    body: "Stand out from the sea of candidates with a professionally written CV and cover letter.",
    image: images.cv,
    alt: "Professional CV and resume writing service",
    points: ["ATS-friendly layout", "Achievement-led wording", "Interview-ready profile"],
  },
  {
    title: "Corporate Training",
    body: "Executive masterclasses in customer service excellence and leadership development.",
    image: images.masterclass,
    alt: "Customer service excellence executive masterclass",
    points: ["Customer experience", "Client service teams", "Leadership facilitation"],
  },
];

export const steps = [
  { n: "01", title: "WhatsApp us your details", body: "Tell us your business type and preferred name." },
  { n: "02", title: "We search & reserve your name", body: "We check availability and secure it immediately." },
  { n: "03", title: "We prepare all documents", body: "Memoranda, constitutions, forms — all handled." },
  { n: "04", title: "We submit & follow up", body: "Registrar General / MBRS submission done for you." },
  { n: "05", title: "You receive your certificate", body: "Ready to open accounts, apply for loans and tender." },
];

export const benefits = [
  { title: "Operate legally in Malawi", body: "Full legal protection — avoid fines, penalties and forced shutdowns." },
  { title: "Open a business bank account", body: "Access banking, merchant services and financial tools." },
  { title: "Qualify for loans & grants", body: "Banks, MFIs and government programs require a registered business." },
  { title: "Access government & NGO tenders", body: "Procurement and donor-funded projects require registration + TPIN." },
  { title: "Build trust & credibility", body: "Customers and partners take registered businesses more seriously." },
];

export const stats = [
  { value: "500+", label: "Businesses registered" },
  { value: "7", label: "Max working days" },
  { value: "14+", label: "Services offered" },
  { value: "100%", label: "Legal & compliant" },
];
