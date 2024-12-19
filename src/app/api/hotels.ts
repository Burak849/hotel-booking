import { NextApiRequest, NextApiResponse } from 'next';

const hotels = require('../../../data.json');  

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(hotels);
}