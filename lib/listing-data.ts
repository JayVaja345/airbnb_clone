// lib/listing-data.ts
// Placeholder data modeled on the reference listing. Swap `img()` URLs for
// real assets later — everything else (copy, structure, counts) matches
// what was captured from the reference screenshots.

const img = (seed: string, w = 1200, h = 900) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export interface Photo {
  id: string;
  src: string;
  alt: string;
  room: string;
  tags?: string[];
}

export const photos: Photo[] = [
  // Unsplash: https://unsplash.com/photos/wVoP_Q2Bg_A - Louis Hansel
  { id: "p1", src: "/images/listing/dining.jpg", alt: "Dining table and chairs", room: "Living and dining area", tags: ["Dining table", "Chairs"] },
  // Unsplash: https://unsplash.com/photos/XTC538P_eWk - Mateo Fernandez
  { id: "p2", src: "/images/listing/living-room.jpg", alt: "Living room seating", room: "Living room", tags: ["Sofa", "Coffee table"] },
  // Unsplash: https://unsplash.com/photos/aDGbdTsBZg - Collov Home Design
  { id: "p3", src: "/images/listing/kitchen.jpg", alt: "Full kitchen", room: "Full kitchen", tags: ["Refrigerator", "Stove", "Cookware"] },
  // Unsplash: https://unsplash.com/photos/Yrxr3bsPdS0 - Vojtech Bruzek
  { id: "p4", src: "/images/listing/bedroom.jpg", alt: "Bedroom", room: "Bedroom", tags: ["Double bed", "Wardrobe", "Blackout curtains"] },
  // Unsplash: https://unsplash.com/photos/Aac7IlKnYX8 - Steven Ungermann
  { id: "p5", src: "/images/listing/bathroom.jpg", alt: "Full bathroom", room: "Full bathroom", tags: ["Bathtub", "Shower", "Towels"] },
  { id: "p6", src: img("gym"), alt: "Gym", room: "Gym", tags: ["Treadmill", "Free weights"] },
  { id: "p7", src: img("exterior"), alt: "Exterior", room: "Exterior", tags: ["Building view"] },
  { id: "p8", src: img("pool"), alt: "Pool", room: "Pool", tags: ["Shared pool", "Loungers"] },
  { id: "p9", src: img("extra1"), alt: "Additional photo", room: "Additional photos", tags: [] },
];

// Real photos present in public/images/listing but not yet placed in the grid:
//   lounge.jpg   - https://unsplash.com/photos/Cj7a21nHLyo - Jennifer Latuperisa-Andresen
//   entrance.jpg - https://unsplash.com/photos/XHBCqZGZre0 - Toni Osmundson

export const heroPhotos = photos.slice(0, 5);

const nightlyRate = 5700;
const cleaningFee = 1200;
const serviceFeeRate = 0.14;
const subtotal = nightlyRate * 5 + cleaningFee;
const serviceFee = Math.round(subtotal * serviceFeeRate);
const taxes = Math.round((subtotal + serviceFee) * 0.06);

export const listing = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  subtitle: "Entire serviced apartment in Candolim, Goa, India",
  guestsBedsSummary: "3 guests · 1 bedroom · 1 bed · 1 bathroom",
  guestCount: 3,
  bedrooms: 1,
  beds: 1,
  bathrooms: 1,
  rating: 4.95,
  reviewCount: 6,
  price: subtotal + serviceFee + taxes,
  nights: 5,
  checkIn: "2026-10-18",
  checkOut: "2026-10-23",
  location: "Candolim, Goa, India",
  pricing: {
    nightlyRate,
    nights: 5,
    cleaningFee,
    serviceFee,
    taxes,
    total: subtotal + serviceFee + taxes,
    serviceFeeRate,
  },
  ratingBreakdown: [
    { label: "Cleanliness", value: 4.9 },
    { label: "Accuracy", value: 5 },
    { label: "Check-in", value: 5 },
    { label: "Communication", value: 5 },
    { label: "Location", value: 4.8 },
    { label: "Value", value: 4.9 },
  ],
  host: {
    name: "Mirashya Homes",
    firstName: "Mirashya",
    superhost: true,
    yearsHosting: 2,
    joinedYear: 2024,
    responseRate: 100,
    responseTime: "within an hour",
    languages: ["English", "Hindi", "Konkani"],
    listings: 12,
    avatar: img("host", 200, 200),
    description:
      "I have been hosting guests in Goa for over six years and know Candolim well. I built this studio for travellers who want a quiet, well-equipped base close to the beach. I live nearby, so I am always available if you need anything.",
    reviewsCount: 1463,
    hostRating: 4.68,
    bornDecade: "80s",
    school: "NICMAR GOA",
  },
  highlights: [
    {
      icon: "Waves",
      title: "Guest favourite",
      body: "One of the most loved homes on Airbnb, according to guests",
    },
    {
      icon: "Waves",
      title: "Outdoor entertainment",
      body: "The pool and alfresco dining are great for summer trips.",
    },
    {
      icon: "Fan",
      title: "Designed for staying cool",
      body: "Beat the heat with the A/C and ceiling fan.",
    },
    {
      icon: "DoorOpen",
      title: "Self check-in",
      body: "You can check in with the building staff.",
    },
  ],
  description:
    "🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖, popular cafés, restaurants, and nightlife 🍹, it's the ideal base for your Goa getaway.",
  sleeping: [
    // Unsplash: https://unsplash.com/photos/Yrxr3bsPdS0 - Vojtech Bruzek
    { room: "Bedroom", detail: "1 double bed", img: "/images/listing/bedroom.jpg" },
    // Unsplash: https://unsplash.com/photos/XTC538P_eWk - Mateo Fernandez
    { room: "Living room", detail: "1 sofa", img: "/images/listing/living-room.jpg" },
  ],
  amenities: [
    { icon: "ChefHat", label: "Kitchen" },
    { icon: "Wifi", label: "Wifi" },
    { icon: "Briefcase", label: "Dedicated workspace" },
    { icon: "Car", label: "Free parking on premises" },
    { icon: "Waves", label: "Pool" },
    { icon: "Bath", label: "Hot tub" },
    { icon: "PawPrint", label: "Pets allowed" },
    { icon: "Camera", label: "Exterior security cameras on property" },
    { icon: "Snowflake", label: "Air conditioning" },
    { icon: "Wind", label: "Ceiling fan" },
    { icon: "Waves", label: "Beach access" },
    { icon: "Refrigerator", label: "Refrigerator" },
    { icon: "Microwave", label: "Microwave" },
    { icon: "CookingPot", label: "Stove" },
    { icon: "Coffee", label: "Coffee maker" },
    { icon: "Soup", label: "Toaster" },
    { icon: "Wine", label: "Wine glasses" },
    { icon: "Salad", label: "Dishes and cutlery" },
    { icon: "Utensils", label: "Cooking basics" },
    { icon: "Laptop", label: "Laptop-friendly" },
    { icon: "Plug", label: "Laptop workspace" },
    { icon: "Tv", label: "Smart TV" },
    { icon: "Music", label: "Bluetooth speaker" },
    { icon: "Calendar", label: "Housekeeping available" },
    { icon: "Bed", label: "Blackout blinds" },
    { icon: "Lamp", label: "Extra pillows and blankets" },
    { icon: "Shirt", label: "Bed linen provided" },
    { icon: "Towel", label: "Towels provided" },
    { icon: "Bath", label: "Private jacuzzi" },
    { icon: "ShowerHead", label: "Rain shower" },
    { icon: "Bath", label: "Hot water" },
    { icon: "Sparkles", label: "Body soap" },
    { icon: "Sparkles", label: "Shampoo" },
    { icon: "ScrollText", label: "Toilet paper" },
    { icon: "Bath", label: "Bidet" },
    { icon: "Droplet", label: "Hair dryer" },
    { icon: "WashingMachine", label: "Washer" },
    { icon: "Shirt", label: "Iron" },
    { icon: "Hammer", label: "Ironing board" },
    { icon: "Sun", label: "Balcony" },
    { icon: "Trees", label: "Outdoor seating" },
    { icon: "Utensils", label: "Outdoor dining area" },
    { icon: "Flame", label: "Fireplace" },
    { icon: "Thermometer", label: "Heating" },
    { icon: "Wind", label: "Portable fan" },
    { icon: "Dumbbell", label: "Gym" },
    { icon: "Trees", label: "Private garden" },
    { icon: "KeyRound", label: "Self check-in" },
    { icon: "Building2", label: "Building staff" },
    { icon: "ShieldCheck", label: "24/7 security" },
    { icon: "BellOff", label: "Smoke alarm", unavailable: true },
    { icon: "AlertTriangle", label: "Carbon monoxide alarm", unavailable: true },
  ],
  thingsToKnow: {
    houseRules: [
      "Check-in after 11:00 AM",
      "Checkout before 11:00 AM",
      "3 guests maximum",
      "Pets allowed, up to 2",
      "No parties or events",
      "No smoking",
      "Quiet hours after 10:00 PM",
      "Additional rules apply",
    ],
    amenitiesSummary: [
      "52 amenities",
      "Beachfront location",
      "Pool",
      "Air conditioning",
      "Free WiFi",
      "Kitchen",
      "Free parking",
      "Hot tub",
      "Dedicated workspace",
      "24/7 check-in",
    ],
    cancellation: [
      "Free cancellation before 17 October 2026",
      "Cancel within 48 hours of booking for a full refund",
      "Service fee: 14% of the total booking amount",
    ],
    propertyType: [
      "Entire serviced apartment",
      "1 bedroom",
      "1 bed",
      "1 bathroom",
      "1,250 sq ft",
      "19 reviews",
    ],
  },
  reviews: [
    { id: "r1", name: "Priya N", years: 4, stars: 5, date: "May 2026", text: "the host nitish was really great help", avatar: img("rev1", 200, 200) },
    { id: "r2", name: "Arjun K", years: 2, stars: 5, date: "May 2026", text: "We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine....", avatar: img("rev2", 200, 200) },
    { id: "r3", name: "Vaibhav S", years: 3, stars: 5, date: "May 2026", text: "Great great experience living out there , can't expect more , will always look for it in the future and will recommend my friends too.", avatar: img("rev3", 200, 200) },
    { id: "r4", name: "Mohd", years: 5, stars: 5, date: "May 2026", text: "Great place. Exactly as described in the listing.", avatar: img("rev4", 200, 200) },
    { id: "r5", name: "Sneha P", years: 6, stars: 5, date: "April 2026", text: "The jacuzzi was the highlight of the trip. Clean, quiet, and the host responded within minutes whenever we needed anything. Would stay again without hesitation.", avatar: img("rev5", 200, 200) },
    { id: "r6", name: "Rahul T", years: 1, stars: 4, date: "April 2026", text: "Very nice studio, a short walk to the beach. The kitchen had everything we needed for a week-long stay. Only note is that the lift was slow at peak hours.", avatar: img("rev6", 200, 200) },
  ],
};

export const coHosts = [
  { name: "Sharath", avatar: img("cohost1", 200, 200) },
  { name: "Aman Dev Pahwa", avatar: img("cohost2", 200, 200) },
  { name: "Maria Karen Priyanka", avatar: img("cohost3", 200, 200) },
  { name: "Simran", avatar: img("cohost4", 200, 200) },
  { name: "Pallavi", avatar: img("cohost5", 200, 200) },
  { name: "Sanyukta", avatar: img("cohost6", 200, 200) },
  { name: "Shruti", initial: true },
  { name: "Amisha", initial: true },
];

export const nearbyStays = [
  // Unsplash: https://unsplash.com/photos/y3_AHHrxUBY - white concrete building with swimming pool
  { id: "n1", title: "Beautiful Studio with a view to die for", price: 23600, rating: 4.91, img: "/images/nearby/stay-1.jpg" },
  // Unsplash: https://unsplash.com/photos/QWs-xsZ0wBs - luxury villa with pool, Corfu
  { id: "n2", title: "NAQAB - 1bhk with private pool", price: 42218, rating: 4.95, img: "/images/nearby/stay-2.jpg" },
  // Unsplash: https://unsplash.com/photos/8uZ0_ctvaTQ - beach house with porch and deck, Byron Bay
  { id: "n3", title: "Greentique Luxury Flat with plunge pool, Calangute", price: 44506, rating: 4.94, img: "/images/nearby/stay-3.jpg" },
  // Unsplash: https://unsplash.com/photos/zvZa0dveXB4 - beach house with surfboard, Cannon Beach
  { id: "n4", title: "The Tropical Studio | 5 mins to Beach", price: 22824, rating: 4.96, img: "/images/nearby/stay-4.jpg" },
  // Unsplash: https://unsplash.com/photos/Kjo3mrPcFWs - house on a cliff overlooking the ocean, Curacao
  { id: "n5", title: "Luxury Casa Bella 1BHK with plunge pool, Calangute", price: 39942, rating: 4.95, img: "/images/nearby/stay-5.jpg" },
];