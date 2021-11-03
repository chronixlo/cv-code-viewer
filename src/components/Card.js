export default function Card({ title, children, className = "", ...rest }) {
  return (
    <div className={"card " + className} {...rest}>
      <h1>{title}</h1>

      <div className="card-content" style={{ backgroundColor: "#70FFD319" }}>
        {children}
      </div>
    </div>
  );
}
