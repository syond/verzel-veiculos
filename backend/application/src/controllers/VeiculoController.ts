import { Request, Response } from 'express';
import VeiculoService from '../services/VeiculoService';

export default new (class ClientController {
  readonly service;

  constructor() {
    this.service = new VeiculoService;
  }

  index = async (req: Request, res: Response) => {
      const veiculos = await this.service.list();
      
      try {
        if (!veiculos) {
            res.status(200).json({});
        } else {
            res.status(200).send({
                results: veiculos,
            });
        }
      } catch (error) {
          console.log(error);
      }
  }

  create = async (req: Request, res: Response) => {
    const veiculo = req.body;

    const veiculoCreated = await this.service.create(veiculo);

    try {
        if (!veiculoCreated) {
            res.status(400).json({
                message: "Erro ao tentar criar um veículo.",
            });
        } else {
            res.status(201).send(veiculoCreated);
        }
    } catch (error) {
        console.log(error);
    }
  }

  update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const veiculo = req.body;

    try {
      const veiculoUpdated = await this.service.update(veiculo, parseInt(id, 10));

        if (veiculoUpdated[0] > 0) {
            res.status(200).json({
                message: "Registro atualizado com sucesso."
          });
      } else {
        res.status(404).json({
            message: "Registro não encontrado.",
        });
      }
    } catch (error) {
        console.log(error);
    }
  }

  show = async (req: Request, res: Response) => {
    const { id } = req.params;

    const veiculoFound = await this.service.findById(parseInt(id, 10));

    try {
        if (!veiculoFound) {
            res.status(404).json({
                message: "Veículo não encontrado",
            })
        } else {
            res.status(200).send(veiculoFound);
        }
    } catch (error) {
        console.log(error);
    }
    
  }

  delete = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const response = await this.service.deleteById(parseInt(id, 10));

        if (response === 0) {
          res.status(400).json({
                message: "Erro ao tentar deletar.",
            })
        } else {
            res.status(200).json({
                message: "Operação realizada com sucesso."
            });
        }
    } catch (error) {
        console.log(error);
    }
  }
})();
