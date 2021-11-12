const productsGet = (req, res) => {
    res.json({ msg: "get Products controller" });
}

const productsPost = (req, res) => {
    const { name, author } = req.body;

    res.json({ msg: "Post Products controller", name, author });
}

const productsGetBySKU = (req, res) => {
    res.json({ msg: "get by SKU Products controller" });
}

const productsPut = (req, res) => {
    res.json({ msg: "put Products controller" });
}

const productsDelete = (req, res) => {
    res.json({ msg: "delete Products controller" });
}

module.exports = {
    productsGet, productsPost, productsGetBySKU, productsPut, productsDelete
}