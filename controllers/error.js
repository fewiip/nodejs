exports.get404Page = (request, response, next) => {
    //response.status(404).send('<h1>page no found! 404 </h1>');
    //response.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    response.status(404).render('404', { pageTitle: 'Page Not Found', path: '/404' });
}