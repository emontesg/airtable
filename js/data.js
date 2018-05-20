function getData() {
  return $.getJSON(
    `https://api.airtable.com/v0/appKyEFAIoD8DwERq/Tipos%20de%20dato?api_key=${AIR_TABLE_API_KEY}`
  );
}

function start() {
  console.log(idSelected);
  getData().then(fillData);
}

start();
