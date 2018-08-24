# Userful links

Create new topic and sub using console: https://cloud.google.com/pubsub/docs/quickstart-console#create_a_topic

Do same programmaticly: https://cloud.google.com/pubsub/docs/reference/libraries#client-libraries-install-nodejs

Authentication: https://cloud.google.com/docs/authentication/production

Place to get json file key.json: https://console.cloud.google.com/apis/credentials/serviceaccountkey?_ga=2.146528948.-1039187739.1534417564&project=FULL-PROJECT-NAME&folder&organizationId

Documetation for this lub: https://github.com/googleapis/nodejs-pubsub#samples

# Setup

```npm i```

generate key.json and put it in root:
https://console.cloud.google.com/apis/credentials/serviceaccountkey?_ga=2.146528948.-1039187739.1534417564&project=FULL-PROJECT-NAME&folder&organizationId

Chagen FULL PROJECT NAME in link with you project name

Create pub and sub:

```node create-topic-sub.js```

Subscribe to new messages:

```node pull.js```

Publish new message to topic:

```node publish.js```
