export default `
<div class="{{wrapperClassName}}">
  <div class="chat__button">
    <button class="button">
      <span>{{buttonText}}</span>
    </button>
  </div>

  <ul class="{{chatListClassName}}">
    {{#each chatListItems}}
      <li class="chat-item">{{this}}</li>
    {{/each}}
  </ul>
</div>
`;

