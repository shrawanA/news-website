/**
 * NewsHub - News Aggregation Website
 * Main JavaScript Application
 */

// ========================================
// DEMO DATA (56 articles with REAL URLs and RELIABLE images)
// ========================================

const DEMO_ARTICLES = [
    // TECHNOLOGY (8 articles)
    {
        title: "SpaceX Successfully Launches New Starship Prototype",
        description: "In a historic achievement for space exploration, SpaceX has successfully launched and landed its latest Starship prototype, marking a significant milestone in the company's mission to make humanity multi-planetary.",
        url: "https://www.spacex.com/updates/",
        urlToImage: "https://picsum.photos/seed/spacex1/800/600",
        publishedAt: "2026-06-12T10:30:00Z",
        source: { name: "Tech Daily" },
        category: "technology"
    },
    {
        title: "Quantum Computing Reaches New Milestone",
        description: "Scientists have achieved quantum supremacy with a new processor that solves complex problems in seconds that would take traditional supercomputers thousands of years.",
        url: "https://www.ibm.com/quantum-computing",
        urlToImage: "https://picsum.photos/seed/quantum1/800/600",
        publishedAt: "2026-06-11T09:15:00Z",
        source: { name: "Science Daily" },
        category: "technology"
    },
    {
        title: "Apple Unveils Revolutionary Mixed Reality Headset",
        description: "Apple has announced its most advanced mixed reality headset yet, featuring retina-level displays, eye-tracking, and hand gesture controls that redefine immersive computing.",
        url: "https://www.apple.com/newsroom/",
        urlToImage: "https://picsum.photos/seed/applevr1/800/600",
        publishedAt: "2026-06-10T14:00:00Z",
        source: { name: "Tech Insider" },
        category: "technology"
    },
    {
        title: "Electric Vehicle Sales Surpass Traditional Cars",
        description: "For the first time in history, electric vehicle sales have overtaken traditional gasoline-powered cars in major markets, signaling a permanent shift in the automotive industry.",
        url: "https://www.tesla.com/news",
        urlToImage: "https://picsum.photos/seed/ev1/800/600",
        publishedAt: "2026-06-09T07:45:00Z",
        source: { name: "Auto News" },
        category: "technology"
    },
    {
        title: "Robotic Surgery Performs First Fully Autonomous Operation",
        description: "In a medical first, a robotic surgical system has successfully completed a complex operation without any human intervention, supervised only by AI monitoring systems.",
        url: "https://www.nature.com/articles/",
        urlToImage: "https://picsum.photos/seed/robot1/800/600",
        publishedAt: "2026-06-08T13:00:00Z",
        source: { name: "Medical Innovations" },
        category: "technology"
    },
    {
        title: "New AI Chip Uses 90% Less Energy Than Current Models",
        description: "Researchers have developed a neuromorphic computing chip that mimics the human brain, using a fraction of the energy while delivering superior performance for AI tasks.",
        url: "https://www.nvidia.com/en-us/about-nvidia/",
        urlToImage: "https://picsum.photos/seed/aichip1/800/600",
        publishedAt: "2026-06-07T11:00:00Z",
        source: { name: "Chip Weekly" },
        category: "technology"
    },
    {
        title: "6G Network Trials Show 100x Speed Improvement",
        description: "Early trials of sixth-generation wireless technology have demonstrated data transfer speeds 100 times faster than current 5G networks, with near-zero latency.",
        url: "https://www.ericsson.com/en/news",
        urlToImage: "https://picsum.photos/seed/6g1/800/600",
        publishedAt: "2026-06-06T16:00:00Z",
        source: { name: "Telecom Today" },
        category: "technology"
    },
    {
        title: "Smart Home Devices Now Control Entire Neighborhoods",
        description: "New mesh networking technology allows smart home devices to coordinate across entire neighborhoods, optimizing energy use and security at a community level.",
        url: "https://www.google.com/nest/",
        urlToImage: "https://picsum.photos/seed/smarthome1/800/600",
        publishedAt: "2026-06-05T09:00:00Z",
        source: { name: "Smart Living" },
        category: "technology"
    },

    // WORLD (8 articles)
    {
        title: "Global Climate Summit Reaches Historic Agreement",
        description: "World leaders have reached a groundbreaking agreement at the annual climate summit, committing to accelerated carbon reduction targets and increased funding for renewable energy projects worldwide.",
        url: "https://unfccc.int/news",
        urlToImage: "https://picsum.photos/seed/climate1/800/600",
        publishedAt: "2026-06-12T08:00:00Z",
        source: { name: "World News" },
        category: "world"
    },
    {
        title: "Major Infrastructure Project Transforms City",
        description: "A decade-long infrastructure initiative has been completed, featuring smart transportation systems, green buildings, and advanced public spaces that set new standards for urban development.",
        url: "https://www.worldbank.org/en/news",
        urlToImage: "https://picsum.photos/seed/city1/800/600",
        publishedAt: "2026-06-11T11:30:00Z",
        source: { name: "Urban Planning" },
        category: "world"
    },
    {
        title: "UN Peacekeeping Mission Achieves Major Breakthrough",
        description: "After years of diplomatic efforts, a UN peacekeeping mission has successfully brokered a ceasefire agreement between conflicting factions, bringing hope to the war-torn region.",
        url: "https://www.un.org/en/our-work",
        urlToImage: "https://picsum.photos/seed/peace1/800/600",
        publishedAt: "2026-06-10T09:00:00Z",
        source: { name: "Global Affairs" },
        category: "world"
    },
    {
        title: "Ancient City Discovered Beneath Amazon Rainforest",
        description: "Archaeologists using LiDAR technology have discovered an ancient city hidden beneath the Amazon rainforest, challenging previous assumptions about pre-Columbian civilizations.",
        url: "https://www.nationalgeographic.com/news/",
        urlToImage: "https://picsum.photos/seed/amazon1/800/600",
        publishedAt: "2026-06-09T10:00:00Z",
        source: { name: "Archaeology Today" },
        category: "world"
    },
    {
        title: "New Transcontinental Railway Connects Three Continents",
        description: "The world's longest railway line has been completed, connecting Europe, Asia, and Africa with high-speed rail service that reduces travel time between continents to under 24 hours.",
        url: "https://www.bbc.com/news/world",
        urlToImage: "https://picsum.photos/seed/railway1/800/600",
        publishedAt: "2026-06-08T14:00:00Z",
        source: { name: "Transport Weekly" },
        category: "world"
    },
    {
        title: "International Space Station Welcomes First Tourist Hotel Module",
        description: "A new commercial module attached to the ISS has opened its doors to space tourists, offering luxury accommodations with panoramic views of Earth for $50,000 per night.",
        url: "https://www.nasa.gov/news/",
        urlToImage: "https://picsum.photos/seed/spacehotel1/800/600",
        publishedAt: "2026-06-07T11:00:00Z",
        source: { name: "Space Tourism" },
        category: "world"
    },
    {
        title: "Global Water Crisis Averted by New Desalination Technology",
        description: "A breakthrough in solar-powered desalination has made ocean water conversion affordable for developing nations, potentially solving the global freshwater crisis within a decade.",
        url: "https://www.who.int/news-room",
        urlToImage: "https://picsum.photos/seed/water1/800/600",
        publishedAt: "2026-06-06T08:00:00Z",
        source: { name: "Water Weekly" },
        category: "world"
    },
    {
        title: "World's Largest Vertical Farm Opens in Singapore",
        description: "A 30-story vertical farm capable of producing enough vegetables to feed 100,000 people annually has opened in Singapore, showcasing the future of urban agriculture.",
        url: "https://www.fao.org/news/",
        urlToImage: "https://picsum.photos/seed/farm1/800/600",
        publishedAt: "2026-06-05T13:00:00Z",
        source: { name: "Future Farming" },
        category: "world"
    },

    // BUSINESS (8 articles)
    {
        title: "Stock Markets Hit Record Highs Amid Economic Recovery",
        description: "Major stock indices around the world have reached unprecedented levels as global economic indicators show strong signs of recovery, with technology and healthcare sectors leading the gains.",
        url: "https://www.wsj.com/news/markets",
        urlToImage: "https://picsum.photos/seed/stocks1/800/600",
        publishedAt: "2026-06-12T16:45:00Z",
        source: { name: "Financial Times" },
        category: "business"
    },
    {
        title: "Tech Giants Announce Major Partnership",
        description: "Leading technology companies have formed an unprecedented alliance to develop open standards for artificial intelligence, promising to make AI more accessible and safer for everyone.",
        url: "https://www.reuters.com/business/",
        urlToImage: "https://picsum.photos/seed/partnership1/800/600",
        publishedAt: "2026-06-11T15:00:00Z",
        source: { name: "Tech Insider" },
        category: "business"
    },
    {
        title: "Global Coffee Prices Reach 10-Year High",
        description: "Climate change and supply chain disruptions have driven coffee prices to their highest level in a decade, affecting consumers and businesses worldwide.",
        url: "https://www.bloomberg.com/news/markets",
        urlToImage: "https://picsum.photos/seed/coffee1/800/600",
        publishedAt: "2026-06-10T08:00:00Z",
        source: { name: "Business Daily" },
        category: "business"
    },
    {
        title: "Cryptocurrency Market Stabilizes After Volatile Period",
        description: "Major cryptocurrencies have stabilized following a period of extreme volatility, with institutional investors returning to the market and new regulatory frameworks providing clarity.",
        url: "https://www.coindesk.com/news/",
        urlToImage: "https://picsum.photos/seed/crypto1/800/600",
        publishedAt: "2026-06-09T15:00:00Z",
        source: { name: "Crypto Daily" },
        category: "business"
    },
    {
        title: "Retail Giant Opens 1000th Automated Store",
        description: "The world's largest retailer has opened its 1000th fully automated store, featuring AI checkout, robotic inventory management, and drone delivery services.",
        url: "https://www.amazon.com/news/",
        urlToImage: "https://picsum.photos/seed/store1/800/600",
        publishedAt: "2026-06-08T10:00:00Z",
        source: { name: "Retail News" },
        category: "business"
    },
    {
        title: "Green Bonds Market Surpasses $5 Trillion",
        description: "The market for green bonds has crossed the $5 trillion milestone as investors increasingly prioritize environmental, social, and governance factors in their portfolios.",
        url: "https://www.ft.com/green-bonds",
        urlToImage: "https://picsum.photos/seed/green1/800/600",
        publishedAt: "2026-06-07T12:00:00Z",
        source: { name: "Finance Weekly" },
        category: "business"
    },
    {
        title: "Remote Work Revolution Reshapes Commercial Real Estate",
        description: "The permanent shift to remote work has transformed commercial real estate, with office buildings being converted into mixed-use spaces, residential units, and community centers.",
        url: "https://www.cnbc.com/real-estate/",
        urlToImage: "https://picsum.photos/seed/realestate1/800/600",
        publishedAt: "2026-06-06T09:00:00Z",
        source: { name: "Property Daily" },
        category: "business"
    },
    {
        title: "Startup Valuation Reaches $100B in Record Time",
        description: "A three-year-old AI startup has achieved a $100 billion valuation in the fastest rise to decacorn status in history, surpassing all previous records.",
        url: "https://techcrunch.com/startups/",
        urlToImage: "https://picsum.photos/seed/startup1/800/600",
        publishedAt: "2026-06-05T14:00:00Z",
        source: { name: "Venture Beat" },
        category: "business"
    },

    // SCIENCE (8 articles)
    {
        title: "Revolutionary AI Breakthrough in Medical Diagnosis",
        description: "Researchers have developed a new artificial intelligence system capable of detecting early-stage cancer with 99% accuracy, potentially saving millions of lives through early intervention.",
        url: "https://www.nature.com/articles/",
        urlToImage: "https://picsum.photos/seed/aimedical1/800/600",
        publishedAt: "2026-06-12T14:20:00Z",
        source: { name: "Medical Today" },
        category: "science"
    },
    {
        title: "Breakthrough in Renewable Energy Storage",
        description: "Engineers have developed a new battery technology that can store renewable energy for months at a fraction of current costs, addressing one of the biggest challenges in clean energy adoption.",
        url: "https://www.sciencedirect.com/news/",
        urlToImage: "https://picsum.photos/seed/energy1/800/600",
        publishedAt: "2026-06-11T07:45:00Z",
        source: { name: "Green Energy" },
        category: "science"
    },
    {
        title: "New Species Discovered in Deep Ocean Expedition",
        description: "Marine biologists have identified over 100 new species during a deep-sea expedition, including bioluminescent creatures and ancient coral formations previously unknown to science.",
        url: "https://www.nationalgeographic.com/news/",
        urlToImage: "https://picsum.photos/seed/ocean1/800/600",
        publishedAt: "2026-06-10T10:00:00Z",
        source: { name: "Nature Journal" },
        category: "science"
    },
    {
        title: "Breakthrough Fusion Experiment Achieves Net Energy Gain",
        description: "Scientists at a leading research facility have achieved a sustained net energy gain in a fusion reaction, bringing commercial fusion power one step closer to reality.",
        url: "https://www.energy.gov/news/",
        urlToImage: "https://picsum.photos/seed/fusion1/800/600",
        publishedAt: "2026-06-09T11:00:00Z",
        source: { name: "Energy Future" },
        category: "science"
    },
    {
        title: "CRISPR Gene Editing Successfully Treats Inherited Blindness",
        description: "In a world-first clinical trial, CRISPR gene editing has restored vision in patients with inherited retinal diseases, offering hope for millions with genetic eye conditions.",
        url: "https://www.nejm.org/news/",
        urlToImage: "https://picsum.photos/seed/crispr1/800/600",
        publishedAt: "2026-06-08T13:00:00Z",
        source: { name: "Genetics Today" },
        category: "science"
    },
    {
        title: "Mars Sample Return Mission Successfully Completes",
        description: "NASA's Perseverance rover has completed its sample depot, leaving a collection of rock and soil samples on Mars for future retrieval and return to Earth.",
        url: "https://www.nasa.gov/news/",
        urlToImage: "https://picsum.photos/seed/mars1/800/600",
        publishedAt: "2026-06-07T09:00:00Z",
        source: { name: "Space Science" },
        category: "science"
    },
    {
        title: "Lab-Grown Meat Reaches Price Parity with Traditional Beef",
        description: "Cultivated meat products have achieved price parity with conventional beef for the first time, marking a tipping point for the alternative protein industry.",
        url: "https://www.cell.com/news/",
        urlToImage: "https://picsum.photos/seed/labmeat1/800/600",
        publishedAt: "2026-06-06T15:00:00Z",
        source: { name: "Food Science" },
        category: "science"
    },
    {
        title: "Scientists Map Entire Human Brain Neural Connections",
        description: "A consortium of neuroscientists has completed the first comprehensive map of all neural connections in the human brain, revealing insights into consciousness and memory.",
        url: "https://www.science.org/news/",
        urlToImage: "https://picsum.photos/seed/brain1/800/600",
        publishedAt: "2026-06-05T11:00:00Z",
        source: { name: "Neuroscience" },
        category: "science"
    },

    // SPORTS (8 articles) - ALL WITH WORKING IMAGES
    {
        title: "Championship Finals: Underdog Team Claims Historic Victory",
        description: "In one of the most stunning upsets in sports history, the underdog team defeated the reigning champions in a nail-biting final match that will be remembered for generations.",
        url: "https://www.espn.com/soccer/",
        urlToImage: "https://picsum.photos/seed/soccer1/800/600",
        publishedAt: "2026-06-12T20:00:00Z",
        source: { name: "Sports Central" },
        category: "sports"
    },
    {
        title: "Olympic Committee Announces New Sports for 2028",
        description: "The International Olympic Committee has officially approved five new sports for the 2028 Los Angeles Games, including breakdancing, drone racing, and virtual reality competitions.",
        url: "https://www.olympic.org/news/",
        urlToImage: "https://picsum.photos/seed/olympics1/800/600",
        publishedAt: "2026-06-11T16:00:00Z",
        source: { name: "Olympic News" },
        category: "sports"
    },
    {
        title: "World Cup 2026: Host Cities Reveal Stadium Innovations",
        description: "The 2026 FIFA World Cup host cities have unveiled their stadium designs, featuring retractable roofs, climate control, and integrated public transportation hubs.",
        url: "https://www.fifa.com/news/",
        urlToImage: "https://picsum.photos/seed/stadium1/800/600",
        publishedAt: "2026-06-10T14:00:00Z",
        source: { name: "Football Weekly" },
        category: "sports"
    },
    {
        title: "Tennis Star Wins Grand Slam at Age 37",
        description: "Defying age expectations, a veteran tennis player has captured their 25th Grand Slam title, becoming the oldest player to win a major championship in the Open Era.",
        url: "https://www.atptour.com/en/news/",
        urlToImage: "https://picsum.photos/seed/tennis1/800/600",
        publishedAt: "2026-06-09T12:00:00Z",
        source: { name: "Tennis Pro" },
        category: "sports"
    },
    {
        title: "Esports Tournament Draws Record 50 Million Viewers",
        description: "The finals of the International Esports Championship attracted a record-breaking 50 million concurrent viewers, surpassing traditional sports viewership for the first time.",
        url: "https://www.theguardian.com/sport/",
        urlToImage: "https://picsum.photos/seed/esports1/800/600",
        publishedAt: "2026-06-08T18:00:00Z",
        source: { name: "Esports Daily" },
        category: "sports"
    },
    {
        title: "NBA Introduces Four-Point Line and Robot Referees",
        description: "The NBA has approved radical rule changes for the 2026-27 season, including a four-point line and AI-powered referee assistance systems to improve call accuracy.",
        url: "https://www.nba.com/news/",
        urlToImage: "https://picsum.photos/seed/basketball1/800/600",
        publishedAt: "2026-06-07T10:00:00Z",
        source: { name: "Basketball News" },
        category: "sports"
    },
    {
        title: "Marathon Runner Breaks 2-Hour Barrier",
        description: "A Kenyan runner has officially broken the 2-hour marathon barrier in a sanctioned race, achieving a time of 1:59:42 and redefining the limits of human endurance.",
        url: "https://www.worldathletics.org/news/",
        urlToImage: "https://picsum.photos/seed/marathon1/800/600",
        publishedAt: "2026-06-06T08:00:00Z",
        source: { name: "Running World" },
        category: "sports"
    },
    {
        title: "Formula 1 Announces First Zero-Emission Race Season",
        description: "Formula 1 has announced that the 2027 season will be fully carbon-neutral, with all cars running on synthetic fuels and races powered by renewable energy sources.",
        url: "https://www.formula1.com/en/latest/",
        urlToImage: "https://picsum.photos/seed/f1racing1/800/600",
        publishedAt: "2026-06-05T16:00:00Z",
        source: { name: "F1 Racing" },
        category: "sports"
    },

    // ENTERTAINMENT (8 articles)
    {
        title: "New Film Breaks Box Office Records Worldwide",
        description: "The highly anticipated blockbuster has shattered opening weekend records across the globe, earning over $500 million in its first three days and receiving critical acclaim for its innovative storytelling.",
        url: "https://www.hollywoodreporter.com/news/",
        urlToImage: "https://picsum.photos/seed/movie1/800/600",
        publishedAt: "2026-06-12T12:00:00Z",
        source: { name: "Entertainment Weekly" },
        category: "entertainment"
    },
    {
        title: "Streaming Wars: New Platform Gains 50M Users in First Month",
        description: "A new streaming service has shattered launch records by gaining 50 million subscribers in its first month, challenging established giants with its innovative content model.",
        url: "https://www.netflix.com/news/",
        urlToImage: "https://picsum.photos/seed/streaming1/800/600",
        publishedAt: "2026-06-11T11:00:00Z",
        source: { name: "Media Weekly" },
        category: "entertainment"
    },
    {
        title: "Virtual Concerts Now Generate More Revenue Than Live Shows",
        description: "Digital concert experiences using VR and AR technology have surpassed traditional live performances in revenue, with artists reaching global audiences from their home studios.",
        url: "https://www.billboard.com/news/",
        urlToImage: "https://picsum.photos/seed/concert1/800/600",
        publishedAt: "2026-06-10T15:00:00Z",
        source: { name: "Music Biz" },
        category: "entertainment"
    },
    {
        title: "AI-Generated Movie Wins Major Film Festival Award",
        description: "A feature film created entirely by artificial intelligence has won the top prize at a prestigious international film festival, sparking debate about the future of cinema.",
        url: "https://variety.com/news/",
        urlToImage: "https://picsum.photos/seed/aimovie1/800/600",
        publishedAt: "2026-06-09T13:00:00Z",
        source: { name: "Film Daily" },
        category: "entertainment"
    },
    {
        title: "Gaming Industry Revenue Surpasses Movies and Music Combined",
        description: "The global video game industry has reached a new milestone, generating more revenue than the film and music industries combined for the first time in history.",
        url: "https://www.ign.com/news/",
        urlToImage: "https://picsum.photos/seed/gaming1/800/600",
        publishedAt: "2026-06-08T10:00:00Z",
        source: { name: "Game Industry" },
        category: "entertainment"
    },
    {
        title: "Broadway Reopens with Immersive Theater Experience",
        description: "Broadway theaters have reopened with groundbreaking immersive productions that use holographic technology to place audiences inside the story.",
        url: "https://www.playbill.com/news/",
        urlToImage: "https://picsum.photos/seed/broadway1/800/600",
        publishedAt: "2026-06-07T17:00:00Z",
        source: { name: "Theater News" },
        category: "entertainment"
    },
    {
        title: "Celebrity NFT Collection Sells for $50 Million",
        description: "A digital art collection created by a major celebrity has sold for $50 million at auction, setting a new record for NFT sales and validating digital art as a legitimate investment.",
        url: "https://www.rollingstone.com/music/",
        urlToImage: "https://picsum.photos/seed/nft1/800/600",
        publishedAt: "2026-06-06T09:00:00Z",
        source: { name: "Art Market" },
        category: "entertainment"
    },
    {
        title: "New Streaming Series Breaks Viewing Records",
        description: "A new fantasy series has become the most-watched show in streaming history, with 200 million households tuning in for the season finale.",
        url: "https://deadline.com/news/",
        urlToImage: "https://picsum.photos/seed/series1/800/600",
        publishedAt: "2026-06-05T14:00:00Z",
        source: { name: "TV Guide" },
        category: "entertainment"
    },

    // GENERAL (8 articles)
    {
        title: "Global Education Reform: AI Tutors in Every Classroom",
        description: "A new initiative aims to provide every student with a personalized AI tutor, adapting to individual learning styles and pacing to improve educational outcomes worldwide.",
        url: "https://www.unesco.org/en/news",
        urlToImage: "https://picsum.photos/seed/education1/800/600",
        publishedAt: "2026-06-12T09:00:00Z",
        source: { name: "Education Today" },
        category: "general"
    },
    {
        title: "New Universal Healthcare System Launches in Major Economy",
        description: "One of the world's largest economies has launched a comprehensive universal healthcare system, providing free medical care to all citizens regardless of income.",
        url: "https://www.who.int/news-room",
        urlToImage: "https://picsum.photos/seed/healthcare1/800/600",
        publishedAt: "2026-06-11T11:00:00Z",
        source: { name: "Health Weekly" },
        category: "general"
    },
    {
        title: "Public Transportation Goes Completely Autonomous",
        description: "A major metropolitan area has transitioned its entire public transportation network to autonomous vehicles, becoming the first city with fully driverless buses, trains, and taxis.",
        url: "https://www.theguardian.com/news/",
        urlToImage: "https://picsum.photos/seed/transport1/800/600",
        publishedAt: "2026-06-10T08:00:00Z",
        source: { name: "Transport News" },
        category: "general"
    },
    {
        title: "Global Literacy Rate Reaches 95% for First Time",
        description: "UNESCO has announced that the global literacy rate has reached 95%, marking a historic milestone in education access and digital learning initiatives.",
        url: "https://www.unesco.org/en/news",
        urlToImage: "https://picsum.photos/seed/literacy1/800/600",
        publishedAt: "2026-06-09T14:00:00Z",
        source: { name: "UNESCO Report" },
        category: "general"
    },
    {
        title: "Ocean Cleanup Project Removes 100,000 Tons of Plastic",
        description: "The largest ocean cleanup initiative has successfully removed 100,000 tons of plastic waste from the Pacific Ocean, restoring marine ecosystems and protecting wildlife.",
        url: "https://www.nationalgeographic.com/news/",
        urlToImage: "https://picsum.photos/seed/ocean2/800/600",
        publishedAt: "2026-06-08T10:00:00Z",
        source: { name: "Environment Daily" },
        category: "general"
    },
    {
        title: "New Law Guarantees Four-Day Work Week Nationwide",
        description: "A pioneering nation has passed legislation mandating a four-day work week without pay reduction, citing productivity gains and improved mental health outcomes.",
        url: "https://www.bbc.com/news/world",
        urlToImage: "https://picsum.photos/seed/work1/800/600",
        publishedAt: "2026-06-07T12:00:00Z",
        source: { name: "Labor News" },
        category: "general"
    },
    {
        title: "World's First Carbon-Negative City Opens",
        description: "A new city designed to absorb more carbon dioxide than it produces has officially opened, featuring vertical forests, algae bioreactors, and renewable energy systems.",
        url: "https://www.worldbank.org/en/news",
        urlToImage: "https://picsum.photos/seed/carboncity1/800/600",
        publishedAt: "2026-06-06T08:00:00Z",
        source: { name: "Green City" },
        category: "general"
    },
    {
        title: "Global Internet Access Reaches Remote Villages",
        description: "A satellite constellation has provided high-speed internet access to the last remaining remote villages on Earth, connecting the entire global population for the first time.",
        url: "https://www.spacex.com/starlink/",
        urlToImage: "https://picsum.photos/seed/internet1/800/600",
        publishedAt: "2026-06-05T15:00:00Z",
        source: { name: "Connectivity" },
        category: "general"
    }
];

// ========================================
// API CONFIGURATION
// ========================================

const API_KEY = 'YOUR_API_KEY_HERE'; // Get from newsapi.org
const BASE_URL = 'https://newsapi.org/v2';

// ========================================
// APPLICATION STATE
// ========================================

const state = {
    articles: [],
    allArticles: [], // Store all articles for pagination
    bookmarks: JSON.parse(localStorage.getItem('newsHubBookmarks')) || [],
    currentCategory: 'general',
    currentPage: 1,
    articlesPerPage: 9, // Show 9 articles per page (1 hero + 8 grid)
    isLoading: false,
    searchQuery: '',
    viewMode: 'grid',
    theme: localStorage.getItem('newsHubTheme') || 'light',
    useApi: false // Track if we're using real API or demo data
};

// ========================================
// DOM ELEMENTS
// ========================================

const elements = {
    navLinks: document.getElementById('navLinks'),
    menuToggle: document.getElementById('menuToggle'),
    searchInput: document.getElementById('searchInput'),
    searchBtn: document.getElementById('searchBtn'),
    themeToggle: document.getElementById('themeToggle'),
    bookmarksBtn: document.getElementById('bookmarksBtn'),
    bookmarkCount: document.getElementById('bookmarkCount'),
    bookmarksSidebar: document.getElementById('bookmarksSidebar'),
    closeSidebar: document.getElementById('closeSidebar'),
    bookmarksList: document.getElementById('bookmarksList'),
    overlay: document.getElementById('overlay'),
    heroSection: document.getElementById('heroSection'),
    newsGrid: document.getElementById('newsGrid'),
    categoryTitle: document.getElementById('categoryTitle'),
    loadMoreBtn: document.getElementById('loadMoreBtn'),
    sortSelect: document.getElementById('sortSelect'),
    viewBtns: document.querySelectorAll('.view-btn'),
    tickerContent: document.getElementById('tickerContent'),
    articleModal: document.getElementById('articleModal'),
    modalClose: document.getElementById('modalClose'),
    modalBody: document.getElementById('modalBody'),
    toastContainer: document.getElementById('toastContainer')
};

// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Format date to readable string
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diff = (now - date) / 1000; // seconds

    if (diff < 60) return 'Just now';
    if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
    if (diff < 604800) return `${Math.floor(diff / 86400)} days ago`;

    return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
    });
}

/**
 * Calculate reading time (average 200 words per minute)
 */
function getReadingTime(text) {
    const words = text ? text.split(' ').length : 0;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
}

/**
 * Get category color
 */
function getCategoryColor(category) {
    const colors = {
        technology: '#3b82f6',
        world: '#10b981',
        business: '#f59e0b',
        science: '#8b5cf6',
        sports: '#ef4444',
        entertainment: '#ec4899',
        general: '#6b7280'
    };
    return colors[category] || colors.general;
}

/**
 * Show toast notification
 */
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;

    elements.toastContainer.appendChild(toast);

    // Remove after animation
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// ========================================
// CORE FUNCTIONS
// ========================================

/**
 * Initialize the application
 */
function init() {
    // Apply saved theme
    applyTheme(state.theme);

    // Load initial data
    loadArticles();

    // Setup event listeners
    setupEventListeners();

    // Update bookmarks UI
    updateBookmarksUI();
}

/**
 * Apply theme (light/dark)
 */
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const icon = elements.themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

/**
 * Toggle theme
 */
function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('newsHubTheme', state.theme);
    applyTheme(state.theme);
}

/**
 * Show loading state
 */
function showLoading() {
    elements.heroSection.innerHTML = '<div class="hero-loading"><div class="spinner"></div><p>Loading latest news...</p></div>';
    elements.newsGrid.innerHTML = '<div class="loading-state"><div class="spinner"></div><p>Loading articles...</p></div>';
}

/**
 * Load articles from NewsAPI (with demo fallback)
 */
async function loadArticles() {
    state.isLoading = true;
    state.currentPage = 1;
    showLoading();

    try {
        // Check if API key is configured
        if (API_KEY === 'YOUR_API_KEY_HERE' || !API_KEY) {
            throw new Error('API key not configured');
        }

        // Use /everything endpoint instead of /top-headlines for better pagination support
        const url = `${BASE_URL}/everything?q=${state.currentCategory === 'general' ? 'news' : state.currentCategory}&language=en&sortBy=publishedAt&apiKey=${API_KEY}&pageSize=100`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.status === 'error') {
            throw new Error(data.message || 'API error');
        }

        // Map API articles to our format
        const apiArticles = (data.articles || []).map(article => ({
            ...article,
            category: state.currentCategory === 'general' ? 'general' : state.currentCategory,
            // Ensure all articles have required fields
            title: article.title || 'Untitled',
            description: article.description || 'No description available.',
            urlToImage: article.urlToImage || 'https://placehold.co/800x600?text=NewsHub',
            source: article.source || { name: 'Unknown' },
            publishedAt: article.publishedAt || new Date().toISOString()
        }));

        if (apiArticles.length === 0) {
            throw new Error('No articles returned from API');
        }

        state.allArticles = apiArticles;
        state.useApi = true;
        state.isLoading = false;

        // Show first page
        showPage(1);

        showToast(`Loaded ${apiArticles.length} articles from NewsAPI!`);

    } catch (error) {
        console.error('Error fetching news:', error);

        // Use demo data as fallback
        let filtered = DEMO_ARTICLES;
        if (state.currentCategory !== 'general') {
            filtered = DEMO_ARTICLES.filter(a => a.category === state.currentCategory);
        }

        if (filtered.length === 0) {
            filtered = DEMO_ARTICLES;
        }

        state.allArticles = filtered;
        state.useApi = false;
        state.isLoading = false;

        // Show first page
        showPage(1);

        // Only show error toast if API key was actually set but failed
        if (API_KEY !== 'YOUR_API_KEY_HERE' && API_KEY) {
            showToast('Failed to load from API. Using demo data.', 'error');
        }
    }

    // Start ticker after loading
    startTicker();
}

/**
 * Show a specific page of articles
 */
function showPage(page) {
    state.currentPage = page;

    const endIndex = page * state.articlesPerPage;

    // Get articles for this page (hero + grid)
    state.articles = state.allArticles.slice(0, endIndex);

    renderHero();
    renderNewsGrid();

    // Update load more button visibility
    updateLoadMoreButton();
}

/**
 * Update load more button state
 */
function updateLoadMoreButton() {
    const totalArticles = state.allArticles.length;
    const shownArticles = state.articles.length;

    if (shownArticles >= totalArticles) {
        elements.loadMoreBtn.textContent = 'No More Articles';
        elements.loadMoreBtn.disabled = true;
        elements.loadMoreBtn.style.opacity = '0.5';
    } else {
        elements.loadMoreBtn.textContent = `Load More Articles (${shownArticles}/${totalArticles})`;
        elements.loadMoreBtn.disabled = false;
        elements.loadMoreBtn.style.opacity = '1';
    }
}

/**
 * Load more articles (show next page)
 */
function loadMore() {
    if (state.isLoading) return;

    const totalArticles = state.allArticles.length;
    const shownArticles = state.articles.length;

    if (shownArticles >= totalArticles) {
        showToast('No more articles to load!', 'error');
        return;
    }

    // Show next page
    showPage(state.currentPage + 1);

    showToast(`Showing ${state.articles.length} of ${totalArticles} articles`);
}

/**
 * Render hero section with featured article
 */
function renderHero() {
    if (state.articles.length === 0) {
        elements.heroSection.innerHTML = '<div class="hero-loading"><p>No articles available.</p></div>';
        return;
    }

    const featured = state.articles[0];
    const heroHTML = `
        <div class="hero-article" onclick="openArticle('${featured.url}')">
            <div class="hero-image">
                <img src="${featured.urlToImage}" alt="${featured.title}" onerror="this.src='https://placehold.co/800x600?text=NewsHub'">
                <span class="category-badge">${featured.category || 'general'}</span>
            </div>
            <div class="hero-content">
                <h1>${featured.title}</h1>
                <div class="hero-meta">
                    <span><i class="fas fa-newspaper"></i> ${featured.source?.name || 'Unknown'}</span>
                    <span><i class="fas fa-clock"></i> ${formatDate(featured.publishedAt)}</span>
                    <span><i class="fas fa-book-open"></i> ${getReadingTime(featured.description)}</span>
                </div>
                <p class="hero-excerpt">${featured.description || 'No description available.'}</p>
                <div class="hero-actions">
                    <button class="btn btn-primary" onclick="event.stopPropagation(); openArticle('${featured.url}')">
                        Read Full Story <i class="fas fa-arrow-right"></i>
                    </button>
                    <button class="btn btn-secondary" onclick="event.stopPropagation(); toggleBookmark('${featured.url}')">
                        <i class="fas ${isBookmarked(featured.url) ? 'fa-bookmark' : 'fa-bookmark-o'}"></i> 
                        ${isBookmarked(featured.url) ? 'Saved' : 'Save'}
                    </button>
                </div>
            </div>
        </div>
    `;

    elements.heroSection.innerHTML = heroHTML;
}

/**
 * Render news grid
 */
function renderNewsGrid() {
    // Skip first article (it's in hero)
    const gridArticles = state.articles.slice(1);

    if (gridArticles.length === 0) {
        elements.newsGrid.innerHTML = '<div class="loading-state"><p>No more articles.</p></div>';
        return;
    }

    const gridHTML = gridArticles.map(article => createArticleCard(article)).join('');
    elements.newsGrid.innerHTML = gridHTML;

    // Apply view mode
    if (state.viewMode === 'list') {
        elements.newsGrid.classList.add('list-view');
    } else {
        elements.newsGrid.classList.remove('list-view');
    }
}

/**
 * Create article card HTML
 */
function createArticleCard(article) {
    const isSaved = isBookmarked(article.url);
    const category = article.category || 'general';

    return `
        <article class="article-card" onclick="openArticle('${article.url}')">
            <div class="article-image">
                <img src="${article.urlToImage}" alt="${article.title}" onerror="this.src='https://placehold.co/400x300?text=NewsHub'">
                <span class="category-badge" style="background: ${getCategoryColor(category)}">${category}</span>
                <button class="bookmark-action ${isSaved ? 'active' : ''}" 
                        onclick="event.stopPropagation(); toggleBookmark('${article.url}')"
                        title="${isSaved ? 'Remove bookmark' : 'Add bookmark'}">
                    <i class="fas ${isSaved ? 'fa-bookmark' : 'fa-bookmark-o'}"></i>
                </button>
            </div>
            <div class="article-content">
                <h3>${article.title}</h3>
                <p>${article.description || 'No description available.'}</p>
                <div class="article-footer">
                    <div class="article-meta">
                        <span><i class="fas fa-newspaper"></i> ${article.source?.name || 'Unknown'}</span>
                        <span><i class="fas fa-clock"></i> ${formatDate(article.publishedAt)}</span>
                    </div>
                    <span class="read-more-btn">
                        Read More <i class="fas fa-arrow-right"></i>
                    </span>
                </div>
            </div>
        </article>
    `;
}

/**
 * Open article (in modal for demo, or new tab for real)
 */
function openArticle(url) {
    // Find article in our data
    const article = state.articles.find(a => a.url === url) || 
                   state.allArticles.find(a => a.url === url) ||
                   DEMO_ARTICLES.find(a => a.url === url);

    if (!article) {
        window.open(url, '_blank');
        return;
    }

    const category = article.category || 'general';

    // Show in modal
    const modalHTML = `
        <img class="modal-hero-image" src="${article.urlToImage}" alt="${article.title}" onerror="this.src='https://placehold.co/900x400?text=NewsHub'">
        <div class="modal-content-body">
            <span class="category-badge" style="display: inline-block; margin-bottom: 1rem; background: ${getCategoryColor(category)}; color: white; padding: 0.5rem 1rem; border-radius: 50px; text-transform: uppercase; font-size: 0.8rem; font-weight: 600;">${category}</span>
            <h2>${article.title}</h2>
            <div class="modal-meta">
                <span><i class="fas fa-newspaper"></i> ${article.source?.name || 'Unknown'}</span>
                <span><i class="fas fa-clock"></i> ${formatDate(article.publishedAt)}</span>
                <span><i class="fas fa-book-open"></i> ${getReadingTime(article.description)}</span>
            </div>
            <p class="modal-description">${article.description || 'No description available.'}</p>
            <p class="modal-description">This article is sourced from ${article.source?.name || 'Unknown'}. Click the button below to read the full story on the original website.</p>
            <div class="modal-actions">
                <a href="${article.url}" target="_blank" class="btn btn-primary">
                    Read Full Article <i class="fas fa-external-link-alt"></i>
                </a>
                <button class="btn btn-secondary" onclick="toggleBookmark('${article.url}'); updateModalBookmark('${article.url}')">
                    <i class="fas ${isBookmarked(article.url) ? 'fa-bookmark' : 'fa-bookmark-o'}"></i>
                    ${isBookmarked(article.url) ? 'Saved' : 'Save for Later'}
                </button>
            </div>
        </div>
    `;

    elements.modalBody.innerHTML = modalHTML;
    elements.articleModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

/**
 * Update modal bookmark button
 */
function updateModalBookmark(url) {
    const btn = elements.modalBody.querySelector('.btn-secondary');
    const isSaved = isBookmarked(url);
    btn.innerHTML = `<i class="fas ${isSaved ? 'fa-bookmark' : 'fa-bookmark-o'}"></i> ${isSaved ? 'Saved' : 'Save for Later'}`;
}

/**
 * Close modal
 */
function closeModal() {
    elements.articleModal.classList.remove('active');
    document.body.style.overflow = '';
}

/**
 * Toggle bookmark
 */
function toggleBookmark(url) {
    const index = state.bookmarks.findIndex(b => b.url === url);
    const article = state.articles.find(a => a.url === url) || 
                   state.allArticles.find(a => a.url === url) ||
                   DEMO_ARTICLES.find(a => a.url === url);

    if (index === -1) {
        // Add bookmark
        if (article) {
            state.bookmarks.push(article);
            showToast('Article saved to bookmarks!');
        }
    } else {
        // Remove bookmark
        state.bookmarks.splice(index, 1);
        showToast('Article removed from bookmarks.', 'error');
    }

    // Save to localStorage
    localStorage.setItem('newsHubBookmarks', JSON.stringify(state.bookmarks));

    // Update UI
    updateBookmarksUI();
    renderNewsGrid(); // Re-render to update bookmark icons
    renderHero(); // Re-render hero to update bookmark button
}

/**
 * Check if article is bookmarked
 */
function isBookmarked(url) {
    return state.bookmarks.some(b => b.url === url);
}

/**
 * Update bookmarks UI
 */
function updateBookmarksUI() {
    // Update count
    elements.bookmarkCount.textContent = state.bookmarks.length;

    // Update list
    if (state.bookmarks.length === 0) {
        elements.bookmarksList.innerHTML = '<p class="empty-state">No bookmarks yet. Click the bookmark icon on any article to save it!</p>';
    } else {
        elements.bookmarksList.innerHTML = state.bookmarks.map(article => `
            <div class="bookmark-item" onclick="openArticle('${article.url}')">
                <img src="${article.urlToImage}" alt="" onerror="this.src='https://placehold.co/80x60?text=News'">
                <div class="bookmark-item-info">
                    <h4>${article.title}</h4>
                    <button class="remove-bookmark" onclick="event.stopPropagation(); toggleBookmark('${article.url}')">
                        <i class="fas fa-trash"></i> Remove
                    </button>
                </div>
            </div>
        `).join('');
    }
}

/**
 * Open bookmarks sidebar
 */
function openBookmarks() {
    elements.bookmarksSidebar.classList.add('open');
    elements.overlay.classList.add('active');
}

/**
 * Close bookmarks sidebar
 */
function closeBookmarks() {
    elements.bookmarksSidebar.classList.remove('open');
    elements.overlay.classList.remove('active');
}

/**
 * Start breaking news ticker
 */
function startTicker() {
    const headlines = state.allArticles.slice(0, 5).map(a => a.title);
    let currentIndex = 0;

    // Update ticker immediately
    if (headlines.length > 0) {
        elements.tickerContent.textContent = headlines[0];
    }

    // Rotate every 5 seconds
    setInterval(() => {
        if (headlines.length > 0) {
            elements.tickerContent.style.opacity = '0';
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % headlines.length;
                elements.tickerContent.textContent = headlines[currentIndex];
                elements.tickerContent.style.opacity = '1';
            }, 300);
        }
    }, 5000);
}

/**
 * Search articles
 */
async function searchArticles(query) {
    if (!query.trim()) {
        loadArticles();
        return;
    }

    state.isLoading = true;
    elements.newsGrid.innerHTML = '<div class="loading-state"><div class="spinner"></div><p>Searching...</p></div>';

    try {
        // Try API search first if key is configured
        if (API_KEY !== 'YOUR_API_KEY_HERE' && API_KEY) {
            const url = `${BASE_URL}/everything?q=${encodeURIComponent(query)}&language=en&sortBy=publishedAt&apiKey=${API_KEY}&pageSize=100`;
            const response = await fetch(url);

            if (response.ok) {
                const data = await response.json();
                const apiArticles = (data.articles || []).map(article => ({
                    ...article,
                    category: 'general',
                    title: article.title || 'Untitled',
                    description: article.description || 'No description available.',
                    urlToImage: article.urlToImage || 'https://placehold.co/800x600?text=NewsHub',
                    source: article.source || { name: 'Unknown' },
                    publishedAt: article.publishedAt || new Date().toISOString()
                }));

                state.allArticles = apiArticles;
                state.useApi = true;
            } else {
                throw new Error('API search failed');
            }
        } else {
            throw new Error('API key not configured');
        }
    } catch (error) {
        // Fallback to local search on demo data
        const filtered = DEMO_ARTICLES.filter(article => 
            article.title.toLowerCase().includes(query.toLowerCase()) ||
            article.description.toLowerCase().includes(query.toLowerCase())
        );
        state.allArticles = filtered;
        state.useApi = false;
    }

    state.isLoading = false;
    elements.categoryTitle.textContent = `Search Results for "${query}"`;
    showPage(1);
}

/**
 * Switch category
 */
function switchCategory(category) {
    state.currentCategory = category;
    state.currentPage = 1;

    // Update nav active state
    elements.navLinks.querySelectorAll('a').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.category === category) {
            link.classList.add('active');
        }
    });

    // Update title
    const titles = {
        general: 'Latest News',
        world: 'World News',
        technology: 'Technology',
        business: 'Business',
        science: 'Science',
        sports: 'Sports',
        entertainment: 'Entertainment'
    };
    elements.categoryTitle.textContent = titles[category] || 'Latest News';

    // Load articles
    loadArticles();
}

/**
 * Switch view mode (grid/list)
 */
function switchView(mode) {
    state.viewMode = mode;

    elements.viewBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === mode);
    });

    renderNewsGrid();
}

// ========================================
// EVENT LISTENERS
// ========================================

function setupEventListeners() {
    // Mobile menu toggle
    elements.menuToggle.addEventListener('click', () => {
        elements.navLinks.classList.toggle('active');
    });

    // Theme toggle
    elements.themeToggle.addEventListener('click', toggleTheme);

    // Bookmarks
    elements.bookmarksBtn.addEventListener('click', openBookmarks);
    elements.closeSidebar.addEventListener('click', closeBookmarks);
    elements.overlay.addEventListener('click', closeBookmarks);

    // Modal
    elements.modalClose.addEventListener('click', closeModal);
    elements.articleModal.addEventListener('click', (e) => {
        if (e.target === elements.articleModal) closeModal();
    });

    // Search
    elements.searchBtn.addEventListener('click', () => {
        searchArticles(elements.searchInput.value);
    });

    elements.searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchArticles(elements.searchInput.value);
        }
    });

    // Category navigation
    elements.navLinks.addEventListener('click', (e) => {
        if (e.target.dataset.category) {
            e.preventDefault();
            switchCategory(e.target.dataset.category);
            // Close mobile menu
            elements.navLinks.classList.remove('active');
        }
    });

    // Footer links
    document.querySelector('.footer').addEventListener('click', (e) => {
        if (e.target.dataset.category) {
            e.preventDefault();
            switchCategory(e.target.dataset.category);
        }
    });

    // View toggle
    elements.viewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            switchView(btn.dataset.view);
        });
    });

    // Sort
    elements.sortSelect.addEventListener('change', () => {
        const sort = elements.sortSelect.value;
        if (sort === 'oldest') {
            state.allArticles.reverse();
        } else {
            // Reset to original order (newest)
            state.allArticles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        }
        showPage(1);
    });

    // Load more - NOW WORKS PROPERLY!
    elements.loadMoreBtn.addEventListener('click', loadMore);

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // ESC to close modal/sidebar
        if (e.key === 'Escape') {
            closeModal();
            closeBookmarks();
        }

        // / to focus search
        if (e.key === '/' && document.activeElement !== elements.searchInput) {
            e.preventDefault();
            elements.searchInput.focus();
        }
    });
}

// ========================================
// START THE APP
// ========================================

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}