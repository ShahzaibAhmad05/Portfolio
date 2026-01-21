"use client";

import { useState, useRef, useEffect } from 'react';

interface AppLauncherProps {
  isActive: boolean;
  onClose?: () => void;
}

export default function AppLauncher({ isActive, onClose }: AppLauncherProps) {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [commandHistory, setCommandHistory] = useState<string[]>(['Welcome to Portfolio Terminal v1.0']);
  const [currentCommand, setCurrentCommand] = useState('');
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [commandHistory]);

  const handleCommandSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && currentCommand.trim()) {
      setCommandHistory([...commandHistory, `$ ${currentCommand}`, `Command '${currentCommand}' not implemented yet.`]);
      setCurrentCommand('');
    }
  };

  return (
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
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsTerminalOpen(true);
              }}
              className="group relative flex flex-col items-center gap-1 p-1.5 rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              {/* Terminal Icon */}
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-gray-700 to-gray-900 shadow-lg group-hover:scale-110 transition-transform duration-200 flex items-center justify-center">
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
              </div>
              <span className="text-[10px] text-white/80 font-medium">Terminal</span>
            </button>

            {/* Calculator app */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                alert("Calculator coming soon!");
              }}
              className="group relative flex flex-col items-center gap-1 p-1.5 rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg group-hover:scale-110 transition-transform duration-200 flex items-center justify-center">
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
              </div>
              <span className="text-[10px] text-white/80 font-medium">Calculator</span>
            </button>

            {/* Notes app */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                alert("Notes coming soon!");
              }}
              className="group relative flex flex-col items-center gap-1 p-1.5 rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-600 shadow-lg group-hover:scale-110 transition-transform duration-200 flex items-center justify-center">
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
              </div>
              <span className="text-[10px] text-white/80 font-medium">Notes</span>
            </button>

            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose?.();
              }}
              className="group relative flex flex-col items-center gap-1 p-1.5 rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-red-700 shadow-lg group-hover:scale-110 transition-transform duration-200 flex items-center justify-center">
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
              </div>
              <span className="text-[10px] text-white/80 font-medium">Close</span>
            </button>
          </div>
        </div>
      </div>

      {/* Terminal Popup */}
      {isTerminalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsTerminalOpen(false)}
          />
          <div 
            className="relative w-full max-w-3xl h-125 bg-black rounded-lg shadow-2xl border border-zinc-700 overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Terminal Header (Title Bar) */}
            <div className="bg-zinc-800 border-b border-zinc-700 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <button 
                    onClick={() => setIsTerminalOpen(false)}
                    className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
                  />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-sm text-zinc-400 ml-2 font-mono">terminal@portfolio</span>
              </div>
              <button 
                onClick={() => setIsTerminalOpen(false)}
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Terminal Content */}
            <div className="flex-1 overflow-y-auto p-4 font-mono text-sm">
              <div className="space-y-1">
                {commandHistory.map((line, index) => (
                  <div key={index} className="text-gray-300">
                    {line}
                  </div>
                ))}
              </div>
              <div ref={terminalEndRef} />
            </div>

            {/* Terminal Input */}
            <div className="bg-black border-t border-zinc-800 p-4">
              <div className="flex items-center gap-2 font-mono text-sm">
                <span className="text-gray-300">$</span>
                <input
                  type="text"
                  value={currentCommand}
                  onChange={(e) => setCurrentCommand(e.target.value)}
                  onKeyDown={handleCommandSubmit}
                  className="flex-1 bg-transparent text-gray-300 outline-none placeholder-gray-600"
                  placeholder="Type a command..."
                  autoFocus
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
