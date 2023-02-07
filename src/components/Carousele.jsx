import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousele.css";

import { images } from "./Data";
import { Button, Card } from "react-bootstrap";
import { useState } from "react";

import ModalDialog from "./Modal/Modal";

export default function Carousel({ historyRecords }) {
  const [modalShow, setModalShow] = useState(false);
  const [item, setItem] = useState();

  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakPoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleClick = (i) => {
    setModalShow(true);
    setItem(i);
  };
  return (
    <div className="cur">
      <h1>Awesome React Carousel Animation</h1>
      <div className="carousel">
        <Slider {...settings}>
          {historyRecords?.map((item) => (
            <Card style={{ width: "25rem" }}>
              <Card.Body>
                <Card.Title class="text-warning">{item.url}</Card.Title>
                <Card.Text class="text-primary">{item.method}</Card.Text>
                <Button
                  className="general-btn "
                  onClick={() => {
                    handleClick(item);
                  }}
                >
                  Results
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Slider>
      </div>
      {modalShow && (
        <ModalDialog
          show={modalShow}
          onHide={() => setModalShow(false)}
          item={item}
        />
      )}
    </div>
  );
}
