
 function clickQR(){
		var flag=0;
		var date=realQRTime();
		var pass=getRndStr();
		document.getElementById("QRtime").innerHTML ="・クリックされた時間は[" + date +"]です。";
		document.getElementById("rndPass").innerHTML ="・ランダムキーは【" + pass + "】です。";
		document.getElementById("caution").innerHTML ="・QRを読み取ってください";
		
		jQuery("#qrcode").qrcode({
       		text: date +";" + pass
     	});
     	
}	