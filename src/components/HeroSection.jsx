import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="eyebrow">互動式世界觀導覽</p>
        <h1>權力遊戲世界觀導覽</h1>
        <p>
          透過人物、家族、地區與基本關係，快速理解 Westeros 的世界觀。
          本站以 React 製作，適合作為期末專題展示。
        </p>
        <div className="hero-actions">
          <Link className="button primary" to="/characters">探索人物</Link>
          <Link className="button secondary" to="/regions">開啟地圖</Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
