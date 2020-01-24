import {isBlank} from './checks.js';
export function GenericValidation(el) {
    var check = 0;
    if (!isBlank(el.val())) {
        el.closest('div').find('span').hide();
    } else {
        el.closest('div').find('span').show();
        check = 1;
    }
    return (check === 1) ? false : el.val();
}
export function ValidateEmail(el) {
    var check = 0;
    var email = null;
    var a = el.val(function (i, val) {
        el.closest('div').find('span').hide();
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (isBlank(val) || re.test(String(val).toLowerCase()) === false) {
            el.closest('div').find('span').show();
            check = 1;
        } else {
            email = val;
        }
        return val.toLowerCase();
    });
    return (check === 1) ? false : email;
}
export function PhoneValidation(el) {
    var check = 0;
    if (/^\d{3}\-\d{3}-\d{4}$/.test(el.val())) {
    } else {
        el.closest('div').find('span').show();
        check = 1;
    }
    return (check === 1) ? false : el.val();
}

