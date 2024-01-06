import { Provider } from "react-redux";
import IndexRouter from "./routes";
import "./styles/global.css";
import store from "./redux/store";
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const persistor = persistStore(store)

function App() {
  return (
    <Provider store={store} >
      <PersistGate persistor={persistor} >
        <IndexRouter />
      </PersistGate>
    </Provider>
  );
}

export default App;
