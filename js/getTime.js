   
   
   
    var year;  
    var month;
    var day;  
    var hour;  
    var min;   
    var sec;   
    var res; 
    
    // Dateの取得 
  function realTime(){
     var d = new Date();
     year  = d.getFullYear();
     month = d.getMonth() + 1;
     day   = d.getDate();
     hour  = ( d.getHours()   < 10 ) ? '0' + d.getHours()   : d.getHours();
     min   = ( d.getMinutes() < 10 ) ? '0' + d.getMinutes() : d.getMinutes();
     sec   = ( d.getSeconds() < 10 ) ? '0' + d.getSeconds() : d.getSeconds();
     res = ( year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec );
     return res;
  }
  
   setInterval('clock()',500);
   function clock(){
      // リアルタイムで時間表示
      document.getElementById("dateNow").innerHTML="現在の時間は " +realTime()+ " です";
      
    }
  
  
  
  
  
  
  
  