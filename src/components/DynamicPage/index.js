import React from 'react';
import { withRouter } from 'react-router-dom';
import { wpToPage } from '../../models/Page';

class DynamicPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: [],
      gigi: false
    }
  }

  async componentDidMount() {
    const slug = this.props.match.params.slug;

    await fetch('http://bedrock.test/wp-json/wp/v2/pages/?slug=' + slug)
      .then(res => res.json())
      .then(pages => {
        let page = wpToPage(pages[0])
        this.setState({ page })
      });
    this.setState({
      gigi: false
    });
  };

  componentDidUpdate() {
    if (this.state.gigi) {
      this.thisco();
    };
  };

  setGigi = () => {
    this.setState({
      gigi: true
    });
  };

  thisco = () => {
    let bg = document.querySelector('.fullArt');
    let bgColor = '#212429';

    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';

      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      };
      
      return color;
    };

    setInterval(() => {
      bgColor = getRandomColor();
      bg.style.backgroundColor = bgColor;
    }, 200);
  };

  componentWillUnmount() {
    this.setState({
      gigi: false
    });
  };

  render() {
    const { title, body } = this.state.page;

    return (
      <div className="fullArt py-1">
        <h2 className="" onClick={this.setGigi}>gigi</h2>
        {this.state.gigi &&
          <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/w15oWDh02K4?controls=0&autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <img src="./hires.png" alt="" />
          </div>
        }
        <div className="p-1"><span className="fs-3 me-2  text-white" ><h2 className="pt-3 pb-1">{title}</h2></span></div>
        <div className="FArt  container pt-4 ">
          <div className=" p-2" dangerouslySetInnerHTML={{ __html: body }}></div>
        </div>
      </div>
    )
  };
};

export default withRouter(DynamicPage);