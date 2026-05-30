function CharacterCard({ character, onSelect }) {
  return (
    <button className="info-card character-card" onClick={() => onSelect(character)}>
      <img className="avatar image-avatar" src={character.image} alt={`${character.name} 頭像`} />
      <div>
        <p className="card-kicker">{character.house}</p>
        <h3>{character.name}</h3>
        <p>{character.title}</p>
      </div>
      <span className="status-pill">{character.status}</span>
    </button>
  );
}

export default CharacterCard;
