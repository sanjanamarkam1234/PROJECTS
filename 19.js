const input = require("readline-sync");
let unit= input.questionInt("enter the number");
if (unit<=50) {
     p = 50 * 0.50;
     scharge = p *.20;
     tbill = sharge+a;
     console.log(tbill);
    }


      else
    if (unit<=100) {
        p = 50 * 0.50;
        q = (unit-50)*0.75;
        s = p *q;
        scharge = s*0.20;
        tbill= s+ scharge;
        console.log(tbill);
    }else{
        if (unit<=250) {
            p = 50*0.50;
            r = 100* 0.75;
            q = (unit-150)*1.20;
            s = p+r+q;
            scharge = s*0.20;
            tbill = s+scharge;
            console.log(tbill);
        }
        else
         p =50*0.50;
         q =100*0.75;
         r =100*1.20;
         t=(unit-250)*1.20;
         s=p+q+r+t;
         scharge = s*0.20;
         tbill= s+ scharge;
         console.log(tbill);
         


    }


    
