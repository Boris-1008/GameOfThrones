function HouseCard({ house, isActive, onSelect }) {
  return (
    <button
      className={`info-card house-card ${isActive ? 'selected' : ''}`}
      style={{ '--accent': house.colorTheme }}
      onClick={() => onSelect(house)}
    >
      <div className="sigil" aria-hidden="true">{house.symbol.charAt(0)}</div>
      <div>
        <p className="card-kicker">{house.region}</p>
        <h3>{house.name}</h3>
        <p>"{house.motto}"</p>
      </div>
    </button>
  );
}

export default HouseCard;
