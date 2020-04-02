"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var effects_1 = require("redux-saga/effects");
var PestControl_1 = require("../../actions/PestControl");
var PestControlAPI_1 = require("../../../utils/api/PestControlAPI");
function storePestControlData(request) {
    var data, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                return [4 /*yield*/, effects_1.call(PestControlAPI_1.PestControlAPI.addPestControl, request.input)];
            case 1:
                data = (_a.sent()).data;
                console.log(data);
                return [4 /*yield*/, effects_1.put({
                        type: PestControl_1.STORE_PESTCONTROL_COMPLETED,
                        input: request.input,
                    })];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                e_1 = _a.sent();
                return [4 /*yield*/, effects_1.put({ type: PestControl_1.STORE_PESTCONTROL_FAILED, payload: e_1.message })];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
exports.storePestControlData = storePestControlData;
function getPestControlList() {
    var data, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                return [4 /*yield*/, effects_1.call(PestControlAPI_1.PestControlAPI.getPestControlList)];
            case 1:
                data = (_a.sent()).data;
                console.log(data);
                return [4 /*yield*/, effects_1.put({
                        type: PestControl_1.GET_PESTCONTROL_COMPLETED,
                        payload: data
                    })];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                e_2 = _a.sent();
                return [4 /*yield*/, effects_1.put({ type: PestControl_1.GET_PESTCONTROL_FAILED, payload: e_2.message })];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
exports.getPestControlList = getPestControlList;
function getPestControlByIdList(request) {
    var data, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                return [4 /*yield*/, effects_1.call(PestControlAPI_1.PestControlAPI.getPestControlByIdList, request.id)];
            case 1:
                data = (_a.sent()).data;
                console.log(data);
                return [4 /*yield*/, effects_1.put({
                        type: PestControl_1.GET_PESTCONTROLBYID_COMPLETED,
                        payload: data
                    })];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                e_3 = _a.sent();
                return [4 /*yield*/, effects_1.put({ type: PestControl_1.GET_PESTCONTROLBYID_FAILED, payload: e_3.message })];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
exports.getPestControlByIdList = getPestControlByIdList;
function deletePestControl(request) {
    var result, status, e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                return [4 /*yield*/, effects_1.call(PestControlAPI_1.PestControlAPI.deletePestConytrol, request.id)];
            case 1:
                result = _a.sent();
                status = result.data;
                return [4 /*yield*/, effects_1.put({
                        type: PestControl_1.DELETE_PESTCONTROL_COMPLETED,
                        payload: result.data,
                        input: request
                    })];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                e_4 = _a.sent();
                return [4 /*yield*/, effects_1.put({ type: PestControl_1.DELETE_PESTCONTROL_FAILED, payload: e_4.message })];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
exports.deletePestControl = deletePestControl;
//# sourceMappingURL=PestControl.js.map