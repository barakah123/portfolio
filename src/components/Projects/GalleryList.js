import React from "react";
import PastWork from ".";


const GalleryList= ({ gallery}) => {
    
    return (
        <div>
        {
            gallery.map((user, i) => {
                return (
                <PastWork
                key={i} 
                id={gallery[i].id} 
                name={gallery[i].name} 
                click={gallery[i].click} 
                image={gallery[i].image}
                />
                );
            })
        }
        </div>

    );
}

export default GalleryList;