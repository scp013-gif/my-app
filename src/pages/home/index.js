import { Col,Row,Card,Table } from 'antd';
import * as Icon from '@ant-design/icons';
import './home.css';
import { getData } from '../../api';
import React, { useEffect, useState } from 'react';
import MyEcharts from '../../components/Echarts';

// table列数据
const columns = [
    {
        title: '课程',
        dataIndex: 'name'
    },
    {
        title: '今日购买',
        dataIndex: 'todayBuy'
    },
    {
        title: '本月购买',
        dataIndex: 'monthBuy'
    },
    {
        title: '总购买',
        dataIndex: 'totalBuy'
    },
]

const countData = [
    {
        "name": "今日支付订单",
        "value": 1234,
        "icon": "CheckCircleOutlined",
        "color": "#2ec7c9"
    },
    {
        "name": "今日收藏订单",
        "value": 3421,
        "icon": "ClockCircleOutlined",
        "color": "#ffb980"
    },
    {
        "name": "今日未支付订单",
        "value": 1234,
        "icon": "CloseCircleOutlined",
        "color": "#5ab1ef"
    },
    {
        "name": "本月支付订单",
        "value": 1234,
        "icon": "CheckCircleOutlined",
        "color": "#2ec7c9"
    },
    {
        "name": "本月收藏订单",
        "value": 3421,
        "icon": "CheckCircleOutlined",
        "color": "#ffb980"
    },
    {
        "name": "本月支付订单",
        "value": 1234,
        "icon": "CloseCircleOutlined",
        "color": "#5ab1ef"
    },
]

const iconToElement = (name) => React.createElement(Icon[name])
const Home = () => {
    const userImg = require('../../assets/maodie.jpg')
    // 创建echart数据
    const [ echartData,setEchartData ] = useState({})
    useEffect(() => {
        getData().then(({data}) => {
            console.log(data,'res');
            const { tableData,orderData,userData,videoData } = data.data
            setTableData(tableData)
            // 对于echarts数据的组装
            const order = orderData
            // x轴数据
            const Xdata = order.date
            // series数据组装
            const keyArray = Object.keys(order.data[0])
            const series = []
            keyArray.forEach(key => {
                series.push({
                    name: key,
                    data: order.data.map(item => item[key]),
                    type: 'line'
                })
            })
            setEchartData({
                order: {
                    Xdata,
                    series
                },
                user: {
                    xData: userData.map(item => item.date),
                    series: [
                        {
                            name: '新增用户',
                            data: userData.map(item => item.new),
                            type: 'bar'
                        },
                        {
                            name: '活跃用户',
                            data: userData.map(item => item.active),
                            type: 'bar'
                        },
                    ]
                },
                video: {
                    series: [
                        {
                            data: videoData,
                            type: 'pie'
                        }
                    ]
                }
            })
        })
    },[])

    // 定义table数据
    const [tableData,setTableData] = useState([])
    return (
        <Row className='home'>
            <Col span={8}>
                <Card hoverable>
                    <div className='user'>
                        <img src={userImg}/>
                        <div className='userinfo'>
                            <p className='name'>Admin</p>
                            <p className='access'>管理员</p>
                        </div>
                    </div>
                    <div className='login-info'>
                        <p>上次登录时间:<span>2026-6-22</span></p>
                        <p>上次登录地点:<span>南昌</span></p>
                    </div>
                </Card>
                <Card>
                    <Table rowKey={"name"} columns={columns} dataSource={tableData} pagination={false}/>
                </Card>
            </Col>
            <Col span={16}>
                <div className='num'>
                    {
                        countData.map((item,index) => {
                            return (
                                <Card key={index}>
                                    <div className='icon-box' style={{ background: item.color}}>
                                        { iconToElement(item.icon) }
                                    </div>
                                    <div className='detail'>
                                        <p className='num'>${item.value}</p>
                                        <p className='txt'>{item.name}</p>
                                    </div>
                                </Card>
                            )
                        })
                    }
                </div>
                {echartData.order && <MyEcharts chartData={echartData.order} style={{height:'280px'}}/>}
                <div className='graph'>
                    {echartData.user && <MyEcharts chartData={echartData.user} style={{height:'240px',width:'50%'}}/>}
                    {echartData.video && <MyEcharts chartData={echartData.video} isAxis={false} style={{height:'260px',width:'50%'}}/>}
                </div>
            </Col>
        </Row>
    )
}

export default Home;