import React from 'react';
import { emojify } from 'react-emojione';

import formatTimestamp from '../utlities/format_timestamp';

const Message = (props) => {
  console.log(props);
  const { user_id, content, created_at } = props.message;
  const timestamp = formatTimestamp(created_at);

  return (
    <div className="message">
      <div className="message-header">
        <h3>{user_id}</h3>
        <p className="timestamp">- {timestamp}</p>
      </div>
      <p className="message-content">{/*emojify(content)*/ content}</p>
    </div>
  );
};

export default Message;
