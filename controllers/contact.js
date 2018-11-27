const mongoose = require('mongoose');
const MassageModel = mongoose.model('Massages');
const AccupunctureModel = mongoose.model('Accupunctures')
const ChiropractorsModel = mongoose.model('Chiropractors')
const NaturopathModel = mongoose.model('Naturopaths')
const NutritionistsModel = mongoose.model('Nutritionists');
const routes = {};

routes.getMassages = function (req, res) {
    const {
        count
    } = req.query || 0;
    MassageModel.find({}, {}).skip(+count).limit(20).then((result) => {
        console.log(result);
        res.status(200).send(result);
    }).catch((err) => {
        console.log(err);
    })
}

routes.getAccpunctures = function (req, res) {
    const {
        count
    } = req.query || 0;
    AccupunctureModel.find({}, {}).skip(+count).limit(20).then((result) => {
        console.log(result);
        res.status(200).send(result);
    }).catch((err) => {
        console.log(err);
    })
}
routes.getChiropractors = function (req, res) {
    const {
        count
    } = req.query || 0;
    ChiropractorsModel.find({}, {}).skip(+count).limit(20).then((result) => {
        console.log(result);
        res.status(200).send(result);
    }).catch((err) => {
        console.log(err);
    })
}

routes.getNaturopaths = function (req, res) {
    const {
        count
    } = req.query || 0;
    NaturopathModel.find({}, {}).skip(+count).limit(20).then((result) => {
        console.log(result);
        res.status(200).send(result);
    }).catch((err) => {
        console.log(err);
    })
}

routes.getNutritionist = function (req, res) {
    const {
        count
    } = req.query || 1;
    NutritionistsModel.find({}, {}).skip(+count).limit(20).then((result) => {
        console.log(result);
        res.status(200).send(result);
    }).catch((err) => {
        console.log(err);
    })
}



module.exports = routes;