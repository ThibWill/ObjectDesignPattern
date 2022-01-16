/**
 * The Publisher interface declares a set of methods for managing Publishers.
 */
 interface Publisher {
    // Attach an observer to the Publisher.
    attach(observer: Observer): void;

    // Detach an observer from the Publisher.
    detach(observer: Observer): void;

    // Notify all observers about an event.
    notify(): void;
}

/**
 * The Publisher owns some important state and notifies observers when the state
 * changes.
 */
class ConcretePublisher implements Publisher {
    /**
     * @type {number} For the sake of simplicity, the Publisher's state, essential
     * to all Publishers, is stored in this variable.
     */
    public state: number;

    /**
     * @type {Observer[]} List of Publishers. In real life, the list of
     * Publishers can be stored more comprehensively (categorized by event
     * type, etc.).
     */
    private observers: Observer[] = [];

    /**
     * The subscription management methods.
     */
    public attach(observer: Observer): void {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Publisher: Observer has been attached already.');
        }

        console.log('Publisher: Attached an observer.');
        this.observers.push(observer);
    }

    public detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Publisher: Nonexistent observer.');
        }

        this.observers.splice(observerIndex, 1);
        console.log('Publisher: Detached an observer.');
    }

    /**
     * Trigger an update in each Publisher.
     */
    public notify(): void {
        console.log('Publisher: Notifying observers...');
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

    /**
     * Usually, the subscription logic is only a fraction of what a Publisher can
     * really do. Publishers commonly hold some important business logic, that
     * triggers a notification method whenever something important is about to
     * happen (or after it).
     */
    public someBusinessLogic(): void {
        console.log('\nPublisher: I\'m doing something important.');
        this.state = Math.floor(Math.random() * (10 + 1));

        console.log(`Publisher: My state has just changed to: ${this.state}`);
        this.notify();
    }
}

/**
 * The Observer interface declares the update method, used by Publishers.
 */
interface Observer {
    // Receive update from Publisher.
    update(Publisher: Publisher): void;
}

/**
 * Concrete Observers react to the updates issued by the Publisher they had been
 * attached to.
 */
class ConcreteObserverA implements Observer {
    public update(Publisher: Publisher): void {
        if (Publisher instanceof ConcretePublisher && Publisher.state < 3) {
            console.log('ConcreteObserverA: Reacted to the event.');
        }
    }
}

class ConcreteObserverB implements Observer {
    public update(Publisher: Publisher): void {
        if (Publisher instanceof ConcretePublisher && (Publisher.state === 0 || Publisher.state >= 2)) {
            console.log('ConcreteObserverB: Reacted to the event.');
        }
    }
}

/**
 * The client code.
 */

const Publisher = new ConcretePublisher();

const observer1 = new ConcreteObserverA();
Publisher.attach(observer1);

const observer2 = new ConcreteObserverB();
Publisher.attach(observer2);

Publisher.someBusinessLogic();
Publisher.someBusinessLogic();

Publisher.detach(observer2);

Publisher.someBusinessLogic();