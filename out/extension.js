"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = __importStar(require("vscode"));
const fs = __importStar(require("fs"));
const path_1 = __importDefault(require("path"));
function activate(context) {
    let disposable = vscode.commands.registerCommand('fastestcomponents.createReactComponentTemplate', (uri) => {
        console.log(uri);
        vscode.window.showInputBox({ prompt: 'Ingrese el nombre del componente de React:' }).then(componentName => {
            if (componentName) {
                const componentFolder = path_1.default.join(uri.fsPath, componentName);
                const indexPath = path_1.default.join(componentFolder, 'index.tsx');
                const componentsPath = path_1.default.join(componentFolder, 'components.tsx');
                const typesPath = path_1.default.join(componentFolder, "types.ts");
                fs.mkdirSync(componentFolder);
                fs.writeFileSync(indexPath, `import { Container } from "./components";\n\nexport default function ${componentName}() {\n  return (\n    <Container>\n        Empty\n    </Container>\n  );\n}`);
                fs.writeFileSync(componentsPath, `import styled from "styled-components";\nexport const Container = styled.div\n`);
                fs.writeFileSync(typesPath, ``);
                vscode.window.showInformationMessage(`Componente de React "${componentName}" creado correctamente.`);
            }
        });
        vscode.window.showInformationMessage('Hello World from FastestComponents!');
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map