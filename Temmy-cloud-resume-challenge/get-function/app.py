import boto3  #Python SDK for AWS.
import json
from boto3.dynamodb.conditions import Key

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('temmy-cloud-resume-challenge')

def get_count():
    response = table.query(
        KeyConditionExpression= Key('ID').eq('visitors')
        )
    count = response['Items'][0]['visitors']
    return count

#include the cors for security and accessibilty
def lambdaHandler(event, context):
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Credentials': '*',
            'Content-Type': 'application/json'
        },
        'body': get_count()
    }