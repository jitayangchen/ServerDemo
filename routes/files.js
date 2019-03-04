var express = require('express');
var router = express.Router();

const multer = require('multer');
const upload = multer({dest: 'public/'});
const fs = require('fs');

/* GET users listing. */
router.post('/upload_file', upload.any(), function(req, res, next) {
  // let data = fs.readFileSync(req.files[0].path).toString();

  const file_name = req.files[0].originalname;
  const des_file = './public/' + file_name;

  fs.renameSync(req.files[0].path, des_file);

  const response = {
    message:'File uploaded successfully',
    filename:file_name,
    path:req.files[0].path
  };
  console.log(response);
  let data = {status: 1, file_name: file_name};
  res.send('<script>window.parent.uploadSuccess(' + JSON.stringify(data) + ')</script>');
});

router.get('/get_file_list', function (req, res) {
  let strings = fs.readdirSync('./public');
  let datas = [];
  strings.forEach(function (value, index, array) {
    let arr = value.split('.');
    if (arr[1] === 'html') {
      datas.push(value);
    }
  });
  console.log(datas);
  res.send(JSON.stringify(datas));
});

module.exports = router;
