var IAJSONP = (function () {

    var module = {};

    module.addJavascriptFile = function (url, context) {
        context = context || document;
        var head = context.getElementsByTagName('head')[0];
        var js = context.createElement('script');
        js.src = url;
        js.type = "text/javascript";
        head.appendChild(js);
        return js;
    }

    module.get = function (url, handle) {

        //creating random name of function so not conflict with others 
        var func = 'IAJSONP' + Math.floor((Math.random() * 1000000000000000000) + 1);

        //adding rndomly created function to globle window object
        window[func] = function (data) {

            //calling handle
            handle(data);

            //removing random named declared function
            window[func] = function () {};

            //removing added js
            document.head.removeChild(js);
        }

        //manipulating and adding js file to head
        var endurl = url.indexOf('?') != -1 ? url + '&callback=' + func : url + '?callback=' + func;
        var js = module.addJavascriptFile(endurl);
    }
    return module;
})();
