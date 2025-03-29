import models from '../models/index.js';
import db from '../config/connection.js';

// Define the type for modelName to be more specific
export default async (modelName: keyof typeof models, collectionName: string) => {
  try {
    // Now TypeScript knows that modelName is a valid key of models
    let modelExists = await models[modelName].db.db.listCollections({
      name: collectionName
    }).toArray();

    if (modelExists.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
}
