import './App.css';
import Parallax from './components/parallax';
import BasicGSAP from './components/BasicGSAP';
import CursorFramer from './components/CursorFramer';
import DragFramer from './components/DragFramer';
import HorizontalScroll from './components/HorizontalScroll';
import UseScrollarFramer from './components/UseScrollarFramer';
import TextOnScroll from './components/TextOnScroll';
import GsapScrollTrigger from './components/GsapScrollTrigger';

function App() {
  return (
    <>
    <BasicGSAP></BasicGSAP>
    <Parallax></Parallax>
    <CursorFramer></CursorFramer>
    <DragFramer></DragFramer>
    <HorizontalScroll></HorizontalScroll>
    <UseScrollarFramer></UseScrollarFramer>
    <TextOnScroll></TextOnScroll>
    <GsapScrollTrigger></GsapScrollTrigger>
    </>
  );
}

export default App;
