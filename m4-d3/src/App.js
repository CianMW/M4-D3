import './App.css';
import WarningAlert from './components/WarningSign';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyBadge from './components/MyBadge';
import SingleBook from './components/SingleBook'
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <WarningAlert comment='You have an error!'/>
      <MyBadge color="danger" string="Hello There!"/>
      <BookList/>
      
    </div>
  );
}

export default App;
