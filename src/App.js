import { Provider } from "react-redux";
import IndexRouter from "./routes";
import "./styles/global.css";
import store from "./redux/store";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store} >
      <IndexRouter />
    </Provider>
  );
}

export default App;
