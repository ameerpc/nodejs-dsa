class minHeap{
    constructor () {
        this.heap = [null];
        this.count = 0;
    }

    swap(val1, val2) {
        let i = this.heap[val2];
        this.heap[val2] = this.heap[val1];
        this.heap[val1] = i;
    }

    minHeapify() {
        let i = this.count - 1;
        let j = Math.floor((i-1)/2);
        while (i > 0 && this.heap[i] < this.heap[j]) {
            this.swap(i, j);
            i = (i-1)/2;
            j = Math.floor((i-1)/2);
        }
    }

    add(val) {
        this.heap[this.count] = val;
        this.count++;
        this.minHeapify();
    }

    delete(val) {
        let index = this.heap.indexOf(val);
        if(index<0) return false;
        this.count--;
        this.heap[index] = this.heap[this.count];
        this.heap[this.count] = null;
        let left = (2*index) + 1;
        let right = (2*index) + 2;
        while (left < this.count && (this.heap[index] > this.heap[left] || this.heap[index] > this.heap[right])) {
            if (this.heap[left] < this.heap[right]) {
                this.swap(this.heap[left], this.heap[index]);
                index = left;
            } else {
                this.swap(this.heap[right], this.heap[index]);
                index = right;
            }
            left = (2*index) + 1;
            right = (2*index) + 2;
        }
        return true;
    }

    contain(val) {
        let start = 0;
        let nodes = 1;
        let end = 0;
        while (start < this.count) {
            start = nodes - 1;
            end = nodes + start;
            this.count = 0;
            while (start < this.count && start < end) {
                if (val == this.heap[start]) {
                    return true;
                }
                else if (val < this.heap[Math.floor((start-2)/2)] && val < this.heap[start]) {
                    this.count++;
                }
                start++;
            }
            if (this.count == nodes) {
                return false;
            }
        }
        return false;
    }

    traverse(callBack) {
        this.heap.forEach(element => {
            callBack(element);
        });
    }

}

function main() {
    let hp = new minHeap();
    hp.add(4);
    hp.add(7);
    hp.add(49);
    hp.add(34);
    hp.add(76);
    hp.add(2);
    hp.add(45);
    hp.add(100);
    hp.add(10);
    hp.traverse(ele => {console.log(ele)});
    hp.contain(49)?console.log("Value exist"):console.log("Value not exists");
}

if (require.main === module) {
    main();
}