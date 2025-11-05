import './style.css';
import { Button } from './components/button/button.js';
import { Chats } from './modules/chats/chats.js';
import { Message } from './modules/chats/components/message/message.js';

const buttonHtml = Button({
  className: 'button-primary',
  type: 'submit',
  text: 'Click me',
});

console.log('Button HTML:', buttonHtml);

const chatsHtml = Chats({
  wrapperClassName: 'chats-wrapper',
  buttonText: 'New Chat',
  chatListClassName: 'chat-list',
  chatListItems: ['Chat 1', 'Chat 2', 'Chat 3'],
});

console.log('Chats HTML:', chatsHtml);

const messageHtml = Message({
  text: 'Hello, world!',
  time: '12:34',
  isOwn: true,
});

console.log('Message HTML:', messageHtml);

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Примеры использования шаблонизатора</h1>
    <div class="example">
      <h2>Кнопка:</h2>
      ${buttonHtml}
    </div>
    <div class="example">
      <h2>Список чатов:</h2>
      ${chatsHtml}
    </div>
    <div class="example">
      <h2>Сообщение:</h2>
      ${messageHtml}
    </div>
  </div>
`;
