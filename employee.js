import {readformdata,myiterator} from './emp1.js';

let selectrow=null;

function onformsubmit() {
	//readformdata read the data from the form
	const read=new readformdata();

	//selectrow variable decide the perfrom insertion or updation
	//if condition true then perform insertion
	if(selectrow==null)
	{

			const data=myiterator(read);

			//get the value for display record in table
			var table=document.getElementById('Employee_list').getElementsByTagName('tbody')[0];

			//insert new row in table
			var newrow=table.insertRow(table.length);

			//create new cell in table
			cell1=newrow.insertCell(0);
			cell1.innerHTML=data.next().value;
			cell2=newrow.insertCell(1);
			cell2.innerHTML=data.next().value;
			cell3=newrow.insertCell(2);
			cell3.innerHTML=data.next().value;
			cell4=newrow.insertCell(3);
			cell4.innerHTML=data.next().value;
			cell5=newrow.insertCell(4);
			
			//whenever user want to edit record click on edit after call editdata() function
			cell5.innerHTML=`<a onclick="editdata(this)">Edit</a>`;
	}
	//if condition false then perform insertion
	else{

		const data=myiterator(read);

		updatedata(data);
	}	
	resetform();	
	
}



//when user click on edit then this function fill the textbox based on selected row
function editdata(td)
{

	//set the value of selectrow for perform updation
	selectrow=td.parentElement.parentElement;
	
	document.getElementById('Name').value=selectrow.cells[0].innerHTML;
	document.getElementById('Address').value=selectrow.cells[1].innerHTML;
	document.getElementById('E_id').value=selectrow.cells[2].innerHTML;
	document.getElementById('Designation').value=selectrow.cells[3].innerHTML;
}

//update the records
function updatedata(formdata)
{
	selectrow.cells[0].innerHTML=formdata.next().value;
	selectrow.cells[1].innerHTML=formdata.next().value;
	selectrow.cells[2].innerHTML=formdata.next().value;
	selectrow.cells[3].innerHTML=formdata.next().value;
}


//clear the textbox values
function resetform()
{
	document.getElementById('Name').value="";
	document.getElementById('Address').value="";
	document.getElementById('E_id').value="";
	document.getElementById('Designation').value="";
	selectrow=null;
}
