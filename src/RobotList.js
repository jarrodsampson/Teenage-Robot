import React, { Component } from 'react';

import Robot from './Robot';

export default class RobotList extends Component {

    render () {
        var robotList = this.props.data.map(function(robot) {
            return (
                <Robot
                    name={robot.name}
                    image={robot.image}
                    description={robot.description}
                    mainBg={robot.big}
                    key={robot.name}
                />
            );
        }, this);
        return (
            <div className="robotList">
                {robotList}
            </div>
        );
    }

}