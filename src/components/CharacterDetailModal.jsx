function CharacterDetailModal({ character, onClose }) {
  if (!character) return null;

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <section className="modal-panel" role="dialog" aria-modal="true" aria-labelledby="character-title" onClick={(event) => event.stopPropagation()}>
        <button className="icon-button close-button" onClick={onClose} aria-label="關閉人物詳情">x</button>
        <p className="card-kicker">{character.house} / {character.region}</p>
        <h2 id="character-title">{character.name}</h2>
        <p className="lead">{character.shortDescription}</p>
        <div className="detail-grid">
          <div><span>稱號 / 身分</span><strong>{character.title}</strong></div>
          <div><span>勢力</span><strong>{character.faction}</strong></div>
          <div><span>狀態</span><strong>{character.status}</strong></div>
          <div><span>主要地區</span><strong>{character.region}</strong></div>
        </div>
        <div className="tag-row">
          {character.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <h3>關聯人物</h3>
        <p>{character.relatedCharacters.join(', ')}</p>
      </section>
    </div>
  );
}

export default CharacterDetailModal;
