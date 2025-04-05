import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Departments = () => {
  const departmentsArray = [
    {
      name: "Pediatrics",
      imageUrl: "https://images.pexels.com/photos/6749771/pexels-photo-6749771.jpeg",
    },
    {
      name: "Orthopedics",
      imageUrl: "https://images.pexels.com/photos/5723874/pexels-photo-5723874.jpeg",
    },
    {
      name: "Cardiology",
      imageUrl: "https://southdenver.com/wp-content/uploads/2021/09/invasive-cardiology.jpg",
    },
    {
      name: "Neurology",
      imageUrl: "https://regionalneurological.com/wp-content/uploads/2019/12/AdobeStock_172813720.jpeg",
    },
    {
      name: "Oncology",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReWh46eZ0Y0cNkd1doTfXdsyhkrxyaTe9_SQ&s",
    },
    {
      name: "Radiology",
      imageUrl: "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-zNLuIvNNZxzZojrVsf77CLVtvdhVkM0A6A&s",
    },
    {
      name: "Physical Therapy",
      imageUrl: "https://www.saaolorthocare.com/assets/images/EXERCISE_THERAPY_1.jpg",
    },
    {
      name: "Dermatology",
      imageUrl: "https://kvthospitals.in/wp-content/uploads/sites/45/2024/07/Dermatology.jpg",
    },
    {
      name: "ENT",
      imageUrl: "	https://www.nhrcc.in/wp-content/uploads/2023/07/ent.jpg",
    },
  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div className="container departments">
        <h2>Departments</h2>
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={[
            // "superLargeDesktop",
            // "desktop",
            "tablet",
            "mobile",
          ]}
        >
          {departmentsArray.map((depart, index) => {
            return (
              <div key={index} className="card">
                <div className="depart-name">{depart.name}</div>
                <img src={depart.imageUrl} alt="Department" />
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Departments;
