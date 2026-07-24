type MentorSuggestionsProps = {
  disabled: boolean;
  onSelect: (suggestion: string) => void;
  suggestions: string[];
};

export function MentorSuggestions({
  disabled,
  onSelect,
  suggestions,
}: MentorSuggestionsProps) {
  if (suggestions.length === 0) {
    return null;
  }

  return (
    <div className="ml-12 flex flex-wrap gap-2">
      {suggestions.map((suggestion) => (
        <button
          className="rounded-md border border-blue-200 bg-blue-50 px-3 py-2 text-left text-xs font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100 disabled:opacity-50"
          disabled={disabled}
          key={suggestion}
          onClick={() => onSelect(suggestion)}
          type="button"
        >
          {suggestion}
        </button>
      ))}
    </div>
  );
}
