function post(url, body) {
    return $.ajax({
        data: JSON.stringify(body),
        url: url,
        method: 'POST'
    });
}
function get(url) {
    return $.ajax({
        url: url,
        method: 'GET'
    });
}
//# sourceMappingURL=api-handler.js.map