import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Veiculo extends Model {}

Veiculo.init(
  {
    nome: DataTypes.STRING,
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    foto: DataTypes.STRING,
  },
  { sequelize, modelName: 'veiculo' }
);

(async () => {
  await Veiculo.sync({ alter: true });
})();

export default Veiculo;
