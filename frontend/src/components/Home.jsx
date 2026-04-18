import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const features = [
    { title: "Fast Registration", desc: "Onboard users in seconds with our optimized form flow.", icon: "⚡" },
    { title: "Secure Storage", desc: "Data is handled with industry-standard security protocols.", icon: "🛡️" },
    { title: "Real-time Directory", desc: "Instantly view and manage your entire user base.", icon: "📊" }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 flex flex-col items-center relative z-10">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full">
            v2.0 is now live
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tight text-center leading-tight">
            Manage Users <br />
            <span className="text-blue-600">Without the Stress.</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-slate-500 max-w-2xl mx-auto mb-12 text-center leading-relaxed">
            The all-in-one dashboard to track, register, and organize your community. 
            Stop fighting with spreadsheets and start managing with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
            <button 
              onClick={() => navigate("/add-user")}
              className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 hover:shadow-xl transition-all active:scale-95"
            >
              Get Started Now
            </button>
            <button 
              onClick={() => navigate("/user-list")}
              className="bg-white border-2 border-slate-200 text-slate-700 px-10 py-4 rounded-xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95"
            >
              View User Directory
            </button>
          </div>
        </div>

        {/* Subtle Background Pattern (Mediocre+ level UI) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;