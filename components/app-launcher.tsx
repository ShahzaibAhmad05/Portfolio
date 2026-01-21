"use client";

interface AppLauncherProps {
  isActive: boolean;
}

export default function AppLauncher({ isActive }: AppLauncherProps) {
  return (
    <div 
      className="fixed inset-0 z-20 transition-all duration-300 ease-out"
      style={{
        opacity: isActive ? 1 : 0,
        pointerEvents: isActive ? 'auto' : 'none',
      }}
    >
      {/* Main gray background dock that contains everything */}
      <div className="absolute inset-0 bg-zinc-800/90 dark:bg-zinc-900/90 backdrop-blur-xl" />
      
      {/* Content container with padding to show gray around page */}
      <div className="relative w-full h-full flex flex-col items-center justify-end gap-4 pb-8">
        {/* Apps dock - tight rounded container */}
        <div className="bg-zinc-700/80 dark:bg-zinc-800/80 backdrop-blur-md rounded-2xl px-3 py-2.5 shadow-2xl">
          <div className="flex items-center justify-center gap-2">
            {/* Placeholder app icons */}
            {[...Array(6)].map((_, i) => (
              <button
                key={i}
                className="group relative flex flex-col items-center gap-1 p-1.5 rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                {/* Icon placeholder */}
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg group-hover:scale-110 transition-transform duration-200 flex items-center justify-center">
                  <svg 
                    className="w-5 h-5 text-white" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" 
                    />
                  </svg>
                </div>
                {/* Label */}
                <span className="text-[10px] text-white/80 font-medium">App {i + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
