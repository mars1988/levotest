import React, { Component } from 'react';
import Header from './components/Header';
import Tile from './components/Tile';
import './style/app.scss';

const SOURCE_PATH = './service/test.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      visible: 3,
      error: false
    };
  }

  loadMore = () => {
    this.setState((prev) => {
      return {visible: prev.visible + 3};
    });
  }

  componentDidMount = () => {
    fetch(SOURCE_PATH).then(
      res => res.json()
    ).then(res => {
      this.setState({
        items: JSON.parse(JSON.stringify(res))
      });
    }).catch(error => {
      console.error(error);
      this.setState({
        error: true
      });
    });
  }

  render() {
    const {items,visible} = this.state;
    return (
      <div className="app">
        <div className="app__wrapper">
          <Header header="Related Articles" summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt blanditiis, aliquam dolorem hic architecto, iusto qui optio deserunt laborum ad autem dignissimos eveniet ab, laudantium officiis accusantium totam soluta nisi."/>
          <div className="tile__bottom">
            <div className="tile__list">
              {items.slice(0, visible).map((item) =>
                <Tile item={item} key={item.id}/>
              )}
            </div>
            {visible < items.length &&
              <div className="tile__bottom__btn">
                <button onClick={this.loadMore} type="button" className="load-more">Load more</button>
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
