"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Http_1 = require("../Http");
var PestControlAPI = /** @class */ (function () {
    function PestControlAPI() {
    }
    PestControlAPI.addPestControl = function (input) {
        var obj = JSON.stringify(input);
        var tObj = JSON.parse(obj);
        var url = '/api/PestControl/add-PestControl';
        if (input.id && input.id !== 0) {
            // url = '/api/Harvesting/add-Harvestings/' + input.id + "?";
            return Http_1.Http.axios().post(url, obj, {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "*",
                    "Access-Control-Allow-Headers": "*"
                }
            })
                .then(function (response) {
                return response;
            }).catch(function (e) {
                console.log("Error in post" + e);
                return e.response;
            });
        }
        else {
            return Http_1.Http.axios().post(url, tObj)
                .catch(function (e) {
                return e.response;
            });
        }
    };
    PestControlAPI.getPestControlList = function () {
        return Http_1.Http.axios().get('/api/PestControl/pestControl-list')
            .catch(function (e) {
            return e.response;
        });
    };
    PestControlAPI.getPestControlByIdList = function (id) {
        return Http_1.Http.axios().get('/api/PestControl/get-PestControl/' + id)
            .catch(function (e) {
            return e.response;
        });
    };
    PestControlAPI.deletePestConytrol = function (id) {
        return Http_1.Http.axios().delete('/api/PestControl/delete-PestControl/' + id)
            .catch(function (e) {
            return e.response;
        });
    };
    return PestControlAPI;
}());
exports.PestControlAPI = PestControlAPI;
//# sourceMappingURL=PestControlAPI.js.map