import React from "react";
import './ImageCarousel.css'

const slides = [
    {
        title: "First Image",
        subtitle: "First one",
        description: "Lorem Ipsum",
        image: "https://picsum.photos/id/1/200/300"
      },
      {
        title: "Second Image",
        subtitle: "Secoond one",
        description: "Lorem Ipsum",
        image: "https://picsum.photos/id/10/200/300"
      },
      {
        title: "Third Image",
        subtitle: "Third one",
        description: "Lorem Ipsum",
        image: "https://picsum.photos/id/100/200/300"
      },
      {
        title: "Fourth Image",
        subtitle: "Fourth one",
        description: "Lorem Ipsum",
        image: "https://picsum.photos/id/1000/200/300"
      }
  ];
    
    
    
    function useTilt(active) {
      const ref = React.useRef(null);
    
      React.useEffect(() => {
        if (!ref.current || !active) {
          return;
        }
    
        const state = {
          rect: undefined,
          mouseX: undefined,
          mouseY: undefined };
    
    
        let el = ref.current;
    
        const handleMouseMove = e => {
          if (!el) {
            return;
          }
          if (!state.rect) {
            state.rect = el.getBoundingClientRect();
          }
          state.mouseX = e.clientX;
          state.mouseY = e.clientY;
          const px = (state.mouseX - state.rect.left) / state.rect.width;
          const py = (state.mouseY - state.rect.top) / state.rect.height;
    
          el.style.setProperty("--px", px);
          el.style.setProperty("--py", py);
        };
    
        el.addEventListener("mousemove", handleMouseMove);
    
        return () => {
          el.removeEventListener("mousemove", handleMouseMove);
        };
      }, [active]);
    
      return ref;
    }
    
    const initialState = {
      slideIndex: 0 };
    
    
    const slidesReducer = (state, event) => {
      if (event.type === "NEXT") {
        return {
          ...state,
          slideIndex: (state.slideIndex + 1) % slides.length };
    
      }
      if (event.type === "PREV") {
        return {
          ...state,
          slideIndex:
          state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1 };
    
      }
    };
    
    function Slide({ slide, offset }) {
      const active = offset === 0 ? true : null;
      const ref = useTilt(active);
    
      return /*#__PURE__*/(
        React.createElement("div", {
          ref: ref,
          className: "slide",
          "data-active": active,
          style: {
            "--offset": offset,
            "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1 } }, /*#__PURE__*/
    
    
        React.createElement("div", {
          className: "slideBackground",
          style: {
            backgroundImage: `url('${slide.image}')` } }), /*#__PURE__*/
    
    
        React.createElement("div", {
          className: "slideContent",
          style: {
            backgroundImage: `url('${slide.image}')` } }, /*#__PURE__*/
    
    
        React.createElement("div", { className: "slideContentInner" }, /*#__PURE__*/
        React.createElement("h2", { className: "slideTitle" }, slide.title), /*#__PURE__*/
        React.createElement("h3", { className: "slideSubtitle" }, React.createElement("a", { href:"https://www.google.com/", target: "__blank"}, slide.subtitle)), /*#__PURE__*/
        React.createElement("p", { className: "slideDescription" }, slide.description)))));
    
    }
    
export default function ImageCarousel() {
      const [state, dispatch] = React.useReducer(slidesReducer, initialState);
    
      return /*#__PURE__*/(
        React.createElement("div", { className: "container slidecontainer" }, /*#__PURE__*/
        React.createElement("div", { className: "slides" }, /*#__PURE__*/
        React.createElement("button", { onClick: () => dispatch({ type: "PREV" }) }, "\u2039"),
    
        [...slides, ...slides, ...slides].map((slide, i) => {
          let offset = slides.length + (state.slideIndex - i);
          return /*#__PURE__*/React.createElement(Slide, { slide: slide, offset: offset, key: i });
        }), /*#__PURE__*/
        React.createElement("button", { onClick: () => dispatch({ type: "NEXT" }) }, "\u203A"))));
    
    }