function SearchBar({ value, onChange, placeholder = '搜尋...' }) {
  return (
    <label className="field">
      <span>搜尋</span>
      <input value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} />
    </label>
  );
}

export default SearchBar;
