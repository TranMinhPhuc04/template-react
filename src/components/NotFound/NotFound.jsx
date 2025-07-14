import { NavLink, useNavigate } from "react-router-dom";
import { PATH_APP } from "../../routes/path";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Trang này không có</h2>
      <p>Xin lỗi, trang bạn tìm kiếm không tồn tại.</p>

      {/* <a href="/">Quay lại trang chủ</a> */}

      <button onClick={() => navigate("/")}>Quay lại trang chủ</button>

      <br />

      <NavLink to={PATH_APP.homePage}>Bấm về trang chủ</NavLink>
    </div>
  );
};

export default NotFound;
