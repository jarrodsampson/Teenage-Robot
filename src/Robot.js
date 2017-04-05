import React, { Component } from 'react';

export default class Robot extends Component {

    render () {
        return (
            <div className="bearBoxer col l12 m12 s12 no-padding">
                <div className="bearBoxer col l6 m6 s12">
                    <p><img className="bears tooltipped" data-position="bottom" data-tooltip={this.props.name} src={"images/" + this.props.image} alt={this.props.name} onClick={ this.props.onClick } /></p>
                </div>
                <div className="descriptionBg col l6 m6 s12 valign-wrapper">
                    <div className="valign descriptionDetails">
                        <h2>{this.props.name}</h2>
                        <p>{this.props.description}</p>
                    </div>
                </div>


            </div>
        );
    }

}