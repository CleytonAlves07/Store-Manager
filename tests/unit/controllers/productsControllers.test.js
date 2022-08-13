const sinon = require('sinon');
const { expect } = require('chai');

const productsService = require('../../../services/productsServices');
const productsController = require('../../../controllers/productsControllers');

describe('Testando a camada Controllers ', () => {
  afterEach(sinon.restore);

  describe('Chamando o getAllProducts', () => {
    const res = {};
    const req = {};
    const fakeProduct = [{ id: '1', name: 'Test Product 1' }];
    
    it('Quando os dados são retornados', async () => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(fakeProduct);
      sinon.stub(productsService, 'getAllProducts').resolves(fakeProduct);
      
      await productsController.getAllProducts(req, res);
      expect(res.json.calledWith(fakeProduct)).to.equal(true);
      expect(res.status.calledWith(200)).to.equal(true);

    });
    it('Quando retorna vazio', async () => {
      res.json = sinon.stub().returns();
      res.status = sinon.stub().returns(res);
      sinon.stub(productsService, 'getAllProducts').resolves([]);

      await productsController.getAllProducts(req, res);
      expect(res.json.calledWith({ message: 'Products not found' })).to.equal(true);
      expect(res.status.calledWith(404)).to.equal(true);
     
    });
    it('Quando os dados não são retornados', async () => {
      res.json = sinon.stub().returns();
      res.status = sinon.stub().returns(res);
      sinon.stub(productsService, 'getAllProducts').rejects(false);

      await productsController.getAllProducts(req, res);
      expect(res.status.calledWith(500)).to.equal(true);
     
    });
  });


  describe('Chamando o getProductById', () => {
      const res = {};
      const req = { params: { } };
      const fakeProduct = { id: '1', name: 'Test Product 1' };
      

    it('Quando os dados são retornados', async () => {
      res.json = sinon.stub().returns();
      res.status = sinon.stub().returns(res);
      sinon.stub(productsService, 'getProductById').resolves(fakeProduct);

      await productsController.getProductById(req, res);
      expect(res.json.calledWith(fakeProduct)).to.equal(true);
      expect(res.status.calledWith(200)).to.equal(true);
     
    });
    it('Quando retorna vazio', async () => {
      res.json = sinon.stub().returns();
      res.status = sinon.stub().returns(res);
      sinon.stub(productsService, 'getProductById').resolves([]);

      await productsController.getProductById(req, res);
      expect(res.json.calledWith({ message: 'Product not found' })).to.equal(true);
      expect(res.status.calledWith(404)).to.equal(true);
     
    });
    it('Quando os dados não são retornados', async () => {
      res.json = sinon.stub().returns();
      res.status = sinon.stub().returns(res);
      sinon.stub(productsService, 'getProductById').rejects(false);

      await productsController.getProductById(req, res);
      expect(res.status.calledWith(500)).to.equal(true);
     
    });
  });
  describe('Quando um response é retornado', () => {
    const res = {};
    const req = { body: {} };

    it('Quando é retornado informações válidas', async () => {
      res.json = sinon.stub().returns();
      res.status = sinon.stub().returns(res);
      sinon.stub(productsService, 'addProduct').resolves(true);

      const result = await productsController.addProduct(req, res);
      expect(res.status.calledWith(201)).to.be.equal(true);
    });

    it('Quando os dados não são retornados', async () => {
      res.json = sinon.stub().returns();
      res.status = sinon.stub().returns(res);
      sinon.stub(productsService, 'addProduct').rejects(false);

      await productsController.addProduct(req, res);
      expect(res.status.calledWith(500)).to.equal(true);
     
    });
  });
});




