import React from 'react'
import Data from './Data'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Testimonial() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2, // Adjust settings for medium screens
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 740,
            settings: {
              slidesToShow: 1, // Adjust settings for small screens
              slidesToScroll: 1,
            },
          },
        ],
      };
    return(
<div className="w-3/4 m-auto">
      <h1 className="text-5xl text-center text-yellow-800 ">Testimonials</h1>
      <p className="underline text-xl text-center text-black-800">What our User's are saying?</p>
      <div className="mt-20">
      <Slider {...settings}>
        {Data.map((d) => (
          <div className="p-4 mr-20 border-2 rounded-80px border-solid border-yellow-800 rounded-xl bg-white">
            <div className="text-yellow-900 w-full h-800">
              <p className="mt-5 font-display">{d.review}</p>
            </div>
              
            <div>
              <img src={d.img} alt="" className=" border-4 rounded-80px border-solid border-yellow-800 h-13 w-24 rounded-full ml-2 mt-2"/>
              <p className="font-bold mb-2 text-2xl text-right mr-10 text-yellow-900">{d.name}</p>
            </div>
          </div>
        ))}
        </Slider>
      </div>
    </div>
   );
 }
export default Testimonial;