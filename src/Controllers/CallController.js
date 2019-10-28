const Call = require('../models/call');

module.exports = {
    async store(req, res){
        const {date} = req.body;

        const call = await Call.create({
            date
        });

        await call.populate('call').execPopulate();

        return res.json(call);
    }
};