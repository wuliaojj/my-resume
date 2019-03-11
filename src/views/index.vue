<template>
    <div class="g-page">
        <r-header></r-header>
        <div class="g-topcontent">
            <div class="g-userinfo s-bg">
                <user-info></user-info>
            </div>
            <div class="g-picfirst s-bg" >
                <work-city></work-city>
            </div>
            <!-- <router-link  :to="{path: '/masteringSkills',query: {prostheight:allheight}}" class="g-picsecond s-bg">
                <mastering-skills></mastering-skills>
            </router-link> -->
            <div class="g-picsecond s-bg" >
                <mastering-skills></mastering-skills>
            </div>
        </div>
        <div class="g-bottomcontent">
            <div class="g-desc1 s-bg">
                <comprehensive-ability></comprehensive-ability>
            </div>
            <div class="g-desc2 s-bg">
                <handson-background></handson-background>
            </div>
            <div class="g-desc3 s-bg">
                <programming-skills></programming-skills>
            </div>
            <div class="g-desc4 s-bg">
                <job-intention></job-intention>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import RHeader from '../components/RHeader'
import UserInfo from './UserInfo.vue'
import WorkCity from './WorkCity.vue'
import MasteringSkills from './MasteringSkills.vue'
import ComprehensiveAbility from './ComprehensiveAbility.vue'
import HandsonBackground from './HandsonBackground'
import ProgrammingSkills from './ProgrammingSkills'
import JobIntention from './JobIntention'
export default {
    name: '',
    data() {
        return {
            allheight:null,
            allwidth:null,
        }
    },
    components: {
        RHeader,
        UserInfo,
        WorkCity,
        MasteringSkills,
        ComprehensiveAbility,
        HandsonBackground,
        ProgrammingSkills,
        JobIntention
    },
    methods: {
        getAllhw(){
            console.log(document.body.clientWidth);
            console.log(document.body.clientHeight);
            this.allheight=document.body.clientHeight
            this.allwidth=document.body.clientWidth
        }
    },
    mounted () {
        this.getAllhw()
    }
}
</script>

<style lang="less">

</style>

