// Imports the Google Cloud client library
const PubSub = require('@google-cloud/pubsub');

// Your Google Cloud Platform project ID
const projectId = 'FULL_PROJECT_NAME';

// Instantiates a client
const pubsubClient = new PubSub({
    keyFilename: './key.json',
    projectId: projectId,
});

// The name for the new topic
const topicName = 'myTopic123';
const subscriptionName = 'mySub123';

// Creates the new topic
pubsubClient
    .createTopic(topicName)
    .then(results => {
        const topic = results[0];
        console.log(`Topic ${topic.name} created.`);

        pubsubClient
            .topic(topic.name)
            .createSubscription(subscriptionName)
            .then(results => {
                const subscription = results[0];
                console.log(`Subscription ${subscription.name} created.`);
            })
            .catch(err => {
                console.error('ERROR:', err);
            });
    })
    .catch(err => {
        console.error('ERROR:', err);
    });