import "./filled_button.css";

function FilledButton({ text, onclick, classes = "" }) {
  return (
    <>
      <div className={`fil-btn ${classes}`} onClick={onclick}>
        <p className="btn-txt">{text}</p>
      </div>
    </>
  );
}

export default FilledButton;
