var names= new Array();
names[0]="Yaakov";
names[1]="Leon";
names[2]="Vukona";
names[3]="Yaya";
names[4]="Pule";
names[5]="Brilliant";
names[6]="Ntsakiso";
names[7]="Sylvia";
names[8]="Lethabo";
names[9]="Jimmy";



for (var i=0; i< names.length; i++){
	if(names[i].charAt(0)==="J"||names[i].charAt(0)=="j"){
		console.log("Goodbye " + names[i])
	}
	else{
		console.log("Hello " + names[i] )
	}
}
