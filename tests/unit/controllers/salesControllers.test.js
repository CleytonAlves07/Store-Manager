const sinon = require('sinon');
const { expect } = require('chai');

const salesService = require('../../../services/salesServices');
const salesController = require('../../../controllers/salesControllers');

describe('Testando a camada Controllers do sales ', () => {
  afterEach(sinon.restore);
  describe('Quando um response é retornado pela função addSales', () => {
    const res = {};
    const req = { body: {} };

    it('Quando é retornado informações válidas', async () => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(salesService, 'addSales').resolves(true);

      const result = await salesController.addSales(req, res);
      expect(res.status.calledWith(201)).to.be.equal(true);
    });

    it('Quando os dados não são retornados', async () => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(salesService, 'addSales').rejects(false);

      await salesController.addSales(req, res);
      expect(res.status.calledWith(500)).to.equal(true);
     
    });
    it('Quando retorna vazio', async () => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(salesService, 'addSales').resolves(false);

      await salesController.addSales(req, res);
      expect(res.status.calledWith(404)).to.equal(true);
     
    });
  });
});




