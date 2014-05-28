'use strict';

exports.index = (req, res)=>{
  res.render('home/index', {title: 'Chimera Factory: Home'});
};

exports.about = (req, res)=>{
  res.render('home/about', {title: 'Chimera Factory: About'});
};
