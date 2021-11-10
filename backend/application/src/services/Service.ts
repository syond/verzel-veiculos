export default class Service {
    private readonly Model;

    constructor(model: any) {
        this.Model = model;
    }

    /**
    * Create
    */
  create = (param: Object) => this.Model.create(param)

  /**
   * Update
   */
  update = (param: Object, paramId: number) => this.Model.update(param, { where: { id: paramId } })

  /**
   * List all
   */
  list = () => this.Model.findAll();
  
  /**
   * Show
   */
  findById = (paramId: number) => this.Model.findByPk(paramId)

  /**
   * Delete
   */
  deleteById = (paramId: number): Promise<number> => this.Model.destroy({ where: { id: paramId } })
};
