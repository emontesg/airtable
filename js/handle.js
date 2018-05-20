const AIR_TABLE_API_KEY = "key2CPYLDJbtGZJEx";


function getAllData() {
  return $.getJSON(
    `https://api.airtable.com/v0/appKyEFAIoD8DwERq/Tipos%20de%20dato?api_key=${AIR_TABLE_API_KEY}`
  );
}

function init() {
  getAllData().then(fillData);
}
function fillData({records}) {
 console.log(records[0].fields.Checkbox);
 //SINGLE TEXT
 var singleText = document.getElementById('singleText');
 singleText.innerHTML = records[0].fields['Single line text'];
 //LONG TEXT
 var longText =document.getElementById('longText');
 longText.innerHTML = records[0].fields['Long Text'];

 //IMAGEN
 var imagen = document.getElementById('imagen');
 imagen.src = records[0].fields.Attachments[0].url;

 //CHECKBOX
 if(records[0].fields.Checkbox == true){
   document.getElementById("checkbox").checked = true;
 }else{
    document.getElementById("checkbox").checked = false;
 }

 //DATE
 var date = document.getElementById('date');
 date.innerHTML = records[0].fields.Date;

 //EMAIL
 var email = document.getElementById('email');
 email.innerHTML = records[0].fields.email;

 //SELECT
 var divSelect = document.getElementById('select');
 var select = records[0].fields['Single Select'];
 var selectSingle = document.createElement("select");
 var option = document.createElement("option");
 option.value = select;
 option.text = select;
 divSelect.appendChild(selectSingle);
 selectSingle.appendChild(option);

 //MULTI SELECT
 var divSelectMulti = document.getElementById('multiSelect');
 var selectM = records[0].fields['Multiple select'];
 var selectMulti = document.createElement("select");
 select.multiple = "multiple";
 for (var i = 0; i < selectM.length; i++) {
    var option = document.createElement("option");
    option.value = selectM[i];
    option.text = selectM[i];
    selectMulti.appendChild(option);
}
divSelectMulti.appendChild(selectMulti);

 //URL
 var url = document.getElementById('url');
 url.innerHTML = records[0].fields.URL;

 //NUMBER
 var number = document.getElementById('number');
 number.innerHTML = records[0].fields.Number;

 //CURRENCY
 var currency = document.getElementById('currency');
 currency.innerHTML = records[0].fields.Currency;

 //FORMULA
 var formula = document.getElementById('formula');
 formula.innerHTML = records[0].fields.Formula;

 //RATING
 var rating = records[0].fields.Rating;
 for (var i = 0; i < rating; i++) {
   $('#rating').append('<span class="fa fa-star checked"></span>');
 }


}

init();
