import React, { Component } from "react";

import Card from "./Card";

class Feeds extends Component {
  constructor(props) {
    super(props);
    this.state = { feeds: [] };
  }

  componentDidMount() {
    fetch("https://api.pexels.com/v1/curated?per_page=15&page=1", {
      method: "GET",
      headers: {
        Authorization:
          "563492ad6f917000010000015dfe429f3d67404783034ed05aca74d5"
      }
    })
      .then(data => data.json())
      .then(res => {
        console.log(res);
        this.setState({ feeds: res.photos });
      });
  }

  render() {
    return (
      <div>
        {this.state.feeds.map(photo => (
          <Card imgSrc={photo.src.medium} name={photo.photographer} />
        ))}
      </div>
    );
  }
}

export default Feeds;
