import React, {Component} from 'react';
import NewsPost from './NewsPost';
import './App.css';


class App extends Component {
  state = {
    news: [],
    newsInput: ''
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({newsInput: value});
  }

  handleKeyDown = (event) => {
    if(event.keyCode === 13) {
      const {newsInput, news } = this.state;
      const newNews = {text: newsInput};
      this.setState({newsInput: '', news: [...news, newNews]});
    }
  }

  render() {
    const {newsInput, news} = this.state;

    return (
      <div className="App">
        <input onChange={this.handleChange} onKeyDown={this.handleKeyDown} value={newsInput}/>
        <div>
          {news.map(newsItem => (
            <NewsPost key={newsItem.text} text={newsItem.text}/>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
