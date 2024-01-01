import { Provider } from "react-redux";
import IndexRouter from "./routes";
import "./styles/global.css";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store} >
      <IndexRouter />
    </Provider>
  );
}

export default App;
