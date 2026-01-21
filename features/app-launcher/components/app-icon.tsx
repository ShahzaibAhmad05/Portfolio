/**
 * App Icon Component
 * Reusable icon for app launcher dock
 */

"use client";

interface AppIconProps {
  icon: React.ReactNode;
  label: string;
  colors: string;
  onClick: () => void;
}

export default function AppIcon({ icon, label, colors, onClick }: AppIconProps) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className="group relative flex flex-col items-center gap-1 p-1.5 rounded-lg hover:bg-white/10 transition-colors duration-200"
    >
      <div className={`w-10 h-10 rounded-lg ${colors} shadow-lg group-hover:scale-110 transition-transform duration-200 flex items-center justify-center`}>
        {icon}
      </div>
      <span className="text-[10px] text-white/80 font-medium">{label}</span>
    </button>
  );
}
