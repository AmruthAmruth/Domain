

class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}


class LinkedList{
    constructor(){
        this.head=null
    }

    append(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head=newNode
            return;
        }
        let current = this.head;
        while(current.next){
            current=current.next
        }
        current.next=newNode
    }


    display(){
        if(!this.head){
            console.log("List is Empty");
            return
        }
        let current = this.head;
        let result=""
        while(current){
            result+= current.data +" -> "
            current=current.next;
        }
        console.log(result,"null");
    }


    insertAtBiggning(data){
        const newNode = new Node(data);
       if(!this.head){
        this.head=newNode;
        return;
       }
       newNode.next=this.head;
       this.head=newNode
    }


    delete(data){
        if(!this.head){
            console.log("list is empty");
            return
        }
        if(this.head.data===data){
            this.head=this.head.next;
            return
        }
        let prev=null
        let current = this.head;
       
        while(current && current.data !== data){
            prev=current;
            current=current.next
        }
      if(current){
          prev.next=current.next;
      }else{
        console.log("Element not found");
      }
    }

    deleteFromBigginig(){
        if(!this.head){
            console.log("List is empty");
            return
        }

        this.head=this.head.next;

    }


    deletedFromEnd(){
        if(!this.head){
            console.log("List is empty");
            return;
        }
        let prev=this.head;
        let current = this.head;
        while(current.next){
            prev=current;
            current=current.next
        }
    prev.next=null
    }

    findLength(){
        if(!this.head){
            console.log("List is empty");
            return
        }
        let current = this.head;
        let count=0;
        while(current){
            count++
            current=current.next
        }

        console.log("Number of Nodes",count);
        
    }


    findMiddileElement(){
        if(!this.head){
            console.log("List is empty");
            return;
        }
        let fast=this.head;
        let slow=this.head;
        while(fast && fast.next){
            fast=fast.next.next;
            slow=slow.next
        }
        console.log("Middile Element is",slow.data);
        
    }





}


const List = new LinkedList()

List.append(2)
List.append(3)
List.append(4)
List.append(5)
List.append(6) 
List.delete(9)
List.insertAtBiggning(1)
List.display()
List.findLength()
List.findMiddileElement()