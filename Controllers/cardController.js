const cards = require("../Model/cardModel");


// add cards
exports.addCards = async (req, res) => {
    console.log("Inside Add Card API");
    const { itemName, cardholderName, cardNumber, month, year, cvv } = req.body
    const userId = req.payload
    console.log(req.body);
    console.log(userId);
    //console.log(title,overview,languages,github,website,projectImage,userId);
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

// get userCards
exports.getUserCards = async (req, res) => {
    const userId = req.payload
    try {
        const userCards = await cards.find({ userId })
        res.status(200).json(userCards)

    } catch (err) {
        res.status(401).json(err)
    }

}
