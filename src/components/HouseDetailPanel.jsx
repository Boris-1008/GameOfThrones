function HouseDetailPanel({ house }) {
  return (
    <aside className="detail-panel" style={{ '--accent': house.colorTheme }}>
      <p className="card-kicker">家族資料</p>
      <img className="house-banner" src={house.image} alt={`${house.name} 旗幟`} />
      <h2>{house.name}</h2>
      <blockquote>{house.motto}</blockquote>
      <p>{house.description}</p>
      <div className="detail-grid compact">
        <div><span>根據地 / 地區</span><strong>{house.region}</strong></div>
        <div><span>象徵</span><strong>{house.symbol}</strong></div>
      </div>
      <h3>主要成員</h3>
      <div className="tag-row">
        {house.notableMembers.map((member) => <span key={member}>{member}</span>)}
      </div>
    </aside>
  );
}

export default HouseDetailPanel;
