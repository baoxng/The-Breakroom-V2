import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageInputSmall, VirtualizedMessageList, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/index.css';

const chatClient = StreamChat.getInstance(process.env.REACT_APP_STREAM_API_KEY);
const userToken = process.env.REACT_APP_STREAM_TOKEN;

chatClient.connectUser(
  {
    id: 'bitter-wave-3',
    name: 'Bao Xiong',
    image: 'https://getstream.io/random_png/?id=bitter-wave-3&name=bitter-wave-3',
  },
  userToken,
);

const channel = chatClient.channel('livestream', 'the-breakroom', {
  image: 'https://goo.gl/Zefkbx',
  name: 'The Breakroom',
});

const App = () => (
  <Chat client={chatClient} theme='livestream dark'>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <VirtualizedMessageList />
        <MessageInput Input={MessageInputSmall} focus />
      </Window>
    </Channel>
  </Chat>
);

export default App;