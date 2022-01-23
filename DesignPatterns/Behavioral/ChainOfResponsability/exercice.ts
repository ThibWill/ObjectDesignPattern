class XMLToDB {

    public file: string;
    public fileId: string;
    private FOCUS = [
        ["accounts", "accounts.account"],
        ["banks", "banks.bankDetails"],
        ["contacts", "contacts.contact"],
    ];

    constructor(file: string, fileId: string) {
        this.file = file;
        this.fileId = fileId
    }

    public parseXML() {
        for (let [dbKey, xmlKey] of this.FOCUS) {
    
            switch (dbKey) {
                case "accounts":
                    //Account.create({file: this.file, file_id: this.fileId});
                    console.log("accounts");
                break;
                case "banks":
                    //Bank.create({file: this.file, file_id: this.fileId});
                    console.log("banks");
                break;
                case "contacts":
                    //Contact.create({file: this.file, file_id: this.fileId});
                    console.log("contacts");
                break;
                default:
                    console.log("nothing");
                break;
            }
        }
    }
}


/*interface Handler {
    setNext(handler: Handler): Handler;

    handle(dbKey: string): string;
}

abstract class ToDBHandler implements Handler
{
    private nextHandler: Handler|null;

    constructor() {
        this.nextHandler = null;
    }

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    public handle(dbKey: string): string {
        if (this.nextHandler) {
            return this.nextHandler.handle(dbKey);
        }

        return "nothing";
    }
}


class BanksHandler extends ToDBHandler {
    public handle(dbKey: string): string {
        if (dbKey === 'banks') {
            return "banks";
        }
        return super.handle(dbKey);

    }
}

class ContactsHandler extends ToDBHandler {
    public handle(dbKey: string): string {
        if (dbKey === 'contacts') {
            return "contacts";
        }
        return super.handle(dbKey);

    }
}

class AccountHandler extends ToDBHandler {
    public handle(dbKey: string): string {
        if (dbKey === 'accounts') {
            return "accounts";
        }
        return super.handle(dbKey);

    }
}

const accountHandler = new AccountHandler();
const contactsHandler = new ContactsHandler();
const banksHandler = new BanksHandler();

accountHandler.setNext(contactsHandler).setNext(banksHandler);

function clientCode(handler: Handler) {
    const FOCUS = [
        ["accounts", "accounts.account"],
        ["banks", "banks.bankDetails"],
        ["contacts", "contacts.contact"],
        ["????", "truc"],
    ];

    for (let [dbKey, xmlKey] of FOCUS) {
        const result = handler.handle(dbKey);
        console.log(result);
    }
}

clientCode(accountHandler);*/
