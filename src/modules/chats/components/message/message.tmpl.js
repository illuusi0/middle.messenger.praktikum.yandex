export default `
<div class="message {{#if isOwn}}message--own{{/if}}">
  <div class="message__content">
    <p class="message__text">{{text}}</p>
    <span class="message__time">{{time}}</span>
  </div>
</div>
`;

