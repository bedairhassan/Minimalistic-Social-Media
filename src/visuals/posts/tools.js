const fetchIsFriends = (postOwner,currentSignedIn,people) => {
    if (postOwner === currentSignedIn) {
        // YOU
        return "you";
    }

    for (const person of people) {
        const fetchother = fetchOther(person.who, currentSignedIn);

        if (fetchother === currentSignedIn) {
            break;
        }

        if (fetchother === postOwner) {
            return person.state; // friends,pending
        }
    }

    return "error";
};

module.exports={
    fetchIsFriends
}