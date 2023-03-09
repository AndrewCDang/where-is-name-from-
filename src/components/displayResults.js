import React, { useState, useEffect} from 'react';

const DisplayResults = (props) =>{
    const {name, countries} = props;
    
    // Converting input name with capitalised letter by ammending first character and appending remaining characters using .slice.
    const displayName = name.charAt(0).toUpperCase() + name.slice(1);
    const vowels = ['A','E','I','O','U'];
    let callName = "a";
    vowels.forEach((vowel)=>{
        if(vowel==name.charAt(0).toUpperCase()){
            callName = 'an';
        }   
    });
    // Calculating remaining %probability using iteratively subracting values from 1 using forEach statement. 
    if(countries!==''){
        let remProbability = 1;
        countries.forEach((country)=>{
        remProbability -= country.probability
    })        
    // Objects nested below updated when 'name' and 'countries' state updated.
    return(
        <div className="country-countainer">
            <p className="text-14 gray-text">Where is {callName} {displayName} most likely located?</p>
            {countries.map((obj)=>(
            <div className="country-item">
                <p className="text-16 margin-0 country-item-obj">{obj.country_name}</p>
                <p className="text-20 bold margin-0 country-item-obj">{obj.probability}</p>
            </div>
            ))}
            <div className="country-item">
                <p className="text-16 margin-0 country-item-obj gray-text">Elsewhere</p>
                <p className="text-20 bold margin-0 country-item-obj gray-text">{remProbability.toFixed(3)}</p>
            </div>
        </div>
    )
    }else{
        return(
            <div className="country-countainer">
                <p className="text-14 gray-text">Where is Name most likely located?</p>
            </div>
        )
    }
}
export default DisplayResults;