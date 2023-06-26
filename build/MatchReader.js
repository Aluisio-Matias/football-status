"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const utils_1 = require("./utils");
;
class MatchReader {
    constructor(reader) {
        this.reader = reader;
        //matches is a property of this class as a tuple (MatchData)
        this.matches = [];
    }
    load() {
        this.reader.read();
        this.matches = this.reader.data.map((row) => {
            return [
                (0, utils_1.dateStringToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6]
            ];
        });
    }
}
exports.MatchReader = MatchReader;
;
