import React, { Component } from 'react'
import './App.css';
    
export default class Buttons extends Component {
    state={stilo:"",
          disabled: false,
          firstIcon: [{look:"material-icons",iconName:""}],
          endIcon: [{look:"material-icons",iconName:""}],
          text: "Default"
        }
    componentDidMount(){
        let addState = "";

        if(this.props.variant){ 
            addState += this.props.variant + " "
        }
        if(this.props.size){
            addState += this.props.size + " "
        }
        if(this.props.disableShadow){
            addState += "disableShadow "
        }
        if(this.props.disabled){
            this.setState({disabled:true})
            addState += "disabled "
        }
        if(this.props.color){
            addState += this.props.color + " "
        }
        if(this.props.text){
            this.setState({
                text:this.props.text
            })
        }
        if(this.props.startIcon){
            this.setState({
                firstIcon: [{look:"material-icons open",iconName:this.props.startIcon}],
            })
            addState += "icons "
        }
        if(this.props.endIcon){
            this.setState({
                endIcon: [{look:"material-icons open",iconName:this.props.endIcon}],
            })
            addState += "icons "
        }
        
        console.log("addState: " + addState)
        this.setState({ stilo: "default " + addState})
    }
    render() {
        return(
                <button className={this.state.stilo} disabled={this.state.disabled}>
                    <span className={this.state.firstIcon[0].look}>{this.state.firstIcon[0].iconName}</span>
                        {this.state.text}
                    <span className={this.state.endIcon[0].look}>{this.state.endIcon[0].iconName}</span>
                </button>
        )
    }
}
    
