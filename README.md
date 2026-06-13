
NewsHub
A modern, professional news aggregation website that delivers diverse, up-to-date content from global sources — built with vanilla HTML, CSS, and JavaScript.
Live Demo | Portfolio
What This Is
A fully responsive news website that aggregates articles across multiple categories, providing users with a one-stop destination for diverse and current news content. Features real-time category filtering, search, bookmarks, dark mode, and a professional UI with smooth animations.
Key Capabilities:
Category-based news browsing — Technology, World, Business, Science, Sports, Entertainment, and General
Real-time search — Find articles across all categories instantly
Bookmark system — Save articles for later reading with localStorage persistence
Dark/Light mode — Toggle themes with preference saved across sessions
Responsive design — Works seamlessly on mobile, tablet, and desktop
Professional UI — Modern card-based layout with hover animations and loading states
Article modal — Read article previews without leaving the page
Breaking news ticker — Auto-rotating headline banner
Grid/List view toggle — Switch between layout modes
Load more pagination — Progressive article loading
Features
Table
Feature	Status
Category Navigation (7 categories)	Done
Real-time Search	Done
Bookmark System with localStorage	Done
Dark/Light Theme Toggle	Done
Responsive Design (Mobile/Desktop)	Done
Article Modal Preview	Done
Breaking News Ticker	Done
Grid/List View Toggle	Done
Load More Pagination	Done
Toast Notifications	Done
Keyboard Shortcuts (ESC, /)	Done
NewsAPI Integration (Real Data)	Ready
Demo Data Fallback (56 articles)	Done
Tech Stack
Table
Layer	Technology
Frontend	HTML5, CSS3, Vanilla JavaScript (ES6+)
Styling	CSS Grid, Flexbox, CSS Variables, Custom Animations
Icons	Font Awesome 6.4
Fonts	Google Fonts (Inter, Playfair Display)
Images	Lorem Picsum (reliable placeholder service)
API	NewsAPI.org (optional, for real data)
Storage	Browser localStorage (bookmarks, theme)
Project Structure
plain
news-website/
├── index.html              # Main page structure
├── css/
│   └── style.css          # All styles, animations, responsive design
├── js/
│   └── app.js             # Application logic, API handling, UI updates
├── images/                # Local assets (if needed)
└── README.md              # Project documentation
Run Locally
Requirements: Any modern web browser (Chrome, Firefox, Safari, Edge)
1. Download or Clone
bash
git clone https://github.com/yourusername/news-website.git
cd news-website
Or simply download the ZIP and extract it.
2. Open in Browser
Double-click index.html or right-click → Open with → Your Browser
For best experience (recommended):
bash
# Using Python's built-in server
python -m http.server 8000

# Or using Node.js npx
npx serve .

# Or using VS Code "Live Server" extension
Then open http://localhost:8000
How to Use
Without API Key (Demo Mode)
The website works immediately with 56 demo articles (8 per category) — no setup required.
Open index.html in your browser
Browse categories — Click nav links (Home, World, Technology, etc.)
Search articles — Type in the search box and press Enter
Bookmark articles — Click the bookmark icon on any card
View bookmarks — Click the bookmark button in the top right
Toggle theme — Click the moon/sun icon
Read article — Click "Read More" or the card to open modal
Load more — Click "Load More Articles" to see more content
With NewsAPI Key (Real Data)
To fetch live news from real sources:
Get a free API key from newsapi.org (100 requests/day)
Open js/app.js
Replace line 324:
JavaScript
const API_KEY = 'YOUR_API_KEY_HERE';
With your actual key:
JavaScript
const API_KEY = '1234567890abcdef1234567890abcdef';
Save and refresh the page
The site will now fetch 100 real articles from NewsAPI
Note: NewsAPI free tier works only on localhost. For production deployment, you need a paid plan or a backend proxy.
Keyboard Shortcuts
Table
Key	Action
ESC	Close modal / Close bookmarks sidebar
/	Focus search box
Enter	Submit search
Configuration
Change Colors
Edit CSS variables in css/style.css (lines 15-30):
css
:root {
    --primary: #2563eb;        /* Brand blue */
    --accent: #f59e0b;         /* Highlight orange */
    /* ... other variables */
}
Change Articles Per Page
Edit js/app.js line 141:
JavaScript
articlesPerPage: 9,  // Default: 9 (1 hero + 8 grid)
Add More Demo Articles
Add new objects to the DEMO_ARTICLES array in js/app.js following this format:
JavaScript
{
    title: "Your Article Title",
    description: "Article description here...",
    url: "https://real-website.com/article",
    urlToImage: "https://picsum.photos/seed/unique-name/800/600",
    publishedAt: "2026-06-12T10:00:00Z",
    source: { name: "Source Name" },
    category: "technology"  // technology, world, business, science, sports, entertainment, general
}
Customization
Add a New Category
Add nav link in index.html (around line 30):
HTML
<li><a href="#" data-category="health">Health</a></li>
Add title mapping in js/app.js (around line 720):
JavaScript
health: 'Health News',
Add color in js/app.js (around line 260):
JavaScript
health: '#e11d48',
Add demo articles with category: "health"
Browser Compatibility
Table
Browser	Support
Chrome 90+	Full
Firefox 88+	Full
Safari 14+	Full
Edge 90+	Full
Mobile Browsers	Full (responsive)
Performance
No frameworks — Pure vanilla JS for fastest load times
Lazy loading ready — Images use onerror fallback
CSS animations — GPU-accelerated transforms
localStorage — Persistent data without server
Minimal dependencies — Only Font Awesome and Google Fonts (CDN)
Future Enhancements
Table
Feature	Priority
User authentication system	Medium
Backend API proxy for NewsAPI	High
Article comments section	Low
Social sharing buttons	Medium
Email newsletter signup	Medium
PWA (offline support)	High
Push notifications	Low
Multi-language support	Low
Screenshots
Add your screenshots here
Table
Home Page	Category View	Article Modal
Credits
Images: Lorem Picsum (reliable placeholder images)
Icons: Font Awesome
Fonts: Google Fonts
News Data: NewsAPI (optional real data)
Author
Your Name — Aspiring Web Developer
GitHub: yourusername | Email: your.email@example.com
License
MIT License — feel free to use, modify, and distribute.
Support
If you found this project helpful, please ⭐ star the repository on GitHub!
For issues or questions, open a GitHub Issue.
