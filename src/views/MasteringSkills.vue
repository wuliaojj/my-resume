<template>
    <div class="m-masteringskills">
        <div :style="{height:pheight,width:'100%'}" ref="skillsEchart"></div>
    </div>
</template>

<script type="text/ecmascript-6">
import echarts from "echarts";
export default {
    name: '',
    data() {
        return {
            pheight:'325px',
        }
    },
    components: {},
    methods: {
        one(){
            alert(2)
            
        },
        skillEchart(){
            let skillsEchart = echarts.init(this.$refs.skillsEchart); //这里是为了获得容器所在位置   

            window.onresize = skillsEchart.resize;       //当页面宽变化时，用来刷新图表
            skillsEchart.setOption({ // 进行相关配置
                backgroundColor: '#18202D',
                title: {
                    text: '掌握的技术',
                    x: 'center',
                    top: 20,
                    textStyle: {
                        color: '#fff',
                        fontWeight:600,
                        fontSize:20
                    }
                },

                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },

                // visualMap: {
                //     show: false,
                //     min: 80,
                //     max: 600,
                //     inRange: {
                //         color: ['#C1D8F7', '#1A62CE', '#031C43']
                //     },
                // },
                legend: {   //控制下面的series数据的是否显示
                    orient: 'horizontal',
                    y: 'bottom',
                    x:'center',
                    data:['Html','Css','Javascrip','Vue','微信小程序','Node','React'],
                    textStyle: {
                        color: '#fff',
                        fontSize:12
                    },
                    inactiveColor:{
                        color: '#fff'
                    },
                    backgroundColor:{
                        color: '#fff'
                    }
                },
                calculable: true,
                series : [
                    {
                        name:'skills',
                        type:'pie',
                        radius : '55%',
                        center: ['50%', '50%'],
                        // roseType: "area",
                        data:[
                            {value:450, name:'Html'},
                            {value:410, name:'Css'},
                            {value:350, name:'Javascrip'},
                            {value:400, name:'Vue'},
                            {value:300, name:'微信小程序'},
                            {value:250, name:'Node'},
                            {value:150, name:'React'},
                        ].sort(function (a, b) { return a.value - b.value; }),
                        roseType: 'radius',
                        label: {        //每个模块的描述
                            normal: {
                                textStyle: {
                                    color: 'rgba(255, 255, 255, 0.3)'
                                }
                            }
                        },
                        labelLine: {        //指向线
                            normal: {
                                lineStyle: {
                                    color: 'rgba(255, 255, 255, 0.3)'       
                                },
                                smooth: 0.2,
                                length: 10,
                                length2: 20
                            }
                        },
                        itemStyle: {        //基本样式,这里控制所有的样式
                            normal: {
                                // color: '#c23531',
                                shadowBlur: 200,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            },
                        },
                        animationType: 'scale',
                        animationEasing: 'elasticOut',
                        animationDelay: function (idx) {
                            return Math.random() * 200;
                        }
                    }
                ],
                color: ['#00bfff', '#00ffdd', '#207ffc', '#00aeff', "#00eeff", "#006eff", "#0099ff"],
            })
        }
    },
    created(){
        if(this.$route.query.prostheight!=null){
            this.pheight=`${this.$route.query.prostheight}px`
            console.log(this.pheight);
        }
        
    },
    mounted() {
        // console.log(this.$route.query.prostheight);
        this.skillEchart()
    },
}
</script>

<style lang="less">

</style>
