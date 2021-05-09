let modifyFriends = (array, signedInUser, state) => {
    array = array
        .filter((item) => item.state === state) // filter by pending
        .map((item) => item.who); // array will only contain strings no objects.

    return array;
};


let fetchOther = (string, guest) => {
    string = string.split(",");

    if (string[0] === guest) return string[1];

    if (string[1] === guest) return string[0];

    // return guest===string[0] ? string[1] : (guest===string[1]?string[0]:'')
};



let isAvailable = (string, guest) => {
    string = string.split(",");

    return guest === string[0] || guest === string[1];
};


module.exports={
    modifyFriends,fetchOther,isAvailable
}