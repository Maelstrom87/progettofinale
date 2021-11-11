import React from 'react';
import { withRouter } from 'react-router-dom';
import { wpToArticle } from '../../models/Article';
import Card from '../Card';

const URL = 'http://bedrock.test/wp-json/wp/v2/posts';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      chosenCat: ""
    };
  };

  async retrieve(url) {
    await fetch(url)
    .then(res => res.json())
    .then(arts => {
      this.setState({
        articles: arts.map(article => wpToArticle(article))
      });
    });
  }

  async setCategory() {
    let articles = [];
    let arts = [...this.state.articles];
    let categories = await fetch('http://bedrock.test/wp-json/wp/v2/categories/')
      .then(res => res.json())

    arts.forEach(element => {
      categories.forEach(cat => {
        if (element.category == cat.id) {
          let catName = { categoryName: cat.name };
          element = { ...element, ...catName };

          articles.push(element);
        };
      });
    });

    this.setState({ articles })
  }

  async componentDidMount() {
    const url = this.props.match.params.cat ? URL + '/?categories=' + this.props.match.params.cat : URL;

    this.retrieve(url);
    this.setCategory();
  };

  async componentDidUpdate() {
    const url = this.props.match.params.cat ? URL + '/?categories=' + this.props.match.params.cat : URL;

    if (this.props.match.params.cat != this.state.chosenCat) {
      await fetch(url)
        .then(res => res.json())
        .then(arts => {
          this.setState({
            articles: arts.map(article => wpToArticle(article)),
            chosenCat: this.props.match.params.cat
          });
        });

      this.setCategory();
    };
  };

  render() {
    const cards = this.state.articles.map(card => <Card key={card.id} article={card} />);
    let category = this.props.match.params.name;

    return (
      <div className="bg-dark">
        <div className="p-2 shadow ">
          <h3>{category}</h3>
        </div>
        <div className="d-flex flex-column ">
          {cards}
        </div>
      </div>
    );
  };
};

export default withRouter(Home);