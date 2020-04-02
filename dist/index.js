"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SQLGeneratorToolkit = /** @class */ (function () {
    function SQLGeneratorToolkit() {
    }
    SQLGeneratorToolkit.splitQueryParams = function (arr, len) {
        var a_len = arr.length;
        var result = [];
        for (var i = 0; i < a_len; i += len) {
            result.push(arr.slice(i, i + len));
        }
        return result;
    };
    SQLGeneratorToolkit.createQLWhere = function (column, params) {
        var whereCriteria = params.map(function (param) { return column + "='" + param + "'"; }).join(' OR ');
        return whereCriteria === '' ? '' : "where " + whereCriteria;
    };
    SQLGeneratorToolkit.createSQLStatements = function (masterSql, criteriaKey, params, boxLimit) {
        var _this = this;
        var paramResult = this.splitQueryParams(params, boxLimit);
        var result = [];
        paramResult.forEach(function (params) {
            var where = _this.createQLWhere(criteriaKey, params);
            result.push(masterSql + " " + where);
        });
        return result;
    };
    return SQLGeneratorToolkit;
}());
exports.SQLGeneratorToolkit = SQLGeneratorToolkit;
//# sourceMappingURL=index.js.map