const ApiError = require('../error/ApiError')
const {BasketDevice} = require("../models/models");

class BasketController {
    async create(req, res) {
        const {basketId, deviceId} = req.body
        const basket_device = await BasketDevice.create({basketId, deviceId})
        return res.json(basket_device)
    }

    async getAll(req, res) {
        let {basketId, deviceId} = req.query
        const basket_devices = await BasketDevice.findAll()
        return res.json(basket_devices)
    }

    async deleteOne(req, res){
        const {id} = req.body
        const basket_device = await BasketDevice.destroy({where:{id}})
        return res.json(basket_device)
    }
}

module.exports = new BasketController()