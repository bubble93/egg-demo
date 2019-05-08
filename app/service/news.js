const Service = require('egg').Service;

class NewsService extends Service {
    async list(page = 1){
        const { serverUrl, pageSize } = this.config.news;
        // const {data:idList} = await this.ctx.curl(`${serverUrl}/topstories.json`, {
        //     data:{
        //         //'""'?
        //         orderBy: '"$key"',
        //         startAt: `"${pageSize * (page - 1)}"`,
        //         endAt: `"${pageSize * page - 1}"`
        //     },
        //     dataType: 'json'
        // });
        const {data:idList} = {
            list:[
                {id: 1, title:'this is news 1', url:'/news/1'},
                {id: 2, title:'this is news 2', url:'/news/2'},
                {id: 3, title:'this is news 3', url:'/news/3'}
            ]
        }
        const newsList = await Promise.all(
            Object.keys(idList).map(key => {
                const url = `${serverUrl}/item/${idList[key]}.json`;
                //ctx.crul?
                return this.ctx.curl(url, {dataType:'json'});
            })
        );
        return newsList.map(res => res.data);
    }

}
module.exports = NewsService;