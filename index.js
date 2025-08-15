// 簡單的 GitHub Package 測試模組

function greet(name = 'World') {
  return `Hello, ${name}! This is from GitHub Package.`;
}

function add(a, b) {
  return a + b;
}

function getVersion() {
  return '1.0.1';
}

module.exports = {
  greet,
  add,
  getVersion
};