import React from 'react';
import { createRoot } from 'react-dom/client';

// Inline App Component to ensure no module loading errors in Raw Runtime
function App() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-void p-6 text-center">
      
      {/* Headline */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-bronze tracking-tight mb-6">
        Authenticity Ain’t Optional
      </h1>

      {/* Sub-line */}
      <p className="text-lg md:text-xl text-stone font-medium tracking-wide mb-12 max-w-2xl leading-relaxed">
        Shield &amp; Spear &bull; Cadence over polish &bull; Truth over apology
      </p>

      {/* Tag */}
      <div className="group relative">
        <div className="absolute -inset-1 bg-bronze opacity-20 blur group-hover:opacity-40 transition duration-500"></div>
        <div className="relative border-2 border-bronze text-bronze px-8 py-3 rounded-sm uppercase tracking-[0.2em] text-sm font-semibold hover:bg-bronze hover:text-void transition-colors duration-300 cursor-default">
          Anti‑Fragile Doctrine
        </div>
      </div>

    </div>
  );
}

// Mount Logic
const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error("Could not find root element to mount to");
}

const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);