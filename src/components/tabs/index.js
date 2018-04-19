import React,{Component} from 'react';
import { Tabs, Button } from 'antd';
const TabPane = Tabs.TabPane;

let tabs = (props)=>{
    const {tabPanes=[],...resetProps}  = props;
    return (
        <Tabs {...resetProps}>
            {
                tabPanes.map(({content='',...restItem})=>{
                    return <TabPane {...restItem}>
                        {content}
                    </TabPane>  
                })
            }
        </Tabs>    
    )
}

export default tabs;

