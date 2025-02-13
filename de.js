const de = {
	"अ":"a",	"आ":"ā",	"इ":"i",	"ई":"ī",	"उ":"u",	"ऊ":"ū",
	"ऋ":"ṛ",	"ॠ":"ṝ",	"ऌ":"ḷ",	"ॡ":"ḹ",
	"ए":"e",	"ऐ":"ai",	"ओ":"o",	"औ":"au",
	"क":"k",	"ख":"kh",	"ग":"g",	"घ":"gh",	"ङ":"ṅ",
	"च":"c",	"छ":"ch",	"ज":"j",	"झ":"jh",	"ञ":"ñ",
	"ट":"ṭ",	"ठ":"ṭh",	"ड":"ḍ",	"ढ":"ḍh",	"ण":"ṇ",
	"त":"t",	"थ":"th", 	"द":"d",	"ध":"dh",	"न":"n",
	"प":"p",	"फ":"ph",	"ब":"b",	"भ":"bh",	"म":"m",
	"य":"y",	"र":"r",	"ल":"l",	"व":"v",
	"श":"ś",	"ष":"ṣ",	"स":"s",	"ह":"h"
};

const de_char = Object.keys(de);
const de_phonetic = Object.values(de);

function setChar() {
	var c = de_char[parseInt(Math.random()*de_char.length)];
	document.querySelector("#de").value = c;
	options = [];
	
	// true
	options.push(de[c]);
	
	// false
	for (var i=0; i<4; i++) {
		c = de_phonetic[parseInt(Math.random()*de_char.length)];
		while (options.indexOf(c) != -1) {
			c = de_phonetic[parseInt(Math.random()*de_char.length)];
		}
		options.push(c);
	}
	
	var i = 0;
	var ph = document.querySelectorAll(".ph");
	while (options.length > 0) {
		console.log(options, options.length);
		ph[i].value = options.splice(parseInt(Math.random()*options.length), 1);
		i++;
	}
}

function check(ph) {
	var result = document.querySelector("#result");
	var de_ = document.querySelector("#de").value
	if (de[de_] == ph) {
		result.innerText = "正解";
		result.style.color = "green";
	} else {
		result.innerText = "不正解";
		result.style.color = "red";
	}
	result.innerText += "（" + de_ + "：" + de[de_] + "）";
	
	setChar();
}