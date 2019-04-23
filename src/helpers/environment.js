let APIURL = '';

switch(window.location.hostname) {
    case 'localhost' || '127.0.0.1' :
        APIURL = 'http://localhost:3000'
        break;

    case 'owlet-client.herokuapp.com' :
        APIURL = 'https://owlet-server.herokuapp.com';
        break;

        default:
        APIURL = 'https://owlet-server.herokuapp.com';
        break;

}

export default APIURL;