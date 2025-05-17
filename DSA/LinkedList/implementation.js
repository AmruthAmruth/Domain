

class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode
    }


    prepend(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head=newNode;
            return;
        }
        newNode.next=this.head;
        this.head=newNode
    }

    display(){
        if(!this.head){
            console.log("List is empty");
            return;
        }
        let current = this.head;
        while(current){
            console.log(current.data);
            current= current.next;
        }
    }


    delete(data){
        if(!this.head){
            console.log("List is Empty");
            return;
        }
        if(this.head.data===data){
            this.head=this.head.next;
            return;
        }

        let current = this.head;

        while(current.next && current.next.data !== data){
            current=current.next
        }

        if(current.next){
            current.next=current.next.next;
        }else{
            console.log("No data Found");
            
        }
    }

    insertAtMiddle(data){
        const newNode = new Node(data);
        if(!this.head || !this.head.next){
          newNode.next=this.head;
          this.head=newNode;
          return;
        }
        let fast = this.head;
        let slow=this.head;
        let prev=null;

        while(fast && fast.next){
            fast=fast.next.next;
            prev=slow
            slow=slow.next;
        }

        prev.next=newNode;
        newNode.next=slow
    }


}


const List = new LinkedList();

List.append(1)
List.append(2)
List.append(3)
List.append(4)
List.append(5)
List.append(6)  
List.prepend(0)
List.delete(0)
List.insertAtMiddle(100)
List.display()