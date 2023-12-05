let navBar = document.getElementById('navBar');
let ArrayNavChange = document.querySelectorAll('.navChange');

/* 
    Todo el Javascript adicional que quiero cargar debo hacerlo un momento
    despues de cargar la pagina, ya que estoy cargando elementos de manera
    dinamica con XHR y no se asigna bien al Arbol DOM.

    Solo con los templates:
    {
        footer.html,
        header.html,
        navbar.html
    }
*/

setTimeout(function () {
    navBar = document.getElementById('navBar');
    ArrayNavChange = document.querySelectorAll('.navChange');

    ArrayNavChange.forEach((NavChange) => {
        NavChange.addEventListener('mouseover', () => {
            navBar.style.borderColor = 'var(--color-naval)';
        });

        NavChange.addEventListener('mouseout', () => {
            navBar.style.borderColor = 'var(--color-red)';
        });
    });
}, 1000);



function appendNotificationCard() {

    let notificationCard = `
        <div class="info" id="notification" >
            <div class="info__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none"><path fill="#393a37" d="m12 1.5c-5.79844 0-10.5 4.70156-10.5 10.5 0 5.7984 4.70156 10.5 10.5 10.5 5.7984 0 10.5-4.7016 10.5-10.5 0-5.79844-4.7016-10.5-10.5-10.5zm.75 15.5625c0 .1031-.0844.1875-.1875.1875h-1.125c-.1031 0-.1875-.0844-.1875-.1875v-6.375c0-.1031.0844-.1875.1875-.1875h1.125c.1031 0 .1875.0844.1875.1875zm-.75-8.0625c-.2944-.00601-.5747-.12718-.7808-.3375-.206-.21032-.3215-.49305-.3215-.7875s.1155-.57718.3215-.7875c.2061-.21032.4864-.33149.7808-.3375.2944.00601.5747.12718.7808.3375.206.21032.3215.49305.3215.7875s-.1155.57718-.3215.7875c-.2061.21032-.4864.33149-.7808.3375z"></path></svg>
            </div>
            <div class="info__title">Se ha bloquedado la vista.</div>
            <div class="info__close"><svg height="20" id="notifcationClose" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z" fill="#393a37"></path></svg></div>
        </div>
    `

    if (!document.getElementById('notification')) {
        document.getElementById('cardNotification').innerHTML = notificationCard;
        document.getElementById('notification').classList.add('notification');
        document.getElementById('notifcationClose').addEventListener('click', () => {
            document.getElementById('notification').classList.add('hidden');
            setTimeout(() => { document.getElementById('notification').remove(); }, 400)
        });
    } else {
        document.getElementById('notification').classList.add('hidden');
        setTimeout(() => { document.getElementById('notification').remove(); }, 400)
    }
}

function pressButtonEffect(object){

    /**
     * Se le pasa como parametro el objeto que se quiere aplicar el efecto
     * Ejemplo => let kbd11 = document.getElementById('kbd-light_11');
    */

    object.style.borderColor = '#454343 #454343 #454343 #454343';
    object.style.backgroundColor = '#2b2b2b';

    setTimeout(function () {
        object.style.borderColor = '#e6e6e6 #bebebe #bebebe #e6e6e6';
        object.style.backgroundColor = '#d2d2d2';

    }, 100)
}