class ReadJson {

    static readJson(file) {
        let obj = file.toString();
        obj = obj.replace(/\\n/g, "\\n")
        .replace(/\\'/g, "\\'")
        .replace(/\\"/g, '\\"')
        .replace(/\\&/g, "\\&")
        .replace(/\\r/g, "\\r")
        .replace(/\\t/g, "\\t")
        .replace(/\\b/g, "\\b")
        .replace(/\\f/g, "\\f");
        obj = obj.replace(/[\u0000-\u0019]+/g, "");
        obj = JSON.parse(obj);
        return obj;
    }
}

module.exports = { ReadJson };
