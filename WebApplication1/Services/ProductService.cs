using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Driver;
using WebApplication1.Models;


namespace WebApplication1.Services
{
    public class ProductService
    {
        private readonly IMongoCollection<Product> _products;

        public ProductService(IProductstoreDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
         _products = database.GetCollection<Product>(settings.ProductsCollectionName);
        }

        public List<Product> Get() =>
            _products.Find(book => true).ToList();

        public Product Get(string id) =>
            _products.Find<Product>(book => book.Id == id).FirstOrDefault();

        public Product Create(Product book)
        {
            _products.InsertOne(book);
            return book;
        }

        public void Update(string id, Product bookIn) =>
            _products.ReplaceOne(book => book.Id == id, bookIn);

        public void Remove(Product bookIn) =>
            _products.DeleteOne(book => book.Id == bookIn.Id);

        public void Remove(string id) =>
            _products.DeleteOne(book => book.Id == id);
    }
}

