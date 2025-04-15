const getHomeView = (req, res) => {
    res.render('home', { headTitle: "Home" });

module.exports = { getHomeView };