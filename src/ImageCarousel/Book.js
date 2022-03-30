import React from "react";
import HTMLFlipBook from "react-pageflip";
import './Book.css'


const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className={"page page-cover "+props.className} ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  return (
    <div className={"page " + props.className+ " " + props.className+props.number} ref={ref} data-density="soft">
      <div className="page-content">
        <h2 className="page-header">{props.header}</h2>
        <div className="page-image"><img src={props.image} className="page-image-img" alt={props.alt}/></div>
        <div className="page-text">{props.children}</div>
      </div>
    </div>
  );
});

class Book extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      totalPage: 0,
    };
  }

    

  render() {
    return (
        <HTMLFlipBook
          width={550}
          height={733}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          className="demo-book"
          ref={(el) => (this.flipBook = el)}
        >

          <PageCover className="BookCover1" number={1}></PageCover>
          <Page number={1} className="BookPage" header="Platform" image="https://picsum.photos/1920/1080" alt="Platform">Specially designed for the competition by our Web Development Team</Page>
          <Page number={2} className="BookPage" header="Real-time Chat" image="https://picsum.photos/1920/1080" alt="RealTimeChat">Real-time chat with lobby members</Page>
          <Page number={3} className="BookPage" header="Screenshare Controlled Rooms" image="https://picsum.photos/1920/1080" alt="ScreenShare">Screen shared controlled rooms to maintain the integrity of the competition</Page>
          <Page number={4} className="BookPage" header="Selected Authentication" image="https://picsum.photos/1920/1080" alt="Authentication">Controlled access to the platform based on provided credentials</Page>
          <Page number={5} className="BookPage" header="Head-to-Head Coding Arena" image="https://picsum.photos/1920/1080" alt="CodingArena">Coding arena to pair teams of the same year for competing</Page>
          <Page number={6} className="BookPage" header="Intuitive User Interface" image="https://picsum.photos/1920/1080" alt="UserInterface">An intuitive user interface to help you get started without any hassles</Page>
          <PageCover className="BookCover2" number={2}></PageCover>

        </HTMLFlipBook>
    );
  }
}

export default Book;
