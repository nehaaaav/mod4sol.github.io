var names=new Array();
names[0]="Yamini";
names[1]="Janhavi";
names[2]="Jenny";
names[3]="jason durelo";
names[4]="Priya";
names[5]="damini";
names[6]="Jyoti";
names[7]="Niharika";
names[8]="Jamna";
names[9]="Nirmala";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}