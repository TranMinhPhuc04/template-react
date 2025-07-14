import Input from "antd/es/input/Input";
import { Button } from "antd/es/radio";
import { useEffect } from "react";
import {
  useLocation,
  useNavigate,
  useSearchParams,
  NavLink,
} from "react-router-dom";

const arrQueryParams = [
  {
    name: "ram",
    value: "16gb",
  },
  {
    name: "kichthuocmanhinh",
    value: "45inch",
  },
  {
    name: "cpu",
    value: "15",
  },
  {
    name: "trangthai",
    value: "conhang",
  },
];

const HomePage = () => {
  const locationData = useLocation();
  const navigate = useNavigate();
  console.log(locationData);

  const [searchParams, setSearchParams] = useSearchParams(
    "?ram=16gb&kichthuocmanhinh=45inch&cpu=50gb"
  );

  const nhuCauSuDung = searchParams.get("nhucausudung");

  // useEffect
  // tham số đầu là call backfuc
  // tham số thứ 2 là mảng dependency

  useEffect(() => {
    setSearchParams((searchParams) => {
      // searchParams.set("ram", "16gb");
      // searchParams.set("kichthuocmanhinh", "45inch");

      // cách 2:
      for (let item of arrQueryParams) {
        searchParams.set(item.name, item.value);
      }

      return searchParams;
    });
  }, []);

  return (
    <div>
      <h2>Demo sử dụng useSearchParams</h2>
      <Input
        placeholder="Nhập gì đó để thay đổi giá trị của nhu cầu sử dụng"
        value={nhuCauSuDung}
        onChange={(event) =>
          setSearchParams((searchParams) => {
            searchParams.set("nhucausudung", event.target.value);
            return searchParams;
          })
        }
      />

      <NavLink></NavLink>

      <Button
        onClick={() => {
          navigate("phu-kien", {
            state: {
              email: "minhphuctn04@gmail.com",
              diaChi: "Q.Bình Thạnh",
            },
          });
        }}
      >
        {" "}
        Bấm vào tôi để đi tới trang phụ kiện{" "}
      </Button>
    </div>
  );
};

export default HomePage;
