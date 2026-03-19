import React, { useState } from 'react';
import './Country.css' ;

const Country = ({country , handleVisitedCountries , handleVisitedFlags}) => {
    // console.log(country.area.area);
    console.log(handleVisitedCountries);

    const [visited, setVisited] = useState(false);

    // event handler
    const handleVisited = () =>{

        // first system (basic system)
        /*
        if(visited){
            setVisited(false) ;
        }
        else{
            setVisited(true) ;
        }
        */

        // second system
        // setVisited(visited ? false : true) ;

        // third system
        setVisited(!visited) ;

        handleVisitedCountries(country);
    }

    return (

        // <div className={`countrty ${visited ? 'country-visited' : 'country-not-visited'}`}>

        <div className={`country ${visited && 'country-visited'}`}>

            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt}/>
            <h3>Name : {country.name.common}</h3>
            <p>Population : {country.population.population}</p>
            <p>Capital : {country.capital.capital}</p>

            <p>Area : {country.area.area} {
                country.area.area > 300000 ? "Big Countrty" : "Small Country"}
            </p>

            <button className='btn' onClick={handleVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>

            <button className='btn' onClick={()=> {handleVisitedFlags(country?.flags?.flags?.png)}}>Add Visited Flag</button>

        </div>
    );
};

export default Country;


/**
 * 1. inline css (style object)
 */