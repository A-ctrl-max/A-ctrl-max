import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const required = [
  '<!doctype html>',
  '<main>',
  'class="hero"',
  'id="categories"',
  'id="products"',
  'id="deals"',
  'id="service"',
  'src/styles.css',
];

const missing = required.filter((item) => !html.toLowerCase().includes(item.toLowerCase()));

if (missing.length > 0) {
  console.error(`Missing expected storefront markup: ${missing.join(', ')}`);
  process.exit(1);
}

console.log('Storefront markup contains all required sections.');
