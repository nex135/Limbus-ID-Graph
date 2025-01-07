import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readdirSync, copyFileSync, mkdirSync, existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sourceDir = join(__dirname, '..', 'sinners_ut4');
const targetDir = join(__dirname, 'public', 'sinners_ut4');

// Create target directory if it doesn't exist
if (!existsSync(targetDir)) {
  mkdirSync(targetDir, { recursive: true });
}

// Copy all YAML files
readdirSync(sourceDir).forEach(file => {
  if (file.endsWith('.yml') || file.endsWith('.yaml')) {
    copyFileSync(
      join(sourceDir, file),
      join(targetDir, file)
    );
    console.log(`Copied ${file} to public directory`);
  }
}); 