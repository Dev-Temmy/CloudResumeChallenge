// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */

//import the aws sdk to use dynamodb
const AWS = require("aws-sdk");
AWS.config.update({region: "us-west-2", 
endpoint: "http://localhost:8000"});


// create a new DynamoDB client
// which provides connectivity b/w the app
// and the db instance
const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
TableName : temmy-cloud-resume-challenge,
/* Item properties will depend on your application concerns */
Key: { "ID": 'visitor' }, 
UpdateExpression='ADD ' + 'visitors' + ' :incr',
ExpressionAttributeValues={        
            ':incr': 1    
    },   
        ReturnValues="UPDATED_NEW"
};

/*async function putCount(){
    try {
    await docClient.put(params).promise()
    UpdateExpression='ADD ' + 'visitors' + ' :incr',
        ExpressionAttributeValues={        
            ':incr': 1    
        },   
        ReturnValues="UPDATED_NEW"
    } catch (err) {
    return err;
    }
}

*/

exports.lambdaHandler = async (event, context) => {
    try {
        // const ret = await axios(url);
        response = {
            'statusCode': 200,
            'headers': {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Credentials': '*',
            'Content-Type': 'application/json'
        },
            'body': JSON.stringify({
                putCount()
                // location: ret.data.trim()
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};


/*
app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
});

app.get('/', function(req, res, next) {
    // Handle the get for this route
});

app.post('/', function(req, res, next) {
    // Handle the post for this route
}) */