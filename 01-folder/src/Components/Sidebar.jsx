import { NavLink, useNavigate, Link } from "react-router-dom";
import {
  LayoutDashboard,
  FolderKanban,
  MessageSquare,
  User,
   UserPen,
  LogOut,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Projects", path: "/admin/projects_management", icon: FolderKanban },
  { name: "Messages", path: "/admin/messages", icon: MessageSquare },
  { name: "Skills", path: "/admin/skills", icon: User },
  { name: "About me", path: "/admin/aboutme", icon: UserPen },
];

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove auth token (if you use one)
    localStorage.removeItem("token");

    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className="w-64 h-screen bg-zinc-900 border-r border-zinc-800 flex flex-col">

      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-zinc-800">
        <Link to='/admin/dashboard' className="text-lg font-bold text-green-400 font-mono">Adimn</Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={index}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-md transition ${
                  isActive
                    ? "bg-green-400/10 text-green-400 border border-green-400"
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                }`
              }
            >
              <Icon size={18} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-zinc-800">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-md border border-red-500 text-red-500 hover:bg-red-500/10 transition"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>

    </div>
  );
}
