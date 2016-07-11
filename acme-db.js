function AcmeDb(){
    this.guys = [];
this.getEmployees = function (n){
	  return this.guys

}

this.getEmployee = function(n){
    
    var theguy = {};
    
    for (var i = 0; i< this.guys.length; i++)
	    {
	        if (this.guys[i].id == n)
	        {
	            theguy.name = this.guys[i].name;
	            theguy.id = this.guys[i].id;
	        }
	    }
	return theguy;
}
	 
this.deleteEmployee = function (obj){
   

    this.guys = this.guys.filter(function(man){
        return man.name != obj.name;
        
        })
}
	 
this.groupedEmployees = function (){
    var grouped = {};
    
    for (var i = 0; i< this.guys.length; i++)
    {
        if (grouped[this.guys[i].name.split('')[0]] == undefined)
        {
              grouped[this.guys[i].name.split('')[0]] = [];
              grouped[this.guys[i].name.split('')[0]].push(this.guys[i]);
        }
        else {grouped[this.guys[i].name.split('')[0]].push(this.guys[i]);}
    }
    return grouped;
}	 
	 
	 
 this.addEmployee = function (name,id){
	 this.guys.push(new Employee(name,id));
	 this.guys.sort(function(a,b)
	 {
	    if (a.name < b.name)
	    {return -1}
	    if (a.name > b.name)
	    {
	        return 1         
	    }
	    return 0;
	 }
	 );
	 
	 }
	 

}
	


function Employee(n, i){
	this.name =	n;
	this.id = i;
}