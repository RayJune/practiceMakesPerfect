var MYAPP = MYAPP || {};
MYAPP.namespace = function (ns_string) {
    var parts = ns_string.split('.');
    var parent = MYAPP;
    var i;
    var len;
    // strip redundant leading global 
    if (parts[0] === 'MYAPP') {
        parts = parts.slice(1);
    }
    len = parts.length;
    for (i = 0; i < len; i++) {
        if (typeof(parent[parts[i]]) === 'undefined') {
            parent[parent[i]] = {};
        }
        parent = parent[parts[i]];
    }
    return parent;
};
