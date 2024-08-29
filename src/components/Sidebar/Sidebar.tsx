import "./Sidebar.scss";

const tabs = [
  { name: "Home", icon: "🏠" },
  { name: "About", icon: "👤" },
  { name: "Services", icon: "⭐" },
  { name: "Works", icon: "📁" },
  { name: "Blogs", icon: "💬" },
  { name: "Contact", icon: "📞" },
];

function Sidebar() {
  return (
    <div className="sidebar">
      {tabs.map((tab, index) => (
        <div className="tab" key={index}>
          <span className="icon">{tab.icon}</span>
          <span className="text">{tab.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
