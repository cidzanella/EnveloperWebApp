const express = require('express');

// COLLECTION OF HELPERS FUNCTIONS

// EMPTY STRING
function isEmptyString(strData) {
    // checks if it exist
    if (typeof strData === 'undefined') return true;
    // since there is data check for valid data
    return (!strData.trim() || strData.lenght === 0);
}

module.exports = {isEmptyString};