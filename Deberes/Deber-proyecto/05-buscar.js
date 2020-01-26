"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
var prompts = require("prompts");
function buscarArray(biblioteca) {
    return __awaiter(this, void 0, void 0, function () {
        var menuPostCreacion, menuMenu, ISBrequerido_1, indice, libroBuscado_1, libroEncontrado;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    menuPostCreacion = {
                        type: 'select',
                        name: 'value',
                        message: 'Cual es el parametro para buscar',
                        choices: [
                            { title: 'ISBN', description: 'Buscar por ISBN', value: '0', },
                            { title: 'Nombre', description: 'buscar por nombre', value: '1' }
                        ],
                        initial: 0
                    };
                    return [4 /*yield*/, prompts(menuPostCreacion)];
                case 1:
                    menuMenu = _a.sent();
                    if (!(menuMenu.value == 0)) return [3 /*break*/, 3];
                    return [4 /*yield*/, prompts({
                            type: 'number',
                            name: 'ISBN',
                            message: 'Coloque el ISBN del libro a buscar',
                            validate: function (value) { return typeof value != "number" ? 'solo numeros' : true; }
                        })];
                case 2:
                    ISBrequerido_1 = _a.sent();
                    indice = biblioteca.findIndex(// Este me devuelve el indice del arreglo que cumple la condicion del return
                    function (matrizLibro) {
                        return matrizLibro.ISBN == ISBrequerido_1.ISBN;
                    });
                    console.log('el libro es:');
                    console.log(biblioteca[indice]);
                    return [3 /*break*/, 5];
                case 3:
                    if (!(menuMenu.value == 1)) return [3 /*break*/, 5];
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'libroPerdido',
                            message: 'escriba el libro que desea buscar'
                        })];
                case 4:
                    libroBuscado_1 = _a.sent();
                    libroEncontrado = biblioteca.find(function (biblioteca) {
                        return biblioteca.Nombre == libroBuscado_1.libroPerdido;
                    });
                    console.log('el libro que busca es:');
                    console.log(libroEncontrado);
                    _a.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.buscarArray = buscarArray;
/*
const ejemplo = [ { Nombre: 'dan1', Autor: 'daniels', ISBN: 54, Editorial: 'dan',Color:'rojo' },
  { Nombre: 'dan2', Autor: 'adfasdf', ISBN: 47, Editorial: 'adf',Color:'azul' } ]

buscarArray(ejemplo).then().catch();
*/ 
