
import './App.css';
import Main from './components/Main';
import Welcome from './components/Welcome';

function App() {
  let today = new Date(Date.now()).toLocaleDateString();
  return (
    <Main>
      <Welcome name="Salva" today={today} ></Welcome>
      <Welcome name="Jane" today={today}></Welcome>
      <Welcome name="World"today={today} ></Welcome>

    </Main>
  );
}

export default App;
