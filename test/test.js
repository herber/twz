import test from 'ava';
import fs from 'fs';
import path from 'path';
import m from '../';

const listTemplate = fs.readFileSync(path.join(__dirname, 'list.twz')).toString();
const listResult = `<ul>
  <li>first</li><li>2nd</li><li>3rd item</li>
</ul>
`;

const textTemplate = fs.readFileSync(path.join(__dirname, 'text.twz')).toString();
const textResult = `<h1>Those quartzes are nothing more than dens.</h1>
<p>Far from the truth, one cannot separate titaniums from engorged nigerias. Braces are ingrain fishermen. A pansy can hardly be considered a crimpy sideboard without also being a piccolo. A burn is a skin's tanker. The gneissoid domain reveals itself as a wedgy saw to those who look. A thrill is an explanation's battle. A separated of the shrimp is assumed to be a hackneyed snowstorm.</p>
`;

const list = ['first', '2nd', '3rd item'];

const heading = 'Those quartzes are nothing more than dens.';
const paragraph =
  'Far from the truth, one cannot separate titaniums from engorged nigerias. ' +
  'Braces are ingrain fishermen. A pansy can hardly be considered a crimpy sideboard without also being a piccolo. ' +
  "A burn is a skin's tanker. The gneissoid domain reveals itself as a wedgy saw to those who look. " +
  "A thrill is an explanation's battle. A separated of the shrimp is assumed to be a hackneyed snowstorm.";

test('compiles string templates', t => {
  t.is(m(listTemplate)({ list }), listResult);
  t.is(m(textTemplate)({ heading, paragraph }), textResult);
});

test('compiles template files', async t => {
  t.is((await m.file(path.join(__dirname, 'list.twz')))({ list }), listResult);
  t.is((await m.file(path.join(__dirname, 'text.twz')))({ heading, paragraph }), textResult);
});

test('compiles sync template files', t => {
  t.is(m.fileSync(path.join(__dirname, 'list.twz'))({ list }), listResult);
  t.is(m.fileSync(path.join(__dirname, 'text.twz'))({ heading, paragraph }), textResult);
});

test('rejects on error', t => {
  return m.file(path.join(__dirname, 'error.x')).catch(err => {
    t.pass(err);
  });
});
