import './App.css';
import Parallax from './components/parallax';
import BasicGSAP from './components/BasicGSAP';
import CursorFramer from './components/CursorFramer';
import DragFramer from './components/DragFramer';

function App() {
  return (
    <>
    <BasicGSAP></BasicGSAP>
    <Parallax></Parallax>
    <CursorFramer></CursorFramer>
    <DragFramer></DragFramer>
    </>
  );
}

export default App;
