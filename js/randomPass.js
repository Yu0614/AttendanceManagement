function getRndStr(){
  //�g�p�����̒�`
  var str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&";
 
  //�����̒�`
  var len = 8;
 
  //�����_���ȕ�����̐���
  var result = "";
  for(var i=0;i<len;i++){
    result += str.charAt(Math.floor(Math.random() * str.length));
  }
  return result;
}


