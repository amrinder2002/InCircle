const { useState } = React;

const tokens = [
  { id: 1, name: 'Agent Smith', snippet: '4 new listings', time: '2h', avatar: 'https://placekitten.com/80/80' },
  { id: 2, name: 'Agent Johnson', snippet: '3 new listings', time: '5h', avatar: 'https://placekitten.com/81/81' },
  { id: 3, name: 'Agent Brown', snippet: 'New condo deal', time: '1d', avatar: 'https://placekitten.com/82/82' },
  { id: 4, name: 'Agent Davis', snippet: 'Villa available', time: '2d', avatar: 'https://placekitten.com/83/83' },
];

const listings = [
  {
    id: 1,
    images: [
      'https://placekitten.com/400/250',
      'https://placekitten.com/401/250',
      'https://placekitten.com/402/250',
    ],
    title: 'Modern Family House',
    price: '$250,000',
    area: '1500 sqft',
    location: 'Seattle, WA',
    agent: 'Agent Smith'
  },
  {
    id: 2,
    images: [
      'https://placekitten.com/403/250',
      'https://placekitten.com/404/250',
      'https://placekitten.com/405/250',
    ],
    title: 'Urban Apartment',
    price: '$180,000',
    area: '900 sqft',
    location: 'Portland, OR',
    agent: 'Agent Johnson'
  }
];

function Token({token, onClick}) {
  return (
    <div onClick={() => onClick(token)} className="flex-none w-24 mr-4 text-center cursor-pointer">
      <img src={token.avatar} alt={token.name} className="w-16 h-16 rounded-full mx-auto" />
      <div className="mt-2 text-sm text-white">{token.name}</div>
      <div className="text-xs text-gray-400">{token.time}</div>
    </div>
  );
}

function ListingCard({listing}) {
  return (
    <div className="bg-[#1F2937] rounded-lg overflow-hidden mb-4">
      <img src={listing.images[0]} alt={listing.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{listing.title}</h3>
        <div className="text-green-500 font-semibold">{listing.price}</div>
        <div className="text-sm text-gray-400">{listing.area} · {listing.location}</div>
        <div className="text-sm text-gray-400 mt-2">Agent: {listing.agent}</div>
      </div>
    </div>
  );
}

function TokenModal({token, onClose}) {
  if(!token) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-[#1F2937] p-6 rounded-lg" onClick={e => e.stopPropagation()}>
        <img src={token.avatar} alt={token.name} className="w-24 h-24 rounded-full mx-auto" />
        <h2 className="mt-4 text-xl text-center">{token.name}</h2>
        <p className="text-center text-gray-400 mt-2">{token.snippet}</p>
        <div className="text-center text-gray-500 text-sm mt-1">{token.time} ago</div>
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-green-600 rounded text-white w-full">Close</button>
      </div>
    </div>
  );
}

function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#1F2937] text-white flex justify-around py-2">
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
  const [modalToken, setModalToken] = useState(null);
  return (
    <div className="pt-4 pb-16 px-4">
      <header className="sticky top-0 flex justify-between items-center pb-4 bg-[#0F172A]">
        <h1 className="text-xl font-bold">TrustedAgent</h1>
        <div className="flex gap-4">
          <img src="https://unpkg.com/heroicons@2.0.16/20/solid/bell.svg" className="w-6 h-6" />
          <img src="https://unpkg.com/heroicons@2.0.16/20/solid/magnifying-glass.svg" className="w-6 h-6" />
        </div>
      </header>

      <div className="mb-4 overflow-x-auto flex gap-4">
        {tokens.map(t => <Token key={t.id} token={t} onClick={setModalToken} />)}
      </div>

      <div>
        {listings.map(listing => <ListingCard key={listing.id} listing={listing} />)}
      </div>

      <TokenModal token={modalToken} onClose={() => setModalToken(null)} />
      <BottomNav />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
