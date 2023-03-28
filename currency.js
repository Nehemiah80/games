let select = document.querySelectorAll('.currency'),
    input_currency = document.getElementById('input_currency'),
    output_currency = document.getElementById('output_currency');
    
const host = 'api.frankfurter.app';
fetch(`https://${host}/currencies`)
   .then((data) => data.json())
   .then((data) => {
        const entries = Object.entries(data);


        for(i =0; i < entries.length; i++){
            select[0].innerHTML += `<option value= "${entries[i][0]}>${entries[i][0]}</option>` 
            select[1].innerHTML += `<option value= "${entries[i][0]}>${entries[i][0]}</option>` 
        }
   });

   function converter(){
    let input_currency = input_currency.value;
      if(select[0].value != select[1].value){
        alert("Right")
      }else{
        alert('Please select two different currency')
      }
   }