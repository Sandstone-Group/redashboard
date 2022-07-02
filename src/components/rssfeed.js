import React, { Component } from "react";

class FetchDataFromRSSFeed extends Component {
  constructor() {
    super();
    this.state = {
      recentBlogPost: {
        name: "",
        url: "",
        thumbnail: "",
      },
    };
  }

  FetchDataFromRssFeed() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if (request.readyState == 4 && request.status == 200) {
        var myObj = JSON.parse(request.responseText);
        for (var i = 0; i < 1; i++) {
          this.setState({
            recentBlogPost: {
              name: myObj.items[i].title,
              url: myObj.items[i].link,
              thumbnail: myObj.items[i].thumbnail,
            },
          });
        }
        console.log(myObj);
      }
    };

    request.open(
      "GET",
      "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fenergynewsbeat.co/feed/atom&count=10",
      true
    );
    request.send();
  }

  componentDidMount() {
    {
      this.FetchDataFromRssFeed();
    }
  }

  render() {
    return (
      <div>
        Check out our blog: <br></br>
        <a target="_blank" href={this.state.recentBlogPost.url}>
          {this.state.recentBlogPost.name}
        </a>
        <img src={this.state.recentBlogPost.thumbnail} alt="" />
      </div>
    );
  }
}

export default FetchDataFromRSSFeed;
