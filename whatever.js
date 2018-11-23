console.clear();
var todolist = {
	
  mylist: [],
  
  displayTodos: function() {
  	console.log(this);
  },
  
  addit: function(thingtoadd) {
  	this.mylist.push(
    	{
    		ingredients: thingtoadd,
      	completed: false
    	}
    );
    this.displayTodos();
  },
  
  changeit: function(position, newvalue) {
  	this.mylist[position].ingredients = newvalue;
    this.displayTodos();
  },
  
  flipit: function(position1,position2) {
  	var tempholder = this.mylist[position1];
    this.mylist[position1] = this.mylist[position2];
    this.mylist[position2] = tempholder;
    this.displayTodos();
  }
  
}

todolist.addit('bread');
todolist.addit('turkey');
todolist.addit('bread');
todolist.addit('dessert');
console.clear();

todolist.changeit(3,'salad');
console.clear();

todolist.flipit(3,0);