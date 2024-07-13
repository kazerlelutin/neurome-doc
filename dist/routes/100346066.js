const p = `<div n-c="home" class="p-md" n-l-room1>

    <h1>{{title}}</h1>
    <p>{{description}}</p>
    <ul>
        {{#each items}}
        <li>{{name}}: {{value}}</li>
        {{/each}}
    </ul>
    {{#if showList}}
    <p>SHOW</p>
    {{/if}}

    <div class="flex flex-col gap-1">
        <div class="uppercase bold">{{code}}</div>

    </div>

    <div>--------------</div>
    <div n-c="test">
        ICI un bouton
    </div>
    <div n-v="test" data-truc="OK">placeholder</div>
</div>`
export default p