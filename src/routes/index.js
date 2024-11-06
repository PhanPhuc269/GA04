const siteRouter=require('./sites');
const productRouter=require('./product');


function router(app)
{
   app.use('/', siteRouter);
   app.use('/product', productRouter);
}

module.exports = router