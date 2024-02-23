const identities = require('../Model/identityModel')

// add identities
exports.addIdentities = async (req, res) => {
    console.log("Inside Add Identity API");
    const { itemName, firstName, lastName, username, email, company, phone, passportNumber, licenseNumber, address, city, state, postalCode, country,createdAt } = req.body
    const userId = req.payload
    console.log(req.body);
    console.log(userId);
    try {
        const existingIdentity = await identities.findOne({ email })
        if (existingIdentity) {
            res.status(406).json('Identity Details Already exists!! please upload another...')
        } else {
            const newIdentity = new identities({
                itemName, firstName, lastName, username, email, company, phone, passportNumber, licenseNumber, address, city, state, postalCode, country, userId,createdAt
            })
            await newIdentity.save()
            res.status(200).json(newIdentity)
        }
    } catch (err) {
        res.status(401).json(err)
    }
}

// get  identities
exports.getUserIdentities = async (req, res) => {
    const userId = req.payload
    try {
        const userIdentities = await identities.find({ userId })
        res.status(200).json(userIdentities)
    } catch (err) {
        res.status(401).json(err)
    }
}

// edit identities
exports.editIdentity = async (req, res) => {
    const { itemName, firstName, lastName, username, email, company, phone, passportNumber, licenseNumber, address, city, state, postalCode, country } = req.body
    const userId = req.payload
    const { iid } = req.params
    console.log(iid);
    try {
        const updateIdentity = await identities.findByIdAndUpdate({ _id: iid }, { itemName, firstName, lastName, username, email, company, phone, passportNumber, licenseNumber, address, city, state, postalCode, country, userId }, { new: true })
        await updateIdentity.save()
        res.status(200).json(updateIdentity)
    } catch (err) {
        res.status(401).json(err)
    }
}

// delete identities
exports.removeIdentity = async (req, res) => {
    const { iid } = req.params
    try {
        const deleteIdentity = await identities.findByIdAndDelete({ _id: iid })
        res.status(200).json(deleteIdentity)
    } catch {
        res.status(401).json(err)
    }

}