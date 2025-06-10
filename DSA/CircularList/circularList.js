

<<<<<<< HEAD

class Node{
    constructor(data){
        this.data=data;
        this.next=null;

class Node {
    constructor(data){
        this.data=data;
        this.next=null
>>>>>>> circular-list
    }
}


<<<<<<< HEAD
class CircularLinkedList{
    constructor(){
        this.head=null
=======
class CircularList{
    constructor(){
        this.head=null;
>>>>>>> circular-list
    }


    append(data){
        const newNode = new Node(data);
        if(!this.head){
<<<<<<< HEAD
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
=======
           this.head=newNode;
           newNode.next=this.head
            return;
        }
        let current = this.head;
        while(current.next !== this.head){
            current=current.next
        }
        current.next=newNode;
        newNode.next=this.head

>>>>>>> circular-list
    }


    display(){
        if(!this.head){
            console.log("List is Empty");
            return;
        }
<<<<<<< HEAD

        let current = this.head;
        do{
         console.log(current.data);
         current=current.next
         
        }while(current !== this.head)
=======
        let current = this.head;
        let str=""
       do{
         str += current.data + "-> " 
         current=current.next
       }while(current !== this.head)
        console.log(str);
        
    }


    isCircular(){
        if(!this.head) return false
        let current=this.head.next;
        while(current !==null && current !== this.head){
            current=current.next
        }
        return current===this.head
>>>>>>> circular-list
    }


}

<<<<<<< HEAD
const List = new CircularLinkedList()
=======

const List = new CircularList()
>>>>>>> circular-list

List.append(1)
List.append(2)
List.append(3)
List.append(4)
List.append(5)
<<<<<<< HEAD
List.display()
=======
List.display()
console.log(List.isCircular());
>>>>>>> circular-list
