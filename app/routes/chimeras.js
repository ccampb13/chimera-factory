'use strict';

var Mongo = require('mongodb');

exports.index = (req, res)=>{
  var chimeras = global.nss.db.collection('chimeras');

  chimeras.find().toArray((err, records)=>{
    res.render('chimeras/index', {chimeras: records, title: 'Chimera Factory: Chimeras'});
  });
};

exports.new = (req, res)=>{
    res.render('chimeras/new', {title: 'Chimera Factory: New'});
};

exports.destroy = (req, res)=>{
    var _id = Mongo.ObjectID(req.params.id);
    var chimeras = global.nss.db.collection('chimeras');

    chimeras.findAndRemove({_id:_id}, (err, record) =>{
        res.redirect('/chimeras');

    });
};



exports.create = (req, res)=>{
  var head;
  var body;
  var tail;

  switch(req.body.head){
  case 'Horse':
    head ='horse_head.png';
    break;
  case 'Lion':
    head ='lion_head.png';
  }

  switch(req.body.body){
  case 'Horse':
    body ='horse_body.png';
    break;
  case 'Lion':
    body ='lion_body.png';
}

  switch(req.body.tail){
  case 'Horse':
    tail ='horse_tail.png';
    break;
  case 'Lion':
    tail ='lion_tail.png';
}

  req.body.head = head;
  req.body.body = body;
  req.body.tail = tail;
  var chimeras = global.nss.db.collection('chimeras');
  chimeras.save(req.body, (err, obj)=>{
      res.redirect('/chimeras');
  });
};
