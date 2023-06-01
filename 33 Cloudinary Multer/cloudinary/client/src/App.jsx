import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { postSlider, getAllSliders } from "./api/requests";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllSliders().then((res) => {
      setData(res);
    });
  }, []);

  function upload() {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", selectedImage);
    formData.append("upload_preset", "xl2ozohe");
    axios
      .post("https://api.cloudinary.com/v1_1/dlytnxzbx/image/upload", formData)
      .then((res) => {
        const newSlider = {
          name: name,
          url: res.data.secure_url,
        };
        postSlider(newSlider);
        setData([...data, newSlider]);
        setName("");
        setLoading(false);
      });
  }
  return (
    <>
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              upload();
            }}
          >
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              type="text"
              placeholder="slider name"
            />
            <input
              onChange={(e) => {
                setSelectedImage(e.target.files[0]);
              }}
              type="file"
            />
            <button type="submit">add</button>
          </form>
          <Swiper
            className="mySwiper"
            // loop={true}
            autoplay={{
              delay: 1000,
            }}
            navigation={true}
            modules={[Autoplay]}
          >
            {data &&
              data.map((item) => {
                return (
                  <SwiperSlide key={item._id}>
                    <img
                      style={{
                        width: "100%",
                        height: " 100%",
                        objectFit: "cover",
                      }}
                      src={item.url}
                      alt={item.name}
                    />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </>
      )}
    </>
  );
}

export default App;
