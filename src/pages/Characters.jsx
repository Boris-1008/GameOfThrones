import { useMemo, useState } from 'react';
import CharacterCard from '../components/CharacterCard.jsx';
import CharacterDetailModal from '../components/CharacterDetailModal.jsx';
import FilterBar from '../components/FilterBar.jsx';
import SearchBar from '../components/SearchBar.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import { characters } from '../data/characters.js';

function Characters() {
  const [query, setQuery] = useState('');
  const [house, setHouse] = useState('all');
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const houses = useMemo(() => [...new Set(characters.map((character) => character.house))], []);

  const filteredCharacters = characters.filter((character) => {
    const matchesQuery = `${character.name} ${character.title} ${character.tags.join(' ')}`
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesHouse = house === 'all' || character.house === house;
    return matchesQuery && matchesHouse;
  });

  return (
    <section className="page-section page-top">
      <SectionTitle eyebrow="人物索引" title="主要人物">
        可依姓名、身分或特徵搜尋，也能用家族篩選，點擊卡片查看世界觀重點。
      </SectionTitle>
      <div className="toolbar">
        <SearchBar value={query} onChange={setQuery} placeholder="Jon、龍、北境..." />
        <FilterBar label="家族" value={house} onChange={setHouse} options={houses} />
      </div>
      <div className="card-grid">
        {filteredCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} onSelect={setSelectedCharacter} />
        ))}
      </div>
      {filteredCharacters.length === 0 && <p className="empty-state">找不到符合條件的人物。</p>}
      <CharacterDetailModal character={selectedCharacter} onClose={() => setSelectedCharacter(null)} />
    </section>
  );
}

export default Characters;
