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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var fsp = require("fs/promises");
var GithubService_1 = require("./GithubService");
console.log("Macro has initialized");
function createJSONFileToProjectFolder(_a) {
    var id = _a.id, name = _a.name, created_at = _a.created_at;
    return __awaiter(this, void 0, void 0, function () {
        var baseJSONContent, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    baseJSONContent = JSON.stringify({ id: id, name: name, created_at: created_at });
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fsp.writeFile("./public/projects/".concat(id, "/data.json"), baseJSONContent)];
                case 2:
                    _b.sent();
                    console.log("Created data.json for project with ID ".concat(id));
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    console.error("Error creating data.json for project with ID ".concat(id, ":"), error_1);
                    throw error_1;
                case 4: return [2 /*return*/];
            }
        });
    });
}
function createVideosFolderById(repositoryId) {
    return __awaiter(this, void 0, void 0, function () {
        var destination, newFolderPath, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    destination = "./public/projects/".concat(repositoryId);
                    newFolderPath = "".concat(destination, "/videos");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fsp.mkdir(newFolderPath)];
                case 2:
                    _a.sent();
                    console.log("Created videos folder for project with ID ".concat(repositoryId));
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error("Error creating videos folder for project with ID ".concat(repositoryId, ":"), error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function createImagesFolderById(repositoryId) {
    return __awaiter(this, void 0, void 0, function () {
        var destination, newFolderPath, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    destination = "./public/projects/".concat(repositoryId);
                    newFolderPath = "".concat(destination, "/images");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fsp.mkdir(newFolderPath)];
                case 2:
                    _a.sent();
                    console.log("Created videos folder for project with ID ".concat(repositoryId));
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.error("Error creating images folder for project with ID ".concat(repositoryId, ":"), error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function createProjectFolderById(projectId) {
    return __awaiter(this, void 0, void 0, function () {
        var destination, newFolderPath, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    destination = "./public/projects";
                    newFolderPath = "".concat(destination, "/").concat(projectId);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fsp.mkdir(newFolderPath)];
                case 2:
                    _a.sent();
                    console.log("Created folder for project with ID ".concat(projectId));
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    console.error("Error creating folder for project with ID ".concat(projectId, ":"), error_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
var make = function () { return __awaiter(void 0, void 0, void 0, function () {
    var githubRepositories, publicProjectsPathname, publicProjectsIDs_1, newRepositories, _loop_1, _i, newRepositories_1, repository, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 7, , 8]);
                return [4 /*yield*/, GithubService_1.default.getRepositories()];
            case 1:
                githubRepositories = _a.sent();
                console.log("Github repositories ids: ", githubRepositories.map(function (x) { return x.id; }));
                publicProjectsPathname = "./public/projects";
                return [4 /*yield*/, fsp.readdir(publicProjectsPathname)];
            case 2:
                publicProjectsIDs_1 = _a.sent();
                console.log("./public/projects content: ", publicProjectsIDs_1);
                newRepositories = githubRepositories.filter(function (x) { return !publicProjectsIDs_1.includes(String(x.id)); });
                console.log("New repositories will be added", newRepositories);
                _loop_1 = function (repository) {
                    var project;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                project = githubRepositories.find(function (x) { return x.id === repository.id; });
                                return [4 /*yield*/, createProjectFolderById(repository.id)];
                            case 1:
                                _b.sent();
                                return [4 /*yield*/, createVideosFolderById(repository.id)];
                            case 2:
                                _b.sent();
                                return [4 /*yield*/, createImagesFolderById(repository.id)];
                            case 3:
                                _b.sent();
                                return [4 /*yield*/, createJSONFileToProjectFolder(project)];
                            case 4:
                                _b.sent();
                                return [2 /*return*/];
                        }
                    });
                };
                _i = 0, newRepositories_1 = newRepositories;
                _a.label = 3;
            case 3:
                if (!(_i < newRepositories_1.length)) return [3 /*break*/, 6];
                repository = newRepositories_1[_i];
                return [5 /*yield**/, _loop_1(repository)];
            case 4:
                _a.sent();
                _a.label = 5;
            case 5:
                _i++;
                return [3 /*break*/, 3];
            case 6:
                console.log("Projects Folders created with success");
                return [3 /*break*/, 8];
            case 7:
                error_5 = _a.sent();
                throw error_5;
            case 8: return [2 /*return*/];
        }
    });
}); };
make();
