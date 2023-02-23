import "./App.css";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import CounterReducer from "./components/CounterReducer";
import Navbar from "./components/Navbar";
import BookContextProvider from "./context/BookContext";

function App() {
  return (
    <div className="App">
      <br />
      <CounterReducer />

      <BookContextProvider>
        <Navbar />
        <BookList />
        <br />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
