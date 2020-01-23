import React from 'react';

import MessageList from '../containers/message_list';
import ChannelList from '../containers/channel_list';
import WorkspaceList from './workspace_list';

const App = () => {
  const chatContainer = document.getElementById('chat-app');
  const chatChannels = JSON.parse(chatContainer.dataset.channels);

  return (
    <div className="app">
      <WorkspaceList />
      <ChannelList channels={chatChannels}/>
      <MessageList />
    </div>
  );
};

export default App;
