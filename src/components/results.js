import React, { useState, useRef, useEffect} from 'react';

const Results = (props) =>{
    const {name, setCountries, countries} = props
    let countryData;

    useEffect(()=>{
    if(!name==''){
        getData();
    }
    // Async function to fetch data, calls upon function containing API that gets full country name. 
    async function getData(){
        try{
            const response = await fetch(`https://api.nationalize.io?name=${name}`)
            const data = await response.json();
            console.log(data)
            nameData(data);
        }catch(error){
            console.log(error)
        }
    }
    },[name])
    // Async function getting full name of country from country id code before.
    async function nameData(data){
            const setCountriesName = [];
            // Used for of loop, going through each object within the array, fetching full country names for each current id.
            for (const country of data.country) {
                try {
                  const nameResponse = await fetch(`https://restcountries.com/v2/alpha?codes=${country.country_id}`);
                  const nameData = await nameResponse.json();
                  country.country_name = nameData[0].name;
                  setCountriesName.push(country);
                } catch (error) {
                  console.log(error);
                }
              }
            // Once country names fully received and pushed to array, I set the state to this new list.
            setCountries(setCountriesName);
            console.log(countries)
    }
    return null;
}
export default Results;