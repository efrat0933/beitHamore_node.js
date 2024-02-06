import { response } from 'express';
import {getDb} from '../index.js';


export const addProduct = async function(req, res, next) {
    const db = getDb();
    const doc = await db.collection('products').insertOne(req.body)
    res.send(doc.insertedId);
}