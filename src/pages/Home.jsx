import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection.jsx';
import SectionTitle from '../components/SectionTitle.jsx';

const entryCards = [
  {
    title: '探索人物',
    text: '搜尋主要角色、依家族篩選，並查看人物的身分與關聯資訊。',
    to: '/characters',
  },
  {
    title: '認識家族',
    text: '透過格言、根據地、象徵與成員，快速比較各大家族勢力。',
    to: '/houses',
  },
  {
    title: '查看地區',
    text: '使用簡化互動地圖理解重要地區，以及它們和勢力的關係。',
    to: '/regions',
  },
];

function Home() {
  return (
    <>
      <HeroSection />
      <section className="page-section">
        <SectionTitle eyebrow="世界觀優先" title="更快進入 Westeros 的方式">
          本專題聚焦人物、家族、地區與簡單關係，不把八季劇情完整重述，讓展示更清楚。
        </SectionTitle>
        <div className="entry-grid">
          {entryCards.map((card) => (
            <Link className="entry-card" to={card.to} key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
