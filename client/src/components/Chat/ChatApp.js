import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageInputSmall, VirtualizedMessageList, Window } from 'stream-chat-react';
import 'stream-chat-react/dist/css/index.css';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";


const ChatApp = () => {
    const { user, isAuthenticated } = useAuth0();
//Intialize User
const chatClient =  StreamChat.getInstance(process.env.REACT_APP_STREAM_API_KEY);


// Define values. 
const api_key = process.env.REACT_APP_STREAM_API_KEY
const api_secret = process.env.REACT_APP_STREAM_APP_SECRET

const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYnJvYWQtcXVlZW4tNCJ9.dH9cK9QlLm063gNt4wrCTfyVTuzppmfxsZJeGLjvMPQ';

chatClient.connectUser(

  {
    id: "broad-queen-4",
    name: user?.name,
    image: user?.picture,
  },
// {
//     "given_name": "Bao",
//     "family_name": "Xiong",
//     "nickname": "bao.xiong2011",
//     "name": "Bao Xiong",
//     "picture": "https://lh3.googleusercontent.com/a-/AOh14GgiA6G29LwoelwoY_mjjVT7bmG3f4ceaLGE_rPJRw=s96-c",
//     "locale": "en",
//     "updated_at": "2021-05-26T00:30:58.685Z",
//     "email": "bao.xiong2011@gmail.com",
//     "email_verified": true,
//     "sub": "google-oauth2|117625106645347037528"
//   }
  userToken,
);

const channel = chatClient.channel('livestream', 'breakroom', {
  image: "https://user-images.githubusercontent.com/74163895/119424911-02b99880-bccc-11eb-9f13-3243a50335d0.png",
  name: 'The Breakroom',
});


  return (  
  <Chat client={chatClient} theme='livestream dark'>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader  />
        <VirtualizedMessageList />
        <MessageInput Input={MessageInputSmall} focus />
      </Window>
    </Channel>
  </Chat>
  )
  };

export default ChatApp;