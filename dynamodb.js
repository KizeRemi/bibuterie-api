const AWS = require('aws-sdk');

AWS.config.update({ region: 'eu-west-1' });

module.exports.dynamoDatabase = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

