const sinon = require('sinon');
const { expect } = require('chai');

const salesModels = require('../../../models/salesModels');
const salesService = require('../../../services/salesServices');
const validateSales = require('../../../middlewares/validateSales');

describe('Testando a camada Service do sales', () => {
  afterEach(sinon.restore);
  describe('Ao tentar adicionar um produto', () => {
    const idSales = 2;
    const fakeSales = [
    {
      "productId": 2,
      "quantity":21
    },
    {
      "productId": 3,
      "quantity":23
    }
  ]
    

    it('Quando um sales é adicionado com sucesso', async () => { 
      sinon.stub(salesModels, 'addSales').resolves(idSales);
      sinon.stub(validateSales, 'productIdIsValid').resolves(true);
      sinon.stub(salesModels, 'addSalesProducts').resolves([{}, undefined]);

      const data = await salesService.addSales(fakeSales);
      expect(data).to.have.all.keys('id', 'itemsSold');
    })
    it('Quando um produto não existe no banco', async () => {
      sinon.stub(validateSales, 'productIdIsValid').resolves(false);

      const result = await salesService.addSales(fakeSales);
      expect(result).to.be.false;
    });
  });
});
