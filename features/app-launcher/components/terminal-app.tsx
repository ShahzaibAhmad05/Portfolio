/**
 * Terminal App Component
 * Modal terminal window with command input
 */

"use client";

import { useState, useRef, useEffect } from 'react';

interface TerminalAppProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TerminalApp({ isOpen, onClose }: TerminalAppProps) {
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

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => e.stopPropagation()}
    >
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
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
                onClick={onClose}
                className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
              />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-sm text-zinc-400 ml-2 font-mono">terminal@portfolio</span>
          </div>
          <button 
            onClick={onClose}
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
  );
}
