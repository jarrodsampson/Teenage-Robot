import React, { Component } from 'react';


import './css/animate.css';
import './css/main.css';
import './css/owl.carousel.min.css';
import './css/owl.theme.default.min.css';
import './css/swipebox.css';

import PhotoList from './PhotoList.js';
import RobotList from './RobotList.js';
import CommunityList from './CommunityList.js';

import $ from 'jquery';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jenny: [],
            photos: [],
            community: [],
            childVisible: false,
            details: {}
        };
    }

    loadCommentsFromServer () {

        $.when(
            $.get("//www.reddit.com/r/MyLifeAsATeenageRobot/new.json?limit=15"),
            $.get("/data/robot.json"),
            $.get("/data/photobooth.json")

        ).then(function(community, jenny, photos) {
            console.log(community);
            this.setState({
                jenny: jenny[0],
                photos: photos[0],
                community: community[0].data.children
            });
            console.log(jenny[0]);
            console.log(photos[0]);
            console.log(community[0].data.children);

        }.bind(this));

    }

    componentDidMount () {
        this.loadCommentsFromServer();
    }

  render() {
    return (
      <div className="App">

          <div id="headerSlider" className="topSlider">

              <ul className="cb-slideshow">
                  <li>
                      <span>Image 01</span>
                  </li>
                  <li>
                      <span>Image 02</span>
                  </li>
                  <li>
                      <span>Image 01</span>
                  </li>
                  <li>
                      <span>Image 02</span>
                  </li>
                  <li>
                      <span>Image 01</span>
                  </li>
                  <li>
                      <span>Image 02</span>
                  </li>
              </ul>

          </div>


          <div className="summaryBg">
              <div className="container">
                  <div className="wow fadeInLeft col s12 center-align scrollspy" id="about">
                      <div className="col s12 spacer-medium"></div>
                      <h1>About</h1>

                      <p>
                        My Life as a Teenage Robot is an American animated science fantasy television series created by Rob Renzetti for Nickelodeon. The series follows the adventures of XJ-9, better known as Jenny Wakeman, a robot girl who attempts to juggle her duties of protecting Earth while trying to live a normal teenage life.
                      </p>
                      <p>
                        A state-of-the-art gynoid automaton sophisticated robot created by her mother Dr. Nora Wakeman, an elderly spinster robotics scientist, five years prior to the series. Jenny is Earth's protector, armed to the teeth with a wide range of weapons and devices, but all she really wants is to live the life of a normal teenager.
                      </p>

                      <p>
                          <a className="waves-effect waves-light btn modal-trigger cyan lighten-1" href="https://en.wikipedia.org/wiki/My_Life_as_a_Teenage_Robot" target="_blank">Learn More</a>
                      </p>
                  </div>

                  <div className="col s12 spacer-small"></div>

              </div>
          </div>

          <div className="videoMain">

              <video id="self1" className="html5-video player" width="100%" loop="true" autoPlay="true" muted>
                  <source src="media/main.mp4" width="100%" type="video/mp4">
                  </source>
              </video>

          </div>

          <div className="photoBg grey darken-4">

              <div className="scrollspy" id="photos">
                  <div className="col s12 center-align no-padding">
                      <div className="col s12 spacer-small"></div>
                      <h1>Get to Know Jenny</h1>
                      <div className="col s12 spacer-x-small"></div>
                      <div className="col l12 m12 s12 no-padding">
                          <PhotoList data={this.state.photos} />
                      </div>
                      <div className="col s12 spacer-small"></div>

                  </div>
              </div>
          </div>

          <div className="parallax-container">
              <div className="parallax"><img src="images/art1.jpg" alt="Banner" /></div>
              <h2>Out into the Galaxy</h2>
          </div>

          <div className="jennyBg">

                  <div className="row wow bounceInRight scrollspy no-padding" id="jenny">
                      <div className="col s12 center-align no-padding">
                          <div className="col s12 spacer-small"></div>
                          <h1>Jenny</h1>
                          <div className="col s12 spacer-x-small"></div>

                          <div className="col l12 m12 s12 no-padding">
                              <RobotList data={this.state.jenny} />
                          </div>

                          <div className="col s12 spacer-small" id="bearDetailSnap"></div>
                      </div>
                  </div>
          </div>

          <div className="communityBg">
            <div className="container">
              <div className="row wow fadeInLeft col s12 center-align scrollspy" id="community">
                  <div className="col s12 spacer-small"></div>
                  <h1>The Community</h1>

                  <CommunityList data={this.state.community} />

                  <div className="col s12 spacer-small"></div>

              </div>
            </div>
            <div className="floatImage">
                <img src="images/float1.png" alt="Float" />
            </div>
          </div>

      </div>
    );
  }
}

