import './css/App.css';
import Tabs from './components/Tabs.jsx';

function App() {

  const tabsName = [
    'About PokéBox',
    'Pokédex',
    'Build Team',
    'Membership Form',
    'Privacy Policy'
  ]

  return (
    <div className="app">
      <Tabs entries={tabsName}/>
    </div>
  );
}

export default App;
