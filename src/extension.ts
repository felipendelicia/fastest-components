import * as vscode from 'vscode';
import * as fs from "fs";
import path from 'path';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('fastestcomponents.createReactComponentTemplate', (uri:vscode.Uri) => {

		console.log(uri)

		vscode.window.showInputBox({ prompt: 'Ingrese el nombre del componente de React:' }).then(componentName => {
			if (componentName) {
			  const componentFolder = path.join(uri.fsPath, componentName);
			  const indexPath = path.join(componentFolder, 'index.tsx');
			  const componentsPath = path.join(componentFolder, 'components.tsx');
			  const typesPath = path.join(componentFolder, "types.ts");
	  
			  fs.mkdirSync(componentFolder);
			  fs.writeFileSync(
				indexPath,
				`import { Container } from "./components";\n\nexport default function ${componentName}() {\n  return (\n    <Container>\n        Empty\n    </Container>\n  );\n}`
			  );

			  fs.writeFileSync(
				componentsPath,
				`import styled from "styled-components";\nexport const Container = styled.div\n`
			  );

			  fs.writeFileSync(
				typesPath,
				``
			  );

			  vscode.window.showInformationMessage(`Componente de React "${componentName}" creado correctamente.`);
			}
		  });
		
		vscode.window.showInformationMessage('Hello World from FastestComponents!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
