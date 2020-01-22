import React from 'react';

import MessageList from '../containers/message_list';
import ChannelList from '../containers/channel_list';
import WorkspaceList from '../components/workspace_list';

const App = () => {
  return (
    <div className="app">
      <WorkspaceList />
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
