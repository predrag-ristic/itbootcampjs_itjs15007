export class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = db.collection("chats");
        this.unsub;
    };

    set room(r) {
        this._room = r;
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

    updateRoom(ur) {
        this.room = ur;
        if (this.unsub) {
            this.unsub();
        };
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
        this.unsub = this.chats
            .orderBy('created_at', "asc")
            .where('room', '==', this.room)
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if (change.type == "added") {
                        callback(change.doc.data());
                    }
                });
            });
    };
};