const {response, request} = require('express');

const Emprendedor = require('../models/emprendedor');

const emprendedorsGet = async (req = request, res = response) => {
   const { id } = req.params;
   const { _id, ...data } = req.body;

   if(id) {
      const emprendedor = await Emprendedor.findById(id, data, { new: true });
      res.json(emprendedor);
   }
   else {
      const { limit = 5, page = 1 } = req.query;
      const query = { status: true };
      const skip = limit * (page - 1);

      const [ emprendedors, totalEmprendedors ] = await Promise.all([
                                                      Emprendedor.find(query)
                                                      .skip(Number(skip))
                                                      .limit(Number(limit)),
                                                      Emprendedor.countDocuments(query)
                                                ]);

      res.json({
         emprendedors,
         totalEmprendedors
      });

   }

}

const emprendedorsPost = async (req, res) => {
   const { identidad, nombre, apellidos,fechaNac,
      direccion,telefono,genero,email } = req.body;

   const emprendedor = new Emprendedor({ identidad, nombre, apellidos,fechaNac,
                                       direccion,telefono,genero,email });

   await emprendedor.save();

   res.json( { emprendedor });
}

const emprendedorGetBySKU = (req, res) => {
   res.json({ msg: "get by SKU emprendedor controller MiProyecto G7 B29" });
}

const emprendedorsPut = async (req, res) => {
   const { id } = req.params;
   const { _id, ...data } = req.body;

   /*
   if(password){
      const salt = bcrypt.genSaltSync();
      data.password = bcrypt.hashSync(password, salt);
   }
   */
   const emprendedor = await Emprendedor.findByIdAndUpdate(id, data, { new: true });

   res.json(emprendedor);
}

const emprendedorsDelete = async (req, res) => {
   const { id } = req.params;

   // Eliminación fisica de registros en db
   // const emprendedor = await Emprendedor.findByIdAndDelete( id );

   const emprendedor = await Emprendedor.findByIdAndUpdate(id, { status: false });

   res.json(emprendedor);
}

module.exports = {
   emprendedorsGet,
   emprendedorsPost,
   emprendedorsPut,
   emprendedorsDelete
}