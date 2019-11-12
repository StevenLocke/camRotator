window.onload = randomCam;

function randomCam() {
	const entries = Object.entries(cams)
	const randomIndex = Math.floor(Math.random() * entries.length);
	const [title, channel] = entries[randomIndex]
	const camSource = `http://anything.player.camzonecdn.com/v1.2/CamzoneStreamPlayer?iframe=yes&channel=${channel}&muted=yes&mutebutton=no&czlogourl=&toolbar=always&backgroundcolor=000000&toolbarbgcolor=ffffff&toolbaralpha=100&toolbartextcolor=000000&epostcard=no&toolbartype=new&toolbarposition=topright`;
	document.getElementById("frame").src = camSource;
	document.title = `${title} cam`;
}

const cams = {
	"Baboon": "zssd-baboon",
	"Penguin": "zssd-penguin",
	"Panda": "zssd-panda",
	"Polar": "polarplunge",
	"Ape": "ape",
	"Koala": "zssd-koala",
	"Giraffe": "zssd-kijami",
	"Burrowing owl aviary": "zssd-owlaviary",
	"Burrowing owl burrow": "zssd-owlburrow",
	"Elephants": "elephants",
	"Tiger": "zssd-tiger",
	"Condor": "zssd-condor"
}