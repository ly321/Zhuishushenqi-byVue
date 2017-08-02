<template>
    <div class="header">
        <p>{{title}}</p>
        <p v-html="datas">{{datas}}</p>
    </div>
</template>
<script>
    export default {
        name: 'header',
        data() {
            return {
            }
        },
        computed: {
            title() {
                if (this.$store.state.header.title === '搜索') {
                    return '';
                }
                return this.$store.state.header.title;
            },
            datas() {
                if (this.$store.state.header.title === '搜索') {
                    return '<div class="search-head"><span  class="search-icon"><img class="search-img" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNDk3OTY3NTI1MzM5IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQwNDQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE3My4wMTM4IDE1OS4xNTMxYzU3LjU0NjMtNjUuNDQxNiAxNDEuNTY0OC0xMDYuODM4NiAyMjguNTU0NC0xMTIuMjUzOSA4MS40MTgxLTYuMDkzOSAxNjQuODM1IDE4Ljg0NTIgMjI5LjIxMyA2OS4xMzAxIDc4LjEzODIgNTkuMTkyOSAxMjguMDM2NCAxNTQuMjUxNCAxMzEuMzk1MyAyNTIuMzE4OSA0LjY1NiA4NC45NjU0LTI1LjQyNTggMTcwLjc2ODItODAuNzk3NSAyMzUuMTgwNSA4Ni4yMTIxIDg2LjI2NTUgMTcyLjUyMTEgMTcyLjQ3NjEgMjU4LjcxMzIgMjU4Ljc2MjYtMTguNzY3IDE4LjcwOTMtMzcuNDU3MSAzNy40OTU2LTU2LjIyNTIgNTYuMTgzOS04Ny4wODY1LTg3LjA0My0xNzQuMDk0MS0xNzQuMTQzOS0yNjEuMjIwNi0yNjEuMTQ3OS03MS45NjYyIDUyLjY5MzMtMTY1LjYyOTUgNzQuMzg5Ni0yNTMuNTEwNSA1OS4xNTI5LTg2Ljk0OTYtMTMuOTE0Ni0xNjcuMTI2NS02NC4yMzg0LTIxOC4yMjktMTM1Ljg3MTktMzIuMjk0NC00NC42Mzc3LTUzLjMzNC05Ny40MDYtNjAuMzk4NS0xNTIuMDU4OUM3NyAzMzIuNDQ0NiAxMDcuNzYyNCAyMzEuMDU5MyAxNzMuMDEzOCAxNTkuMTUzMXpNMzkyLjM4NyA4Ny40NDI3Yy0xMy44MzkyIDIuMDc2Ni0yNy43OTMzIDMuNjg3NS00MS4yMjM3IDcuNzAzOC04NS44NDMzIDIxLjExNTctMTYwLjE1OSA4My41MTE0LTE5Ni42ODQ3IDE2My45MTY5LTIwLjg0NDcgNDQuNzkyNi0yOS45Mjc5IDk0Ljk0MTYtMjYuNTMxMSAxNDQuMjE5MiA1LjIwMDcgOTUuMjEyNCA2MC40NTc1IDE4NS42OTExIDE0Mi4xNjY0IDIzNC41OTY5IDg0LjMxMDMgNTIuNjE2MyAxOTUuNzcyMyA1Ny44NzQ4IDI4NC43NTk2IDEzLjcyMTcgODUuNTcxNS00MC41MDE1IDE0OC43NjUyLTEyNC41NzY1IDE2My44MDc3LTIxOC4wNjIyIDcuMjc3NC00Mi43MzcgNS4yNDA3LTg3LjE1OTktNi40MjU5LTEyOC45NDU2LTI0LjA2NTctOTAuNDE5Ny05My45MzUyLTE2Ni45NDQ4LTE4MS42MDMzLTE5OS40OTA3QzQ4Ni44NDc5IDg4LjE4MDIgNDM5LjAwNjQgODIuNjY5IDM5Mi4zODcgODcuNDQyN3oiIHAtaWQ9IjQwNDUiPjwvcGF0aD48L3N2Zz4="></span><input  type="text" placeholder="输入书名或者作者名" class="search-input"></div>';
                }
            }
        }
    }
</script>
<style>
    .search-head {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding: 0 1rem;
        background: #04b1ff;
    }
    .search-head>img {
        position: absolute;
        left: 1.4rem;
        line-height: 3.5rem;
        width: 20px;
        top: .75rem;
    }
    .search-input {
        width: 100%;
        line-height: 1.4rem;
        padding-left: 1.8rem;
        border-radius: .2rem;
        border: none;
    }
    .search-img{
            position: absolute;
    left: 1.4rem;
    line-height: 3.5rem;
    width: 20px;
    top: .9rem;
    }
    @import '../style/main.less';
    .header {
        width: 100%;
        height: 50px;
        background-color: #00a2ea;
        top: 0;
    }
    .header>p {
        color: #ffffff;
    }
    @media (max-width: 414px) {
        .header {
            position: fixed;
        }
    }
</style>