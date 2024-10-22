import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

// images
import blewbo from "./../../assets/images/slider/blewbo.png";
import duronn from "./../../assets/images/slider/duronn.png";
import korsgy from "./../../assets/images/slider/korsgy.png";
import knt from "./../../assets/images/slider/ktn.png";
import lingo from "./../../assets/images/slider/lingo.png";
import ogc from "./../../assets/images/slider/ogc.png";
import sethex from "./../../assets/images/slider/sethex.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <MdArrowForwardIos
      size={40}
      className={className}
      style={{ color: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <MdArrowBackIos
      size={40}
      className={className}
      style={{ color: "black" }}
      onClick={onClick}
    />
  );
}

const PartnerLogoSlider = () => {
  const images = [
    { url: "https://korsgy.com", logo: korsgy },
    { url: "https://sethex.com", logo: sethex },
    { url: "#", logo: lingo },
    { url: "#", logo: ogc },
    { url: "https://blewbo.com", logo: blewbo },
    { url: "#", logo: knt },
    { url: "https://duronn.com", logo: duronn },
  ];
  let setting = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="p-2 lg:p-8 px-12 ">
      {" "}
      <Slider {...setting}>
        {images.map((i, index) => (
          <a href={i.url} target="_blank" rel="noreferrer">
            <span className="" key={index}>
              {" "}
              <img src={i.logo} alt={i.url} className="w-[7rem] md:w-[8rem]" />
            </span>
          </a>
        ))}
      </Slider>
    </div>
  );
};
export default PartnerLogoSlider;
