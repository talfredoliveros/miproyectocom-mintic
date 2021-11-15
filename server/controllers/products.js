const productsGet = (req, res) => {
    res.json({ msg: "get Products controller MiProyecto G7 B29" });
}

const productsPost = (req, res) => {
    const { name, author } = req.body;

    res.json({ msg: "Post Products controller MiProyecto G7 B29", name, author });
}

const productsGetBySKU = (req, res) => {
    res.json({ msg: "get by SKU Products controller MiProyecto G7 B29" });
}

const productsPut = (req, res) => {
    res.json({ msg: "put Products controller MiProyecto G7 B29" });
}

const productsDelete = (req, res) => {
    res.json({ msg: "delete Products controller MiProyecto G7 B29" });
}

module.exports = {
    productsGet, productsPost, productsGetBySKU, productsPut, productsDelete
}