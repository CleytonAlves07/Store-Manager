const sinon = require('sinon');
const { expect } = require('chai');

const productsModels = require('../../../models/productsModels');
const productsService = require('../../../services/productsServices');

describe('Testando a camada Service', () => {
  beforeEach(sinon.restore);

  describe('Ao chamar  todos os produtos', () => { 
    const fakeProduct = [{
      id: '1',
      name: 'Test Product 1',
    },
    {
      id: '2',
      name: 'Test Product 2',
      }];
    it('Validando getAllProducts', async () => {
      sinon.stub(productsModels, 'getAllProducts').resolves(fakeProduct);

      const products = await productsService.getAllProducts();
      expect(products).to.deep.equal(fakeProduct);
      expect(products[1]).to.have.all.keys('id', 'name');
      expect(products[1].id).to.be.equal('2');
      expect(products[1].name).to.be.equal('Test Product 2');
    });
  });
  describe('Ao chamar um produto pelo id', () => {

    it('Validando o getProductById', async() => {
      sinon.stub(productsModels, 'getProductById').resolves([{id: 5, name: 'Test Product 5'}]);

      const productById = await productsService.getProductById('5');
      expect(productById).to.have.all.keys('id', 'name');
      expect(productById.id).to.be.equal(5);
      expect(productById.name).to.be.equal('Test Product 5');

    });
    it('Solicitando um id que não existente', async () => {
      sinon.stub(productsModels, 'getProductById').resolves(false);

      const productById = await productsService.getProductById('55');
      expect(productById).to.be.a('boolean');
    });
  });
});