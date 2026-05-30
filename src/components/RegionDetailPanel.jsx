function RegionDetailPanel({ region }) {
  return (
    <aside className="detail-panel region-detail">
      <p className="card-kicker">{region.climate}</p>
      <h2>{region.name}</h2>
      <p className="lead">{region.summary}</p>
      <p>{region.description}</p>
      <div className="detail-grid compact">
        <div><span>主要勢力</span><strong>{region.dominantHouse}</strong></div>
        <div><span>地區類型</span><strong>{region.climate}</strong></div>
      </div>
      <h3>代表人物</h3>
      <div className="tag-row">
        {region.notableCharacters.map((name) => <span key={name}>{name}</span>)}
      </div>
    </aside>
  );
}

export default RegionDetailPanel;
