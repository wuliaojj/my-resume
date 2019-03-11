<template>
    <div>
        <div :style="{height:'200px',width:'100%'}" ref="abilityEchart"></div>
    </div>
</template>

<script type="text/ecmascript-6">
import echarts from "echarts";
export default {
    name: '',
    data() {
        return {}
    },
    components: {},
    methods: {
        abilityEchart(){
            let abilityEchart = echarts.init(this.$refs.abilityEchart); //这里是为了获得容器所在位置   
            window.onresize = abilityEchart.resize;       //当页面宽变化时，用来刷新图表
            abilityEchart.setOption({ // 进行相关配置
                title: {
                    text: '综合能力',
                    textStyle: {
                        color: '#fff',
                        fontWeight:600,
                        fontSize:20
                    }
                },
                tooltip: {},
                legend: {
                    // data: ['技术', '表达','积极性','创新','融合度']
                    data: ['2017', '2018'],
                    orient: 'vertical',
                    y: 'bottom',
                    x:'right',
                    textStyle:{
                        color:'#fff'
                    }
                },
                radar: {
                    // shape: 'circle',配置标签的样式
                    center: ['50%', '55%'],
                    top:10,
                    name: {
                        textStyle: {
                            color: '#fff',
                            backgroundColor: '#999',
                            borderRadius: 3,
                            padding: [3, 5],
                        },
                    },
                    indicator: [
                    { name: '技术', max: 100},
                    { name: '表达', max: 100},
                    { name: '积极性', max: 100},
                    { name: '创新', max: 100},
                    { name: '融合度', max: 100}
                    ]
                },
                series: [{
                    name: 'ComprehensiveAbility',
                    type: 'radar',
                    data : [
                        {
                            value : [50, 74, 70, 40, 77],
                            name : '2017',
                            itemStyle: {                // 单个拐点标志的样式设置。
                                normal: {
                                    borderColor: '#AFA94F',       // 拐点的描边颜色。[ default: '#000' ]
                                    borderWidth: 2,                        // 拐点的描边宽度，默认不描边。[ default: 0 ]
                                }
                            },
                            lineStyle: {                // 单项线条样式。
                                normal: {
                                    color: 'rgba(175,169,79,0.6)',
                                    opacity: 0.5            // 图形透明度
                                }
                            },
                            areaStyle: {                // 单项区域填充样式
                                normal: {
                                    color: 'rgba(175,169,79,0.6)'       // 填充的颜色。[ default: "#000" ]
                                }

                            }
                        },
                        {
                            value : [80, 84, 90, 50, 87],
                            name : '2018',
                            itemStyle: {                // 单个拐点标志的样式设置。
                                normal: {
                                    borderColor: '#0066FF',       // 拐点的描边颜色。[ default: '#000' ]
                                    borderWidth: 2,                        // 拐点的描边宽度，默认不描边。[ default: 0 ]
                                }
                            },
                            lineStyle: {                // 单项线条样式。
                                normal: {
                                    color: 'rgba(0,102,255,0.6)',
                                    opacity: 0.5            // 图形透明度
                                }
                            },
                            areaStyle: {                // 单项区域填充样式
                                normal: {
                                    color: 'rgba(0,102,255,0.6)'       // 填充的颜色。[ default: "#000" ]
                                }

                            }
                        },
                    ]
                }],
                color: ['#AFA94F', '#0066FF']
            })
        }
    },
    mounted() {
        this.abilityEchart()
    },
}
</script>

<style lang="less">
</style>
