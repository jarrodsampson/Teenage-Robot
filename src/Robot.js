import React, { Component } from 'react';

export default class Robot extends Component {

    render () {
        return (
            <div className="bearBoxer col l12 m12 s12">
                <h2>{this.props.name}</h2>
                <p><img className="bears tooltipped" data-position="bottom" data-tooltip={this.props.name} src={"images/" + this.props.image} alt={this.props.name} onClick={ this.props.onClick } /></p>
            </div>
        );
    }

}