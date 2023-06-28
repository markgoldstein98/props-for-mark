import './App.css';

import Header from'./components/Header'
import IntroductionCard from './components/IntroductionCard';

export function App() {
  const logoName = "Mark Abraham Goldstein"

  const name = "Mark";
  const school = "CodeCool";
  const age = 24;
  const hobbyList = ["karate", "surfing", "cycling"];
  

  return (
    <div className="App">
      <Header logo={logoName}/>
      <IntroductionCard name={name} school= {school} age={age} hobbyList={hobbyList} eyeColor='grey' hairColor='brown' height= {172}/>
    </div>
  );
    

}


