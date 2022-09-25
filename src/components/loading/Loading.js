import Box from "../utils/Box";
import "./loading.css";

export default function Loading({ message }) {
  return (
    <div className={"backdrop"}>
      <div className={"loadingContainer"}>
        <div className="load load1"></div>
        <Box width="15" />
        <div className="load load2"></div>
        <Box width="15" />
        <div className="load load3"></div>
        <Box width="15" />
        <div className="load load4"></div>
      </div>
      <Box height="20" />
      <div className={"message subtitle"}>{message}</div>
    </div>
  );
}
