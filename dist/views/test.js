const v = `<div style="color: red">
    Ici mon test de template
    <div>
        <input type="text" n-c="input-sync" data-truc="OK">
        <button n-c="test">ICI un bouton</button>
        <div class="flex flex-col gap-md mt-md">
            <button n-c="btn">count {{count}}</button>
            <button n-c="btn">count {{count}}</button>
        </div>
    </div>
</div>`
export default v