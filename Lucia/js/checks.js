export function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }
    return true;
}

export function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}