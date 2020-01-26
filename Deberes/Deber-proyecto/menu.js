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
var _03_actualizar_1 = require("./03-actualizar");
var _04_borrar_1 = require("./04-borrar");
var _05_buscar_1 = require("./05-buscar");
function menuuuuu(matriz) {
    return __awaiter(this, void 0, void 0, function () {
        var preguntas, hi, matrizactualizada, matrizNueva, elemnto, preguntaUnlibro, nuevoLIBRO;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    preguntas = {
                        type: 'select',
                        name: 'menu',
                        message: 'Que desea hacer?',
                        choices: [
                            { title: 'Actualizar', description: 'Actualaizar los datos de un libro especifico', value: 0 },
                            { title: 'Eliminar', description: 'Eliminar un libro de la biblioteca', value: 1 },
                            { title: 'Buscar', description: 'Buscar por el ISBN', value: 2 },
                            { title: 'crear', description: 'crear un nuevo libro', value: 3 },
                            { title: 'Salir', description: 'Dejar el arreglo tal cual', value: 4 },
                            { title: 'Imprimir', description: 'Imprimir la biblioteca', value: 5 }
                        ],
                        initial: 1
                    };
                    return [4 /*yield*/, prompts(preguntas)];
                case 1:
                    hi = _a.sent();
                    if (!(hi.menu == 0)) return [3 /*break*/, 3];
                    return [4 /*yield*/, _03_actualizar_1.actualizar(matriz)];
                case 2:
                    matrizactualizada = _a.sent();
                    menuuuuu(matrizactualizada);
                    return [3 /*break*/, 10];
                case 3:
                    if (!(hi.menu == 1)) return [3 /*break*/, 5];
                    return [4 /*yield*/, _04_borrar_1.eliminar(matriz)];
                case 4:
                    matrizNueva = _a.sent();
                    menuuuuu(matrizNueva);
                    return [3 /*break*/, 10];
                case 5:
                    if (!(hi.menu == 2)) return [3 /*break*/, 7];
                    return [4 /*yield*/, _05_buscar_1.buscarArray(matriz)];
                case 6:
                    elemnto = _a.sent();
                    menuuuuu(matriz);
                    return [3 /*break*/, 10];
                case 7:
                    if (!(hi.menu == 3)) return [3 /*break*/, 9];
                    preguntaUnlibro = [
                        {
                            type: 'text',
                            name: 'Nombre',
                            message: 'Coloque el nombre del libro',
                        }, {
                            type: 'text',
                            name: 'Autor',
                            message: 'Coloque el autor del libro'
                        }, {
                            type: 'number',
                            name: 'ISBN',
                            message: 'Coloque el ISBN del libro',
                            validate: function (value) { return typeof value != "number" ? 'solo numeros' : true; }
                        }, {
                            type: 'text',
                            name: 'Editorial',
                            message: 'Coloque la editorial del libro'
                        }, {
                            type: 'text',
                            name: 'color',
                            message: 'coloque el color de la portada'
                        }
                    ];
                    return [4 /*yield*/, prompts(preguntaUnlibro)];
                case 8:
                    nuevoLIBRO = _a.sent();
                    matriz.push(nuevoLIBRO);
                    menuuuuu(matriz);
                    return [3 /*break*/, 10];
                case 9:
                    if (hi.menu == 5) {
                        console.log(matriz);
                        menuuuuu(matriz);
                    }
                    _a.label = 10;
                case 10: return [2 /*return*/];
            }
        });
    });
}
exports.menuuuuu = menuuuuu;
