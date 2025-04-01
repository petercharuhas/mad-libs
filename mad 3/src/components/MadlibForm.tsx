import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

interface MadlibFormProps {
  onSubmit: (words: Record<string, string>) => void;
}

const WORD_INPUTS = [
  { id: 'noun1', label: 'Noun' },
  { id: 'adjective1', label: 'Adjective' },
  { id: 'verb1', label: 'Verb (past tense)' },
  { id: 'noun2', label: 'Noun' },
  { id: 'adjective2', label: 'Adjective' },
];

const MadlibForm: React.FC<MadlibFormProps> = ({ onSubmit }) => {
  const [words, setWords] = useState<Record<string, string>>({});
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if all fields are filled
    const isComplete = WORD_INPUTS.every(({ id }) => words[id]?.trim());
    
    if (isComplete) {
      setShowError(false);
      onSubmit(words);
    } else {
      setShowError(true);
    }
  };

  const handleInputChange = (id: string, value: string) => {
    setWords(prev => ({ ...prev, [id]: value }));
    if (showError) setShowError(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Fill in the words</h2>
      
      {showError && (
        <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-md">
          <AlertCircle size={20} />
          <p className="text-sm">Please fill in all fields</p>
        </div>
      )}

      <div className="space-y-4">
        {WORD_INPUTS.map(({ id, label }) => (
          <div key={id}>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
              {label}
            </label>
            <input
              type="text"
              id={id}
              value={words[id] || ''}
              onChange={(e) => handleInputChange(id, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`Enter a ${label.toLowerCase()}`}
            />
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Create Story
      </button>
    </form>
  );
};

export default MadlibForm;