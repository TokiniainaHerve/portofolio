import React from 'react';
import Linkify from 'react-linkify';


const TextMessage = (props) => {
  return <div className="sc-message--text" style={{backgroundColor:props.author === 'me' ?"#4e8cff":props.theme.body_msg}}>{
    <Linkify properties={{ target: '_blank' }}>{props.data.text}</Linkify>
  }</div>;
};

export default TextMessage;
