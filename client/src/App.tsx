import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';

const App = () => {
  return(
    <div className='App'>
      <Header />
      <main>
        <Navigation />
      </main>
    </div>
  )
}

export default App;
