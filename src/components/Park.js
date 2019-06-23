import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Park extends Component {
    render() {
        const { id, spot, free } = this.props.info;
        return (
            <div>
                <p id={id}>{id} la plaza {spot} esta {free === true ? 'libre': 'ocupada'}</p>
                <Link to={`editar/${id}`} className="btn btn-primary mr-2">Editar</Link>
                <Link to={`reservar`} className="btn btn-primary mr-2">Editar</Link>
            </div>
        )
    }
}
