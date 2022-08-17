const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../helpers/connection');

const salesModel = require('../../../models/salesModels');

describe('Verificando a camada models do sales', () => {
  afterEach(sinon.restore);

  describe('Ao adicionar um sales', () => {
    const fakeSales = { insertId: 1 };
    const fakeInsert = {
      "id": 4,
      "itemsSold": [
		{
			"productId": 2,
			"quantity": 32
		}
	]
}

    it('Quando o produto está listado no banco de dados o addSales responde corretamente', async () => {
      sinon.stub(connection, 'execute').resolves([fakeSales]);

      const result = await salesModel.addSales(fakeSales);
      expect(result).to.be.equal(1);;
      
    });

    it('Quando o produto está listado no banco de dados o addSalesProducts', async () => {
      sinon.stub(connection, 'execute').resolves([fakeInsert]);

      const data = await salesModel.addSalesProducts(fakeInsert);
      expect(data).to.be.an('array');
  

      
    });
  });
});





  // ResultSetHeader {
  //   fieldCount: 0,
  //   affectedRows: 1,
  //   insertId: 0,
  //   info: '',
  //   serverStatus: 2,
  //   warningStatus: 0
  // },
  // undefined