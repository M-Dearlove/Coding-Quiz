import models from '../models/index.js';
import db from '../config/connection.js';

export default async (modelName: keyof typeof models, collectionName: string) => {
  try {
    // Access the mongoose model
    const model = models[modelName];
    
    // Check if the model and its db property exist
    if (model && 'db' in model) {
      let modelExists = await (model as any).db.db.listCollections({
        name: collectionName
      }).toArray();

      if (modelExists.length) {
        await db.dropCollection(collectionName);
      }
    }
  } catch (err) {
    throw err;
  }
}
