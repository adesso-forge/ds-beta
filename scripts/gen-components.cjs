#!/usr/bin/env node
// Generate pass-through components: forge-* → beta-*
const fs = require('fs');
const path = require('path');

const components = [
  'alert', 'animated-image', 'animation', 'avatar', 'badge',
  'breadcrumb', 'breadcrumb-item', 'button', 'button-group',
  'carousel', 'carousel-item', 'checkbox', 'color-picker',
  'copy-button', 'details', 'dialog', 'divider', 'drawer',
  'dropdown', 'format-bytes', 'format-date', 'format-number',
  'icon', 'icon-button', 'image-comparer', 'include', 'input',
  'menu', 'menu-item', 'menu-label', 'mutation-observer',
  'option', 'popup', 'progress-bar', 'progress-ring', 'qr-code',
  'radio', 'radio-button', 'radio-group', 'range', 'rating',
  'relative-time', 'resize-observer', 'select', 'skeleton',
  'spinner', 'split-panel', 'switch', 'tab', 'tab-group',
  'tab-panel', 'tag', 'textarea', 'tooltip', 'tree', 'tree-item',
  'visually-hidden'
];

const srcDir = path.resolve(__dirname, '..', 'src', 'components');

for (const c of components) {
  const dir = path.join(srcDir, c);
  fs.mkdirSync(dir, { recursive: true });
  const content = `// beta-${c} — Pass-through registration (forge-${c} → beta-${c})
import '@adesso-forge/adforge-core';
import { registerPassThrough } from '@adesso-forge/adforge-shared/components/register';

registerPassThrough('forge-${c}', 'beta-${c}');
`;
  fs.writeFileSync(path.join(dir, `${c}.ts`), content);
}

// Generate index.ts
const imports = [
  `import './card/card.js';  // beta-card (Tier 3 extended)`,
  ...components.map(c => `import './${c}/${c}.js';  // beta-${c}`)
];
fs.writeFileSync(
  path.join(srcDir, 'index.ts'),
  '// Auto-generated: registers ALL components as beta-*\n' + imports.join('\n') + '\n'
);

console.log(`✓ Generated ${components.length} pass-through components + index.ts`);
