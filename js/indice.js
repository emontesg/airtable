const AIR_TABLE_API_KEY = "key2CPYLDJbtGZJEx";
var idSelected;
function getAllData() {
  return $.getJSON(
    `https://api.airtable.com/v0/appKyEFAIoD8DwERq/Tipos%20de%20dato?api_key=${AIR_TABLE_API_KEY}`
  );
}

function init() {
  getAllData().then(fillData);
}

function fillData({ records }) {
  var mainDiv = document.createElement("div");
  mainDiv.classList.add("main");
  var countRecords = 0;
  console.log("lenght", records.length);
  records.forEach(function(record) {
    var div = document.createElement('div');

    var id = document.createElement("div");
    id.innerHTML = record.id;
    id.id = record.id;
    id.classList.add("myID");
    id.onclick = function() { getData(id.id);  };
    div.appendChild(id);

    var singleText = document.createElement("div");
    singleText.innerHTML = record.fields["Single line text"];
    div.appendChild(singleText);

    var imagen = document.createElement("img");
    imagen.src = record.fields.Attachments[0].url;
    imagen.width = 300;
    imagen.height = 100;
    div.appendChild(imagen);

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    if (record.fields.Checkbox == true) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }
    div.appendChild(checkbox);

    var select = document.createElement('select');
    var selectOp = record.fields['Single Select'];
    var option = document.createElement("option");
    option.value = selectOp;
    option.text = selectOp;
    select.appendChild(option);
    div.appendChild(select);

    var selectM = record.fields['Multiple select'];
    var selectMulti = document.createElement("select");
    select.multiple = "multiple";
    for (var i = 0; i < selectM.length; i++) {
       var option = document.createElement("option");
       option.value = selectM[i];
       option.text = selectM[i];
       selectMulti.appendChild(option);
    }
    div.appendChild(selectMulti);

    var rating = record.fields.Rating;
    var rate = document.createElement('div');
    for (var i = 0; i < rating; i++) {
      rate.append('<span class="fa fa-star checked"></span>');
    }
    div.appendChild(rate);
    mainDiv.appendChild(div);
  });
  var container = document.getElementById('container');
  container.appendChild(mainDiv);
  console.log("main", idSelected);
}
function getData(id){
  console.log(id);
  localStorage.setItem('idRecord', id);
  window.location.href = 'data.html';
}

init();
