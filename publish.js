const PubSub = require(`@google-cloud/pubsub`);

// Your Google Cloud Platform project ID
const projectId = 'FULL_PROJECT_NAME';

// Creates a client
const pubsub = new PubSub({
  keyFilename: './key.json',
  projectId: projectId,
});

/**
 * TODO(developer): Uncomment the following lines to run the sample.
 */
const topicName = 'myTopic';
const data = JSON.stringify({ foo: 'bar' });

// Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject)
const dataBuffer = Buffer.from(data);
// Add two custom attributes, origin and username, to the message
const customAttributes = {
  origin: 'nodejs-sample',
  username: 'gcp',
};

pubsub
  .topic(topicName)
  .publisher()
  .publish(dataBuffer, customAttributes)
  .then(messageId => {
    console.log(`Message ${messageId} published.`);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });