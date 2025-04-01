import React, { useState } from 'react';
import MadlibForm from './MadlibForm';
import MadlibStory from './MadlibStory';

const Madlib: React.FC = () => {
  const [words, setWords] = useState<Record<string, string> | null>(null);

  const handleSubmit = (formWords: Record<string, string>) => {
    setWords(formWords);
  };

  const handleRestart = () => {
    setWords(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Madlibs Game
        </h1>
        
        {words ? (
          <MadlibStory words={words} onRestart={handleRestart} />
        ) : (
          <MadlibForm onSubmit={handleSubmit} />
        )}
      </div>
    </div>
  );
};

export default Madlib;