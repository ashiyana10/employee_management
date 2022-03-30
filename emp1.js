//here use class
//it get values from the form
export class readformdata{
	
constructor(){
		const formdata= new Array();
		formdata[0]=document.getElementById('Name').value;
		formdata[1]=document.getElementById('Address').value;
		formdata[2]=document.getElementById('E_id').value;
		formdata[3]=document.getElementById('Designation').value;
		return formdata;
	}
}

//here use iterator
export function myiterator(values) {
	let index=0;
	return{
		next:function()
		{
			
			if (index<values.length) 
			{
				return{
					value:values[index++],
					done:false
				}
			}
			else{
				return{
					value: undefined,
					done:true
				}
			}
		}
	}
}
