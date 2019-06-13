import React, { Component } from 'react';
import {
  handleInput,
  connectToChatkit,
  connectToRoom,
  sendDM,
  sendMessage,
  updateLanguage,
} from './methods';
import Dialog from './components/Dialog';
import RoomList from './components/RoomList';
import RoomUsers from './components/RoomUsers';
import ChatSession from './components/ChatSession';
import Header from './components/Header'

import 'skeleton-css/css/normalize.css';
import 'skeleton-css/css/skeleton.css';

import './css/chat.css';
import './css/Julian.css';
import './css/nick.css'
import './css/index.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      userId: '',
      showLogin: true,
      isLoading: false,
      currentUser: null,
      currentRoom: null,
      rooms: [],
      roomUsers: [],
      roomName: null,
      messages: [],
      newMessage: '',
      language: 'en',
    };

    this.handleInput = handleInput.bind(this);
    this.connectToChatkit = connectToChatkit.bind(this);
    this.connectToRoom = connectToRoom.bind(this);
    this.sendDM = sendDM.bind(this);
    this.sendMessage = sendMessage.bind(this);
    this.updateLanguage = updateLanguage.bind(this);
  }

  componentDidMount() {
    document.title = "Chat";
  }

  render() {
    const {
      userId,
      showLogin,
      rooms,
      currentRoom,
      currentUser,
      messages,
      newMessage,
      roomUsers,
      roomName,
      language,
    } = this.state;

    return (
      <div>
      <Header/>
      <div className="App">
        <aside className="sidebar left-sidebar">
          {currentUser ? (
            <div className="user-profile">
              <span className="username">{currentUser.name}</span>
              <span className="user-id">{`@${currentUser.id}`}</span>
            </div>
          ) : null}
          {currentRoom ? (
            <RoomList
              rooms={rooms}
              currentRoom={currentRoom}
              connectToRoom={this.connectToRoom}
              currentUser={currentUser}
            />
          ) : null}
        </aside>
        <section className="chat-screen">
          <ul className="chat-messages">
            <ChatSession messages={messages} />
          </ul>
          <footer className="chat-footer">
            <form autocomplete={"off"} onSubmit={this.sendMessage} className="message-form">
              <input
                type="text"
                autocomplete={"off"}
                value={newMessage}
                name="newMessage"
                className="message-input"
                placeholder="Type your message and hit ENTER to send"
                onChange={this.handleInput}
              />
            </form>
          </footer>
        </section>
        <aside className="sidebar right-sidebar">
          {currentRoom ? (
            <RoomUsers
              currentUser={currentUser}
              sendDM={this.sendDM}
              roomUsers={roomUsers}
            />
          ) : null}
          {currentRoom ? (
            <select
              id="language"
              className="language"
              name="language"
              value={language}
              onChange={this.updateLanguage}
            >
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="es">Spanish</option>
              <option value="de">German</option>
            </select>
          ) : null}
        </aside>
        {showLogin ? (
          <Dialog
            userId={userId}
            handleInput={this.handleInput}
            connectToChatkit={this.connectToChatkit}
          />
        ) : null}
      </div>
      </div>
    );
  }
}

export default App;
