import React from 'react';
import '../scss/dashboard.scss';
import Chart from "react-google-charts";

function MyChart(props) {
 
  return (
    <div>
        { <Chart
        width={300}
        height={300}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
            ['လူနာအခြေအနေ', 'လူနာအရေအတွက်'],
            ['ကုသဆဲ', props.activeCase],
            ['သေဆုံး', props.totalDeath],
            ['ကုသအောင်မြင်', props.recoverCase],
        ]}
        options={{
            // title: '',
            chartArea: { width: '70%' },
            backgroundColor:"transparent", 
            legend: {textStyle: {color: '#fff'}},
            slices: {
             1: { offset: 0.3 },
             2: { offset: 0.1 },
            },
            pieSliceText: 'label',
        }}
        rootProps={{ 'data-testid': '1' }}
        /> }
    </div>
  );
}

export default class Dashboard extends React.Component{
  state = {
    loading:true,
    covidData:null,
  };
  async componentDidMount(){
    const props = {
      country : 'Myanmar',
    };
    const url = "https://api.heinsoe.com/covid-19/?c=" + props.country;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({covidData: data, loading:false });
    setInterval(async() => {
      const url = "https://api.heinsoe.com/covid-19/?c=" + props.country;
      const response = await fetch(url);
      const data = await response.json();
      this.setState({covidData: data, loading:false });
    } , 1000);

  }
  render(){
    return(
    <div className="dashboard">
      {this.state.loading || !this.state.covidData ?(
        <div className="flex_ar ce" style={{minHeight:"400px"}}>အချက်လက်များ ရှာနေသည်</div>
        ) : (
        <div>
          <div className="flex ce">
            <img src="https://www.countryflags.io/mm/flat/64.png"/>
            <div className="p1010">
              <div id="country">
                COVID-19 in {this.state.covidData.response[0].country}
              </div>
              <div id="dataTime">
                {new Date(this.state.covidData.response[0].time).getDate()}/
                {("0" + (new Date(this.state.covidData.response[0].time).getMonth() + 1)).slice(-2)}/
                {new Date(this.state.covidData.response[0].time).getFullYear()}&nbsp;
                {("0" + new Date(this.state.covidData.response[0].time).getHours()).slice(-2)}:
                {("0" + new Date(this.state.covidData.response[0].time).getMinutes()).slice(-2)} အချက်အလက်
              </div>
            </div>
          </div>
          <div  style={{color:"rgba(100%,100%,100%,0.5)"}}>covid-19 ကူးစက်မှုအခြေအနေ</div>
          <div className="flex_ar wrap">
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <td>အခြေအနေ</td>
                    <td>ဦးရေ</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>လတ်တလောတွေ့ရှိသူ</td>
                    <td>{this.state.covidData.response[0].cases.new}</td>
                  </tr>
                  <tr>
                    <td>ကုသအောင်မြင်မှု</td>
                    <td>{this.state.covidData.response[0].cases.recovered}</td>
                  </tr>
                  <tr>
                    <td>သေဆုံးသူ စုစုပေါင်း</td>
                    <td>{this.state.covidData.response[0].deaths.total}</td>
                  </tr>
                  <tr>
                    <td>လက်ရှိလူနာ</td>
                    <td>{this.state.covidData.response[0].cases.active}</td>
                  </tr>
                  <tr>
                    <td>ပိုးတွေသူ စုစုပါင်း</td>
                    <td>{this.state.covidData.response[0].cases.total}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <MyChart
            totalCase={this.state.covidData.response[0].cases.total}
            activeCase={this.state.covidData.response[0].cases.active}
            totalDeath={this.state.covidData.response[0].deaths.total}
            rcoverCase={this.state.covidData.response[0].cases.recovered}
            />
          </div>
          <div className="right"><a href="https://www.heinsoe.com" target="_blank" id="developer">developed by heinsoe.com</a></div>
        </div>
      )}
    </div>
    )
  }
}
