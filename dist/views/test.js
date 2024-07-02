const view = `<div style="color: red">
    Ici mon test de template
    <div>
        <button n-c="test">ICI un bouton</button>
        <div class="flex flex-col gap-md  mt-md">
            <button n-c="btn">count {{count}}</button>
            <button n-c="btn">count {{count}}</button>
        </div>
    </div>

</div>`
export default view