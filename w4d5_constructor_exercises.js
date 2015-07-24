function Cat(options){
  this.name = options.name;
  this.owner = options.owner;
  this.cuteStatement = function(){
    return this.owner + " loves " + this.name
  }
};

Cat.prototype.meow = function (){
  return "meow meow!";
}

var curie = new Cat({name:"Marie Curie", owner: "Ned"});

var gizmo = new Cat({name: "Gizmo", owner: "Ned"});
gizmo.meow = function (){
  return "meow I love ned"
};

console.log(curie.meow());
console.log(gizmo.meow());
