var c = new Date();
var QRyear  = c.getFullYear();
var QRmonth = c.getMonth() + 1;
var QRday   = c.getDate();
var QRhour  = ( c.getHours()   < 10 ) ? '0' + c.getHours()   : c.getHours();
var QRmin   = ( c.getMinutes() < 10 ) ? '0' + c.getMinutes() : c.getMinutes();
var QRsec   = ( c.getSeconds() < 10 ) ? '0' + c.getSeconds() : c.getSeconds();
var QRres = ( QRyear + '-' + QRmonth + '-' + QRday + ' ' + QRhour + ':' + QRmin + ':' + QRsec );
//結果  2011-10-14 00:00:00
      
      //qr = "adfhdgdgsggs"
      jQuery('#qrcode').qrcode({
        text:QRres
      });