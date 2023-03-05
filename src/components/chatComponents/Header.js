import React, { Component } from 'react';
import closeIcon from '../../assests/chat/close-icon.png';


class Header extends Component {

  render() {
    return (
      <div className="sc-header" style={{backgroundColor:this.props.theme.header_msg}}>
        <img className="sc-header--img" src={this.props.imageUrl} alt="" />
        <div className="sc-header--team-name"> {this.props.teamName} </div>
        <div className="sc-header--close-button" onClick={this.props.onClose}>
          <img src={closeIcon} alt="" />
        </div>
      </div>
    );
  }
}

export default Header;
