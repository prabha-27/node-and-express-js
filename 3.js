const person= {
    name:'prabha',
    age:28,
    greet:function(){
        console.log('Hi, this is '+this.name );
    }
};
person.greet();