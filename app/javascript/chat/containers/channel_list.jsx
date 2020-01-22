import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMessages, selectChannel } from '../actions/index';

class ChannelList extends Component {
  // fetch channel messages on each prop change (only if clicked channel differs from selected)
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.setMessages(nextProps.selectedChannel);
    }
  }

  handleClick = (e) => {
    this.props.selectChannel(e.target.innerHTML.split('#')[1]);
  }

  render() {
    const { channels } = this.props;

    return (
      <div className="channel-list-panel">
        <h3>Redux Chat</h3>
        <div className="channel-list">
          {
            channels.map((channel) => {
              return <p
                key={channel}
                className={this.props.selectedChannel === channel ? 'selected': ''}
                onClick={this.handleClick}>
                  #{channel}
                </p>
              })
          }
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setMessages, selectChannel },
    dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return ({
    channels: reduxState.channels,
    selectedChannel: reduxState.selectedChannel
  });
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(ChannelList);
