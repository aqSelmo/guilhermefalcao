const config = require('./config');
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${config.username}:${config.password}@${config.db}-d0kiw.gcp.mongodb.net/test?retryWrites=true&w=majority`;

module.exports.connect = async () => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });

    await client.connect();
    return client;
}

module.exports.findOne = async (collection, args) => {
    const client = await this.connect();
    const result = await client.db(config.db).collection(collection).findOne(args);

    await client.close();

    return result;
}

module.exports.findMultiple = async (collection) => {
    const client = await this.connect();
    const result = await client.db(config.db).collection(collection).find().toArray();

    await client.close();

    return result;
}

module.exports.insertOne = async (collection, args) => {
    const client = await this.connect();
    const result = await client.db(config.db).collection(collection).insertOne(args);

    await client.close();

    return result.ops[0];
}

module.exports.insertMultiple = async (collection, args) => {
    const client = await this.connect();
    const result = await client.db(config.db).collection(collection).insertMany(args);

    await client.close();

    return result.ops[0];
}