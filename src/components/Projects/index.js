import React from "react";


const PastWork = (props) => {
    return (
       
            <div className='container project-page'>
                 <h1>past work</h1>
            <div className= 'tc bg-light-blue dib br2 pa2 ma3 grow bw2 shadow-5'>
               
            <img className='w-70 h3' src={process.env.PUBLIC_URL + '/img/'+ props.image} alt='foodrecipes' />
            <div>
                <h2>{props.name}</h2>
                <p>{props.click}</p>
            </div>
            </div>
        </div>
            
       
    );
}

export default PastWork;
