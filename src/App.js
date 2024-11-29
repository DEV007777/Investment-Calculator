import Header from './components/header';
import UserInput from './components/UserInput';
import { useState } from 'react';
import Results from './components/Results';



function App() {
  const [Userinput, setUserinput] = useState({
    initialInvestment :10000,
    annualInvestment : 1200, 
    expectedReturn : 6,
    duration :10
});


const inputValid =Userinput.duration > 0;

function handleChange(inputIdentifier, newvalue) {
  setUserinput((prevInput) => {
    return { ...prevInput,
       [inputIdentifier]: +newvalue };
  });
}
  return (
    <>
    <Header />
    <UserInput Userinput={Userinput} onChange={handleChange} />
    {!inputValid && (
      <p className='center'>Enter Duration more than zero</p>
    )}
   {inputValid && <Results  input={Userinput}/>}

     </>
   
    
  )
}

export default App