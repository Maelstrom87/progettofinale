import React from 'react';
import { Router, Route, Link, withRouter, useNavigate } from 'react-router-dom';


class NotFound extends React.Component {  
  render() {
        return (

            <div className="bg-dark">
                <div className="bg-white text-red" role="alert">
                    <h1 className="text-alert p-4">Sorry 404!</h1>
                    <Link to={'/'}> Back Home</Link>
                </div>
            </div>
        )
    }
}

export default withRouter(NotFound);