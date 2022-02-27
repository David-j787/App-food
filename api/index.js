//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Diet } = require('./src/db.js');


// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log("%s listening at 3000"); // eslint-disable-line no-console

    //Dietas Precargadas

    var glutenFree = Diet.create({
      id: 1,
      name: 'gluten Free'
    });
    var dary = Diet.create({
      id: 2,
      name: 'dairy free'
    });
    var lacveg = Diet.create({
      id: 3,
      name: 'lacto ovo vegetarian'
    });
    var veggieran = Diet.create({
      id: 4,
      name: 'vegan'
    });
    var pesc = Diet.create({
      id: 5,
      name: 'pescetarian'
    });
    var paloe = Diet.create({
      id: 6,
      name: 'paleolithic'
    });
    var primo = Diet.create({
      id: 7,
      name: 'primal'
    });
    var low = Diet.create({
      id: 8,
      name: 'fodmap friendly'
    });
  
    
    Promise.all([glutenFree, dary, lacveg, veggieran, pesc, paloe, primo, low])
                .then(res => {
                  console.log("Dietas precargadas");
                });
  });
});
