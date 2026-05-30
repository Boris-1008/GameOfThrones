function CharacterCard({ character, onSelect }) {
  return (
    <button className="info-card character-card" onClick={() => onSelect(character)}>
      <div className="avatar" aria-hidden="true">{character.name.charAt(0)}</div>
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
