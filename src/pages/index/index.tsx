import Taro, { Component, Config } from '@tarojs/taro'
import { View, ScrollView, Text, Image} from '@tarojs/components'
import './index.scss'
import ico_Alliance from '../../image/Alliance.png'
import ico_Boom from '../../image/BOOM.png'
import ico_EHOME from '../../image/EHOME.png'
import ico_FWD from '../../image/FWD.png'
import ico_Gambit from '../../image/Gambit.png'
import ico_NIP from '../../image/NIP.png'
import ico_Pacific from '../../image/Pacific.png'
import ico_RNG from '../../image/RNG.png'

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }
  constructor () {
    super(...arguments)
    this.state = {
      tab_flg: 1,
      teamList: [{'name':'Alliance','win':'','ico':ico_Alliance},{'name':'BOOM','win':'','ico':ico_Boom},
      {'name':'WE','win':'','ico':''},{'name':'TeamL','win':'','ico':''},
      {'name':'Ehome','win':'','ico':''},{'name':'DC','win':'','ico':''},
      {'name':'Tnc','win':'','ico':''},{'name':'EG','win':'','ico':''}],
      team2List: [{'name':'','win':'','ico':''},{'name':'','win':'','ico':''},
      {'name':'','win':'','ico':''},{'name':'','win':'','ico':''},
      {'name':'','win':'','ico':''},{'name':'','win':'','ico':''},
      {'name':'','win':'','ico':''},{'name':'','win':'','ico':''}],

      teamList2: [{'name':'Alliance','win':'','ico':ico_Alliance},{'name':'Boom','win':'','ico':ico_Boom},
      {'name':'FWD','win':'','ico':ico_EHOME},{'name':'EHOME','win':'','ico':ico_FWD}],
      team2List2: [{'name':'','win':'','ico':''},{'name':'','win':'','ico':''},
      {'name':'','win':'','ico':''},{'name':'','win':'','ico':''}],
      teamList3: [{'name':'','win':'','ico':''},{'name':'','win':'','ico':''}],
      team2List3: [{'name':'','win':'','ico':''},{'name':'','win':'','ico':''}],

      winnerList: [{'name':'wig','win':'','ico':''},{'name':'wedg','win':'','ico':''},
      {'name':'wwe','win':'','ico':''},{'name':'wig','win':'','ico':''},
      {'name':'wrng','win':'','ico':''},{'name':'wvg','win':'','ico':''},
      {'name':'wehome','win':'','ico':''},{'name':'wdc','win':'','ico':''}],

      winnerList2: [{'name':'Gambit','win':'','ico':ico_Gambit},{'name':'NIP','win':'','ico':ico_NIP},
      {'name':'Pacific','win':'','ico':ico_Pacific},{'name':'RNG','win':'','ico':ico_RNG}],
      winnerList3: [{'name':'','win':'','ico':''},{'name':'','win':'','ico':''}],
      winnerList4: [{'name':'','win':'','ico':''},{'name':'','win':'','ico':''}]
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  tabChange (e) {
    this.setState({
      tab_flg: e.target.dataset.id
    })
  }

  selectTeam (tndex,team1,team2,e) {
     let teamInfo = team1
     let team2Info = team2
    if(tndex % 2 == 0){
      teamInfo[tndex].win = 'true'
      teamInfo[tndex+1].win = 'false'
      team2Info[tndex] = teamInfo[tndex]
      team2Info[tndex].win = ''
    }else{
      teamInfo[tndex].win = 'true'
      teamInfo[tndex-1].win = 'false'
      team2Info[(tndex-1)] = teamInfo[tndex]
      team2Info[(tndex-1)].win = ''
    }
    this.setState({team2List: team2Info})
    this.setState({teamList: teamInfo })
  }
  selectTeam2 (tndex,team1,team2,e) {
    let teamInfo = team1
    let team2Info = team2
    if(tndex % 2 == 0){
      teamInfo[tndex].win = 'true'
      teamInfo[tndex+1].win = 'false'
      team2Info[tndex / 2] = teamInfo[tndex]
      team2Info[tndex / 2].win = ''
    }else{
      teamInfo[tndex].win = 'true'
      teamInfo[tndex-1].win = 'false'
      team2Info[(tndex-1) / 2] = teamInfo[tndex]
      team2Info[(tndex-1) / 2].win = ''
    }
      this.setState({teamList2: team2Info})
      this.setState({team2List: teamInfo })
  }
  selectWinner (tndex,team1,team2,e) {
    let teamInfo = team1
    let team2Info = team2
    let loseTeams = this.state.team2List
    if(tndex % 2 == 0){
      teamInfo[tndex].win = 'true'
      teamInfo[tndex+1].win = 'false'
      team2Info[tndex / 2] = teamInfo[tndex]
      team2Info[tndex / 2].win = ''
      loseTeams[tndex+1] = teamInfo[tndex+1]
      loseTeams[tndex+1].win = ''
    }else{
      teamInfo[tndex].win = 'true'
      teamInfo[tndex-1].win = 'false'
      team2Info[(tndex-1) / 2] = teamInfo[tndex]
      team2Info[(tndex-1) / 2].win = ''
      loseTeams[tndex] = teamInfo[tndex-1]
      loseTeams[tndex].win = ''
    }
      this.setState({winnerList2: team2Info})
      this.setState({winnerList: teamInfo })
      this.setState({team2List: loseTeams })
  }
  selectTeam3 (tndex,team1,team2,e) {
    let teamInfo = team1
    let team2Info = team2
    if(tndex % 2 == 0){
      teamInfo[tndex].win = 'true'
      teamInfo[tndex+1].win = 'false'
      team2Info[tndex] = teamInfo[tndex]
      team2Info[tndex].win = ''
    }else{
      teamInfo[tndex].win = 'true'
      teamInfo[tndex-1].win = 'false'
      team2Info[(tndex-1)] = teamInfo[tndex]
      team2Info[(tndex-1)].win = ''
    }
    this.setState({team2List2: team2Info})
    this.setState({teamList2: teamInfo })
  }
  selectWinner2 (tndex,team1,team2,e) {
    let teamInfo = team1
    let team2Info = team2
    let loseTeams = this.state.team2List2
    if(tndex % 2 == 0){
      teamInfo[tndex].win = 'true'
      teamInfo[tndex+1].win = 'false'
      team2Info[tndex / 2] = teamInfo[tndex]
      team2Info[tndex / 2].win = ''
      loseTeams[tndex+1] = teamInfo[tndex+1]
      loseTeams[tndex+1].win = ''
    }else{
      teamInfo[tndex].win = 'true'
      teamInfo[tndex-1].win = 'false'
      team2Info[(tndex-1) / 2] = teamInfo[tndex]
      team2Info[(tndex-1) / 2].win = ''
      loseTeams[tndex] = teamInfo[tndex-1]
      loseTeams[tndex].win = ''
    }
      this.setState({winnerList3: team2Info})
      this.setState({winnerList2: teamInfo })
      this.setState({team2List2: loseTeams })
  }
  selectWinner3 (tndex,team1,team2,e) {
    let teamInfo = team1
    let team2Info = team2
    let loseTeams = this.state.team2List3
    if(tndex % 2 == 0){
      teamInfo[tndex].win = 'true'
      teamInfo[tndex+1].win = 'false'
      team2Info[tndex / 2] = teamInfo[tndex]
      team2Info[tndex / 2].win = ''
      loseTeams[tndex+1] = teamInfo[tndex+1]
      loseTeams[tndex+1].win = ''
    }else{
      teamInfo[tndex].win = 'true'
      teamInfo[tndex-1].win = 'false'
      team2Info[(tndex-1) / 2] = teamInfo[tndex]
      team2Info[(tndex-1) / 2].win = ''
      loseTeams[tndex] = teamInfo[tndex-1]
      loseTeams[tndex].win = ''
    }
      this.setState({winnerList4: team2Info})
      this.setState({winnerList3: teamInfo })
      this.setState({team2List3: loseTeams })
  }
  selectTeam4 (tndex,team1,team2,e) {
    let teamInfo = team1
    let team2Info = team2
    if(tndex % 2 == 0){
      teamInfo[tndex].win = 'true'
      teamInfo[tndex+1].win = 'false'
      team2Info[tndex / 2] = teamInfo[tndex]
      team2Info[tndex / 2].win = ''
    }else{
      teamInfo[tndex].win = 'true'
      teamInfo[tndex-1].win = 'false'
      team2Info[(tndex-1) / 2] = teamInfo[tndex]
      team2Info[(tndex-1) / 2].win = ''
    }
    this.setState({teamList3: team2Info})
    this.setState({team2List2: teamInfo })
  }
  selectTeam5 (tndex,team1,team2,e) {
    let teamInfo = team1
    let team2Info = team2
    if(tndex % 2 == 0){
      teamInfo[tndex].win = 'true'
      teamInfo[tndex+1].win = 'false'
      team2Info[tndex] = teamInfo[tndex]
      team2Info[tndex].win = ''
    }else{
      teamInfo[tndex].win = 'true'
      teamInfo[tndex-1].win = 'false'
      team2Info[(tndex-1)] = teamInfo[tndex]
      team2Info[(tndex-1)].win = ''
    }
    this.setState({team2List3: team2Info})
    this.setState({teamList3: teamInfo })
  }
  
  selectTeamC (tndex,team1,team2,e) {
    let teamInfo = team1
    let team2Info = team2
    if(tndex % 2 == 0){
      teamInfo[tndex].win = 'true'
      teamInfo[tndex+1].win = 'false'
      team2Info[1] = teamInfo[tndex]
      team2Info[1].win = ''
    }else{
      teamInfo[tndex].win = 'true'
      teamInfo[tndex-1].win = 'false'
      team2Info[1] = teamInfo[tndex]
      team2Info[1].win = ''
    }
    this.setState({winnerList4: team2Info})
    this.setState({team2List3: teamInfo })
  }
  toMin () {
    Taro.navigateTo({
      url: '/pages/min/min'
    })
  }
  toTi () {
    Taro.navigateTo({
      url: '/pages/min/ti'
    })
  }

  render () {
    const { teamList, team2List, team2List2, teamList2, teamList3, team2List3, winnerList, winnerList2, winnerList3, winnerList4} = this.state
    const schedule_lose = <View className={this.state.tab_flg == 2?'bg-gray cu-card case schedule_show':'bg-gray cu-card case schedule_hide'}>
        {/* {teamList.map((team, tIndex) => {
          return <View className={tIndex % 2 ==0 ?'bg-grey radius viewy':'bg-grey radius viewy schedule_hide'}>
            <View className='team_cell' onClick={this.selectTeam.bind(this,tIndex,teamList,team2List)}>
              <View className="team_name">{teamList[tIndex].name}</View>
              <Image src={teamList[tIndex].ico}></Image></View>
            <View className='team_cell' onClick={this.selectTeam.bind(this,tIndex+1,teamList,team2List)}>
              <View className="team_name">{teamList[tIndex+1].name}</View>
              <Image src={teamList[tIndex+1].ico}></Image></View>
            <View style="text-align:center">1:1</View>
          </View>
        })}
        {team2List.map((team, tIndex) => {
          return <View className={tIndex % 2 ==0 ?'bg-grey radius viewy':'bg-grey radius viewy schedule_hide'}>
            <View className='team_cell' onClick={this.selectTeam2.bind(this,tIndex,team2List,teamList2)}>
              <View className="team_name">{team2List[tIndex].name}</View>
              <Image src={team2List[tIndex].ico}></Image>
            </View>
            <View className='team_cell' onClick={this.selectTeam2.bind(this,tIndex+1,team2List,teamList2)}>
              <View className="team_name">{team2List[tIndex+1].name}</View>
              <Image src={team2List[tIndex+1].ico}></Image>
            </View>
          </View>
        })} */}
        <View className='bg-grey radius viewy' style='margin-left:13.1vw'>
            <View className='team_cell' onClick={this.selectTeam3.bind(this,0,teamList2,team2List2)}>
              <View className="team_name">{teamList2[0].name}</View>
              <Image src={teamList2[0].ico}></Image>
            </View><View className='team_cell' onClick={this.selectTeam3.bind(this,1,teamList2,team2List2)}>
              <View className="team_name">{teamList2[1].name}</View>
              <Image src={teamList2[1].ico}></Image>
            </View>
        </View>
        <View className='bg-grey radius viewy' style='margin-left:26.2vw'>
            <View className='team_cell' onClick={this.selectTeam3.bind(this,2,teamList2,team2List2)}>
              <View className="team_name">{teamList2[2].name}</View>
              <Image src={teamList2[2].ico}></Image></View>
            <View className='team_cell' onClick={this.selectTeam3.bind(this,3,teamList2,team2List2)}>
              <View className="team_name">{teamList2[3].name}</View>
              <Image src={teamList2[3].ico}></Image>
            </View>
        </View>
        <View className='bg-grey radius viewy' style='margin-left:13.1vw'>
            <View className='team_cell' onClick={this.selectTeam4.bind(this,0,team2List2,teamList3)}>
              <View className="team_name">{team2List2[0].name}</View>
              <Image src={team2List2[0].ico}></Image>
            </View>
            <View className='team_cell' onClick={this.selectTeam4.bind(this,1,team2List2,teamList3)}>
              <View className="team_name">{team2List2[1].name}</View>
              <Image src={team2List2[1].ico}></Image>
            </View>
        </View>
        <View className='bg-grey radius viewy' style='margin-left:26.2vw'>
            <View className='team_cell' onClick={this.selectTeam4.bind(this,2,team2List2,teamList3)}>
              <View className="team_name">{team2List2[2].name}</View>
              <Image src={team2List2[2].ico}></Image>
            </View>
            <View className='team_cell' onClick={this.selectTeam4.bind(this,3,team2List2,teamList3)}>
              <View className="team_name">{team2List2[3].name}</View>
              <Image src={team2List2[3].ico}></Image>
            </View>
        </View>
        <View className='bg-grey radius viewy' style='margin-left:37.7vw'>
            <View className='team_cell' onClick={this.selectTeam5.bind(this,0,teamList3,team2List3)}>
              <View className="team_name">{teamList3[0].name}</View>
              <Image src={teamList3[0].ico}></Image>
            </View>
            <View className='team_cell' onClick={this.selectTeam5.bind(this,1,teamList3,team2List3)}>
              <View className="team_name">{teamList3[1].name}</View>
              <Image src={teamList3[1].ico}></Image>
            </View>
        </View>
        <View className='bg-grey radius viewy' style='margin-left:37.7vw'>
            <View className='team_cell' onClick={this.selectTeamC.bind(this,0,team2List3,winnerList4)}>
              <View className="team_name">{team2List3[0].name}</View>
              <Image src={team2List3[0].ico}></Image>
            </View>
            <View className='team_cell' onClick={this.selectTeamC.bind(this,1,team2List3,winnerList4)}>
              <View className="team_name">{team2List3[1].name}</View>
              <Image src={team2List3[1].ico}></Image>
            </View>
        </View>
    </View>
    const schedule_win = <View  className={this.state.tab_flg == 1?'bg-gray cu-card case schedule_show':'bg-gray cu-card case schedule_hide'}>
      {/* {winnerList.map((team, tIndex) => {
          return <View className={tIndex % 2 ==0 ?'bg-grey radius viewy':'bg-grey radius viewy schedule_hide'}>
            <View className='team_cell' onClick={this.selectWinner.bind(this,tIndex,winnerList,winnerList2)}>
              <View className="team_name">{winnerList[tIndex].name}</View>
              <Image src={winnerList[tIndex].ico}></Image>
            </View>
            <View className='team_cell' onClick={this.selectWinner.bind(this,tIndex+1,winnerList,winnerList2)}>
              <View className="team_name">{winnerList[tIndex+1].name}</View>
              <Image src={winnerList[tIndex+1].ico}></Image>
            </View>
          </View>
        })} */}
        <View className='bg-grey radius viewy' style='margin-left:13.1vw; margin-top:6vh'>
            <View className='team_cell' onClick={this.selectWinner2.bind(this,0,winnerList2,winnerList3)}>
              <View className="team_name">{winnerList2[0].name}</View>
              <Image src={winnerList2[0].ico}></Image>
            </View>
            <View className='team_cell' onClick={this.selectWinner2.bind(this,1,winnerList2,winnerList3)}>
              <View className="team_name">{winnerList2[1].name}</View>
              <Image src={winnerList2[1].ico}></Image>
            </View>
        </View>
        <View className='bg-grey radius viewy' style='margin-left:26.2vw; margin-top:6vh'>
            <View className='team_cell' onClick={this.selectWinner2.bind(this,2,winnerList2,winnerList3)}>
              <View className="team_name">{winnerList2[2].name}</View>
              <Image src={winnerList2[2].ico}></Image>
            </View>
            <View className='team_cell' onClick={this.selectWinner2.bind(this,3,winnerList2,winnerList3)}>
              <View className="team_name">{winnerList2[3].name}</View>
              <Image src={winnerList2[3].ico}></Image>
            </View>
        </View>

        <View className='bg-grey radius viewy' style='margin-left:37.7vw; margin-top:6vh'>
            <View className='team_cell' onClick={this.selectWinner3.bind(this,0,winnerList3,winnerList4)}>
              <View className="team_name">{winnerList3[0].name}</View>
              <Image src={winnerList3[0].ico}></Image>
            </View>
            <View className='team_cell' onClick={this.selectWinner3.bind(this,1,winnerList3,winnerList4)}>
              <View className="team_name">{winnerList3[1].name}</View>
              <Image src={winnerList3[1].ico}></Image>
            </View>
        </View>
        <View className='bg-grey radius viewy' style='margin-left:37.7vw; margin-top:6vh'>
            <View className='team_cell'>
              <View className="team_name">{winnerList4[0].name}</View>
              <Image src={winnerList4[0].ico}></Image>
            </View>
            <View className='team_cell'>
              <View className="team_name">{winnerList4[1].name}</View>
              <Image src={winnerList4[1].ico}></Image>
            </View>
        </View>
    </View>

    return (
      <View className='index'>
      <View  className='grid col-2 margin-bottom text-center'>
        <View  className={this.state.tab_flg == 1?'bg-cyan padding':'bg-cyan padding light'} data-id={1} onClick={this.tabChange}>
          胜者组
        </View>
        <View  className={this.state.tab_flg == 2?'bg-cyan padding':'bg-cyan padding light'} data-id={2} onClick={this.tabChange}>
          败者组
        </View>
      </View>
        {schedule_win}
        {schedule_lose}
      <View className="" style="height:5.6vh;">
        <View className='grid col-4 grid-square'>
          <View className='bg-blue'>button1</View>
          <View className='bg-blue light'  onClick={this.toMin}>button2</View>
          <View className='bg-blue light'  onClick={this.toTi}>button3</View>
          <View className='bg-blue light'>敬请期待</View>
        </View>
      </View>
      </View>
    )
  }
}
