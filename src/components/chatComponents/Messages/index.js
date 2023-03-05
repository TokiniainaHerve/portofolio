import React, { Component } from 'react';
import TextMessage from './TextMessage';
import EmojiMessage from './EmojiMessage';
import FileMessage from './FileMessage';
import chatIconUrl from '../../../assests/chat/chat-icon.svg';
import cartoonpdp from '../../../assests/chat/cartoon-pdp.png';


class Message extends Component {

  _renderMessageOfType(type) {
    switch(type) {
    case 'text':
      return <TextMessage theme={this.props.theme} {...this.props.message} />;
    case 'emoji':
      return <EmojiMessage {...this.props.message} />;
    case 'file':
      return <FileMessage {...this.props.message} />;
    default:
      console.error(`Attempting to load message with unsupported file type '${type}'`);
    }
  }

  render () {
    let contentClassList = [
      'sc-message--content',
      (this.props.message.author === 'me' ? 'sent' : 'received')
    ];
    return (
      <div className="sc-message">
        <div className={contentClassList.join(' ')} style={{color:this.props.message.author === 'me' ?"#FFFFFF":this.props.theme.text_msg}}>
          <div className="sc-message--avatar" style={{
            backgroundImage: `url(${cartoonpdp})`
          }}></div>
          {this._renderMessageOfType(this.props.message.type)}
        </div>
      </div>);
  }
}

export default Message;
