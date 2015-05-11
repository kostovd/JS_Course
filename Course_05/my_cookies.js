var MyCookiesHelper = {
	setCookie : function (name, value, path, expires) {
		path = path || '/';
		expires = expires || (function () { var d = new Date(); d.setDate(d.getDate() + 7); return d; }());
		document.cookie = [name,
							'=',
							value,
							'; expires=',
							expires.toUTCString(),
							'; path=',
							path].join('');
	},
	getCookie : function (name) {
		var cookies, i, keyValues, key;
		cookies = document.cookie.split('; ');
		for (i = 0; i < cookies.length; i++) {
			keyValues = cookies[i].split('=');
			if (keyValues.length >= 2) {
				key = keyValues.shift();
				if (key === name) {
					return keyValues.join('=');
				}
			}
		}
		return null;
	}
};