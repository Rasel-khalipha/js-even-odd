for (i = 0; i <= 100; i++) {
	if (i == 0) {
		document.write(
			"<span style='font-size:20px;'>" + i + " is even</span>" + "<br> "
		);
	} else if (i % 2 == 0) {
		document.write("<span style='font-size:20px;'>" + i + " is even" + "<br> ");
	} else {
		document.write(
			'<span style="color:green; font-size:20px;">' +
				i +
				" is odd" +
				"<br>" +
				"</span> "
		);
	}
}
