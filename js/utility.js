export const text = function cut(text,limit = 100){
    if(text.length > limit){
       return text.substring(0,limit) + " npm ....";
    }
    return  text.substring(0,limit);
};