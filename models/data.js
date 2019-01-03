Category = {MANAGER: "Manager", WORKER: "Worker", CUSTOMER: "Customer", SUPPLIER: "Supplier"};
links = [
    {
        name: "Branch Management",
        id: "branchManagement"
    },
    {
        name: "Users Management",
        id: "userManagement"
    },
    {
        name: "catalog",
        id: "catalog"
    },
    {
        name: "About",
        id: "about"
    },
    {
        name: "Contact Us",
        id: "contactUs"
    }
];

areaCodePhoneNumber = ["02", "03", "04", "08", "09",
    "071", "072", "073", "074", "076", "077", "078", "079",
    "051", "052", "053", "054", "055", "056", "058", "059"];

function onlyDigit(str) {
    for (let i = 0; i < str.length; i++)
        if (str[i] < '0' || str[i] > '9')
            return false;
    return true;
};

module.exports = {

    links,
 Category ,


showLinks : function(category) {
    sendLinks = [];
    switch (category) {
        case Category.MANAGER:
            sendLinks.push(links[0]);
        case Category.WORKER:
            sendLinks.push(links[1]);
        case Category.CUSTOMER:
        case Category.SUPPLIER:
            sendLinks.push(links[2]);
        default:
            sendLinks.push(links[3]);
            sendLinks.push(links[4]);
    }
    return sendLinks;
},

IsPhoneNumber : function (phoneNumber) {
    let splits = phoneNumber.split("-");
    if (splits.length != 2)
        return false;
    let areaCode = splits[0], number = splits[1];
    if (number.length != 7)
        return false;
    if (!onlyDigit(areaCode) || !onlyDigit(number))
        return false;
    for (let i = 0; i < areaCodePhoneNumber.length; i++)
        if (areaCode == areaCodePhoneNumber[i])
            return true;
    return false;
}

}