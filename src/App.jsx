import './App.css';

import Header from'./components/Header'
import IntroductionCard from './components/IntroductionCard';
import Footer from './components/Footer';

export function App() {

  const todaysDate = "2023-06-28"
  const logoName = "Mark Abraham Goldstein"

  const name = "Mark";
  const school = "CodeCool";
  const age = 24;
  const hobbyList = ["karate", "surfing", "cycling"];
  


  return (
    <div className="App">
      <Header logo={logoName}/>
      <IntroductionCard name={name} school= {school} age={age} hobbyList={hobbyList} eyeColor='grey' hairColor='brown' height= {172}/>
      <IntroductionCard name= "Daria" school = "Elte" age = {27} hobbyList={["Eating, Buildering"]} eyeColor={"brown"} hairColor={"brown"} height={170} />
      <Footer todaysDate={todaysDate} />
    </div>
  );
    

}


