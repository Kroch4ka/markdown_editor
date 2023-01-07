const storageName = 'documents';

const localStoragePersist = {
    _initialize: function() {
        if (!localStorage.getItem(storageName)) {
            localStorage.setItem(storageName, JSON.stringify([]))
        }
    },
    from: function() {
        this._initialize();
        return JSON.parse(localStorage.getItem(storageName));
    },
    save: function(document) {
        this._initialize();
        const documents = this.from();
        documents.push(document);
        localStorage.setItem(storageName, JSON.stringify(documents));
    }
}

export default localStoragePersist;