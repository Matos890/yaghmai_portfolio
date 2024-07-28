exports.viewHome =  (req, res) => {
  res.status(200).render('index', {
    title: 'All Tour',
  });
};
exports.aboutMe = (req, res) =>{
  res.status(200).render('aboutMe', {
    title:'About'
  })
}