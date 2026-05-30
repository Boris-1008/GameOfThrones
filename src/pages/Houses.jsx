import { useState } from 'react';
import HouseCard from '../components/HouseCard.jsx';
import HouseDetailPanel from '../components/HouseDetailPanel.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import { houses } from '../data/houses.js';

function Houses() {
  const [selectedHouse, setSelectedHouse] = useState(houses[0]);

  return (
    <section className="page-section page-top">
      <SectionTitle eyebrow="勢力中心" title="主要家族">
        每個家族以身分特色、所在地、格言與代表成員呈現，方便快速比較。
      </SectionTitle>
      <div className="split-layout">
        <div className="card-grid narrow">
          {houses.map((house) => (
            <HouseCard
              key={house.id}
              house={house}
              isActive={selectedHouse.id === house.id}
              onSelect={setSelectedHouse}
            />
          ))}
        </div>
        <HouseDetailPanel house={selectedHouse} />
      </div>
    </section>
  );
}

export default Houses;
