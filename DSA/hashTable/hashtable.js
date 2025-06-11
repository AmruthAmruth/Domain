

class hashTable{
    constructor(size=10){
        this.size=size;
        this.table= new Array(size)
    }

    _hash(key){
        let hash=0;
        for(let i=0;i<key.length;i++){
            hash += key.charCodeAt(i)
        }
        return hash % this.size
    }



    set(key,value){
        let index = this._hash(key)
        if(this.table[index]){
            this.table[index]=[]
        }
        for(let item of this.table[index]){
            if(item[0]==key){
                item[1]=value;
                return;
            }
        }

        this.table[index].push([key,value])
    }


    get(key){
        let hash = this_hash(key)
        
    }


}
