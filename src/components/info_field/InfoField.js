import Box from "../utils/Box";
import "./info_field.css";

function InfoField({ id, label, value, classes }) {
  return (
    <>
      <div className={`info-container ${classes}`}>
        <label className="info-label subtitle-text" htmlFor={id}>
          {label}
        </label>
        <Box height="15" />

        <p className="common-text">{value}</p>
      </div>
    </>
  );
}

export default InfoField;
