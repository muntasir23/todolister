import { Provider } from "react-redux";
import "./App.css";
import Nav from "./components/Nav";
import store from "./redux/store";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

function App() {
  return (
    <Provider store={store}>
      <Nav />
      <div className="w-[100%] grid place-items-center">
        <div className="md:w-[900px] w-[95%] rounded shadow-md p-3 bg-white md:mt-[100px] mt-[60px]">
          <TodoHeader />
          <TodoList />
          <TodoFooter />
        </div>
      </div>
    </Provider>
  );
}

export default App;
