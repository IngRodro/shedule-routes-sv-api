import BusModel from './busroutes.model';

export const getAllBusRoutes = async (req, res) => {
  const { offset, limit } = req.params;

  try {
    const data = await BusModel.find().skip(offset).limit(limit);
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error al obtener los datos',
      code: 500,
    });
  }
};

export const createRoute = async (req, res) => {
  const {
    numeroRuta,
    destino,
    estado,
    Partio,
    SalidaProxima,
    precio,
    municipio,
    departamento,
  } = req.body;

  if ( !numeroRuta || !destino || !estado || !Partio || !SalidaProxima || !precio || !municipio || !departamento ) {
    return res.status(400).json({
      message: 'Faltan datos',
      code: 400,
    });
  }

  try {
    const data = await ExampleModule.create({ numeroRuta, destino, estado, Partio, SalidaProxima, precio, municipio, departamento });
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error al obtener los datos',
      code: 500,
    });
  }
};
