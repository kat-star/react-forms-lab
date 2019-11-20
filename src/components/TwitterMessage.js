import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }

  handleMessageClick = event => {
    this.setState({
      message: event.target.value
    })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <div>Characters Remaining:{this.props.maxChars - this.state.message.length}</div>
        <input onChange={event => this.handleMessageClick(event)} type="text" name="message" id="message" value={this.state.message} />
      </div>
    );
  }

}

export default TwitterMessage;
