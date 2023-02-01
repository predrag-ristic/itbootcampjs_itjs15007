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
            <p><span>${data.username}  :</span> ${data.message}</p>
            <p>${this.formatDate(data)}</p>
        </li>
        `
        this.list.innerHTML += listHTML
    };

    formatDate(data) {
        let date = data.created_at.toDate();
        let d = date.getDate();
        let m = date.getMonth() + 1;
        let g = date.getFullYear();
        let h = date.getHours();
        let min = date.getMinutes();

        d = String(d).padStart(2, '0')
        m = String(m).padStart(2, '0')
        h = String(h).padStart(2, '0')
        min = String(min).padStart(2, '0')

        let currentDay = new Date();
        let appDay = new Date(date);
        let time = "";
        if(currentDay.getDay() === appDay.getDay()) {
            time = `${h}:${min}`
        }
        else {
            time = `${d}.${m}.${g}. • ${h}:${min}`
        }
        return time;
    };
};