function updateDateTime() {
    var now = new Date();
    var formattedDateTime = now.getFullYear() + '-' +
        ('0' + (now.getMonth() + 1)).slice(-2) + '-' +
        ('0' + now.getDate()).slice(-2) + ' ' +
        ('0' + now.getHours()).slice(-2) + ':' +
        ('0' + now.getMinutes()).slice(-2) + ':' +
        ('0' + now.getSeconds()).slice(-2);

    document.getElementById('current-datetime').innerText = formattedDateTime;
}

updateDateTime();
setInterval(updateDateTime, 1000);
