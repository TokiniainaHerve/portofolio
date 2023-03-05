import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MessageList from './MessageList';
import UserInput from './UserInput';
import Header from './Header';
import imageUrl from '../../assests/chat/cartoon-pdp.png';


class ChatWindow extends Component {
  constructor(props) {
    super(props);
  }

  onUserInputSubmit(message) {
    this.props.onUserInputSubmit(message);
  }

  onFilesSelected(filesList) {
    this.props.onFilesSelected(filesList);
  }

  render() {
    let messageList = this.props.messageList || [];
    let classList = [
      'sc-chat-window',
      (this.props.isOpen ? 'opened' : 'closed')
    ];
    return (
      <div className={classList.join(' ')}>
        <Header
          teamName={this.props.agentProfile.teamName}
          imageUrl={imageUrl}
          onClose={this.props.onClose}
          theme ={this.props.theme}
        />
        <MessageList
          messages={messageList}
          imageUrl={imageUrl}
          theme ={this.props.theme}
        />
        <UserInput
          onSubmit={this.onUserInputSubmit.bind(this)}
          isLoading={this.props.isLoading}
          theme ={this.props.theme}
          onFilesSelected={this.onFilesSelected.bind(this)}
          showEmoji={this.props.showEmoji}
        />
      </div>
    );
  }
}

ChatWindow.propTypes = {
  agentProfile: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onFilesSelected: PropTypes.func,
  onUserInputSubmit: PropTypes.func.isRequired,
  showEmoji: PropTypes.bool
};

export default ChatWindow;
