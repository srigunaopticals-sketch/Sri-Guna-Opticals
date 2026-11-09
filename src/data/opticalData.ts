export interface BusinessInfo {
  name: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappLink: string;
  address: string;
  landmark: string;
  town: string;
  districtState: string;
  pincode: string;
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  timings: string;
  daysOpen: string;
  email: string;
}

export const BUSINESS_INFO: BusinessInfo = {
  name: "Sri Guna Opticals",
  phone: "+919382301946",
  phoneDisplay: "+91 9382301946",
  whatsapp: "9382301946",
  whatsappLink: "https://wa.me/919382301946",
  address: "C46H+42X, Ganapathi Theater Complex, Gummidipoondi, Tamil Nadu 601201",
  landmark: "Ganapathi Theater Complex",
  town: "Gummidipoondi",
  districtState: "Tamil Nadu",
  pincode: "601201",
  googleMapsUrl: "https://maps.app.goo.gl/gNzf2sP9cK4dxZ427",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.718873268803!2d80.12660047587635!3d13.407784305372332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d80a15712128d%3A0xe7a5a882a893dbbb!2sGanapathi%20Theatre!5e0!3m2!1sen!2sin!4v1714500000000!5m2!1sen!2sin",
  timings: "9:30 AM – 9:30 PM",
  daysOpen: "Monday – Sunday (All 7 Days)",
  email: "srigunaopticals@gmail.com",
};

export interface ServiceBoxItem {
  id: string;
  title: string;
  description: string;
}

// Exactly 6 primary services with crisp 2-line descriptions (3 in a row, 2 rows)
export const SERVICES_LIST: ServiceBoxItem[] = [
  {
    id: "eye-testing",
    title: "Computerized Eye Testing",
    description: "Precise auto-refractometer scanning to detect accurate distance and near vision prescription."
  },
  {
    id: "prescription-glasses",
    title: "Prescription Glasses & Frames",
    description: "Custom-crafted single vision, bifocal, and progressive lenses fitted into lightweight frames."
  },
  {
    id: "blue-cut-lenses",
    title: "Blue-Cut Screen Protection",
    description: "Advanced anti-reflective lenses shielding your eyes from digital phone and computer glare."
  },
  {
    id: "contact-lenses",
    title: "Contact Lens Consultation & Fitting",
    description: "Breathable soft daily and monthly contact lenses including toric and natural cosmetic shades."
  },
  {
    id: "polarized-sunglasses",
    title: "UV400 Polarized Sunglasses",
    description: "Full ultraviolet sun protection and polarized glare reduction for driving, commuting, and travel."
  },
  {
    id: "frame-repairs",
    title: "Frame Realignment & Servicing",
    description: "Complimentary frame balancing, nose-pad changes, screw tightening, and existing frame reuse."
  }
];

export interface GalleryPhoto {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  category: "clinic" | "store" | "eyewear";
}

export const GALLERY_ITEMS: GalleryPhoto[] = [
  {
    id: "g1",
    title: "Optometry Consultation & Eye Examination",
    subtitle: "Precision computerized vision power testing and consultation room",
    image: "/assets/aistudio/file_000000007ed08208a700061c7fee83f5_7c8e6134.png",
    category: "clinic"
  },
  {
    id: "g2",
    title: "Storefront & Showroom Entrance",
    subtitle: "Illuminated eyewear display and trial counter at Ganapathi Theater Complex",
    image: "/assets/aistudio/file_00000000c99c8208a4f65007da1dec5e_6ec02b8d.png",
    category: "store"
  },
  {
    id: "g3",
    title: "Designer Spectacle Frames",
    subtitle: "Curated eyewear tray with premium Ray-Ban, Vogue, Tommy Hilfiger, and Bolon frames",
    image: "/assets/aistudio/glasses_a996867b.png",
    category: "eyewear"
  },
  {
    id: "g4",
    title: "Polarized Sunglasses & Lens Care",
    subtitle: "UV400 protective polarized sunglasses collection on illuminated display shelves",
    image: "/assets/aistudio/shades_aa33aa7b.png",
    category: "eyewear"
  }
];

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  review: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    name: "Murugan Selvam",
    location: "Gummidipoondi Local Resident",
    rating: 5,
    date: "Verified Customer",
    review: "If you're in need of new glasses or contacts, I highly recommend Sri Guna Opticals. The staff is knowledgeable and the selection of frames is unbeatable. You won't be disappointed!"
  },
  {
    id: "t2",
    name: "Divya R.",
    location: "Kavarapettai",
    rating: 5,
    date: "Verified Customer",
    review: "Got my progressive lenses and blue-cut glasses done here. The eye testing was very patient and accurate. The glasses were delivered right on time and my vision is crystal clear."
  },
  {
    id: "t3",
    name: "Rajesh Kumar",
    location: "Ganapathi Theater Area",
    rating: 5,
    date: "Verified Customer",
    review: "Very reliable optical shop located right at Ganapathi Theater Complex. Honest advice, good collection of trendy frames at reasonable prices, and friendly customer service."
  }
];

export interface BlogItem {
  id: string;
  title: string;
  image: string;
  summary: string;
  readTime: string;
}

export const BLOG_POSTS: BlogItem[] = [
  {
    id: "b1",
    title: "Why Do I Keep Getting Midday Headaches?",
    image: "/assets/aistudio/glasses_a996867b.png",
    summary: "We all get headaches from time to time, and they can happen for a variety of reasons. But did you know that optical changes or blue screen glare are among the most common causes?",
    readTime: "3 min read"
  },
  {
    id: "b2",
    title: "Glaucoma & Vision Health: Know Your Options",
    image: "/assets/aistudio/file_000000007ed08208a700061c7fee83f5_7c8e6134.png",
    summary: "Millions struggle with gradual eye changes without noticing early signs. Regular and consistent computerized eye exams are essential to protect your eyesight and catch issues early.",
    readTime: "4 min read"
  }
];
