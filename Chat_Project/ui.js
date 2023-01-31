export class ChatUI {
    constructor(list) {
        this.list = list;
    }

    set list(l) {
        this._list = l;
    }
    get list() {
        return this._list;
    }

    templateLi(data) {
        let listHTML =
        `
        <li>
            <span>${data.username} :</span>
            <span>${data.message}</span>
            <p>${data.created_at.toDate().toDateString()}</p>
        </li>
        `
        this.list.innerHTML += listHTML
    };
};