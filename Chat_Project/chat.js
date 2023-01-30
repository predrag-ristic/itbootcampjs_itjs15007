class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = db.collection("chats");
    };

    set room(r) {
        if (r.length > 0) {
            this._room = r;
        }
        else {
            this._room = `N/A`;
        };
    };
    set username(u) {
        if (u.length >= 2 && u.length <= 10 && !u.match(/\s/)) {
            this._username = u;
        }
        else {
            this._username = alert("Username invalid. Your username must be between 2 and 10 characters and must not contain blank spaces.")
        };
    };

    get room() {
        return this._room;
    };
    get username() {
        return this._username
    };

    async addChat(message) {
        let date = new Date();
        let addChat = {
            created_at: firebase.firestore.Timestamp.fromDate(date),
            message: message,
            room: this.room,
            username: this.username
        };
        let response = await this.chats.add(addChat);
        return response;
    };

    getChats(callback) {
        this.chats
        .onSnapshot((snapshot) => {
            let changes = snapshot.docChanges()
        })
    };
};

let chat2 = new Chatroom("#js", "");
chat2.addChat("Veceras imamo gostovanje")
    .then(() => {
        console.log("Message successfully added");
    })
    .catch((e) => {
        console.error("Error " + e);
    });