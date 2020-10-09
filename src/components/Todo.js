
import React from 'react'


const Todo = () => {
    return (
    <div className="container card">
<div className="row">
    {/*_________________Titre de la Card______________________*/}

        <div className="card-header">
            <h2 className="card-title mt-1 ">Titre de la Carte<span className="badge rounded-pill bg-secondary mx-4 font-weight-light">category badge</span></h2>
            <p className="">date</p>
        </div>
    {/*_____________Description de la Card__________________*/}

        <div className="card-body col">
                <p className="card-text"> <u>card Description</u> :

  Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.

 </p>
        </div>
    {/* ________Edit Task Button________ */}

        <div className="card-footer btn-group  ">
            <button
            className="btn  btn-sm btn-outline-dark  "
            type="button">
                Rétablir
            </button>

            <button
            className="btn btn-outline-success btn-sm "
            type="button">
                Terminer
            </button>

            <button
            className="btn btn-outline-danger btn-sm "
            type="button">
                Supprimer
            </button>
            </div>
        </div>
    </div>
    )



}



export default Todo