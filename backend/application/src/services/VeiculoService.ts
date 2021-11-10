import Service from './Service';
import Veiculo from '../models/VeiculoModel';

export default class VeiculoService extends Service {
  constructor() {
    super(Veiculo);
  }
};
