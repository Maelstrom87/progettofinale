import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class NotFound extends React.Component {
  componentDidMount() {
    setInterval(() => {
      this.props.history.push('/')
    }, 3000);
  };

  render() {
    return (

      <div className="bg-dark">
        <div className="bg-white text-red" role="alert">
          <h1 className="text-alert p-4">Sorry 404!</h1>
          <Link to={'/'}> Back Home</Link>
        </div>
      </div>
    );
  };
};

export default withRouter(NotFound);