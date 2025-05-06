export interface Tour {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  price: number;
  location: string;
  country: string;
  image: string;
  rating: number;
  reviews: number;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  includes: string[];
  excludes: string[];
  featured: boolean;
}

export const tours: Tour[] = [
  {
    id: 1,
    title: "Scottish Highlands Explorer",
    subtitle: "Discover the rugged beauty of Scotland",
    description: "Embark on a magical journey through the Scottish Highlands, where ancient castles, mysterious lochs, and breathtaking landscapes await. This tour takes you through the heart of Scotland's most dramatic scenery, from the historic city of Edinburgh to the mythical shores of Loch Ness.",
    duration: "5 days",
    price: 799,
    location: "Scottish Highlands",
    country: "United Kingdom",
    image: "https://images.pexels.com/photos/4298443/pexels-photo-4298443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.8,
    reviews: 124,
    highlights: [
      "Visit Edinburgh Castle and the Royal Mile",
      "Explore the mysterious Loch Ness",
      "Tour the historic Urquhart Castle",
      "Journey through the stunning Glen Coe",
      "Experience a traditional Scottish whisky distillery"
    ],
    itinerary: [
      {
        day: 1,
        title: "Edinburgh",
        description: "Begin your journey in Scotland's historic capital. Explore Edinburgh Castle, stroll down the Royal Mile, and enjoy a welcome dinner with traditional Scottish entertainment."
      },
      {
        day: 2,
        title: "Edinburgh to Inverness",
        description: "Travel northward through the Cairngorms National Park with stops at Blair Castle and a traditional whisky distillery. Arrive in Inverness for the evening."
      },
      {
        day: 3,
        title: "Loch Ness and Urquhart Castle",
        description: "Spend the day exploring the famous Loch Ness and the ruins of Urquhart Castle. Optional boat cruise on the loch to search for the elusive Nessie."
      },
      {
        day: 4,
        title: "Isle of Skye",
        description: "Journey to the magical Isle of Skye, stopping at Eilean Donan Castle. Explore the island's dramatic landscapes, including the Quiraing and Kilt Rock."
      },
      {
        day: 5,
        title: "Glen Coe and Return",
        description: "Travel through the dramatic valley of Glen Coe, learning about its rich history. Return to Edinburgh through the Trossachs National Park with a farewell lunch."
      }
    ],
    includes: [
      "Luxury coach transportation",
      "4 nights accommodation in quality hotels",
      "Daily breakfast and selected meals",
      "Professional tour guide",
      "All entrance fees to attractions",
      "Whisky distillery tour and tasting",
      "Free WiFi on coach"
    ],
    excludes: [
      "Optional activities",
      "Personal expenses",
      "Travel insurance",
      "Meals not specified"
    ],
    featured: true
  },
  {
    id: 2,
    title: "Lake District Adventure",
    subtitle: "Experience England's most beautiful national park",
    description: "Immerse yourself in the breathtaking landscapes that inspired poets and painters for centuries. This tour explores the stunning Lake District National Park, with its serene lakes, rugged mountains, and charming villages.",
    duration: "3 days",
    price: 499,
    location: "Lake District",
    country: "United Kingdom",
    image: "https://images.pexels.com/photos/2907930/pexels-photo-2907930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.7,
    reviews: 89,
    highlights: [
      "Cruise on Lake Windermere",
      "Visit Beatrix Potter's Hill Top Farm",
      "Explore the charming village of Grasmere",
      "Hike through stunning mountain landscapes",
      "Experience traditional English afternoon tea"
    ],
    itinerary: [
      {
        day: 1,
        title: "Windermere and Ambleside",
        description: "Arrive in the Lake District and begin with a cruise on Lake Windermere. Explore the towns of Windermere and Ambleside with their charming shops and cafes."
      },
      {
        day: 2,
        title: "Beatrix Potter Country",
        description: "Visit Hill Top Farm, the home of Beatrix Potter, and explore the surrounding countryside that inspired her stories. Continue to the village of Hawkshead."
      },
      {
        day: 3,
        title: "Grasmere and Keswick",
        description: "Explore Grasmere, once home to William Wordsworth, and visit Dove Cottage. Continue to Keswick and Derwentwater before returning."
      }
    ],
    includes: [
      "Comfortable coach transportation",
      "2 nights accommodation in a traditional inn",
      "Daily breakfast",
      "Lake Windermere cruise",
      "Entrance to Hill Top Farm",
      "Professional guide",
      "Free WiFi on coach"
    ],
    excludes: [
      "Optional activities",
      "Personal expenses",
      "Travel insurance",
      "Meals not specified"
    ],
    featured: true
  },
  {
    id: 3,
    title: "Paris Weekend Getaway",
    subtitle: "Romantic escape to the City of Lights",
    description: "Experience the magic of Paris on this enchanting weekend break. From iconic landmarks to charming cafes, discover why Paris is one of the world's most beloved cities.",
    duration: "3 days",
    price: 599,
    location: "Paris",
    country: "France",
    image: "https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.9,
    reviews: 156,
    highlights: [
      "Skip-the-line entry to the Eiffel Tower",
      "Guided tour of the Louvre Museum",
      "Seine River dinner cruise",
      "Visit to Montmartre and Sacré-Cœur",
      "Free time for shopping and exploration"
    ],
    itinerary: [
      {
        day: 1,
        title: "Welcome to Paris",
        description: "Morning departure from London via Eurotunnel. Afternoon arrival in Paris with a panoramic city tour. Evening Seine River dinner cruise."
      },
      {
        day: 2,
        title: "Paris Highlights",
        description: "Morning visit to the Eiffel Tower with skip-the-line access. Guided tour of the Louvre Museum. Afternoon free for shopping or optional visit to Versailles."
      },
      {
        day: 3,
        title: "Montmartre and Return",
        description: "Morning visit to the artistic neighborhood of Montmartre and Sacré-Cœur Basilica. Free time for lunch and last-minute shopping before return journey to London."
      }
    ],
    includes: [
      "Luxury coach transportation",
      "Eurotunnel or ferry crossings",
      "2 nights accommodation in a central Paris hotel",
      "Daily breakfast",
      "Seine River dinner cruise",
      "Skip-the-line Eiffel Tower entry",
      "Guided Louvre Museum tour",
      "Professional bilingual guide"
    ],
    excludes: [
      "Optional activities",
      "Personal expenses",
      "Travel insurance",
      "Meals not specified"
    ],
    featured: true
  },
  {
    id: 4,
    title: "Amsterdam City Break",
    subtitle: "Explore the Venice of the North",
    description: "Discover the unique charm of Amsterdam with its picturesque canals, world-class museums, and vibrant culture. This tour offers the perfect blend of guided exploration and free time to experience this fascinating Dutch city.",
    duration: "4 days",
    price: 699,
    location: "Amsterdam",
    country: "Netherlands",
    image: "https://images.pexels.com/photos/18081796/pexels-photo-18081796/free-photo-of-canal-houses-in-amsterdam-the-netherlands.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.6,
    reviews: 92,
    highlights: [
      "Canal cruise through Amsterdam's waterways",
      "Visit to the Van Gogh Museum",
      "Tour of the historic Anne Frank House",
      "Day trip to traditional Dutch villages",
      "Optional bicycle tour of the city"
    ],
    itinerary: [
      {
        day: 1,
        title: "Journey to Amsterdam",
        description: "Morning departure from London. Afternoon arrival in Amsterdam with a welcome canal cruise to orient yourself to the city."
      },
      {
        day: 2,
        title: "Amsterdam Highlights",
        description: "Morning visit to the Van Gogh Museum and Rijksmuseum. Afternoon walking tour of the historic center including Dam Square and the Red Light District."
      },
      {
        day: 3,
        title: "Dutch Countryside",
        description: "Day trip to the traditional villages of Volendam, Marken, and Zaanse Schans to see windmills, wooden shoe making, and cheese production."
      },
      {
        day: 4,
        title: "Free Time and Return",
        description: "Morning free time for last-minute shopping or optional visit to the Anne Frank House. Afternoon return journey to London."
      }
    ],
    includes: [
      "Executive coach transportation",
      "Ferry or Eurotunnel crossings",
      "3 nights accommodation in a quality Amsterdam hotel",
      "Daily breakfast",
      "Canal cruise",
      "Van Gogh Museum entrance",
      "Dutch countryside excursion",
      "Professional guide"
    ],
    excludes: [
      "Optional activities",
      "Anne Frank House tickets (must be pre-booked)",
      "Personal expenses",
      "Travel insurance",
      "Meals not specified"
    ],
    featured: false
  },
  {
    id: 5,
    title: "Cornwall Coastal Tour",
    subtitle: "Discover England's stunning southwestern peninsula",
    description: "Journey through the beautiful landscapes of Cornwall, with its dramatic coastlines, charming fishing villages, and rich maritime history. Experience the unique culture and cuisine of this beloved region.",
    duration: "5 days",
    price: 749,
    location: "Cornwall",
    country: "United Kingdom",
    image: "https://images.pexels.com/photos/7291911/pexels-photo-7291911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.8,
    reviews: 78,
    highlights: [
      "Visit to the iconic St. Michael's Mount",
      "Explore the Eden Project's biomes",
      "Discover the legend of King Arthur at Tintagel Castle",
      "Relax in the charming town of St. Ives",
      "Experience the theatrical wonder of the Minack Theatre"
    ],
    itinerary: [
      {
        day: 1,
        title: "Journey to Cornwall",
        description: "Depart from London to Cornwall, stopping at the ancient monument of Stonehenge. Continue to our hotel in Newquay with welcome dinner."
      },
      {
        day: 2,
        title: "Eden Project and Lost Gardens",
        description: "Visit the impressive Eden Project with its massive biomes. Afternoon exploration of the Lost Gardens of Heligan, restored to their former glory."
      },
      {
        day: 3,
        title: "St. Michael's Mount and Penzance",
        description: "Journey to the tidal island of St. Michael's Mount. Explore the castle and gardens. Afternoon in the charming town of Penzance."
      },
      {
        day: 4,
        title: "Tintagel and Port Isaac",
        description: "Discover the legendary Tintagel Castle, linked to King Arthur. Visit the picturesque fishing village of Port Isaac, filming location for Doc Martin."
      },
      {
        day: 5,
        title: "St. Ives and Return",
        description: "Spend the morning in the artistic town of St. Ives with its beautiful beaches and Tate St. Ives gallery. Afternoon return journey to London."
      }
    ],
    includes: [
      "Luxury coach transportation",
      "4 nights accommodation in quality hotels",
      "Daily breakfast and welcome dinner",
      "All entrance fees to attractions",
      "Professional tour guide",
      "Free WiFi on coach"
    ],
    excludes: [
      "Optional activities",
      "Personal expenses",
      "Travel insurance",
      "Meals not specified"
    ],
    featured: false
  },
  {
    id: 6,
    title: "Brussels & Bruges Weekend",
    subtitle: "Discover the best of Belgium",
    description: "Experience the perfect blend of history, culture, and gastronomy on this weekend tour to Brussels and Bruges. From magnificent architecture to world-famous chocolates and beers, this tour captures the essence of Belgium.",
    duration: "3 days",
    price: 549,
    location: "Brussels & Bruges",
    country: "Belgium",
    image: "https://images.pexels.com/photos/65040/pexels-photo-65040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.7,
    reviews: 63,
    highlights: [
      "Guided walking tour of historic Brussels",
      "Chocolate and beer tasting experiences",
      "Day trip to the medieval city of Bruges",
      "Visit to the European Quarter",
      "Free time for shopping and exploration"
    ],
    itinerary: [
      {
        day: 1,
        title: "Journey to Brussels",
        description: "Morning departure from London. Afternoon arrival in Brussels with guided walking tour of the Grand Place, Manneken Pis, and surrounding historic center."
      },
      {
        day: 2,
        title: "Beautiful Bruges",
        description: "Full-day excursion to the medieval city of Bruges. Enjoy a canal cruise, visit the Belfry, and explore the charming cobbled streets. Chocolate tasting included."
      },
      {
        day: 3,
        title: "Brussels and Return",
        description: "Morning visit to the Atomium and European Quarter. Beer tasting experience followed by free time before afternoon return to London."
      }
    ],
    includes: [
      "Executive coach transportation",
      "Eurotunnel or ferry crossings",
      "2 nights accommodation in a central Brussels hotel",
      "Daily breakfast",
      "Guided tours of Brussels and Bruges",
      "Chocolate and beer tastings",
      "Bruges canal cruise",
      "Professional guide"
    ],
    excludes: [
      "Optional activities",
      "Personal expenses",
      "Travel insurance",
      "Meals not specified"
    ],
    featured: false
  }
];