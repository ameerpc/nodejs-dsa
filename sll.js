class node
{
    constructor (value)
    {
        this.value = value;
        this.next = null;
    }
}
class linkedList 
{
    constructor ()
    {
        this.head = null;
        this.tail = null;
    }

    add(val) 
    {
       let n = new node(val);
       if(this.head == null)
       {
           this.head = n;
           this.tail = n;
       } 
       else
       {
           this.tail.next = n;
           this.tail = n;
       }
    }

    traverse(callBack)
    {
        let n = this.head;
        while(n != null)
        {
            callBack(n.value);
            n = n.next;
        }

    }

    contain(val) {
        let n = this.head;
        while (n != null && n.value != val) {
            n = n.next;
        }
        if (n == null) {
            return false;
        }
        return true;
    }

    remove(val) {
        if (this.head == null) {
            return false;
        }

        let n = this.head;
        if (n.value == val) {
            if (this.head == this.tail) {
                this.head = null;
                this.tail = null;
            }
            else {
                this.head = this.head.next;
            }
            return true;
        }
        while (n.next != null && n.next.value != val) {
            n = n.next;
        }
        if(n.next != null) {
            if(n.next == this.tail) {
                n.next = null;
                this.tail = n;
            }
            else {
                n.next = n.next.next;
            }
            return true;
        }
        return false;
    }
}

function main() {
    let ll = new linkedList();
    ll.add(2);
    ll.add(3);
    ll.add(4);
    ll.add(5);
    ll.add(6);
    ll.traverse(function (val) {
        console.log(val);
    });
    ll.remove(6);
    ll.remove(2);
    ll.traverse(function (val) {
        console.log(val);
    });
}

if (require.main === module) {
    main();
}