function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="section-title">
      {eyebrow && <p>{eyebrow}</p>}
      <h2>{title}</h2>
      {children && <span>{children}</span>}
    </div>
  );
}

export default SectionTitle;
