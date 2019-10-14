import React from 'react';
import '../css/style.css'; 
import jsPDF from "jspdf";
import { connect } from 'react-redux';
import {Button} from 'react-bootstrap';
// import axios from 'axios'
import {
} from '../constants/actionTypes';

const mapStateToProps = state => ({
  ...state.settings,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
});

class Text extends React.Component {
    constructor(){
        super();
        this.divToPrint = React.createRef();
    }
    printDocument = () => {
        let string = this.divToPrint.current;
        const pdf = new jsPDF("p", "mm", "a4");
        pdf.fromHTML(string);
        pdf.save("download");
    }
  render() {
    if(this.props.currentUser){
        return (
            <div className="container page">
                <div id="divToPrint" ref={this.divToPrint}>
                    <h2 style={{marginTop:40,display:"none"}}>Loreum Ipsum</h2>
                    <Claim
                        currentUser={this.props.currentUser} 
                    />
                </div>
                <div className="text-xs-center">
                    <Button onClick={this.printDocument} className="button" variant="outline-primary">Download PDF</Button>
                    <Button className="button" variant="outline-primary">Add to calendar</Button>
                    <a href="/Contact" className="button" variant="outline-primary">Start again</a>
                </div>
            </div>
        );
    }else{
        return(
            <div></div>
        );
    }
    
  }
}
const Claim = props => {
    let value=props.currentUser;
    let date1, date2, date3, date4, date5;
    let value1, value2, value3, value4, value5;
    let text1="";
    let text2="";
    let cdate="";
    let sunSatarray=[];
    let holiday=["01/01/2020","26/01/2020","27/01/2020","10/04/2020","11/04/2020","12/04/2020","13/04/2020","25/04/2020","08/06/2020","05/10/2020","25/11/2020","26/11/2020"];
    let fdate = new Date(2020, 0,1);
    let sfdate = new Date(2020, 0,1);
    fdate.setDate(fdate.getDate() + (6-fdate.getDay())); 
    let f_satday=fdate;
    let f_date=new Intl.DateTimeFormat('en-GB', { 
        month: '2-digit', 
        day: '2-digit',
        year: 'numeric', 
    }).format(f_satday);
    sfdate.setDate(sfdate.getDate() + (7-sfdate.getDay())); 
    let f_sunday=sfdate;
    sunSatarray.push(f_date);
    let f_sundate=new Intl.DateTimeFormat('en-GB', { 
        month: '2-digit', 
        day: '2-digit',
        year: 'numeric', 
    }).format(f_sunday);
    sunSatarray.push(f_sundate);
    for(let k=1;k<360;k++){
        if (k % 7 !==0) continue;
        f_satday.setDate(f_satday.getDate() + 7); 
        let f_date=new Intl.DateTimeFormat('en-GB', { 
            month: '2-digit', 
            day: '2-digit',
            year: 'numeric', 
        }).format(f_satday);
        sunSatarray.push(f_date);
        f_sunday.setDate(f_sunday.getDate() + 7); 
        let f_sundate=new Intl.DateTimeFormat('en-GB', { 
            month: '2-digit', 
            day: '2-digit',
            year: 'numeric', 
        }).format(f_sunday);
        sunSatarray.push(f_sundate)
    }
    if(value){
      cdate = value.date;
      text1=value.first;
      text2=value.second;
    }
    if(text1==="One"&&text2==="Mal"){
        value1=20;
        value2=30;
        value3=50;
        value4=70;
        value5=90;
    }else if(text1==="More than one"&&text2==="Mal"){
        value1=12;
        value2=34;
        value3=54;
        value4=78;
        value5=92;
    }else if(text1==="One"&&text2==="Non-mail"){
        value1=19;
        value2=31;
        value3=41;
        value4=52;
        value5=100;
    }else{
        value1=4;
        value2=12;
        value3=15;
        value4=22;
        value5=80;
    }
    // fistdate calculate.......
    let first_date=new Date(cdate);
    let f_sumcount=0;
    let total_fsumcount=0;
    for(let i=1; i<=value1; i++){
        let date=new Intl.DateTimeFormat('en-GB', { 
            month: '2-digit', 
            day: '2-digit',
            year: 'numeric', 
        }).format(first_date);
        if(sunSatarray.indexOf(date)!==-1){
            f_sumcount=f_sumcount+1;
        }
        if(holiday.indexOf(date)!==-1){
            f_sumcount=f_sumcount+1;
        }
        first_date.setDate(first_date.getDate() + 1); 
    }
    total_fsumcount=f_sumcount+value1;
    date1=new Date(cdate);
    date1.setDate(date1.getDate() + total_fsumcount); 
    //seconddate---------------------
    let sec_date=new Date(cdate);
    let s_sumcount=0;
    let stotal_fsumcount=0;
    for(let i=1; i<=value2; i++){
        let date=new Intl.DateTimeFormat('en-GB', { 
            month: '2-digit', 
            day: '2-digit',
            year: 'numeric', 
        }).format(sec_date);
        if(sunSatarray.indexOf(date)!==-1){
            s_sumcount=s_sumcount+1;
        }
        if(holiday.indexOf(date)!==-1){
            s_sumcount=s_sumcount+1;
        }
        sec_date.setDate(sec_date.getDate() + 1); 
    }
    stotal_fsumcount=s_sumcount+value2;
    date2=new Date(cdate);
    date2.setDate(date1.getDate() + stotal_fsumcount); 
    //three-----------------------
    let three_date=new Date(cdate);
    let tf_sumcount=0;
    let ttotal_fsumcount=0;
    for(let i=1; i<=value3; i++){
        let date=new Intl.DateTimeFormat('en-GB', { 
            month: '2-digit', 
            day: '2-digit',
            year: 'numeric', 
        }).format(three_date);
        if(sunSatarray.indexOf(date)!==-1){
            tf_sumcount=tf_sumcount+1;
        }
        if(holiday.indexOf(date)!==-1){
            tf_sumcount=tf_sumcount+1;
        }
        first_date.setDate(first_date.getDate() + 1); 
    }
    ttotal_fsumcount=tf_sumcount+value3;
    date3=new Date(cdate);
    date3.setDate(date1.getDate() + ttotal_fsumcount); 
    //four---------------------------
    let ffirst_date=new Date(cdate);
    let ff_sumcount=0;
    let ftotal_fsumcount=0;
    for(let i=1; i<=value4; i++){
        let date=new Intl.DateTimeFormat('en-GB', { 
            month: '2-digit', 
            day: '2-digit',
            year: 'numeric', 
        }).format(ffirst_date);
        if(sunSatarray.indexOf(date)!==-1){
            ff_sumcount=ff_sumcount+1;
        }
        if(holiday.indexOf(date)!==-1){
            ff_sumcount=ff_sumcount+1;
        }
        ffirst_date.setDate(ffirst_date.getDate() + 1); 
    }
    ftotal_fsumcount=ff_sumcount+value4;
    date4=new Date(cdate);
    date4.setDate(date1.getDate() + ftotal_fsumcount); 
    //five--------------------------
    let five_date=new Date(cdate);
    let five_sumcount=0;
    let fivetotal_fsumcount=0;
    for(let i=1; i<=value5; i++){
        let date=new Intl.DateTimeFormat('en-GB', { 
            month: '2-digit', 
            day: '2-digit',
            year: 'numeric', 
        }).format(five_date);
        if(sunSatarray.indexOf(date)!==-1){
            five_sumcount=five_sumcount+1;
        }
        if(holiday.indexOf(date)!==-1){
            five_sumcount=five_sumcount+1;
        }
        five_date.setDate(five_date.getDate() + 1); 
    }
    fivetotal_fsumcount=five_sumcount+value5;
    date5=new Date(cdate);
    date5.setDate(date1.getDate() + fivetotal_fsumcount); 
    if (props.currentUser) {
      return (
        <div className="Col">
            <p style={{marginTop:30,fontSize:20}}>For a {text1} people, {text2} claim submitted on {new Intl.DateTimeFormat('en-GB', { 
                    month: '2-digit', 
                    day: '2-digit',
                    year: 'numeric', 
                }).format(cdate)}:</p>
            <p style={{marginTop:30,fontSize:20}}>
                {new Intl.DateTimeFormat('en-GB', { 
                    month: '2-digit', 
                    day: '2-digit',
                    year: 'numeric', 
                }).format(date1)}-last dak for filling cross claims
            </p>
            <p style={{marginTop:30,fontSize:20}}>
                {new Intl.DateTimeFormat('en-GB', { 
                    month: '2-digit', 
                    day: '2-digit',
                    year: 'numeric', 
                }).format(date2)}-last dak for filling cross claims
            </p>
            <p style={{marginTop:30,fontSize:20}}>
                {new Intl.DateTimeFormat('en-GB', { 
                    month: '2-digit', 
                    day: '2-digit',
                    year: 'numeric', 
                }).format(date3)}-last dak for filling cross claims
            </p>
            <p style={{marginTop:30,fontSize:20}}>
                {new Intl.DateTimeFormat('en-GB', { 
                    month: '2-digit', 
                    day: '2-digit',
                    year: 'numeric', 
                }).format(date4)}-last dak for filling cross claims
            </p>
            <p style={{marginTop:30,fontSize:20}}>
                {new Intl.DateTimeFormat('en-GB', { 
                    month: '2-digit', 
                    day: '2-digit',
                    year: 'numeric', 
                }).format(date5)}-last dak for filling cross claims
            </p>
            
        </div>
      );
    }else{
        return(
            <div>
            </div>
        );
    }
  };
export default connect(mapStateToProps, mapDispatchToProps)(Text);

