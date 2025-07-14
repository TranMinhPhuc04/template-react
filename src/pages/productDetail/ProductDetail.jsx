import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation();
  console.log(location);

  return <div>ProductDetail</div>;
};

export default ProductDetail;
