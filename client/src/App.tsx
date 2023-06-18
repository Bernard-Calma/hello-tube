import './App.css';
import Header from './components/Header/Header';
import Main from './views/Main/Main';

const App: React.FC = () => {
  return(
    <div className='App'>
      <Header />
      <Main />
    </div>
  )
}

export default App;
