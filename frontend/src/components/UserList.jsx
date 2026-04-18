import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function UserList() {
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      setIsLoading(true);
      setErr("");
      try {
        const res = await fetch("https://user-management-app-2-0oav.onrender.com/user-api/users");
        const resObj = await res.json();
        
        if (res.ok) {
          setUsers(resObj.payload || []);
        } else {
          setErr(resObj.message || "Failed to fetch users.");
        }
      } catch (error) {
        setErr("Unable to connect to the server. Please check your internet or try again.");
      } finally {
        setIsLoading(false);
      }
    };
    getUsers();
  }, []);

  const Skeleton = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="h-64 bg-slate-200 animate-pulse rounded-2xl"></div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Community Directory</h1>
          <p className="text-slate-500 max-w-md mx-auto">Browse and manage all registered members in your organization.</p>
        </header>

        {err && (
          <div className="max-w-2xl mx-auto mb-10 p-6 bg-white border border-red-100 rounded-2xl shadow-sm flex flex-col items-center gap-4 text-center">
            <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center text-xl">⚠️</div>
            <p className="text-slate-700 font-medium">{err}</p>
            <button onClick={() => window.location.reload()} className="text-blue-600 text-sm font-bold hover:underline">Try Refreshing</button>
          </div>
        )}

        {isLoading ? (
          <Skeleton />
        ) : (
          <>
            {users.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {users.map((user) => (
                  <UserCard 
                    key={user.email} 
                    user={user} 
                    onClick={() => navigate("/user", { state: { user } })} 
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-24 bg-white rounded-3xl border-2 border-dashed border-slate-200">
                <p className="text-slate-400 font-medium">No users registered yet.</p>
                <button 
                  onClick={() => navigate("/add-user")}
                  className="mt-4 text-blue-600 font-bold hover:text-blue-700"
                >
                  Create first user +
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

// Internal component for cleaner code organization
function UserCard({ user, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 cursor-pointer flex flex-col items-center text-center"
    >
      <div className="w-20 h-20 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center text-2xl font-black mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
        {user.name[0].toUpperCase()}
      </div>
      
      <h3 className="text-lg font-bold text-slate-800 line-clamp-1 group-hover:text-blue-600 transition-colors">
        {user.name}
      </h3>
      <p className="text-sm text-slate-500 mb-6">{user.email}</p>
      
      <div className="mt-auto w-full pt-4 border-t border-slate-50 flex items-center justify-center gap-2 text-xs font-bold text-slate-400 group-hover:text-blue-500 uppercase tracking-widest transition-colors">
        View Profile
        <span>→</span>
      </div>
    </div>
  );
}

export default UserList;