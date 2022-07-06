import { useState, useEffect, useRef } from "react";

export default function Carousel() {
  console.log("Carousel loaded");
  console.log(article);

  const [index, setIndex] = useState(0);

  const prevBtn = useRef(null);
  const nextBtn = useRef(null);

  const items = [];
  const indicators = [];
  function setItem(item) {
    items.push(item);
  }

  function setIndicator(indicator) {
    indicators.push(indicator);
  }

  let isDragging = false;
  let point = 0;
  let move = 0;

  useEffect(() => {
    navigateTo(index);
  });

  // 처음에 손가락으로 Carousel을 터치했을 때
  function start() {
    isDragging = true;
    point = e.pageX;
  }

  // 손가락으로 Carousel을 Drag하고 있을 때
  function working(e) {
    if (!isDragging) {
      return;
    }
    move = point - e.pageX;

    console.log(move);
  }

  // 손가락을 Carousel로부터 뗐을 때
  function end() {
    isDragging = false;

    if (move > 50 && index < items.length - 1) {
      setIndex(index + 1);
      return;
    }
    if (move < 50 && index > 0) {
      setIndex(index - 1);
      return;
    }
  }

  useEffect(() => navigateTo(index));

  function navigateTo(index) {
    items[0].style.marginLeft = `-${index * 100}%`;

    prevBtn.current.classList.add("active");
    nextBtn.current.classList.add("active");

    if (index === 0) {
      prevBtn.current.classList.remove("active");
    }
    if (index === items.length - 1) {
      nextBtn.current.classList.remove("active");
    }

    indicators.map((indicator) => {
      indicator.classList.remove("active");
    });
    indicators[index].classList.add("active");
  }

  return (
    <>
      <div className="relative">
        <div className="carousel">
          {article.photos.map((photo, index) => {
            <div key={index} className="item" ref={setItem}>
              <img src={`http://localhost:3000/posts/${photo}`}></img>
            </div>;
          })}
        </div>
        <div
          className="carousel-btn-group"
          onMouseDown={start}
          onMouseMove={working}
          onMouseUp={end}
          onMouseLeave={end}
        >
          <button
            className="carousel-btn-group"
            onClick={() => setIndex(index - 1)}
          >
            &#10094;
          </button>
          <button
            className="carousel-btn-group"
            onClick={() => setIndex(index + 1)}
          >
            &#10094;
          </button>
        </div>
      </div>
      <div className="carousel-indicator my-2">
        {article.photos.map((photo, index) => {
          <span className="dot" key={index} ref={setIndicator} />;
        })}
      </div>
    </>
  );
}
