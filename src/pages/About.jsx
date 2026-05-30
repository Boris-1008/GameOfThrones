import SectionTitle from '../components/SectionTitle.jsx';

function About() {
  return (
    <section className="page-section page-top">
      <SectionTitle eyebrow="期末專題" title="關於本站">
        這是一個為課堂展示設計的 React 網站，包含結構化資料、可重用元件、Router 頁面與互動介面。
      </SectionTitle>
      <div className="about-grid">
        <article className="text-panel">
          <h3>專案目的</h3>
          <p>
            本站幫助使用者快速理解《權力遊戲》的世界觀，透過主要人物、家族與地區建立基本認識。
            重點是世界觀導覽，不是完整劇情回顧。
          </p>
        </article>
        <article className="text-panel">
          <h3>選題原因</h3>
          <p>
            作品中有大量人物、家族與地名，因此很適合用互動網站整理資訊，也能清楚展示前端開發能力。
          </p>
        </article>
        <article className="text-panel">
          <h3>使用技術</h3>
          <p>React、React Router、Vite、本地 JavaScript 資料檔、可重用元件與響應式 CSS。</p>
        </article>
        <article className="text-panel">
          <h3>展示功能</h3>
          <p>
            導覽列、人物搜尋、家族篩選、詳情視窗、家族資訊面板，以及可點擊的地區地圖。
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;
