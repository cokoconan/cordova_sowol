cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.connectsdk.cordovaplugin/www/ConnectSDK.js",
        "id": "com.connectsdk.cordovaplugin.ConnectSDK.js",
        "merges": [
            "navigator.ConnectSDK",
            "ConnectSDK"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.connectsdk.cordovaplugin": "1.2.0"
}
// BOTTOM OF METADATA
});