// создать подключение SOCKET CONNECTION
var sc = new WebSocket("ws://localhost:9000");


// отправляем данные формы
$('.chat__input').on('keyup', function(e){
    if (e.keyCode == 13) {
        console.log(8);
        sc.send(this.value.trim());
        this.value = null;
    }
});

// принимаем сообщения
sc.onmessage = function(m){
    console.log(m.data);
    renderMsg(JSON.parse(m.data));
};

function renderMsg(m){
    var patt = `
        <div class="message">
            <div class="message__author">${ m.user }</div>
            <div class="message__text">${ m.text }</div>
            <div class="message__time">${ m.time }/div>
        </div>
    `;
    $(patt).appendTo($('.chat__history'));
}