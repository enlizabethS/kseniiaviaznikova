import { NavLink } from "react-router-dom";
import { Home, User, Music, Calendar, Video, Mail } from "lucide-react";

const menuItems = [
  { title: "Home", path: "/", icon: Home },
  { title: "Biography", path: "/biography", icon: User },
  { title: "Repertoire", path: "/repertoire", icon: Music },
  { title: "Performances", path: "/performances", icon: Calendar },
  { title: "Media", path: "/media", icon: Video },
  { title: "Contact", path: "/contact", icon: Mail },
];

export const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      <div className="p-8 border-b border-sidebar-border">
        <h1 className="text-xl font-semibold text-sidebar-foreground tracking-wide">
          Kseniia Viaznikova
        </h1>
        <p className="text-sm text-red-muted mt-1">Dramatic Mezzo-Soprano</p>
      </div>

      <nav className="flex-1 py-8">
        <ul className="space-y-2 px-4">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-md transition-smooth ${
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/10"
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-6 border-t border-sidebar-border">
        <p className="text-xs text-sidebar-foreground/60 text-center">
          Official website of Kseniia Viaznikova
        </p>
        <p className="text-xs text-red-muted text-center mt-1">
          created with Lovable
        </p>
      </div>
    </aside>
  );
};
