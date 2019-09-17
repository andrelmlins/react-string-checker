const ClassDeclaration = require('./beans/ClassDeclaration');
const types = require('../helpers/types');

class Compiler {
  run(body) {
    body.map(item => this.runChecker(item));
  }

  runChecker(item) {
    if (types.includes(item.type)) {
      switch (item.type) {
        case 'ClassDeclaration':
          new ClassDeclaration().run(item);
      }
    }
    // switch(item){
    //   case ""
    // }
  }
}

module.exports = new Compiler();
