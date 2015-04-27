// Input:
var input = [
	'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0" width="468" height="60" id="mymoviename">',
	'<param name="movie" value="example.swf" />',
	'<param name="quality" value="high" />',
	'<param name="bgcolor" value="#ffffff" />',
	'<embed src="example.swf" quality="high" bgcolor="#ffffff" width="468" height="60" name="mymoviename" align="" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed>',
	'</object>'
].join('');

console.log(input.replace(/<object.*codebase\s*=\s*".*#version=(.*?)".*id\s*=\s*"(.*?)".*?<embed.*src\s*=\s*"(.*?)".*width\s*=\s*"(\d+?)".*height\s*=\s*"(\d+?)".*name\s*=\s*"(.*?)".*>.*<\/object>/gmi,
		function (match, version, id, src, width, height, name) {
		return ['<div id="', id,
			'"></div><script>swfobject.embedSWF("', src,
			'", "', name,
			'", "', width,
			'", "', height,
			'", "', version.split(',').join('.'),
			'");</script>'].join('');
	}));
