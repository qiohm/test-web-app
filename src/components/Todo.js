
import React from 'react'


const Todo = () => {
    return (
    <div className=" container card shadow m-1  mx-auto">
<div className="row">
    {/*_________________Titre de la Card______________________*/}

        <div className="card-header">
            <h2 className="card-title mt-1 ">Titre de la Tâche : Lose Anger<span className="badge rounded-pill bg-secondary mx-4 font-weight-light">todo category</span></h2>
            <p className="">date : today</p>
        </div>
    {/*_____________Description de la Card__________________*/}

        <div className="card-body col">
                <p className="card-text"> <u>todo description</u> :

                The first drawback of anger is that it destroys your inner peace; the second is that it distorts your view of reality. If you think about this and come to understand that anger is really unhelpful, that it is only destructive, you can <strong>begin to distance yourself from anger. </strong></p>
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