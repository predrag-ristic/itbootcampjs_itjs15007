export class ChatUI {
    // Constructor
    constructor(list) {
        this.list = list;
    };

    // Setter
    set list(l) {
        this._list = l;
    };

    // Getter
    get list() {
        return this._list;
    };

    // Adding chats to Chatroom app
    templateLi(data) {
        if (data.username != localStorage.getItem("username")) {
            let listHTML =
                `
                <li id="oldMessages">
                    <p><span>${data.username}  :</span> ${data.message}</p>
                    <p>${this.formatDate(data)}</p>
                </li>
                `
            this.list.innerHTML += listHTML
        }
        else {
            let listHTML =
            `
            <li id="newMessages">
                <p><span>${data.username}  :</span> ${data.message}</p>
                <p>${this.formatDate(data)}</p>
            </li>
            `
        this.list.innerHTML += listHTML
        }
    };

    // Timestamp formatting
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
        if (currentDay.getDay() === appDay.getDay()) {
            time = `${h}:${min}`
        }
        else {
            time = `${d}.${m}.${g}. • ${h}:${min}`
        }
        return time;
    };
};