const { useState } = React;

const agents = [
  { id: 1, name: 'Agent Smith', snippet: '4 new listings', time: '2h', avatar: 'https://placekitten.com/80/80' },
  { id: 2, name: 'Agent Johnson', snippet: '3 new listings', time: '5h', avatar: 'https://placekitten.com/81/81' },
  { id: 3, name: 'Agent Brown', snippet: 'New condo deal', time: '1d', avatar: 'https://placekitten.com/82/82' },
  { id: 4, name: 'Agent Davis', snippet: 'Villa available', time: '2d', avatar: 'https://placekitten.com/83/83' }
];

const listings = [
  {
    id: 1,
    image: 'https://placekitten.com/640/360',
    title: 'Modern Family House',
    price: '$250,000',
    area: '1500 sqft',
    location: 'Seattle, WA',
    agent: 'Agent Smith'
  },
  {
    id: 2,
    image: 'https://placekitten.com/641/360',
    title: 'Urban Apartment',
    price: '$180,000',
    area: '900 sqft',
    location: 'Portland, OR',
    agent: 'Agent Johnson'
  },
  {
    id: 3,
    image: 'https://placekitten.com/642/360',
    title: 'Cozy Cottage',
    price: '$120,000',
    area: '800 sqft',
    location: 'Boulder, CO',
    agent: 'Agent Brown'
  }
];

function Header() {
  return (
    <header className="bg-[#0F172A]/90 backdrop-blur sticky top-0 z-10 flex items-center p-4">
      <div className="text-2xl font-bold text-green-400">InCircle</div>
      <div className="flex-1 mx-4 hidden sm:block">
        <input type="search" placeholder="Search listings" className="w-full rounded px-3 py-2 bg-[#1E293B] text-sm placeholder-gray-400 text-white focus:outline-none" />
      </div>
      <div className="flex gap-4">
        <img src="https://unpkg.com/heroicons@2.0.16/20/solid/bell.svg" className="w-6 h-6" />
        <img src="https://unpkg.com/heroicons@2.0.16/20/solid/user-circle.svg" className="w-6 h-6" />
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-green-500 to-teal-500 rounded-lg text-center py-10 px-4 mb-6">
      <h1 className="text-3xl font-bold text-white mb-2">Find your perfect property</h1>
      <p className="text-white/90 mb-4">Browse thousands of listings from top agents around the world</p>
      <button className="bg-white text-green-700 font-semibold px-5 py-2 rounded">Browse Listings</button>
    </section>
  );
}

function AgentCard({agent, onClick}) {
  return (
    <div onClick={() => onClick(agent)} className="flex-none w-24 mr-4 text-center cursor-pointer">
      <img src={agent.avatar} alt={agent.name} className="w-16 h-16 rounded-full mx-auto" />
      <div className="mt-2 text-sm">{agent.name}</div>
    </div>
  );
}

function AgentModal({agent, onClose}) {
  if (!agent) return null;
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-[#1F2937] p-6 rounded-lg" onClick={e => e.stopPropagation()}>
        <img src={agent.avatar} alt={agent.name} className="w-24 h-24 rounded-full mx-auto" />
        <h2 className="mt-4 text-xl text-center">{agent.name}</h2>
        <p className="text-center text-gray-400 mt-2">{agent.snippet}</p>
        <div className="text-center text-gray-500 text-sm mt-1">{agent.time} ago</div>
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-green-600 rounded text-white w-full">Close</button>
      </div>
    </div>
  );
}

function ListingCard({listing}) {
  return (
    <div className="bg-[#1F2937] rounded-lg overflow-hidden">
      <img src={listing.image} alt={listing.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{listing.title}</h3>
        <div className="text-green-500 font-semibold">{listing.price}</div>
        <div className="text-sm text-gray-400">{listing.area} · {listing.location}</div>
        <div className="text-sm text-gray-400 mt-2">Agent: {listing.agent}</div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="text-center text-gray-400 text-sm py-6">© 2025 InCircle Marketplace</footer>
  );
}

function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#1F2937] text-white flex justify-around py-2 sm:hidden">
      <button className="flex flex-col items-center text-sm">
        <img src="https://unpkg.com/heroicons@2.0.16/20/solid/home.svg" className="w-6 h-6" />
        Home
      </button>
      <button className="flex flex-col items-center text-sm">
        <img src="https://unpkg.com/heroicons@2.0.16/20/solid/building-library.svg" className="w-6 h-6" />
        Listings
      </button>
      <button className="flex flex-col items-center text-sm">
        <img src="https://unpkg.com/heroicons@2.0.16/20/solid/chat-bubble-oval-left-ellipsis.svg" className="w-6 h-6" />
        Chat
      </button>
      <button className="flex flex-col items-center text-sm">
        <img src="https://unpkg.com/heroicons@2.0.16/20/solid/user-circle.svg" className="w-6 h-6" />
        Profile
      </button>
    </nav>
  );
}

function App() {
  const [activeAgent, setActiveAgent] = useState(null);

  return (
    <div className="pt-4 pb-16 px-4 max-w-5xl mx-auto">
      <Header />
      <HeroSection />

      <h2 className="text-xl font-semibold mb-2">Featured Agents</h2>
      <div className="mb-6 overflow-x-auto flex gap-4 pb-1">
        {agents.map(a => <AgentCard key={a.id} agent={a} onClick={setActiveAgent} />)}
      </div>

      <h2 className="text-xl font-semibold mb-2">Latest Listings</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {listings.map(listing => <ListingCard key={listing.id} listing={listing} />)}
      </div>

      <AgentModal agent={activeAgent} onClose={() => setActiveAgent(null)} />
      <Footer />
      <BottomNav />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
