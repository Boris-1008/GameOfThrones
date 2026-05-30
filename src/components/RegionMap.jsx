import mapImage from '../assets/westeros-map.svg';

function RegionMap({ regions, activeRegion, onSelect }) {
  return (
    <div className="map-shell">
      <img src={mapImage} alt="Westeros 與周邊地區的風格化奇幻地圖" />
      {regions.map((region) => (
        <button
          key={region.id}
          className={`map-marker ${activeRegion.id === region.id ? 'active' : ''}`}
          style={{ top: region.marker.top, left: region.marker.left }}
          onClick={() => onSelect(region)}
          aria-label={`顯示 ${region.name}`}
        >
          <span />
        </button>
      ))}
    </div>
  );
}

export default RegionMap;
