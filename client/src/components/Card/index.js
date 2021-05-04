import React from "react"

export function Card(props) {
    return (
        <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="card project-card">
                <img class="img-fluid card-img-top project-img" src={props.image} alt="" />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.description}</p>
                    <a href={props.deployURL} target="_blank" class="btn btn-primary">Load App</a>
                    <a href={props.repoURL} target="_blank" class="btn btn-primary">Source Code</a>
                </div>
            </div>
        </div>
    )
}