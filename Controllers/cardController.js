const cards = require("../Model/cardModel");


// add cards
exports.addCards = async (req, res) => {
    console.log("Inside Add Card API");
    const { itemName, cardholderName, cardNumber, month, year, cvv } = req.body
    const userId = req.payload
    console.log(req.body);
    console.log(userId);

    try {
        const existingCard = await cards.findOne({ cardNumber })
        if (existingCard) {
            res.status(406).json("Card Details Already exists!! please upload another...")
        } else {
            const newCard = new cards({
                itemName, cardholderName, cardNumber, month, year, cvv, userId
            })
            await newCard.save()
            res.status(200).json(newCard)
        }
    } catch (err) {
        res.status(401).json(err)
    }
}

// get Cards
exports.getUserCards = async (req, res) => {
    const userId = req.payload
    try {
        const userCards = await cards.find({ userId })
        res.status(200).json(userCards)

    } catch (err) {
        res.status(401).json(err)
    }

}

// edit cards
exports.editCard = async (req, res) => {
    const { itemName, cardholderName, cardNumber, month, year, cvv } = req.body
    const userId = req.payload
    const { cid } = req.params
    console.log(cid);
    try {
        const updateCard = await cards.findByIdAndUpdate({ _id: cid },
            { itemName, cardholderName, cardNumber, month, year, cvv, userId },
            { new: true })
        await updateCard.save()
        res.status(200).json(updateCard)
    } catch (err) {
        res.status(401).json(err)
    }
}

// delete cards
exports.removeCard = async (req, res) => {
    const { cid } = req.params
    try {
        const deleteCard = await cards.findByIdAndDelete({ _id: cid })
        res.status(200).json(deleteCard)
    } catch {
        res.status(401).json(err)
    }
}