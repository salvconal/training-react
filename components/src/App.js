
import './App.css';
import Welcome from './components/Welcome';


function App() {
  let today = new Date(Date.now()).toLocaleDateString();
  return (
    <div className="main">
      <Welcome name="Salva" today={today} >Hola </Welcome>
      <Welcome name="Jane" today={today}> </Welcome>
      <Welcome name="World"today={today} > </Welcome>

    </div>
  );
}

export default App;
