const http=require('http');
const url=require('url');
const querystring=require('querystring');
const rp=require('request-promise');

const util=require('./utilities');

const server=http.createServer();


server.on('request',(req,res)=>{
    let pathName=url.parse(req.url).pathname,
        queryString=url.parse(req.url).query,
         method= _matchPath(pathName);
         if(method&&method.length>0){
            let requestURL= util[method]();
            rp(requestURL).then(data=>{        
                res.write(data);
                res.end();
            }).catch(err=>{
                res.end(err);
            })
         }
})

server.listen(9000,()=>{
    console.log("server on port 9000!!!");
})

function _matchPath(pathName){
    let patterns_map=new Map(),
        patterns=[];
    [
        ['_getToc',/^\/toc\/[a-zA-Z0-9]+\?view\=chapters/g],
        ['_getMinor',/\/cats\/lv2/g],
        ['_getAtoc',/\/toc\?view\=summary\&book\=[a-zA-Z0-9]+/g],
        ['_getChapter',/\/chapter\//g],
        ['_getStatistics',/\/cats\/lv2\/statistics/g],
        ['_getCategory',/\/book\/by-categories/g],
        ['_getRankgender',/\/ranking\/gender/g],
        ['_getRank',/\/ranking\/(?!gender)/g],
        ['_getBook',/\/book\/(?!by-categories)/],
    ].forEach(kv=>{
        patterns_map.set(kv[0],kv[1]);
        patterns.push(kv[1]);
    })
    if(pathName!=""){
        patterns_map.forEach((value,key)=>{
            if(pathName.match(value)){
                pn=key;
            }
        });
    }
    return pn;
}