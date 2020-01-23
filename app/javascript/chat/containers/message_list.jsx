import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setMessages } from '../actions/index';

import Message from '../components/message';
import MessageForm from '../containers/message_form';

class MessageList extends Component {
  componentWillMount() {
    this.fetchMessages(this.props.match.params.channel);
  }

  componentDidMount() {
    // this.refresher = setInterval(this.fetchMessages, 5000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  fetchMessages = (channel) => {
    this.props.setMessages(channel);
  }

  render() {
    return (
      <div className="channel-container">
        <div className="channel-title">
          <h3>Channel #{this.props.match.params.channel}</h3>
        </div>
        <hr/>
        <div className="channel-content" ref={(list) => { this.list = list; }}>
          {
            this.props.messages.map((message, index) => {
              return <Message key={index} message={message} />;
            })
          }
        </div>
        <MessageForm />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setMessages },
    dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return ({
    messages: reduxState.messages
  });
}

export default withRouter(connect(mapReduxStateToProps, mapDispatchToProps)(MessageList));
