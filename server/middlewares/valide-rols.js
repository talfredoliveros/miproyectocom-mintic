const isAdmin = (req, res, next) => {
    if(!req.user){
        return res.status(500).json({
            msg: "Se requiere validador de token"
        })
    }

    const { name, rol } = req.user;

    console.log(req.user);

    if(rol !== 'Amin'){
        return res.status(401).json({
            msg: `${ name } no tiene permisos suficientes`
        })
    }

    next();
}

const isRol = (...rols) => {
    return (req, res, next) => {
        if(!req.user){
            return res.status(500).json({
                msg: "Se requiere validador de token"
            })
        }

        if(!rols.includes(req.user.rol)){
            return res.status(401).json({
                msg: `${ req.user.name } no tiene permisos suficientes`
            })
        }

        next();
    }
}

module.exports= {
    isAdmin,
    isRol
}