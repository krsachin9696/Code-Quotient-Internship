function divide(a, b) {

    if(a===-0&&b===0){
        return -Infinity;
    }
    
        if(a===null){
            return 0;
        }
    
        if(b===0||b===null){
            return Infinity;
        }
        if(typeof arguments[2]==='number'){
            return NaN;
        }
        if(typeof a==='string'||typeof b==='string'){
            const na=Number(a);
            const nb=Number(b);
            if(na==a&&nb==b){
    
                return Number(a)/Number(b);
            }else if(a===''&&typeof b==='number'){
                return 0;
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
    
    
    
        return a / b;
      }
      
      module.exports = divide;
      