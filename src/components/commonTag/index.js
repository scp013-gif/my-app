import { Tag,Space } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation,useNavigate } from 'react-router-dom'
import { closeTag,setCurrentMenu } from '../../store/reducers/tab'
import './index.css'
const CommonTag = () => {
    const tabsList = useSelector(state => state.tab.tabList)
    const currentMenu = useSelector(state => state.tab.currentMenu)
    const dispatch = useDispatch()
    const action = useLocation()
    const navigate = useNavigate()
    console.log(tabsList);
    const handleClose = (tag,index) => {
        let length = tabsList.length - 1
        dispatch(closeTag(tag))
        // 关闭的不是当前tag
        if(tag.path !== action.pathname) {
            return
        }
        if(index === length) {
            // 设置当前数
            const currentData = tabsList[index - 1]
            dispatch(setCurrentMenu(currentData))
            navigate(currentData.path)
        }else {
            // 如果tag至少存在一个数据，则选择后一个tag
            if(tabsList.length > 1) {
                // 下一个tag
                const nextData = tabsList[index + 1]
                dispatch(setCurrentMenu(nextData))
                navigate(nextData.path)
            }
        }
    }
    // 点击tag
    const handleChange = (tag) => {
        dispatch(setCurrentMenu(tag))
        navigate(tag.path)
    }
    // tag的显示
    const setTag = (flag,item,index) => {
        return (
            flag ? <Tag color='#55acee' key={item.name} closeIcon onClose={() => handleClose(item,index)}>{item.label}</Tag> : 
            <Tag onClick={() => handleChange(item)} key={item.name}>{item.label}</Tag>
        )
    }
    return (
        <Space className='common-tag' size={[0,8]} wrap>
            {
                currentMenu.name && tabsList.map((item,index) => (setTag(item.path === currentMenu.path,item,index)))
            }
        </Space>
    )
}

export default CommonTag