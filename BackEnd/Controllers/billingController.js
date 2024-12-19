const Billing = require('../Models/billlingmodel');

exports.getTotalBilling = async (req, res) => {
    try {
        const total = await Billing.aggregate([{ $group: { _id: null, totalAmount: { $sum: "$amount" } } }]);
        res.status(200).send(total[0] || { totalAmount: 0 });
    } catch (error) {
        res.status(500).send(error);
    }
};