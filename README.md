# CloudResumeChallenge

This challenge involves alot of activities broadly categorised in 3 components:  
1. Frontend(HTML, CSS and Javascript), 2. API(API gateway), and 3. Backend(AWS Lambda and DynamoDB.

The Steps and the challenges encountered in this project are:
- Creating Resume with HTML and CSS.
- Using AWS SAM and CloudFormation to provision AWS resources(treating infrastructures as code)
- Hosting in a S3 bucket.
- Using Cloudfront to add security to it in form of HTTPs
- Configuring a custom(good looking) domain name using Route53 and Certificate manager
- Encountered 504 error on request to Cloudfront and 403 error on request to Route53(when certificate was not yet attached)


2. Whenever the content of the s3 bucket changes you can run or create a bash script:

aws s3 sync [local-directory containing your files] [remote-s3-bucket]
aws s3 sync ./website s3://my-cloudresume-challenge

3. If there is any code changes, use the command below to build

`sam build`

4. And use the below to deploy the change:
`sam deploy`