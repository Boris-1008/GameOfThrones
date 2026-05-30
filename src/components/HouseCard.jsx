function HouseCard({ house, isActive, onSelect }) {
  return (
    <button
      className={`info-card house-card ${isActive ? 'selected' : ''}`}
      style={{ '--accent': house.colorTheme }}
      onClick={() => onSelect(house)}
    >
      <img className="sigil image-sigil" src={house.image} alt={`${house.name} 旗幟`} />
      <div>
        <p className="card-kicker">{house.region}</p>
        <h3>{house.name}</h3>
        <p>"{house.motto}"</p>
      </div>
    </button>
  );
}

export default HouseCard;
