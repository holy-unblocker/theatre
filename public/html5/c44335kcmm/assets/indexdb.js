class IDB {
    #db
    #storeName = "files"
    constructor() {

    }
     Open() {
        return new Promise((resolve) => {
        var indexedDB = window.indexedDB;
        const openRequest =  indexedDB.open("js-dos-cache-x", 1);
        openRequest.onsuccess = (event) => {
            this.#db = openRequest.result;
            resolve(true);
            return true;
        };
        openRequest.onupgradeneeded = (event) => {
            try {
                this.#db = openRequest.result;
                this.#db.onerror = (event) => {
                    console.log("Upgrade failed");
                    resolve(false);
                    return false;
                };
                this.#db.createObjectStore(this.#storeName);
                resolve(false);
                return false;
            } catch (e) {
                console.log("Upgrade failed", e);
                resolve(false);
                return false;
            }

        };
        });
    }

    Save(key, data) {
        return new Promise((resolve) => {
            if (this.#db === null) {
                resolve();
                return;
            }
            const transaction = this.#db.transaction(this.#storeName, "readwrite");
            transaction.oncomplete = () => resolve();
            transaction.objectStore(this.#storeName).put(data, key);
        });
    }
    GetSize(key) {
        return new Promise((resolve) => {
            if (this.#db === null) {
                resolve();
                return;
            }
            try {
                const transaction = this.#db.transaction(this.#storeName, "readonly");
                const request = transaction.objectStore(this.#storeName).get(key);
                request.onerror = () => resolve(null);
                request.onsuccess = () => {
                    if (request.result) {
                        resolve(request.result.byteLength);
                    }
                    else {
                        resolve(null);
                    }
                };
            }
            catch {
                resolve(null);

            }
        });
    }
    Load(key) {
        return new Promise((resolve) => {
            if (this.#db === null) {
                resolve();
                return;
            }
            try {
                const transaction = this.#db.transaction(this.#storeName, "readonly");
                const request = transaction.objectStore(this.#storeName).get(key);
                request.onerror = () => resolve(null);
                request.onsuccess = () => {
                    if (request.result) {
                        resolve(request.result);
                    }
                    else {
                        resolve(null);
                    }
                };
            }
            catch {
                resolve(null);

            }
        });
    }

}