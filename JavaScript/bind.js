var user={
    name:'Raj',
    age: 26,
    getName:function(surname){
        console.log('user name is ' + this.name +surname);
    }
}

var user2={
    name: 'Sanjay',
    age: 21
}
var x= user.getName.bind(user2);
x(' G S')