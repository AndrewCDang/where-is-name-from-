import React, { useEffect } from 'react';

const Transitions = () =>{
    // Use effect ran only once due to empty array. Event listener that opens up content on first load.
    useEffect(() =>{
        const element = document.getElementsByClassName('Aside-section')[0];
          // Adding class list which expands content by setting max-height from '0px' to '700px'
          function expandSection() {
            element.classList.add('data-expand')
          }
          // Create on click even listener to trigger expand function
          document.querySelector('.input-btn').addEventListener('click', function() {              
              expandSection()
          });
    },[])
    
    return null;
    
}
export default Transitions;


