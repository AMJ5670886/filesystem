
exports.notFound = (req,res,next) => {
    res.status(404).render('notFound',{
        pageTitle:'Not Found'
    });
}