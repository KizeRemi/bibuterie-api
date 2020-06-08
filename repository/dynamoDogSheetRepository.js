const { v4: uuidv4 } = require('uuid');
const AWS = require('aws-sdk');

const DOG_SHEET_TABLE_NAME = 'dog-sheet-table';

module.exports.addDogSheet = async (ddb, input) => ddb.putItem({
  TableName: DOG_SHEET_TABLE_NAME,
  Item: AWS.DynamoDB.Converter.marshall({
    id: uuidv4(),
    ...input,
  })
}, (err, data) => {
  if (err) {
    console.log(err)
    throw new Error(err);
  } else {
    return data;
  }
});


module.exports.getDogSheetById = async (ddb, id) => {
  return ddb.getItem({
    TableName: DOG_SHEET_TABLE_NAME,
  }, (err, data) => {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data.Item);
    }
  });
}