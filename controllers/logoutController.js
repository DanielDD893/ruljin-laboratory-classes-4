const getLogoutView = (req, res) => {
    res.render('logout');
};

const getProcessLog = () => {
    console.log('Process is shutting down');
};

const killAplication = (req, res) => {
    getProcessLog();
    process.exit(0);
};

module.exports = { getLogoutView, killAplication };