import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {Skills} from "../../profile-data/aboutMe"

class TabsTwo extends Component{
    render(){
        const tabList = Skills

        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        {tabList.map(section=>{
                                           return <Tab>{section.title}</Tab>
                                        })}
                                    </TabList>
                                    {tabList.map(section=>{
                                    return(
                                        <TabPanel>
                                            <div className="single-tab-content">
                                                <ul>
                                                    {section.items.map((item)=>{
                                                        return(
                                                        <li>
                                                            <div><span style={{fontWeight:"510"}}>{item.header}</span> - {item.sub}</div>
                                                            {item.description}
                                                        </li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        </TabPanel>
                                    )})}                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;