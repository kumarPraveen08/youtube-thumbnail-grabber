import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="version">Version - 0.0.1</div>
      <div className="copyright">{new Date().getFullYear()}</div>
    </div>
  );
}
