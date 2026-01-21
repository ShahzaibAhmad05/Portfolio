/**
 * App Launcher Dock Component
 * GNOME-like app launcher with dock of app icons
 */

"use client";

import { useState } from 'react';
import AppIcon from './components/app-icon';
import TerminalApp from './components/terminal-app';

interface AppLauncherProps {
  isActive: boolean;
  onClose?: () => void;
}

export default function AppLauncher({ isActive, onClose }: AppLauncherProps) {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <>
      <div 
        className="fixed inset-0 z-40 transition-all duration-300 ease-out"
        style={{
          opacity: isActive ? 1 : 0,
          pointerEvents: isActive ? 'auto' : 'none',
        }}
      >
        {/* Content container */}
        <div className="relative w-full h-full flex flex-col items-center justify-end gap-4 pb-3">
          {/* Apps dock - tight rounded container */}
          <div className="bg-zinc-700/80 dark:bg-zinc-800/80 backdrop-blur-md rounded-2xl px-3 py-2 shadow-2xl">
            <div className="flex items-center justify-center gap-2">
              {/* Terminal app */}
              <AppIcon
                icon={
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
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                    />
                  </svg>
                }
                label="Terminal"
                colors="bg-linear-to-br from-gray-700 to-gray-900"
                onClick={() => setIsTerminalOpen(true)}
              />

              {/* Calculator app */}
              <AppIcon
                icon={
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
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" 
                    />
                  </svg>
                }
                label="Calculator"
                colors="bg-linear-to-br from-blue-500 to-blue-700"
                onClick={() => alert("Calculator coming soon!")}
              />

              {/* Notes app */}
              <AppIcon
                icon={
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
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" 
                    />
                  </svg>
                }
                label="Notes"
                colors="bg-linear-to-br from-yellow-500 to-orange-600"
                onClick={() => alert("Notes coming soon!")}
              />

              {/* Close button */}
              <AppIcon
                icon={
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
                      d="M6 18L18 6M6 6l12 12" 
                    />
                  </svg>
                }
                label="Close"
                colors="bg-linear-to-br from-red-500 to-red-700"
                onClick={() => onClose?.()}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Terminal Popup */}
      <TerminalApp 
        isOpen={isTerminalOpen} 
        onClose={() => setIsTerminalOpen(false)} 
      />
    </>
  );
}
