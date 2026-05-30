import { useState } from 'react';
import RegionDetailPanel from '../components/RegionDetailPanel.jsx';
import RegionMap from '../components/RegionMap.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import { regions } from '../data/regions.js';

function Regions() {
  const [activeRegion, setActiveRegion] = useState(regions[0]);

  return (
    <section className="page-section page-top">
      <SectionTitle eyebrow="互動地圖" title="地區與據點">
        點擊地圖標記，查看地區、主要勢力與代表人物之間的關聯。
      </SectionTitle>
      <div className="map-layout">
        <RegionMap regions={regions} activeRegion={activeRegion} onSelect={setActiveRegion} />
        <RegionDetailPanel region={activeRegion} />
      </div>
    </section>
  );
}

export default Regions;
