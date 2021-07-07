var express = require('express');
var router = express.Router();
const fs = require('fs')
const fsPromises = fs.promises;

const path = require('path')

async function listDir() {
  const directoryPath = path.join(__dirname, '../demo1');
  try {
    return fsPromises.readdir(directoryPath);
  } catch (err) {
    console.error('Error occured while reading directory!', err);
  }
}


/* GET users listing. */
router.get('/', async function (req, res, next) {
  
  //passsing directoryPath and callback function
  // result = []
  result = await listDir();
  res.send(result);
});

module.exports = router;
