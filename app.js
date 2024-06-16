function search(input) {
    
    fetch(`https://api.weatherapi.com/v1/current.json?key=6f5ecbcb34d2449d967104445241606&q=${input}&aqi=no`)
        .then(function(response) {
            if (!response.ok) {
                alert("Error #005");
            }
            return response.json();
        })
        .then(function(data) {
            document.getElementById('status').innerText = data.current.condition.text;
            document.getElementById('address').innerText = `${data.location.name},${data.location.region},${data.location.country}`;
            document.getElementById('localTime').innerText = data.location.localtime;
            document.getElementById('lastUpdateTime').innerText = data.current.last_updated;
            document.getElementById('temp').innerText = data.current.temp_c + '°C';
            document.getElementById('wind').innerText = data.current.wind_kph + 'kph from ' + data.current.wind_dir;
            document.getElementById('feelLike').innerText = data.current.feelslike_c + "°C";
            document.getElementById('rain').innerText = data.current.precip_mm + "mm";
            document.getElementById('img').innerHTML = `<img src="${data.current.condition.icon}" width="100px">`;

            document.getElementById('container').style.visibility = 'visible';
        });
}

function getInput(){
    var input = document.getElementById('input').value;
if(input.trim==''){
    alert("Enter City")
}else{
    setInterval(function() {
        console.log("Updating");
        search(input);
    }, 2000);
    
    document.getElementById('input').value='';
}
}
