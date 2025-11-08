const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

function assert(condition, message) {
    if (!condition) {
        console.error(`Test failed: ${message}`);
        process.exit(1);
    }
}

assert(/Board Invitations/.test(html), 'Board invitations heading should be present');
assert(/function getFilteredInvitations\(\)/.test(html), 'Filtering helper should exist');
assert(/function syncSelection\(filteredInvitations\)/.test(html), 'Selection synchronisation should be implemented');
assert(/filter:\s*"pending"/.test(html), 'Default filter should be pending');
assert(/Select an invitation/.test(html), 'Detail panel placeholder should be available');

console.log('All smoke tests passed.');
