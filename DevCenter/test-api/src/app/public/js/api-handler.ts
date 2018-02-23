
/**
 *  To Handle post request
 * @param url
 * @param body
 * @returns {*}
 */
function post(url, body) {
    return $.ajax(
        {
          data: JSON.stringify(body),
          url: url,
          method: 'POST'
        }
    );
}

/**
 *  To Handle get request
 * @param url
 * @returns {*}
 */
function get(url) {
    return $.ajax(
        {
          url: url,
          method: 'GET'
        }
    );
}