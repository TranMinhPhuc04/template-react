import { useLocation } from "react-router-dom";

const PhuKien = () => {
  const location = useLocation();
  console.log(location);

  return <div>PhuKien</div>;
};

export default PhuKien;
