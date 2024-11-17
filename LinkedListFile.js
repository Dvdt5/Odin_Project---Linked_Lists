class Node {
    
    constructor(value = null) {
        this.nodeName =  value;
        this.nextNode = null;
    }

}

export class LinkedList {

    constructor() {
        this.LinkedListHead = null;
    }

    append(value) {
        let newNode = new Node(value);
       
        
        if (this.LinkedListHead == null){
            this.LinkedListHead = newNode;
            
        }
        else {
            let currNode = this.LinkedListHead;
            while (currNode.nextNode != null){
                currNode = currNode.nextNode;
                
            }
            currNode.nextNode = newNode;
        }
    }

    prepend(value){
        let newNode = new Node(value);

        if (this.LinkedListHead == null){
            this.LinkedListHead = newNode;
        }
        else{
            let next = this.LinkedListHead;
            this.LinkedListHead = newNode;
            this.LinkedListHead.nextNode = next;
        }

    }

    size(){
        let returnValue = 0;
        let currNode = this.LinkedListHead;
        while (currNode != null){
            returnValue += 1;
            currNode = currNode.nextNode;
        }
        return returnValue;
    }

    head(){
        return this.LinkedListHead;
    }

    tail(){
        let currNode = this.LinkedListHead;
        while (currNode != null){
            if (currNode.nextNode == null){
                return currNode.nodeName;
            }
            currNode = currNode.nextNode;
        }
    }

    // Return the value at given index
    at(index){
        let count = 0;
        let currNode = this.LinkedListHead;
        while (currNode != null){
            if (count === index){
                return currNode.nodeName;
            }
            else{
                count++;
            }
            currNode = currNode.nextNode;
        }
        return null;
    }

    // Removes the tail of list.
    pop(){
        if (this.size() === 0){
            return new Error('Nothing to pop');
        }else if (this.size() === 1){
            this.LinkedListHead = null;
        }

        let currNode = this.LinkedListHead;
        while (currNode != null){
            if (currNode.nextNode.nodeName == this.tail()){
                currNode.nextNode = null;
            }
            currNode = currNode.nextNode;
        }
    }
    
    // Checks if value exists.
    contains(value){
        let currNode = this.LinkedListHead;
        while (currNode != null){
            if (currNode.nodeName == value){
                return true;
            }
            currNode = currNode.nextNode;
        }
        return false;
    }

    // Finds index of value
    find(value){
        let index = 0;
        let currNode = this.LinkedListHead;
        while (currNode != null){
            if (currNode.nodeName == value){
                return index;
            }
            index += 1;
            currNode = currNode.nextNode;
        }
        return null;
    }

    // Inserst value at given index
    insertAt(value, index) {

        // If given index is smaller or bigger than size of list it prepends or appends respectly.
        if (index <= 0){
            this.prepend(value);
            return;
        } else if (index >= this.size()){
            this.append(value);
            return;
        }

        let newNode = new Node(value);
        
        if (this.LinkedListHead == null){
            this.LinkedListHead = newNode;
        }
        else{
            let indexCount = 0;
            let currNode = this.LinkedListHead;

            while (currNode != null){
                if (indexCount == index){
                    newNode.nextNode = currNode;
                    currNode = newNode;
                }
                indexCount += 1;
                
                currNode = currNode.nextNode;
            }

            indexCount = 0;
            currNode = this.LinkedListHead;
            while (currNode != null){
                if (indexCount == index -1){
                    currNode.nextNode = newNode;
                }
                indexCount += 1;
                
                currNode = currNode.nextNode;
            }
        }
    }


    toString(){
        let returnString = ``;
        let currNode = this.LinkedListHead;
        while (currNode != null){
            returnString += `( ${currNode.nodeName} ) -> `;
            currNode = currNode.nextNode;
        }
        return `${returnString}null`;
    }
}