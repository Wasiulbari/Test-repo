
import './Style.css';

const Country = (props) => {
  // eslint-disable-next-line react/prop-types
  console.log(props.country);
  // After Destructuring
  const {area,population,name,flags} = props.country
  
    return (
      <>
        <div className="country-css">
          <h2>Name: {name.common}</h2>
          <img src={flags.png}/> 
          <h3>population:{population}</h3>
          <p>
            <small> Area: {area}</small>
          </p>
        </div>

        {/* Before Destructuring */}

        {/* <div
          style={{
            backgroundColor: "pink",
            borderRadius: "30px",
            color: "brown",
            margin: "20px",
            padding: "10px",
          }}
        >
          <h2>Name: {props.country.name.common}</h2>
          <h3>population:{props.country.population}</h3>
          <p>
            {" "}
            <small> Area: {props.country.area}</small>
          </p>
        </div> */}
      </>
    );
    
};

export default Country;