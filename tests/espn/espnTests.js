/**
 * Created by vbudhram on 8/5/14.
 */

describe('ESPN Test', function () {
    var credentials = require('../../../fantasyCredentials.json');

    var ESPN = require('../../utils/espnUtils');

    it('should retrieve leagues and teams of user', function (done) {
        var username = credentials.username;
        var password = credentials.password;
        ESPN.getTeams(username, password).then(function(data){
            console.log(data);
            done();
        }, function(err){
            done(err);
        });
    });
});