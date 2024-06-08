import React, { useState } from 'react';

function FilterPanel() {
    const [isHide, setIsHide] = useState(false)
    function hideFilters(){
        if (isHide){
            document.querySelector('#hideButton').innerHTML = `
                <img src="https://cdn-icons-png.flaticon.com/512/54/54833.png"/>
            `
            document.querySelector('.filter-panel').style.minHeight = `40px`
            document.querySelector('.filter-panel').style.marginTop = `32px`
            setIsHide(false)
        }else{
            document.querySelector('#hideButton').innerHTML = `
            <img src="https://cdn-icons-png.flaticon.com/512/54/54785.png"/>
            `
            document.querySelector('.filter-panel').style.minHeight = `400px`
            document.querySelector('.filter-panel').style.marginTop = `392px`
            setIsHide(true)
        }
    }

    return ( <div className='filter-panel'>
        <button onClick={() => hideFilters()} id='hideButton'>
            <img src="https://cdn-icons-png.flaticon.com/512/54/54833.png"/>
        </button>
        <span>Фильтры</span>
    </div> );
}

export default FilterPanel;