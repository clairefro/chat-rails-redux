import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setMessages, selectChannel } from '../actions/index';

class ChannelList extends Component {
  // fetch channel messages on each prop change (only if clicked channel differs from selected)
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.setMessages(nextProps.selectedChannel);
    }
  }

  handleClick = (channel) => {
    this.props.selectChannel(channel);
  }

  renderChannel = (channel) => {
    console.log(channel)
    return (
      <li
        key={channel.id}
        className={channel === this.props.selectedChannel ? 'active' : null}
        onClick={() => this.handleClick(channel.name)}>
        <Link
          to={`/channels/${channel.name}`}>
          #{channel.name}
        </Link>
      </li>
    )
  }


  render() {
    const { channels } = this.props;

    return (
      <div className="channel-list-panel">
        <h3>Redux Chat</h3>
        <div className="channel-list">
          {channels.map((channel) => this.renderChannel(channel))}
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
    selectedChannel: reduxState.selectedChannel
  });
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(ChannelList);
