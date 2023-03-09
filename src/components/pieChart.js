import React, { useState, useRef, useEffect} from 'react';
import Chart from 'chart.js/auto';

const PieChart = (props) => {
    const {countries} = props;
    
    useEffect(() => {
        // Remaining probability
        if(countries!==''){
            // Getting labels properties from countries object and pushing into array
            let countriesLabels = [];
            countries.forEach((country)=>{
                countriesLabels.push(country.country_name)
            });
            countriesLabels.push('Elsewhere');

            // Getting Probabilities from countries objects and pushing into array
            let probabilitiesLabels = [];
            countries.forEach((country)=>{
                probabilitiesLabels.push(country.probability)
            })
            // Getting remaining probabilities by subtracting sum of previous probabilities from 1.
            let remainingProbability = 1;
            countries.forEach((country)=>{
                remainingProbability = remainingProbability - country.probability
            })
            probabilitiesLabels.push(remainingProbability.toFixed(4))
            
            // Setting Background colours based on number of country items retrieved from API via switch statement.
            let backgroundColor;
            const amountObjects = countriesLabels.length
            switch (amountObjects) {
                case 6:
                    backgroundColor = ["#FF5678", "#05C8D4","#FFD056", "#87e59b", "#a36bff","#D3D3D3"]
                    break;
                case 5:
                    backgroundColor = ["#FF5678", "#05C8D4","#FFD056", "#87e59b","#D3D3D3"]
                    break;
                case 4:
                    backgroundColor = ["#FF5678", "#05C8D4","#FFD056", ,"#D3D3D3"]
                    break;
                case 3:
                    backgroundColor = ["#FF5678", "#05C8D4", ,"#D3D3D3"]
                    break;
                default:
                    break;
            }
            // Imported PieChart.JS
            let chartObject;
            chartObject = new Chart(document.getElementById('pie-chart'), {
              type: 'pie',
              data: {
                // Setting labels with labels defined above array
                labels: countriesLabels,
                datasets: [{
                    // Setting colors with colors defined above array
                  backgroundColor: backgroundColor,
                    // Setting probabiltiies with probabiltiies defined above array
                  data: probabilitiesLabels
                }]
              },
              options: {
                title: {
                  display: true,
                  text: 'Pie Chart'
                },
                responsive: true
              }   
            }); 
            // Cleanup function which removes chart, allowing new one to be created.
            return() =>{
                if(chartObject){
                    chartObject.destroy()
                }
            }

        }
      }, [countries]);


      
    return(
        <div className="pie-container">
            <canvas id="pie-chart"></canvas>
        </div>
    )
}

export default PieChart