import axios from 'axios';
export const url = "http://localhost:9000";

//获取小说分类
export function getNovelClass() {
    return axios.get(`${url}/cats/lv2/statistics`).then((res) => {
        return res.data;
    }).catch((err) => {
        console.error(err)
    })
}

//获取分类小说列表
export function getNovelClass(gender, type, major, minor, start, limit) {
    return axios.get(`${url}/book/by-categories?gender=${gender}&type=${type}&major=${major}&minor=${minor}&start=${start}&limit=${limit}`).then((res) => {
        return res.data;
    }).catch((err) => {
        console.error(err)
    })
}
//获取换源
export function getChangeSource(id) {
    return axios.get(`${url}/toc?view=summary&book=${id}`).then((res) => {
        return res.data;
    }).catch((err) => {
        console.error(err)
    })
}
//获取目录
export function getCatalog(id) {
    return axios.get(`${url}/toc/${id}?view=chapters`).then((res) => {
        return res.data;
    }).catch((err) => {
        console.error(err)
    })
}

//获取书籍内容
export function getNovel(link) {
    return axios.get(`${url}/chapter/${link}?k=2124b73d7e2e1945&t=1468223717`).then((res) => {
        return res.data;
    }).catch((err) => {
        console.error(err)
    })
}