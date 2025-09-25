#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");
const readline = require("readline");

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Promisify the question method
function question(query) {
  return new Promise(resolve => {
    rl.question(query, resolve);
  });
}

async function initProject() {
  const cwd = process.cwd();
  const templateDir = path.join(__dirname, "../template");
  const templatePkgPath = path.join(templateDir, "package.json");
  const userPkgPath = path.join(cwd, "package.json");

  console.log("\n🚀 Welcome to Reactron - React Template Generator!\n");
  
  // Get user input for package.json
  const folderName = path.basename(cwd);
  const packageName = await question(`📦 Package name: (${folderName}) `);
  const version = await question("📝 Version: (1.0.0) ");
  const description = await question("📄 Description: (A React application with TypeScript and Vite) ");
  const author = await question("👤 Author: ");
  const license = await question("📜 License: (MIT) ");
  
  // 1. Copy all template files except package.json
  console.log("\n📂 Copying template files...");
  await fs.copy(templateDir, cwd, {
    overwrite: true,
    filter: (src) => !src.endsWith("package.json"),
  });

  // 2. Merge package.json files
  let templatePkg = {};
  if (fs.existsSync(templatePkgPath)) {
    templatePkg = JSON.parse(fs.readFileSync(templatePkgPath, "utf-8"));
  }

  let userPkg = {};
  if (fs.existsSync(userPkgPath)) {
    userPkg = JSON.parse(fs.readFileSync(userPkgPath, "utf-8"));
  } else {
    userPkg = { 
      name: packageName || folderName,
      version: version || "1.0.0",
      description: description || "A React application with TypeScript and Vite",
      author: author || "",
      license: license || "MIT"
    };
  }

  // Merge scripts
  userPkg.scripts = { ...(userPkg.scripts || {}), ...(templatePkg.scripts || {}) };

  // Merge dependencies
  userPkg.dependencies = { ...(userPkg.dependencies || {}), ...(templatePkg.dependencies || {}) };

  // Merge devDependencies
  userPkg.devDependencies = { ...(userPkg.devDependencies || {}), ...(templatePkg.devDependencies || {}) };

  fs.writeFileSync(userPkgPath, JSON.stringify(userPkg, null, 2));
  
  console.log("✅ React App Created successfully!");
  
  // Ask if user wants to install dependencies
  const installDeps = await question("🔧 Do you want to install dependencies now? (y/n) ");
  
  if (installDeps.toLowerCase() === 'y' || installDeps.toLowerCase() === 'yes') {
    console.log("\n📦 Installing dependencies...");
    const { spawn } = require('child_process');
    const npmInstall = spawn('npm', ['install'], { stdio: 'inherit', shell: true });
    
    npmInstall.on('close', (code) => {
      if (code === 0) {
        console.log("\n✅ Dependencies installed successfully!");
        console.log("\n🚀 To start the development server, run:");
        console.log("   npm run dev");
      } else {
        console.log("\n⚠️ There was an error installing dependencies.");
        console.log("   Please run 'npm install' manually.");
      }
      rl.close();
    });
  } else {
    console.log("\n👉 To install dependencies, run:");
    console.log("   npm install");
    console.log("\n🚀 To start the development server, run:");
    console.log("   npm run dev");
    rl.close();
  }
}

async function run() {
  const [, , command] = process.argv;

  if (command === "init") {
    await initProject();
  } else {
    console.log("Usage: reactron init");
  }
}

run();
