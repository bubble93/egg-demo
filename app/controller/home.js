const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index(){
        this.ctx.body = 'Hollo World';
    }
}

module.exports = HomeController;