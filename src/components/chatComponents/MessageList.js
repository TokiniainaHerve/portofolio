import React, { Component } from 'react';
import Message from './Messages';

class MessageList extends Component {

  componentDidUpdate(_prevProps, _prevState) {
    this.scrollList.scrollTop = this.scrollList.scrollHeight;
  }

  render () {
    return (
      <div className="sc-message-list" style={{backgroundColor:this.props.theme.message_list}} ref={el => this.scrollList = el}>
        {this.props.messages.map((message, i) => {
          return <Message theme={this.props.theme} message={message} key={i} />;
        })}
      </div>);
  }
}

export default MessageList;
