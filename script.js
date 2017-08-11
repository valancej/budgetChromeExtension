console.log("Hello World!s");
document.addEventListener('DOMContentLoaded', function() {
    function getSelectedText(text) {
        console.log(text);
        var msg = new SpeechSynthesisUtterance(text);
//        console.log("msg", msg);
        window.speechSynthesis.speak(msg);
    };
    
    console.log("dom ready");

    
    function pasteSelection() {                         
        chrome.runtime.sendMessage("foo", function (response) {
            console.log(response);
            //getSelectedText(response);
        });
    };
         
           
//        chrome.tabs.query(null, function(tab) {
//        chrome.tabs.sendRequest(tab.id, {method: "getSelection"}, function (response) {
//            console.log(response);
//        console.log(response.data);
////            getSelectedText(response.data);
//            });
//        });
                       

    
    
    var element = document.getElementById("Read");
    element.addEventListener('click', function() {
        console.log("Clicked");
        pasteSelection();
    });
});


