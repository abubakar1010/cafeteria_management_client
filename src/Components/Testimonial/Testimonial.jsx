import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import axios from "axios";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/reviews")
      .then((res) => setReviews(res.data));
  }, []);
  //   console.log(reviews);

  return (
    <>
      <SectionTitle
        heading={"TESTIMONIALS"}
        subHeading={"What Our Clients Say"}
      />

      <div className=" mb-28">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {reviews.map((item) => (
            <SwiperSlide key={item._id}>
              <div className=" flex flex-col justify-center gap-5 items-center my-12 ">
                <Rating style={{ maxWidth: 180 }} value={item.rating} readOnly />
                <div className=" flex">
                    <BiSolidQuoteSingleLeft className=" text-6xl" />
                    <BiSolidQuoteSingleLeft className=" text-6xl -ml-6 " />
                    </div>
                <p className=" max-w-2xl text-center mt-6">{item.details}</p>
                <p className=" text-[#CD9003] uppercase font-medium text-lg ">{item.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Testimonial;
