import fetch from 'node-fetch';

const url = 'https://yelpapiserg-osipchukv1.p.rapidapi.com/getAutocomplete';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '915f863fedmshd2a44dfc9c135dap15963djsnd3a4698cfc6d',
		'X-RapidAPI-Host': 'YelpAPIserg-osipchukV1.p.rapidapi.com'
	},
	body: new URLSearchParams({
		text: 'Pizza',
		accessToken: '915f863fedmshd2a44dfc9c135dap15963djsnd3a4698cfc6d'
	})
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}