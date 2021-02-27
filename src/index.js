module.exports = function toReadable (number) {
if (number==0)
return 'zero';
    var str = "";
    var digits = ['one','two','three','four','five','six',
  'seven','eight','nine','ten','eleven','twelve',
  'thirteen','fourteen','fifteen','sixteen','seventeen',
  'eighteen','nineteen'];
    var decs = ['twenty','thirty','forty','fifty','sixty','seventy',
                'eighty','ninety'];
    var hundred = 'hundred';
  if(number<20 && number > 0)
    str+= digits[number-1];
    else if (number>=20 && number<100){
   str+= decs[Math.floor(number/10)-2];
   if (digits[number%10-1]!=undefined)
      str += " "+digits[number%10-1];
  } 
    else if (number<1000 && number>=100){
        if (number - 100*Math.floor(number/100)<20 && number - 100*Math.floor(number/100)>=10){
            str+=digits[Math.floor(number/100)-1];
            str+=" "+hundred;
            str+=" "+digits[number - 100*Math.floor(number/100)-1];
        }else{
   str+=digits[Math.floor(number/100)-1];
      str+=" ";
      str+=hundred;
      if(decs[Math.floor(number/10)%10-2]!=undefined)
      str+=" "+decs[Math.floor(number/10)%10-2]; 
      if (digits[number%10-1]!=undefined)
      str +=" "+ digits[number%10-1];
  } 
}
  return str;
}
