
	
	var QRyear;  
    var QRmonth;
    var QRday;  
    var QRhour;  
    var QRmin;   
    var QRsec;   
    var QRres; 
	var passLength = 0;
    var charSet = null;

 	function realQRTime(){
		QRdate = new Date();
		QRyear  = QRdate.getFullYear();
		QRmonth = QRdate.getMonth() + 1;
		QRday   = QRdate.getDate();
		QRhour  = ( QRdate.getHours()   < 10 ) ? '0' + QRdate.getHours()   : QRdate.getHours();
		QRmin   = ( QRdate.getMinutes() < 10 ) ? '0' + QRdate.getMinutes() : QRdate.getMinutes();
		QRsec   = ( QRdate.getSeconds() < 10 ) ? '0' + QRdate.getSeconds() : QRdate.getSeconds();
		QRres = ( QRyear + '-' + QRmonth + '-' + QRday + ' ' + QRhour + ':' + QRmin + ':' + QRsec );
 		return QRres;
 	}

      