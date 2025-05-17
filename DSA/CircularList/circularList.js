


class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}


class CircularLinkedList{
    constructor(){
        this.head=null
    }


    append(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head=newNode;
            newNode.next=this.head;
            return
        }

        let current = this.head

        while(current.next !== this.head){
            current=current.next;
        }

        current.next = newNode;
        newNode.next = this.head
    }


    display(){
        if(!this.head){
            console.log("List is Empty");
            return;
        }

        let current = this.head;
        do{
         console.log(current.data);
         current=current.next
         
        }while(current !== this.head)
    }


}

const List = new CircularLinkedList()

List.append(1)
List.append(2)
List.append(3)
List.append(4)
List.append(5)
List.display()