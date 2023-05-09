import ShowAge from "./ShowAge"

function App() {
  let age = 21;
  function calculateInFiveYears(age){
      return age+5;
  }
  return (
    <>
      <ShowAge person={{name:'Johathan',age:24,surname:'Adam'}} calculateInFiveYears={calculateInFiveYears} name={'John'}  age={age} statusCode={'delivered'}/>
    </>
  )
}

export default App
