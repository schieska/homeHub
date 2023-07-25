import { writable } from 'svelte/store';




export const data = writable(
	{
		"music": {
			"visible": true,
			"current": {
				"song": "Coming For You",
				"artist": "The Offspring",
				"coverArt": "https://i.scdn.co/image/ab67616d0000b2737c8a923e9407a36ed6ce01bc",
				"artistArt": "https://i.scdn.co/image/ab6761610000e5eb555c8199ba80168cfeafdfbc",
				"playState": "play",
				"buttons": true,
				"skipable": true,
				"timeline": true,
				"songPassed": "15327",
				"songLength": "228586",
				"songPassedPrecentage": 20
			},
			"snapcast": {
				"masterVolume": 30,
				"masterEnabled": true,
				"players": {
					"playerList": [
						"Spotify",
						"brianFM",
						"LP",
						"Radio2",
						"bluetooth"
					],
					"selectedPlayer": 1
				},
				"speakers": [
					{
						"name": "huiskamer",
						"volume": 80,
						"allowed": true,
						"enabled": true,
						"travel": true,
						"info": " "
					},
					{
						"name": "wc",
						"volume": 20,
						"allowed": true,
						"enabled": false,
						"travel": true,
						"info": " "
					},
					{
						"name": "slaapkamer",
						"volume": 19,
						"allowed": false,
						"enabled": true,
						"travel": true,
						"info": " "
					},
					{
						"name": "werkkamer",
						"volume": 0,
						"allowed": false,
						"enabled": true,
						"travel": false,
						"info": "nightMode"
					}
				]
			}
		},
		"boodschappen": [
			{
				"title": "brood",
				"aditionDate": "2012-04-23T18:25:43.511Z",
				"crossedOut": true,
				"crossOutDate": null,
				"type": "scanner",
				"ean": null
			},
			{
				"title": "appels",
				"aditionDate": "2012-04-23T18:25:43.511Z",
				"crossedOut": false,
				"crossOutDate": null,
				"type": "input",
				"ean": null
			},
			{
				"title": "test3",
				"aditionDate": "2012-04-23T18:25:43.511Z",
				"crossedOut": false,
				"crossOutDate": true,
				"type": "recurring",
				"ean": null
			}
		]
	});

export function updateData(update) {
	data.update((currentData) => {
		// console.log('update!');
        // console.log(update);
        // console.log(currentData);
		// Merge the existing data with the update object
		return { ...currentData, ...update };
	});
}
