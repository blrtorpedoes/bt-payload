"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIncomingFiles = void 0;
function getIncomingFiles(_a) {
    var _b;
    var data = _a.data, req = _a.req;
    var file = (_b = req.files) === null || _b === void 0 ? void 0 : _b.file;
    var files = [];
    if (file && data.filename && data.mimeType) {
        var mainFile = {
            buffer: file.data,
            filename: data.filename,
            filesize: file.size,
            mimeType: data.mimeType,
            tempFilePath: file.tempFilePath,
        };
        files = [mainFile];
        if (data === null || data === void 0 ? void 0 : data.sizes) {
            Object.entries(data.sizes).forEach(function (_a) {
                var _b;
                var key = _a[0], resizedFileData = _a[1];
                if (((_b = req.payloadUploadSizes) === null || _b === void 0 ? void 0 : _b[key]) && data.mimeType) {
                    files = files.concat([
                        {
                            buffer: req.payloadUploadSizes[key],
                            filename: "".concat(resizedFileData.filename),
                            filesize: req.payloadUploadSizes[key].length,
                            mimeType: data.mimeType,
                        },
                    ]);
                }
            });
        }
    }
    return files;
}
exports.getIncomingFiles = getIncomingFiles;
