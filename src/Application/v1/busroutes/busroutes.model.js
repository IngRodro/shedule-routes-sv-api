import mongoose from 'mongoose';
import getModelName from 'Utils/getModelName';

const { Schema } = mongoose;
const { singularName, pluralName } = getModelName('BusRoute');

const schema = new Schema(
  {
    numeroRuta: {
      type: String,
      required: true,
    },
    destino: {
      type: String,
      required: true,
    },
    estado: {
      type: String,
      enum: ['retrasado', 'a tiempo', 'en ruta', 'llegando'],
      default: 'active',
      required: true,
    },
    Partio: {
      type: Date,
      default: Date.now,
      required: true,
    },
    SalidaProxima: {
      type: Date,
      required: true,
    },
    precio: {
      type: Number,
      required: true,
    },
    municipio: {
      type: String,
      required: true,
    },
    departamento: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

// Ensure virtual fields are serialised.
schema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(_doc, ret) {
    delete ret._id;
  },
});

// rename name Example to singular Model
export default mongoose.models[singularName] ||
  mongoose.model(pluralName, schema);
