import AccordianComponent from "./components/accordian";
import LoadProducts from "./components/load-more-products";
import NestedNavigationFeature from "./components/nav-tree";
import RandomColorGenerator from "./components/random-color-generator";
import Slider from "./components/slider";
import StarRating from "./components/star-rating";
import menu from "./components/nav-tree/data";
import QRCodeGenerator from "./components/qr-code-generator";
import ThemeFeature from "./components/light-dark-mode";
import ScrollFeature from "./components/scroll-feature";
import Tabs from "./components/tab-feature";
import TabsContent from "./components/tab-feature/tabs-Content";
import ModalMain from "./components/custom-modal/modal-main";

function App() {
  return (
    <>
      {/* <AccordianComponent />
      <RandomColorGenerator />
      <StarRating starNumber={10} />
      <Slider url={"https://picsum.photos/v2/list"} limit={"10"} page={1} /> */}
      {/* <LoadProducts /> */}
      {/* <NestedNavigationFeature list={menu} /> */}
      {/* <QRCodeGenerator /> */}
      {/* <ThemeFeature /> */}
      {/* <ScrollFeature url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* <TabsContent /> */}
      <ModalMain />
    </>
  );
}

export default App;
