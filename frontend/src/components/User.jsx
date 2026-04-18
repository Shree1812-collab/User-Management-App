import { useLocation, useNavigate } from "react-router-dom";

function User() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const user = state?.user;

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-red-50 text-center max-w-md">
          <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
            ✕
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">No User Selected</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            We couldn't find the user details. This happens if the page is refreshed or accessed directly.
          </p>
          <button 
            onClick={() => navigate("/user-list")} 
            className="w-full bg-slate-900 hover:bg-black text-white py-3 rounded-xl transition-all font-semibold"
          >
            Return to Directory
          </button>
        </div>
      </div>
    );
  }

  const { name, email, dateOfBirth, mobileNumber } = user;

  const DetailBox = ({ label, value }) => (
    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
      <p className="text-[10px] uppercase tracking-[0.15em] text-slate-400 font-black mb-1">{label}</p>
      <p className="text-base text-slate-800 font-bold">{value || "Not Provided"}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50/50 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        
        <button 
          onClick={() => navigate(-1)} 
          className="group mb-6 flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-medium text-sm"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> 
          Back to List
        </button>

        <div className="bg-white shadow-sm rounded-[2rem] overflow-hidden border border-slate-200">
          
          <div className="h-40 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 relative">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          </div>

          <div className="relative px-8 pb-12">
            
            <div className="relative -mt-20 mb-8 flex flex-col items-center">
              <div className="w-40 h-40 bg-white rounded-full p-2 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-tr from-slate-100 to-slate-200 rounded-full flex items-center justify-center text-5xl font-black text-slate-400 border-4 border-slate-50">
                  {name ? name[0].toUpperCase() : "?"}
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <h1 className="text-4xl font-black text-slate-900 tracking-tight">{name}</h1>
                <p className="text-blue-600 font-semibold text-lg mt-1">{email}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <DetailBox label="Date of Birth" value={dateOfBirth} />
              <DetailBox label="Mobile Number" value={mobileNumber} />
            </div>

            <div className="mt-8 pt-8 border-t border-slate-100 flex justify-center gap-4">
              <button className="px-6 py-2 text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">
                Edit Profile
              </button>
              <button className="px-6 py-2 text-sm font-bold text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                Delete User
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;