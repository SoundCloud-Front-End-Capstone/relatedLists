const mockTracks = JSON.parse('[{"id":40,"songTitle":"Dynamic Accountability Liaison","songImage":"https://s3.amazonaws.com/uifaces/faces/twitter/andrewcohen/128.jpg","songLength":"2:48","songGenre":"ab","songPostedDate":"9 years ago","songNumPlays":646703,"songNumLikes":1027310,"songNumReposts":7320,"songNumComments":8606,"createdAt":"2018-09-16T07:38:37.000Z","updatedAt":"2018-09-16T07:38:37.000Z","artistId":2,"relatedSongs":{"createdAt":"2018-09-16T07:38:38.000Z","updatedAt":"2018-09-16T07:38:38.000Z","songId":2,"relatedTrackId":40},"artist":{"id":2,"artistNumFollowers":1973988,"artistCity":"New Tillmanberg","artistCountry":"Solomon Islands","artistProfileImage":"https://s3.amazonaws.com/uifaces/faces/twitter/drewbyreese/128.jpg","artistVerified":false,"artistName":"Pfeffer","createdAt":"2018-09-16T07:38:36.000Z","updatedAt":"2018-09-16T07:38:36.000Z"}},{"id":90,"songTitle":"Principal Response Liaison","songImage":"https://s3.amazonaws.com/uifaces/faces/twitter/danthms/128.jpg","songLength":"1:1","songGenre":"accusantium","songPostedDate":"8 years ago","songNumPlays":1878666,"songNumLikes":730891,"songNumReposts":3370,"songNumComments":4593,"createdAt":"2018-09-16T07:38:37.000Z","updatedAt":"2018-09-16T07:38:37.000Z","artistId":10,"relatedSongs":{"createdAt":"2018-09-16T07:38:38.000Z","updatedAt":"2018-09-16T07:38:38.000Z","songId":2,"relatedTrackId":90},"artist":{"id":10,"artistNumFollowers":539315,"artistCity":"West Janisside","artistCountry":"Oman","artistProfileImage":"https://s3.amazonaws.com/uifaces/faces/twitter/peterlandt/128.jpg","artistVerified":true,"artistName":"Conroy","createdAt":"2018-09-16T07:38:36.000Z","updatedAt":"2018-09-16T07:38:36.000Z"}},{"id":100,"songTitle":"Forward Tactics Liaison","songImage":"https://s3.amazonaws.com/uifaces/faces/twitter/mrxloka/128.jpg","songLength":"2:22","songGenre":"et","songPostedDate":"8 years ago","songNumPlays":1966664,"songNumLikes":1087277,"songNumReposts":17069,"songNumComments":6583,"createdAt":"2018-09-16T07:38:37.000Z","updatedAt":"2018-09-16T07:38:37.000Z","artistId":7,"relatedSongs":{"createdAt":"2018-09-16T07:38:38.000Z","updatedAt":"2018-09-16T07:38:38.000Z","songId":2,"relatedTrackId":100},"artist":{"id":7,"artistNumFollowers":2665753,"artistCity":"Jerryhaven","artistCountry":"Democratic People\'s Republic of Korea","artistProfileImage":"https://s3.amazonaws.com/uifaces/faces/twitter/antonyzotov/128.jpg","artistVerified":false,"artistName":"Gleason","createdAt":"2018-09-16T07:38:36.000Z","updatedAt":"2018-09-16T07:38:36.000Z"}}]');

const mockAlbums = JSON.parse('[{"id":4,"albumTitle":"Tasty Concrete Chicken","albumType":"Fiji","albumImage":"https://s3.amazonaws.com/uifaces/faces/twitter/iamglimy/128.jpg","createdAt":"2018-09-16T07:38:37.000Z","updatedAt":"2018-09-16T07:38:37.000Z","songId":2,"artistId":9,"artist":{"id":9,"artistNumFollowers":1120342,"artistCity":"Thompsonburgh","artistCountry":"Dominica","artistProfileImage":"https://s3.amazonaws.com/uifaces/faces/twitter/bluefx_/128.jpg","artistVerified":false,"artistName":"Beahan","createdAt":"2018-09-16T07:38:36.000Z","updatedAt":"2018-09-16T07:38:36.000Z"}},{"id":5,"albumTitle":"Ergonomic Plastic Soap","albumType":"maximize","albumImage":"https://s3.amazonaws.com/uifaces/faces/twitter/raquelwilson/128.jpg","createdAt":"2018-09-16T07:38:37.000Z","updatedAt":"2018-09-16T07:38:37.000Z","songId":2,"artistId":23,"artist":{"id":23,"artistNumFollowers":278573,"artistCity":"Port America","artistCountry":"Micronesia","artistProfileImage":"https://s3.amazonaws.com/uifaces/faces/twitter/danro/128.jpg","artistVerified":false,"artistName":"Grant","createdAt":"2018-09-16T07:38:36.000Z","updatedAt":"2018-09-16T07:38:36.000Z"}},{"id":6,"albumTitle":"Gorgeous Fresh Soap","albumType":"global","albumImage":"https://s3.amazonaws.com/uifaces/faces/twitter/ratbus/128.jpg","createdAt":"2018-09-16T07:38:37.000Z","updatedAt":"2018-09-16T07:38:37.000Z","songId":2,"artistId":23,"artist":{"id":23,"artistNumFollowers":278573,"artistCity":"Port America","artistCountry":"Micronesia","artistProfileImage":"https://s3.amazonaws.com/uifaces/faces/twitter/danro/128.jpg","artistVerified":false,"artistName":"Grant","createdAt":"2018-09-16T07:38:36.000Z","updatedAt":"2018-09-16T07:38:36.000Z"}}]');

const Modules = require('../client/components');

console.log(Modules);

module.exports = {
  tracks: mockTracks,
  albums: mockAlbums,
};
