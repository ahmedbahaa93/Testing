require.config({
    baseUrl: '/',
    paths: {
        vulnerableModule: 'vulnerableModule'
    }
});

var params = new URLSearchParams(window.location.search);
var moduleName = params.get('module');

if (moduleName) {
    require([moduleName], function(module) {
        document.getElementById('result').innerHTML = module.content;
    });
}
