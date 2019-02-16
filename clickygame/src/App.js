import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Jumbotron from "./components/JumboTron"
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    score: 0,
    topScore: 0,
    clicked: [],
    friends
  };

  shuffleArray = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  handleClick = (event) => {
    // console.log()
    if (this.state.score < this.state.topScore) {
      this.setState({ score: this.state.score + 1 });
      this.setState.friends = this.shuffleArray(this.state.friends);
      console.log(event);
    } else if (this.state.score >= this.state.topScore) {
      this.setState({ score: this.state.score + 1 });
      this.setState({ topScore: this.state.topScore + 1 });
      this.setState.friends = this.shuffleArray(this.state.friends);
      console.log(event);
    }
  };

  changeDate(i, newDate) {
    let startDate = this.state.startDate.slice();
    startDate[i] = newDate;
    this.setState({
        startDate
    });
}


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Title
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Jumbotron></Jumbotron>
        <Wrapper>
          {this.state.friends.map(friend => (
            this.state.clicked.push({});
            <FriendCard
              handleClick={this.handleClick}
              removeFriend={this.removeFriend}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
              clicked={this.state.clicked}
              changeClicked= {this.changeClicked.bind(this, i)}
              />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;