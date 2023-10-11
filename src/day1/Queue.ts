type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.tail) {
            this.tail = this.head = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    deque(): T | undefined {
        const head = this.head;
        if (!head) {
            return undefined;
        }
        this.length--;
        // set head to the next element or undefined if none
        this.head = this.head?.next;
        // Housekeeping for tail for when next is undefined
        if (this.length === 0) {
            this.tail = undefined;
        }
        return head?.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
