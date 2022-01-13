class node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class doubleLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
    }

    add (val) {
        let n = new node(val);
        if (this.head == null) {
            this.head = n;
            this.tail = n;
        }
        else {
            n.previous = this.tail;
            this.tail.next = n;
            this.tail = n;
        }
    }

    remove (val) {
        if (this.head == null) {
            return false;
        }
        if (val == this.head.value) {
            if (this.head == this.tail) {
                this.head = null;
                this.tail = null;
            }
            else {
                this.head = this.head.next;
                this.head.previous = null;
            }
            return true;
        }
        let n = this.head.next;
        while (n != null && n.value != val) {
            n = n.next;
        }
        if (n == this.tail) {
            this.tail = this.tail.previous;
            this.tail = null;
            return true;
        }
        else if(n != null) {
            n.previous.next = n.next;
            n.next.previous = n.previous;
            return true;
        }
        return false;
    }

    traverse (callBack) {
        let n = this.head;
        while(n != null) {
            callBack(n.value);
            n = n.next;
        }
    }
}

function main() {
    let dll = new doubleLinkedList();
    dll.add("ele1");
    dll.add("ele2");
    dll.add("ele3");
    dll.add("ele4");

    dll.traverse((val) => {console.log(val);});

    dll.remove("ele1");
    dll.traverse((val) => {console.log(val);});
}

if(require.main === module) {
    main();
}
