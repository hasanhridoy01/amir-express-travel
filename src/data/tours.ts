import image1 from "../../public/images/160425.jpg";
import image2 from "../../public/images/303554.jpg";
import image3 from "../../public/images/303556.jpg";
import image4 from "../../public/images/527888.jpg";
import image5 from "../../public/images/536391.jpg";

export interface Tour {
  id: number;
  price: number;
  oldPrice: number;
  title: string;
  subtitle: string;
  duration: string;
  Highlights: string[];
  WhatsIncluded: string[];
  WhatsExcluded: string[];
  PleaseNote: string[];
  Description: string;
  image: string;
}

export const tours: Tour[] = [
  {
    id: 1,
    price: 99,
    oldPrice: 199,
    title: "Half Day London Sightseeing Tour with Free Snack Pack",
    subtitle: "Gray Line’s Award-winning Best Choice Tour",
    duration: "Approx. 8.5 hours",
    Highlights: [
      "Gray Line’s Award-winning Best Choice Tour",
      "Soak in London’s most spectacular sights with a panoramic tour of the capital",
      "See the iconic Changing of the Guard ceremony",
      "Come up close to the historic Crown Jewels at the formidable Tower of London",
      "Cruise through the heart of the city on a River Thames boat ride",
      "Take a ride on the London Eye in one of the iconic glass capsules",
      "Cancelled bookings up to 24 hours before travel receive a full refund",
      "Enjoy an included snack pack",
    ],
    WhatsIncluded: [
      "Panoramic Tour of London",
      "Entry to St Paul's Cathedral",
      "Buckingham Palace & Changing of the Guard",
      "Attractions included are based on your selection",
      "Tickets to the London Eye (if 'All Entries' option is selected)",
      "Transportation by air-conditioned luxury coach",
      "Professional Guide",
      "Snack pack",
    ],
    WhatsExcluded: ["Gratuities", "Additional food and drinks"],
    PleaseNote: [
      "Show your e-ticket to gain entry to this tour.",
      "On Sunday's, due to Church services, there is no guiding inside St Paul’s Cathedral.",
      "The Changing of the Guard is subject to scheduling and weather conditions. If it is not operating we will visit the Horse Guards for a photo stop instead.",
    ],
    Description: `Nothing beats a fully guided tour of London. It’s a chance to learn lots about the UK’s capital city whilst ticking off all those must-see famous landmarks. We are pleased to offer you flexibility on your full-day tour of London, by giving you the option to choose the number of attractions you would like to visit on the day. Simply select the package you prefer (from the pricing panel on this page), and we will take care of the rest. Below is the information for all elements that can be included.Panoramic Tour of London Kick off your exhilarating day out in London with a panoramic guided tour of the capital’s most well-loved landmarks. Familiarise yourself with one of the most popular cities in the world from the comfort of your seat and use your camera or smart phone to get snap-happy.St Paul’s Cathedral After driving past the historic royal wedding and coronation venue of Westminster Abbey in Parliament Square, you’ll have to tear yourself away from Westminster. The next stop is the equally enchanting St Paul’s Cathedral. Stretch your legs and explore this dominating church – the towering dome masks a number of tombs, memorials and intricately painted mosaics. Discover more about Sir Christopher Wren’s masterpiece and the wedding venue of Princess Diana and Charles.Buckingham Palace & Changing of the Guard We can’t guarantee the King will be home (be sure to look out for the flag!), but a photo stop outside London‘s Buckingham Palace is still a royal treat. Watch the King’s Foot Guard march to the palace alongside a military band during the traditional Changing of the Guard ceremony – they’ll be decked out in their eye-catching red outfits and bearskin hats. We will visit Horseguards Parade when the ceremony is not available.The lastminute.com London Eye Experience You won’t stay on dry land for long though as the soaring London Eye Experience awaits. Step into one of the iconic glass capsules and ascend 135 metres above ground level for spectacular sights of the capital! Try to identify the London attractions you have visited from the roomy glass capsule during this bird’s eye view of the city. On a good day, you can even see as far as Windsor Castle!River Thames Boat Ride After the London Eye, it’ll be time to head to the water and enjoy a relaxing River Thames Boat Ride. Take in the sights from the heart of London during this leisurely trip before docking at Tower Pier.Extended Visit at the Tower of London Refreshed and ready to delve into the colourful past of London’s most famous tower? The Tower of London conceals secrets that are equally fascinating, gruesome and inspiring. Be blinded by the glittering Crown Jewels or watch out for Anne Boleyn’s ghost lurking near where she was beheaded on Tower Green. Discover the Royal Beasts Exhibition, the Royal Mint and meet a Beefeater at one of London’s most historic landmarks! Exclusive Feature Get acquainted with the Beefeaters during an exclusive tour with one of the Yeoman Warders. Expect tantalising inside information and grisly stories from these ‘guardians’ of the Tower – they were once responsible for watching over ill-fated prisoners. Yeoman Warders have been guarding the Tower of London since Tudor times, and each new recruit takes an oath of royal allegiance said to date back to 1337.Included snack pack Enjoy a complimentary snack pack on your London coach tour. You will have more time to explore the city with a convenient light lunch provided on your travels. Our snack pack includes a ploughman’s roll, an apple, an oat flapjack, and a bottle of water – for no extra cost! Without the need to search for lunch, you can save time and money and enjoy the entirety of your tour.`,
    image: image1,
  },
  {
    id: 2,
    price: 49,
    oldPrice: 109,
    title: "Harry Potter Warner Bros. Studio Tour London with Transport",
    subtitle:
      "Golden Tours are preferred partners of Warner Bros. Studio Tour London. This allows us to offer exclusive packages with return transportation, even when entry tickets aren’t available on the official website.",
    duration: "7 hours (with transportation)",
    Highlights: [
      "Preferred Partner of Warner Bros. Studio Tour London",
      "Travel on Warner Bros. Studio Tour London branded buses whilst watching a movie on your seat-back screen*",
      "Experience filmmaking magic at Warner Bros. Studio Tour London - The Making of Harry Potter",
      "Step into the Great Hall, walk down Diagon Alley™ and visit Dumbledore’s office",
      "See actual costumes and props from all eight Harry Potter™ films",
      "Return transport from Central London to the Studio and back.  Depart from Victoria, Baker Street or Kings Cross",
      "Includes Studio entry ticket",
      "Rated 5 stars on TripAdvisor with over 37,000 ‘Excellent’ reviews",
      "Cancel your booking and receive a full refund up to 48 hours before your time of travel",
    ],
    WhatsIncluded: [
      "Transport to and from the Warner Bros. Studio Tour London on a double-decker branded bus*",
      "Studio entry with an extended 4 hours inside Warner Bros. Studio Tour London",
    ],
    WhatsExcluded: [
      "Food and drinks",
      "Hotel pick-up and drop-off",
      "Digital Guide (available to hire at the Studio Tour for £5.25)",
    ],
    PleaseNote: [
      "*Branded buses are subject to availability. Alternative buses may be used at times. Show your e-ticket to gain entry to this tour.",
      "A fee is charged for infants aged 3 & 4 for transport as they require a seat. Infants 2 years and under require a ticket although they are free. Entry to Warner Bros. Studio Tour London is free for children 4 years and under.",
      "Cancel free of charge up to 48 hours before your departure date and time.",
      "Butterbeer™ may contain nuts and other ingredients that may cause allergies etc.",
      "Branded buses are equipped with UBS charging ports and Wi-Fi.",
      "Please view the bus schedule for timings. You must return on your designated bus.",
      "Wheelchair users should not book a Kings Cross departure.",
      "Our vehicles are modern, comfortable, and kept to the highest standards of cleanliness, including a deep clean every day.",
    ],
    Description: `Get your hands on some of the most coveted tickets around and experience the truly incredible Warner Bros. Studio Tour London. Discover grandiose sets, all your favourite props and the immense craftsmanship and talent that went into creating the iconic films.Your foray into the Wizarding World begins where Harry’s did — the cupboard under the stairs. After an introductory video featuring some of your favourite characters, you’re welcomed into the Great Hall, where you’ll see actual costumes and wigs worn by prominent members of the cast.The Sets From the Great Hall enter the Forbidden Forest through a gate flanked by masked Death Eaters, right int the lair of Aragog. Other iconic sets include Platform 9¾, with the Hogwarts Express providing the background for Harry Potter and the Philosopher’s Stone’s first ever shot and then, 10 years later, for the very last shot during Harry Potter and the Deathly Hallows Part 2. Possibly the most exciting part of the tour is Diagon Alley, home to the dusty Ollivanders Wand Shop, where there are more than 17,000 individually labelled wand boxes.The Animatronics Discover the terrifying Basilisk that lived within The Chamber of Secrets. Created with a mix of practical and visual effects, its full-sized mouth measured 30ft long with jaws 3ft deep. It could even slither up a track to get close to Harry. You’ll also see Buckbeak the Hippogriff, one of the books most loved creatures (after Hedwig, of course). Buckbeak had three incarnations — one standing, another rearing and a third lying down — and each of its feathers were individually glued on!The Art Department On your tour you’ll come across the incredible Hogwarts Castle model. A team of 86 artists and crewmembers built the first version of the castle, which was enhanced with digital effects to create the unforgettably realistic views of the school. With 2,500 fibre optic lights, which flicker to give the illusion of students walking through corridors, real gravel and plants, if you calculated all the working hours that went in to making the model, you’re talking 74 years!Potion textbooks, acceptance letters, sweet wrappers, and the Daily Prophet were all hand designed and hand-made! All potion bottles were also all hand illustrated.The Props The sheer volume of original props in the Studios is impressive and it’s incredibly satisfying when you spot your favourite, whether it’s the Elder Wand or the Golden Snitch. See over 950 potion jars with unique props inside them in the Potions Classroom and 900 memory vials and labels in Professor Dumbledore’s office. Did you know over 130 plates were made to decorate the startingly pink office of everyone's least favourite teacher, Professor Umbridge. Filmmakers had to photograph and film real kittens with crystal balls, witch's hats and balls of wool. Sounds like a fun day in the office! The Special Effects It may come as a surprise to many fans to learn that their favourite special effects were actually real! The slithering door to the Chamber of Secrets is often mistaken for a visual effect but it’s a fully operational door, as is the incredibly intricate Gringotts bank door.As you can imagine, green screen played a huge part in creating the Wizarding World of Harry Potter. Quidditch, for example, would have been a tricky one to film without green screen! Why not hop onto a broom yourself and try your hand at the magical game?Make sure you refuel with a tasty butter beer in the new and improved cafe and dining area at the Studio, just like Harry, Ron, and Hermione would have done in the Leaky Cauldron! Triwizard Tournament (until 8th September 2025) Discover how the filmmakers brought the action-packed scenes from the Triwizard Tournament to the big screen. Learn insider knowledge, discover special effects secrets, see new magical costumes, and be awed by a fire-breathing dragon! The Hungarian Horntail is a 1.3-tonne animatronic dragon that has to be seen to be believed.The times displayed in the booking panel are the times that the branded bus departs from your chosen central London location.Premium seating Premium seating means you will be positioned at the front of the bus with the best views of London as you journey to the studios. This option is available for our Victoria and Baker Street departures. This package includes return transport from Central London and your entry ticket to the Studio tour, meaning you don’t have to worry about how to get there. Our luxury vehicles have free Wi-Fi and comfortable seating giving you a stress-free journey all the way to the Warner Bros. Studio entrance and back again. You can watch one of the official movies on your seat-back screen whilst you travel in style. So sit back and relax, whilst we transport you to the Harry Potter world of magic and the wizarding world. Please click here for full bus timings. `,
    image: image2,
  },
  {
    id: 3,
    price: 29,
    oldPrice: 179,
    title: "Hop-on Hop-off London Bus Tours",
    subtitle: "",
    duration: "1 day, 24, 48 or 72-hour ticket",
    Highlights: [
      "Unlimited hop-on hop-off fun across London for either 1 day, 24, 48 or 72 hours",
      "See some of London’s most iconic sights and attractions",
      "See Buckingham Palace, Houses of Parliament, St. Paul's Cathedral, Westminster Abbey, Big Ben and many more",
      "Sail on the River Thames with your free river cruise**",
      "Audio guides available on the bus in 12 languages",
      "tastecard (if selected) - enjoy discounts and offers at 1000s of restaurants",
      "Two free walking tours***",
      "Flexible Ticket - amend or cancel up to midnight (UK time), the night before departure",
    ],
    WhatsIncluded: [
      "Choose either a 1-day, 24, 48 or 72-hour hop-on hop-off bus ticket",
      "tastecard (if selected) - enjoy discounts at 1000s of restaurants",
      "Two free walking tours***",
      "Live guide on selected Blue Route departures",
      "One-way river cruise**",
      "Free cancellations and amendments*",
    ],
    WhatsExcluded: ["Entrance to attractions"],
    PleaseNote: [
      "*Cancel or amend up to midnight (UK time), the night before departure and get a full refund.  So no problem if you change your mind. ",
      "Duration valid from when you first hop-on the bus. Unlimited usage within your chosen timeframe. Does not include London by Night tour.",
      "**River cruise to be used between Westminster and Tower Millennium Pier or vice versa. Not applicable with the 1 day or 24-hour without cruise ticket options. Take your cruise within 7 days of the start of your hop-on hop-off bus experience.",
      "Audio Guides in English, French, German, Italian, Spanish, Chinese, Russian, Brazilian Portuguese, Polish, Hindi, Japanese and Arabic.",
      "Children under 5 years of age travel free.",
      "Each bus has space for one fold-away pushchair and a wheelchair on the lower deck.",
      "Download the free Golden Tours City Guide App to see full bus timings and guide your way around the city.",
      "Please view the Schedule for more helpful information.",
      "Stops 20, 22, 24 and 25 near Buckingham Palace are closed temporarily from 10am to 12pm when the Changing of the Guard ceremony takes place. Please use stop 21 or 14, during this time.",
      "The Orange Route operates every 30 minutes.",
      "***Walking tours are not available with a 1-day ticket. ",
    ],
    Description: `Hop-on Hop-off Bus Tour See one of the best cities in the world at your leisure with a famous open top bus tour. Discover iconic London sights, spectacular historic buildings, top London attractions as well as modern architecture by hopping on and off at any of our multiple stops across the capital.This sightseeing tour will allow you to check out the incredible Tower of London or see the famous Marble Arch monument from the comfort of your seat. Get off at a nearby stop for a stroll through the idyllic Hyde Park. View Buckingham Palace, Westminster Abbey, Big Ben, 10 Downing Street, the London Eye, Madame Tussauds and many more. Your ticket gives you the freedom to explore the city at your own pace.There is an audio guide on every bus, giving you the unmissable facts and figures about London, as well as some secrets and surprises. A hop-on hop-off tour on an open top bus is the number one way to sightsee in London. You can select either a 1 day, 24, 48 or 72-hour ticket to make the most out of your time in London.The RoutesThe Classic Tour (Blue Route):Taking you to all the main Central London landmarks, the Classic Tour passes the London Eye, the Tower of London, Big Ben, the Houses of Parliament, the Shard, St Paul’s Cathedral, Piccadilly Circus, Harrods and much more.The Essential Tour (Red Route): Explore the centre and north of London. Covering Covent Garden, Westminster Abbey, Hyde Park, Regents Park, London Zoo, Madame Tussauds, Kings Cross, as well as many of the capital’s must-sees.The Museum Tour (Orange Route):Spend the day discovering London’s iconic museums such as the Natural History Museum, Science Museum and V&A Museum as well as the Royal Albert Hall, Harrods and Buckingham Palace. Route Map and Timetable River Thames Boat Ride** Enjoy an enthralling sightseeing cruise along the heart of London’s River Thames with this one-way boat ride. Choose to depart from Westminster or Tower Millennium Pier and soak in panoramic views of the capital’s most iconic landmarks for a sightseeing experience like no other! Discover fascinating facts as you cruise with live commentary from the captain or audio guide.River Cruise Route Map and TimetableFree Walking Tours - worth £30 Embark on the Jack the Ripper Walking Tour and/or the Royal London Walking Tour to complete your London sightseeing adventure. Travel back to Victorian London to discover where the notorious Jack the Ripper murders took place. You’ll explore the locations where vital clues were found and play detective in trying to solve this morbid mystery. If crime isn’t your cup of tea, enjoy a majestic 2-hour stroll through the capital uncovering spectacular Royal sites. Learn more about coronations past and present as well as quirky facts such as where The Queen Mother bought her cigarettes and Queen Elizabeth’s favourite off-licence.tastecard and Coffee Club Save an average of £25 per meal with a range of great offers from tastecard. Enjoy 2-for-1 meals, 25% off the total bill or 50% off food at 1000s of participating restaurants in London and the UK. Also save 25% on barista-made drinks at a wide range of coffee shops. You can also get 50% off pizza delivery at selected franchises, and cinema deals and days out discounts to attractions such as SEA LIFE, Alton Towers, Thorpe Park, and more. Valid for one month, tastecard is simple and easy to use. Download the app, choose your membership and browse the offers.`,
    image: image3,
  },
  {
    id: 4,
    price: 0.9,
    oldPrice: 79,
    title: "London by Night Open Top Bus Tour",
    subtitle: "",
    duration: "Approx. 90 minutes",
    Highlights: [
      "Panoramic 90 minute tour of London’s lit up landmarks",
      "See the beautiful Tower of London, Buckingham Palace, Westminster Abbey, and plenty more beautiful locations",
      "A live English-speaking guide throughout",
      "Audioguide in 12 language",
      "See London from a unique perspective against the backdrop of the night sky",
    ],
    WhatsIncluded: [
      "Panoramic tour of London",
      "Live English-speaking guide",
      "Two free walking tours***",
      "Audio guides available in 12 languages",
      "Free Wi-Fi",
    ],
    WhatsExcluded: [
      "Gratuities (optional)",
      "Food and drink",
      "Hotel pick up or drop off",
    ],
    PleaseNote: [
      "You can cancel up to midnight (UK time), the night before departure and get a refund in full.",
      "Duration valid from when you first hop-on the bus. Unlimited usage within your chosen timeframe. Does not include London by Night tour.",
      "During summer months this tour will operate mainly in daylight.",
      "You cannot hop on and hop off on this tour.",
      "Our vehicles are modern, comfortable, and kept to the highest standards of cleanliness, including a deep clean every day.",
    ],
    Description: `As the dark settles over the city, much of the traffic clears and all of London’s bright lights come on. With this 90-minute Open Top Bus Tour, you’ll discover London from a mesmerisingly unique perspective.Drive past the illuminated clock tower of the Houses of Parliament, better known as Big Ben. Watch life along the River Thames as night starts to fall and see the vibrant Central London hub Piccadilly Circus with its famous wall of adverts illuminating the area. The Tower of London is a sight to behold at night, as its lights show off the brilliance of its hundreds of years old architecture.Your knowledgeable English-speaking tour guide will tell you about the history of London and explain many of those must-know facts about the famous landmarks of England’s capital city. As this is a London by night tour, you’ll hear some of the darker secrets of London too, including the tale of the infamous Sweeny Todd. This tour will give you all the information you need to get to know this fantastic city as it comes alive after dark.An audio guide is also available in English, German, French, Spanish, Italian, Chinese, Russian, Brazilian Portuguese, Polish, Hindi, Japanese and Arabic. The tour is suitable for all ages, and we recommend that if you’re taking the tour in the cooler months, you wear a coat onboard to keep warm.Click here to view the route map Departure/End Points You can choose to start and finish your tour at either London Eye, Belvedere Road, Tourist bus stop, London SE1 7NA. Or Green Park, Green Park Station, Piccadilly, Tourist Bus Stop, London W1J 9DZ. For London Eye, look out for the Jubilee Park and Garden on Belvedere Road, which is in front of the London Eye. For Green Park, if arriving by London Underground, take the Piccadilly Southside station exit and look out for the blue bus. Please see the map on the Schedule tab for more info.`,
    image: image4,
  },
  {
    id: 5,
    price: 3.9,
    oldPrice: 39,
    title: "Jack The Ripper Walking Tour",
    subtitle: "",
    duration: "Approx. 1.5 hours",
    Highlights: [
      "Travel back to the dark and dismal days of the Victorian era when Jack the Ripper roamed the streets",
      "A Spooky Walking Tour about the most famous serial killer in the world",
      "Explore the History Behind the Mysterious Jack the Ripper Murders",
      "Learn about the murder sites, victims and suspects from a professional guide",
    ],
    WhatsIncluded: ["Guided walking tour", "Professional guide"],
    WhatsExcluded: [
      "Gratuities",
      "Food and beverages",
      "Admission to any of the attractions",
    ],
    PleaseNote: [
      "Under 16s are able to attend this tour at their parents discretion.",
    ],
    Description: `The History Travel back in time to Victorian London when Jack the Ripper roamed the streets of the capital. But who was he? In the early hours of 31st August 1888, a man was walking to work down a dark lane in Whitechapel when he found a shapeless bundle lying on the ground. He went to investigate and found Mary Ann Nichols, an East End prostitute murdered in the most gruesome way. This was the first of many killings, sparking one of the most famous man hunts in the world. Ripperologists and amateur sleuths are still trying to work out the true identity of the man they called Jack the Ripper! The Tour During this walking tour, you will follow the shadowy trail left by Jack the Ripper through East London’s Whitechapel in the Victorian era, coming across the places where the grisly murders took place. Start your spine-tingling tour outside Tower Hill London Underground Station, where you will be greeted by your guide. You will then venture to Aldgate High Street and Mitre Square where both Elizabeth Stride and Catherine Eddowes were murdered.The next stop is Goulston Street, where arguably the most vital clue to solving the case of Jack the Ripper was found! Ramble down Commercial Street before arriving at notorious Hanbury Street, where the body of a horrifically mutilated Annie Chapman was discovered. Play detective during this marvellously morbid walking tour and see some famous London sights too! Who was Jack the Ripper? Discover the victims, suspects and story behind the unidentified killer on this ominous and entertaining walking tour.The tour is approximately 90 minutes long and will end a 2 minute walk from Liverpool Street Station.`,
    image: image5,
  },
  {
    id: 7,
    price: 2.9,
    oldPrice: 89,
    title: "Royal London Walking Tour",
    subtitle: "",
    duration: "Approx. 1.5 hours",
    Highlights: [
      "Royal Walking Tour through London",
      "Follow in the footsteps of Britain’s Royals",
      "See the Changing of the Guards outside Buckingham Palace (when available)",
      "Visit Queen Elizabeth II’s preferred off licence & Prince Philip’s barber",
      "See the Crown Estate and marvel at the Horse Guards",
    ],
    WhatsIncluded: [
      "Walking Tour",
      "Professional Guide",
      "Entry to Buckingham Palace (if selected)",
    ],
    WhatsExcluded: [
      "Gratuities",
      "Food or beverages",
      "Admission to Westminster Abbey or any other attractions",
    ],
    PleaseNote: [
      "The Guard Change may not be operational in bad weather conditions. On these occasions, we will visit the Horse Guards for a photo stop instead.",
      "Changing of the Guard days can get very busy, and people with large luggage, prams and strollers may find it difficult to navigate the area.",
    ],
    Description: `The Royal Walk Enjoy a wonderful 90-minute walking tour through the heart of London led by an expert guide. Visit several spectacular Royal sites and learn fascinating facts and information about the British Royal family.During this walking tour, discover the magnificent St James’ Palace which was commissioned by the notorious Henry VIII and is now the London residence of Princesses Anne. You’ll of course also visit Buckingham Palace and watch the Changing of the Guard ceremony (when available). We know the perfect place to stand so you get a fabulous video or photo opportunity as they pass by! As you walk by The Mall, you’ll see Clarence House, where King Charles and Queen Camilla live when in London. With any luck you may see them leaving or arriving in their motorcade! Follow this with a walk-through of St James’s, one of the most historic areas of central London, taking in the city’s oldest wine shop, hat shop (from 1676!) and Prince Philip’s barbers, among other sights. See the secret courtyard where some of the last sword duels in London took place, and hear about the many mistresses of King Charles II. There is so much to see on this entertaining stroll through the heart of this historic district, finishing at Horse Guards - the royal parade ground where each year the monarch’s official birthday is celebrated in a stunning military parade called Trooping the Colour.Buckingham Palace Entry Complete your royal day out with entry to the magnificent Buckingham Palace. This iconic household offers 19 State Rooms and spectacular paintings from the Royal Collection by artists such as Rembrandt and Rubens. Wander through the Throne Room and learn about the marvellous balls that have taken place in the reign of Queen Victoria or why not visit the Ballroom, the largest of the State Rooms and used for official purposes such as State Banquets.Westminster Abbey Entry Visit one of London's most iconic buildings, Westminster Abbey. Inside is the famous Coronation Chair, which has been the seat for the crowning of every monarch since 1308, as well as Poets' Corner, a literary corner dedicated to poets and writers such as Shakespeare and Charles Dickens. It is also the burial site of UK monarchs and eight former Prime Ministers. An included multimedia guide will provide interesting facts about the Abbey as you journey through it. `,
    image: image1,
  },
];
