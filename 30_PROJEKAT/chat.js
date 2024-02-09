export class Chatroom {
    constructor(r,u) {
        this.room = r;
        this.username = u;
        this.chats = db.collection('chats');
        this.unsub = false;
    }

    set room(r) {
        this._room = r;
        if (this.unsub) {
            this.unsub();
        } 
    }
    set username(u) {
        if(u.length >= 2 && u.length <= 10 && u.trim() != '') {
            this._username = u;
        } else {
            alert('Username must be 2-10 characters long');
        }
    }

    get room() {
        return this._room;
    }
    get username() {
        return this._username;
    }

    // addchat(msg) {
    //     this.chats
    //     .add({
    //         message: msg,
    //         username: this.username,
    //         room: this.room,
    //         created_at: new Date()
    //     })
    //     .then(() => {
    //         console.log("Uspesno dodat chat!");
    //     })
    //     .catch(e => {
    //         console.log(`Greska: ${e}`);
    //     });
    // }
    
    async addchat(msg) {
        try {
            let response = await this.chats
            .add({
                message: msg,
                username: this.username,
                room: this.room,
                created_at: new Date()
            });
            return response;
        }
        catch {
            console.error("Doslo je do greske", err);
        }
    }

    getChats(callback) {
        this.unsub = this.chats.where('room', '==', this.room)
        .orderBy('created_at')
        .onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type == 'added') {
                    callback(change.doc.data());
                }
            });
        })
    }
}