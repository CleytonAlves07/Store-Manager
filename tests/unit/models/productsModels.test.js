const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../helpers/connection');

const productsModel = require('../../../models/productsModels');

describe('Verificando a camada models', () => {
  afterEach(sinon.restore);

  describe('Verificando os produtos pelo getAllProducts', () => {
    const fakeProduct = [{
      id: '1',
      name: 'Test Product 1',
    },
    {
      id: '2',
      name: 'Test Product 2',
    }];
    

    it('Ao consultar a products', async () => {
      sinon.stub(connection, 'execute').resolves([fakeProduct]);

      const products = await productsModel.getAllProducts();
      expect(products).to.be.a('array');
      expect(products[0]).to.have.all.keys('id', 'name');
      expect(products[0].id).to.be.equal('1');
      expect(products[0].name).to.be.equal('Test Product 1');
    });

    describe('Ao consultar o produto pelo id', () => {
      it('Ao consultar o products pelo id', async () => {
        sinon.stub(connection, 'execute').resolves([{ id: 3, name: 'Test Product 3' }]);

        const productsById = await productsModel.getProductById('3');
        expect(productsById).to.have.all.keys('id', 'name');
        expect(productsById.id).to.be.equal(3);
        expect(productsById.name).to.be.equal('Test Product 3');

      });
    });
  });
  describe('Ao adicionar um produto', () => {
    const fakeProduct = {}

    it('Quando o produto é registrado', async () => {
      sinon.stub(connection, 'execute').resolves([fakeProduct]);

      const result = await productsModel.addProduct(fakeProduct);
      expect(result).to.be.an('object');
    });
  });
});