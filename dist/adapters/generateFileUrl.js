"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGenerateURL = void 0;
var getGenerateURL = function (mediaDomain) { return function (args) {
    console.log({ mediaDomain: mediaDomain }, args.collection, args.filename);
    var prefixUrl = (args.prefix === undefined || args.prefix === "") ? "" : args.prefix + "/";
    var url = "".concat(mediaDomain, "/").concat(prefixUrl).concat(args.filename);
    console.log({ url: url });
    return url;
}; };
exports.getGenerateURL = getGenerateURL;
