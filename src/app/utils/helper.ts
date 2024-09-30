import { suggestions } from './constants';

export const getSuggestion = (prompt: string) => {
  if (!prompt) return '';
  return (
    suggestions
      .filter((v) => v.startsWith(prompt.toLowerCase()))
      ?.at(0)
      ?.substring(prompt.length) || ''
  );
};

export const getFullSuggestion = (prompt: string) => {
  return (
    suggestions.filter((v) => v.startsWith(prompt.toLowerCase()))?.at(0) ||
    prompt
  );
};
