exports.createProduct = (req, res, next) => {
    res.json({
        message: "create product successfully",
        data: {
            id: 3,
            name: "vanta",
            price: 8000
        }
    })
    next()
}

exports.GetAllProducts = (req, res, next) => {
    res.json([
        {
            id: 1,
            name: "bapao",
            price: 3000
        },
        {
            id: 2,
            name: "roti bakar",
            price: 10000
        }
    ]);
    next();
}