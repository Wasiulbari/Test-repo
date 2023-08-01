import  { useEffect, useState } from 'react';
import Country from './Country';
import './Style.css';

const RestCountries = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
      fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => setCountries(data));
    }, []);

  

    return (
      <div >
        {/* short way */}
        <h1> Rest Countries</h1>
        <h3> Countries:{countries.length} </h3>
        <div className="country-container">
          {countries.map((country) => ( 
            <Country key={country.car.ccn3} country={country}></Country>
            
          ))}
        </div>
      </div>
    );
};

  
//     return (
//       <div>
//         <h2> Rest Countries</h2>
//         <h3> Countries:{countries.length} </h3>
//         {countries.map((country) => (
//           <Country 
//           name={country.name.common} 
//           population={country.population}
//           area = {country.area}
//           ></Country>))}
//       </div>
//     );
// };



export default RestCountries;