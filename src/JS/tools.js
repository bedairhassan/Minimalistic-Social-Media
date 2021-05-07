let shortDate = ()=>{
    let date = new Date();
    date = date+''
    date = date.split(" ")
    return date[0]+' '+date[1]+' '+date[2]+' '+date[3]+' '+date[4]
}

// export const shortDate;
module.exports={
    shortDate
}