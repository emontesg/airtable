function getDataById(id) {
  return $.getJSON(
    "https://api.airtable.com/v0/appKyEFAIoD8DwERq/Tipos%20de%20dato/"+id+"/?api_key="+AIR_TABLE_API_KEY
  );
}

function start() {
  var idRecord = localStorage.getItem("idRecord");
  getDataById(idRecord).then(fillRecord);
}

start();

function fillRecord(record){
  //SINGLE TEXT
  var singleText = document.getElementById('singleText');
  singleText.innerHTML = record.fields['Single line text'];
  //LONG TEXT
  var longText =document.getElementById('longText');
  longText.innerHTML = record.fields['Long Text'];

  //IMAGEN
  var imagen = document.getElementById('imagen');
  imagen.src = record.fields.Attachments[0].url;

  //CHECKBOX
  if(record.fields.Checkbox == true){
    document.getElementById("checkbox").checked = true;
  }else{
     document.getElementById("checkbox").checked = false;
  }

  //DATE
  var date = document.getElementById('date');
  date.innerHTML = record.fields.Date;

  //EMAIL
  var email = document.getElementById('email');
  email.innerHTML = record.fields.email;

  //SELECT
  var divSelect = document.getElementById('select');
  var select = record.fields['Single Select'];
  var selectSingle = document.createElement("select");
  var option = document.createElement("option");
  option.value = select;
  option.text = select;
  divSelect.appendChild(selectSingle);
  selectSingle.appendChild(option);

  //MULTI SELECT
  var divSelectMulti = document.getElementById('multiSelect');
  var selectM = record.fields['Multiple select'];
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
  url.innerHTML = record.fields.URL;

  //NUMBER
  var number = document.getElementById('number');
  number.innerHTML = record.fields.Number;

  //CURRENCY
  var currency = document.getElementById('currency');
  currency.innerHTML = record.fields.Currency;

  //FORMULA
  var formula = document.getElementById('formula');
  formula.innerHTML = record.fields.Formula;

  //RATING
  var rating = record.fields.Rating;
  for (var i = 0; i < rating; i++) {
    $('#rating').append('<span class="fa fa-star checked"></span>');
  }

}
