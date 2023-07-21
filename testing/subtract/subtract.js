module.exports=function subtract(a,b){

    if(typeof arguments[2]==='number'){
        return NaN;
    }
    if(typeof a==='string'||typeof b==='string'){
        const na=Number(a);
        const nb=Number(b);
        if(na==a&&nb==b){

            return Number(a)-Number(b);
        }else if(a===''&&typeof b==='number'){
            return b;
        }else{
            return NaN;
        }

    }
    if(Array.isArray(a)||Array.isArray(b)||typeof a==='object'||typeof b==='object'){
        return NaN;
    }

    
    
   
    if(a===undefined||b===undefined){
        return NaN;
    }


    return a-b;
}