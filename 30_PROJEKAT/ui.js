export class ChatUI {
    constructor(l) {
        this.list = l;
    }

    set list(l) {
        this._list = l;
    }
    get list() {
        return this._list;
    }

    templateLI(data) {
        return `<li>${data.username}: ${data.message}<br>${this.formatDate(data)}</li>`;
    }

    formatDate(data) {
        let vreme = data.created_at.toDate();
        let d = vreme.getDate();
        let m = vreme.getMonth()+1;
        let g = vreme.getFullYear();
        let h = vreme.getHours();
        let min = vreme.getMinutes();
        let today = new Date();
        if (d === today.getDate() && m === today.getMonth()+1 && g === today.getFullYear()) {
            return `${String(h).padStart(2,'0')}:${String(min).padStart(2,'0')}`;
        }
        return `${String(d).padStart(2,'0')}.${String(m).padStart(2,'0')}.${g}. - ${String(h).padStart(2,'0')}:${String(min).padStart(2,'0')}`;
    }

    delete() {
        this.list.innerHTML = '';
    }
}