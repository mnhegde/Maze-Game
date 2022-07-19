import "./Styles/App.css"
import Layout from './Components/Layout';
import {Provider} from "react-redux"
import app from "./Redux/algoStore"
function App() {
  return (
    <Provider store={app}>
      <div className="App">
        <Layout/>
      </div>
    </Provider>
    
  );
}

export default App;
