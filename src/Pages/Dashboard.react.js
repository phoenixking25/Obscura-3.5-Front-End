import React from 'react';
import { withRouter, Link } from 'react-router';
import {spring} from 'react-motion';
import Transition from 'react-motion-ui-pack';
import Header from '../Components/Header.react';

var Dashboard = React.createClass({
    componentWillMount() {
        if(!this.props.User.user) {
            this.props.router.push('/login');
        } 
    },

    render() {
        let levelUrl;
        console.log("without user: " + this.props.User.levelUrl + " with user: " + this.props.User.user.levelUrl);
        if(this.props.User.levelUrl) {
            levelUrl = '/level/' + this.props.User.levelUrl;
        }
        else {
            levelUrl = '/level/' + this.props.User.user.levelUrl;
        }

        return (
            <Transition
                component={false} // don't use a wrapping component
                measure={false} // don't measure component
                enter={{
                    opacity: 1,
                    translateX: spring(0, {stiffness: 150, damping: 10})
                }}
                leave={{
                    opacity: 0,
                    translateX: 150
                }}
                >
                <section className="wrapper style1 fullscreen fade-up">
                    <Header />
                    <div className="inner">
                        <center>
                            <h1>Welcome to Obscura 3.5</h1>
                            < br/>
                            <p>The game will start soon....</p>
                            <Link to={levelUrl}>Let's Go</Link>
                        </center>
                    </div>
                </section>
            </Transition>
        );
    }
});


module.exports = withRouter(Dashboard);