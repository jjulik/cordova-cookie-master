cordova.commandProxy.add("CookieMaster", {
    getCookieValue: function (successCallback, errorCallback, url, name) {
        var myFilter = new Windows.Web.Http.Filters.HttpBaseProtocolFilter();
        var cookieManager = myFilter.cookieManager; 
        var cookies = cookieManager.getCookies(url);
        for (var i = 0; i < cookies.length; i++) {
            if (cookies[i].name === name) {
                return cookies[i].value;
            }
        }
        return undefined;
    },
    setCookieValue: function (successCallback, errorCallback, url, name, value) {
        var myFilter = new Windows.Web.Http.Filters.HttpBaseProtocolFilter();
        var cookieManager = myFilter.cookieManager; 
        // url should actually be the domain here, and the empty string is the path
        // TODO: split url into domain and path?
        var newcookie = new Windows.Web.Http.HttpCookie(name, url, "");
        newcookie.value = value;
        cookieManager.setCookie(newcookie);
    },
    clearCookies: function (successCallback, errorCallback) {
        // TODO: implement this? doesn't seem like a super helpful method
    }
});