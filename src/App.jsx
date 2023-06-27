import './App.css';

import Header from'./components/Header'

export function App() {
  const logoName = "Best Dog Ever"

  const name = "My Name";
  const school = "My School";
  const age = "my age";
  const hobbyList = ["hobby1", "hobby2"];

  return (
    <div className="App">
      <Header logo={"Mark"}/>
    </div>
  );
}


