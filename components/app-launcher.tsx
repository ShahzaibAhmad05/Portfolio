"use client";

interface AppLauncherProps {
  isActive: boolean;
}

export default function AppLauncher({ isActive }: AppLauncherProps) {
  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-20 transition-all duration-300 ease-out"
      style={{
        opacity: isActive ? 1 : 0,
        transform: `translateY(${isActive ? '0' : '100%'})`,
        pointerEvents: isActive ? 'auto' : 'none',
      }}
    >
      {/* Gray background */}
      <div className="absolute inset-0 bg-zinc-800/90 dark:bg-zinc-900/90 backdrop-blur-xl" />
      
      {/* App icons container */}
      <div className="relative px-6 py-4">
        <div className="flex items-center justify-center gap-3 max-w-3xl mx-auto">
          {/* Placeholder app icons */}
          {[...Array(6)].map((_, i) => (
            <button
              key={i}
              className="group relative flex flex-col items-center gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              {/* Icon placeholder */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg group-hover:scale-110 transition-transform duration-200 flex items-center justify-center">
                <svg 
                  className="w-6 h-6 text-white" 
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
              <span className="text-xs text-white/80 font-medium">App {i + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
