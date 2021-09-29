import './App.css';
import WarningAlert from './components/WarningSign';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyBadge from './components/MyBadge';

function App() {
  return (
    <div className="App">
      <WarningAlert comment='You have an error!'/>
      <MyBadge color="danger" string="Hello There!"/>
    </div>
  );
}

export default App;
