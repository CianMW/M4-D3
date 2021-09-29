import './App.css';
import WarningAlert from './components/WarningSign';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyBadge from './components/MyBadge';
import SingleBook from './components/SingleBook'
import BookList from './components/BookList';
import books from "./data/fantasy.json";

function App() {
  return (
    <div className="App">
      <WarningAlert comment='You have an error!'/>
      <MyBadge color="success" string="Here's a Random Book!"/>
      <SingleBook book={books[Math.floor(Math.random() * books.length)]}/>
      <BookList/>
      
    </div>
  );
}

export default App;
