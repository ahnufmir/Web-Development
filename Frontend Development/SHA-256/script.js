const crypto = require('crypto');

let preHash = function(preString){
    for (let index = 0; index < 10000000000000000000; index++) {
        let postString = index.toString();
        let string = preString.concat(postString);
        
        let check = false;
        const hash = crypto.createHash('sha256').update(string).digest('hex');
        for(let i = 0; i<5; i++){
            if(hash[i] != '0' ) {
                check = true;
                break;
            }
            //check = false;
        }
        if(!check)
        {
            //console.log(hash);
            //console.log(string);
            return string;
        }
        // if((hash[0] === '0') && (hash[1] === '0') && (hash[2] === '0') && (hash[3] === '0') && (hash[4] === '0')){
        //     console.log(hash);
        //     break;
        // }
        
    }
}
let preString= "100xdevs";
console.log(preHash(preString));


//
