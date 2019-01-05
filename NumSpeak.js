ones = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'];
tens = ['Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen']
hundreds = ['Zero','Ten','Twenty','Thirty','Fourty','Fifty','Sixty','Seventy','Eighty','Ninety'];


class NumberSpeaker{

    speak(number) {
        let value =  this.speakCrore(number);
        console.log(value);
    }

    speakOnes(number){
        return ones[Math.floor(number)];
    }

    speakTens(number){
        let divident = number/10;
        let remainder = number%10;
        if(divident >=2){
            return hundreds[Math.floor(divident)]+ ' '+this.speakOnes(remainder);
        }else if(divident>=1){
            return  tens[Math.floor(remainder)];
        }else{
           return this.speakOnes(remainder);
        }
    }

    speakHundred(number){
        let remainder = number%100; 
        let divident = number/100;
        if(divident>=1){
            return this.speakOnes(divident)+ ' hundred ' + this.speakTens(remainder);
        }else{
            return this.speakTens(remainder);
        }
    }

    speakThousand(number){
        let remainder = number%1000; 
        let divident = number/1000;
        if(divident>=1){
            return this.speakTens(divident)+ ' thousand ' +this.speakHundred(remainder);
        }else{
            return this.speakHundred(remainder);
        }
    }


    speakLac(number){
        let remainder = number%100000; 
        let divident = number/100000;
        if(divident>=1){
            return this.speakTens(divident)+ ' lac ' + this.speakThousand(remainder);
        }else{
            return this.speakThousand(remainder);
        }
    }

    speakCrore(number){
        let remainder = number%10000000; 
        let divident = number/10000000;
        if(divident>=1){
            return this.speakCrore(divident)+ ' crore ' + this.speakLac(remainder);
        }else{
            return this.speakLac(remainder);
        }
    }
}

 speaker = new NumberSpeaker();
 speaker.speak(process.argv.slice(2));

 speaker.speak(12345678);
