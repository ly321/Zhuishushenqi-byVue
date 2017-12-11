

const _getToc=function(tocId){
    return `http://api.zhuishushenqi.com/toc/${tocId}?view=chapters`;      
}

const _getMinor=function(){
    return `http://api.zhuishushenqi.com/cats/lv2`;
}
const _getAtoc=function(bookId){
    return `http://api.zhuishushenqi.com/toc?view=summary&book=${bookId}`;
}

const _getChapter=function(link){
    return `http://chapter2.zhuishushenqi.com/${link}?k=2124673d7e2e1945&t=1468223717`;
}
const _getStatistics=function(){
    return `http://api.zhuishushenqi.com/cats/lv2/statistics`;
}
const _getCategory=function(gender,type,major,minor,start,limit){
    return `http://api.zhuishushenqi.com/book/by-categories?gender=${male}&type=${hot}&major=${major}&minor=${minor}&start=${start}&limit=${limit}`
}
const _getRankgender=function(){
    return `http://api.zhuishushenqi.com/ranking/gender`;
}
const _getRank=function(rankId){
    return `http://api.zhuishushenqi.com/ranking/${rankId}`;
}
const _getBook=function(bookId){
    return `http://api.zhuishushenqi.com/book/${bookId}`;
}

exports._getToc=_getToc;
exports._getMinor=_getMinor;
exports._getAtoc=_getAtoc;
exports._getChapter=_getChapter;
exports._getStatistics=_getStatistics;
exports._getCategory=_getCategory;
exports._getRankgender=_getRankgender;
exports._getRank=_getRank;
exports._getBook=_getBook;