import * as React from 'react';
import CreateLanding from 'components/CreateLandingForm/CreateLandingForm';
import './Home.css';


class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <CreateLanding/>
            </div>
        );
    }
}

export default Home;
