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
    }

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