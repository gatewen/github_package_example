// 簡單的測試檔案
const { greet, add, getVersion } = require('./index');

console.log('開始測試 GitHub Package...\n');

// 測試 greet 函數
console.log('測試 greet 函數:');
console.log('  greet() =>', greet());
console.log('  greet("GitHub") =>', greet('GitHub'));

// 測試 add 函數
console.log('\n測試 add 函數:');
console.log('  add(2, 3) =>', add(2, 3));
console.log('  add(10, 20) =>', add(10, 20));

// 測試 getVersion 函數
console.log('\n測試 getVersion 函數:');
console.log('  getVersion() =>', getVersion());

console.log('\n✅ 所有測試完成！');