import React from 'react';
import { RefreshCw } from 'lucide-react';

interface MadlibStoryProps {
  words: Record<string, string>;
  onRestart: () => void;
}

const MadlibStory: React.FC<MadlibStoryProps> = ({ words, onRestart }) => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Story</h2>
      
      <p className="text-lg leading-relaxed text-gray-700 mb-8">
        Once upon a time, there was a {words.adjective1} {words.noun1} who 
        {' '}{words.verb1} through the enchanted forest. Along the way, they 
        encountered a {words.adjective2} {words.noun2} that changed their life forever.
      </p>

      <button
        onClick={onRestart}
        className="flex items-center gap-2 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors"
      >
        <RefreshCw size={20} />
        Start Over
      </button>
    </div>
  );
};

export default MadlibStory;