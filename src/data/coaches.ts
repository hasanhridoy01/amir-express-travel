export interface CoachType {
  id: number;
  name: string;
  capacity: number;
  description: string;
  features: string[];
  image: string;
  pricePerDay: number;
  pricePerMile: number;
}

export interface CoachService {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const coachTypes: CoachType[] = [
  {
    id: 1,
    name: "Standard Coach",
    capacity: 49,
    description: "Our standard 49-seater coaches are perfect for large groups needing reliable transportation. Comfortable, air-conditioned, and equipped with essential amenities.",
    features: [
      "49 reclining seats",
      "Air conditioning",
      "Onboard toilet",
      "DVD player and TV screens",
      "PA system",
      "Seat belts throughout",
      "Ample luggage space"
    ],
    image: "https://images.pexels.com/photos/6102048/pexels-photo-6102048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    pricePerDay: 450,
    pricePerMile: 2.5
  },
  {
    id: 2,
    name: "Executive Coach",
    capacity: 36,
    description: "Our executive coaches offer premium comfort for businesses, VIPs, and those wanting extra space and luxury. Perfect for corporate events or special occasions.",
    features: [
      "36 leather reclining seats with extra legroom",
      "Climate control",
      "Onboard toilet",
      "Coffee machine",
      "DVD player with multiple screens",
      "USB charging points at every seat",
      "WiFi connection",
      "Refrigerator"
    ],
    image: "https://images.pexels.com/photos/8960464/pexels-photo-8960464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    pricePerDay: 650,
    pricePerMile: 3.2
  },
  {
    id: 3,
    name: "Luxury Minibus",
    capacity: 16,
    description: "Our luxury minibuses are ideal for smaller groups wanting comfort and convenience. Perfect for airport transfers, corporate travel, or small tour groups.",
    features: [
      "16 leather seats",
      "Air conditioning",
      "Large panoramic windows",
      "Entertainment system",
      "USB charging points",
      "WiFi connection",
      "Generous luggage space"
    ],
    image: "https://images.pexels.com/photos/10343578/pexels-photo-10343578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    pricePerDay: 350,
    pricePerMile: 2.0
  },
  {
    id: 4,
    name: "Luxury Double Decker",
    capacity: 70,
    description: "Our double-decker coaches are perfect for large events and long-distance travel. Combining capacity with comfort, these coaches are ideal for transporting large groups.",
    features: [
      "70 comfortable seats",
      "Air conditioning",
      "Two onboard toilets",
      "Entertainment systems on both decks",
      "PA system",
      "Large luggage hold",
      "WiFi connection",
      "USB charging points"
    ],
    image: "https://images.pexels.com/photos/1178448/pexels-photo-1178448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    pricePerDay: 800,
    pricePerMile: 3.5
  }
];

export const coachServices: CoachService[] = [
  {
    id: 1,
    title: "Corporate Events & Conferences",
    description: "Reliable transportation for your corporate events, conferences, and team-building activities. We ensure your team arrives together, on time, and in comfort.",
    icon: "briefcase",
    features: [
      "Airport shuttling for international attendees",
      "Multi-location pickups",
      "Branded coaches available",
      "Professional uniformed drivers",
      "24/7 support for schedule changes"
    ]
  },
  {
    id: 2,
    title: "UK Day Trips",
    description: "Explore the UK's most beautiful destinations with our day trip services. From historic cities to stunning landscapes, we make day excursions simple and enjoyable.",
    icon: "map",
    features: [
      "Pre-planned routes to popular destinations",
      "Knowledgeable drivers familiar with attractions",
      "Flexible departure and return times",
      "Comfortable vehicles with essential amenities",
      "Multiple pickup locations available"
    ]
  },
  {
    id: 3,
    title: "European Tours",
    description: "Experience the best of Europe with our comprehensive tour services. Our coaches are fully equipped for long-distance travel in maximum comfort.",
    icon: "globe",
    features: [
      "Multi-day tours across Europe",
      "Vehicles authorized for international travel",
      "Experienced drivers familiar with European routes",
      "All necessary documentation and permits handled",
      "24/7 emergency support throughout the journey"
    ]
  },
  {
    id: 4,
    title: "Wedding Transportation",
    description: "Make your special day perfect with our wedding transport solutions. We ensure guests arrive on time and in style for your celebration.",
    icon: "heart",
    features: [
      "Decorated vehicles available",
      "Coordination with wedding planners",
      "Multiple vehicles for large weddings",
      "Flexible scheduling for photography sessions",
      "Smart, professionally dressed drivers"
    ]
  },
  {
    id: 5,
    title: "School Trips & Educational Tours",
    description: "Safe and reliable transportation for school trips and educational excursions. We prioritize safety while making the journey enjoyable for students.",
    icon: "school",
    features: [
      "DBS-checked drivers",
      "Vehicles meeting all school transport regulations",
      "Seatbelts throughout all coaches",
      "Experience in managing student groups",
      "Risk-assessed transportation"
    ]
  },
  {
    id: 6,
    title: "Sports Teams & Supporters",
    description: "Transport your team or supporters to matches and tournaments with our specialized sports team services. Ample space for equipment and comfortable travel.",
    icon: "trophy",
    features: [
      "Extra luggage space for sporting equipment",
      "Experience with major sporting venues",
      "Flexible scheduling for uncertain match times",
      "Group discounts available",
      "Return journey waiting service"
    ]
  }
];