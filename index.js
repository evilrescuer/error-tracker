import ErrorTracker from './error-tracker-module';
window.errorTracker = new ErrorTracker();
window.errorTracker.init();

// 获取错误
console.log(window.errorTracker.getErrors());
