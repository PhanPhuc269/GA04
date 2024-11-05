const siteRouter=require('./sites');

function router(app)
{
    app.use('/', siteRouter);
}

module.exports = router