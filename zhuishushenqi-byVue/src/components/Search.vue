<template>
  <div class="search">
    <div class="search-history">
      <span>搜索历史</span>
      <span><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNDk4MzY2NDg2NTEyIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI0MDEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTYxNC40IDc5Ny44NjdjLTE4Ljg3NiAwLTM0LjEzMy0xNS4yNTgtMzQuMTMzLTM0LjEzM3YtMzc1LjQ2N2MwLTE4Ljg3NiAxNS4yNTgtMzQuMTMzIDM0LjEzMy0zNC4xMzNzMzQuMTMzIDE1LjI1OCAzNC4xMzMgMzQuMTMzdjM3NS40NjdjMCAxOC44NzYtMTUuMjU4IDM0LjEzMy0zNC4xMzMgMzQuMTMzek00MDkuNiA3OTcuODY3Yy0xOC44NzYgMC0zNC4xMzMtMTUuMjU4LTM0LjEzMy0zNC4xMzN2LTM3NS40NjdjMC0xOC44NzYgMTUuMjU4LTM0LjEzMyAzNC4xMzMtMzQuMTMzczM0LjEzMyAxNS4yNTggMzQuMTMzIDM0LjEzM3YzNzUuNDY3YzAgMTguODc2LTE1LjI1OCAzNC4xMzMtMzQuMTMzIDM0LjEzM3pNOTU1LjczMyAyMTcuNmgtMTcwLjY2N3YtNjguMjY3YzAtNTYuNDU3LTQ1LjU2OC0xMDIuNC0xMDEuNjE1LTEwMi40aC0zNDIuMTE4Yy01Ni40NTcgMC0xMDIuNCA0NS45NDMtMTAyLjQgMTAyLjR2NjguMjY3aC0xNzAuNjY3Yy0xOC44NzYgMC0zNC4xMzMgMTUuMjU4LTM0LjEzMyAzNC4xMzNzMTUuMjU4IDM0LjEzMyAzNC4xMzMgMzQuMTMzaDg4Ny40NjdjMTguODc2IDAgMzQuMTMzLTE1LjI1OCAzNC4xMzMtMzQuMTMzcy0xNS4yNTgtMzQuMTMzLTM0LjEzMy0zNC4xMzN6TTMwNy4yIDE0OS4zMzNjMC0xOC44MDcgMTUuMzI2LTM0LjEzMyAzNC4xMzMtMzQuMTMzaDM0Mi4xMThjMTguNzA1IDAgMzMuMzQ4IDE0Ljk4NSAzMy4zNDggMzQuMTMzdjY4LjI2N2gtNDA5LjZ2LTY4LjI2N3pNNzUxLjA3MCAxMDAyLjY2N2gtNDc3LjkzNWMtNTYuNDU3IDAtMTAyLjQtNDUuOTQzLTEwMi40LTEwMi40di01MTIuNTEyYzAtMTguODQyIDE1LjI5Mi0zNC4xMzMgMzQuMTMzLTM0LjEzM3MzNC4xMzMgMTUuMjkyIDM0LjEzMyAzNC4xMzN2NTEyLjUxMmMwIDE4Ljg0MiAxNS4zMjYgMzQuMTMzIDM0LjEzMyAzNC4xMzNoNDc3LjkzNWMxOC44NDIgMCAzNC4xMzMtMTUuMjkyIDM0LjEzMy0zNC4xMzN2LTUxMS4xMTNjMC0xOC44NDIgMTUuMjU4LTM0LjEzMyAzNC4xMzMtMzQuMTMzczM0LjEzMyAxNS4yOTIgMzQuMTMzIDM0LjEzM3Y1MTEuMTEzYzAgNTYuNDU3LTQ1Ljk0MyAxMDIuNC0xMDIuNCAxMDIuNHoiIHAtaWQ9IjI0MDIiIGZpbGw9IiM1MTUxNTEiPjwvcGF0aD48L3N2Zz4="></span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'search',
    data() {
      return {
      }
    },
  }
</script>
<style>
  .search {
    width: 100%;
    padding: 1rem;
    height: inherit;
  }
  .search-history {
    width: inherit;
    display: flex;
    justify-content: space-between;
    margin-bottom: .5rem;
    line-height: 1rem;
    font-size: .7rem;
    color: #515151;
  }
  .search-history>span {
    font-size: 1rem;
    color: #515151;
  }
  .search-history>img {
    width: .8rem;
    height: 1rem;
    vertical-align: middle;
  }
  @media(min-width:414px){
    .search-history{
      width: 100%;
      position: absolute;
      top: 50px;
      height: 50px;
    }
  }
</style>



