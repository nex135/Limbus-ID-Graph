import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { copyFileSync, mkdirSync, existsSync, readdirSync, statSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sourceDir = join(__dirname, 'dist');
const targetDir = join(__dirname, '..');

// Create assets directory if it doesn't exist
const assetsDir = join(targetDir, 'assets');
if (!existsSync(assetsDir)) {
  mkdirSync(assetsDir, { recursive: true });
}

function copyDirectory(source, target) {
  if (!existsSync(target)) {
    mkdirSync(target, { recursive: true });
  }

  const files = readdirSync(source);
  files.forEach(file => {
    const sourcePath = join(source, file);
    const targetPath = join(target, file);
    
    if (statSync(sourcePath).isDirectory()) {
      copyDirectory(sourcePath, targetPath);
    } else {
      // Only copy build files (js, css, html)
      if (file.endsWith('.js') || file.endsWith('.css') || file.endsWith('.html') || file.endsWith('.svg')) {
        copyFileSync(sourcePath, targetPath);
        console.log(`Copied ${file} to ${target}`);
      }
    }
  });
}

// Copy all files from dist
readdirSync(sourceDir).forEach(file => {
  const sourcePath = join(sourceDir, file);
  const targetPath = join(targetDir, file);
  
  if (statSync(sourcePath).isDirectory()) {
    copyDirectory(sourcePath, targetPath);
  } else {
    // Only copy build files (js, css, html)
    if (file.endsWith('.js') || file.endsWith('.css') || file.endsWith('.html') || file.endsWith('.svg')) {
      copyFileSync(sourcePath, targetPath);
      console.log(`Copied ${file} to root directory`);
    }
  }
}); 