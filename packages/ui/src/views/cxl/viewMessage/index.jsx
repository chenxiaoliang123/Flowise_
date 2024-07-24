import { useState, useEffect, useMemo } from 'react'
import ViewMessages from '@/ui-component/dialog/ViewMessagesCxl'

const ViewMessage = () => {
    const [viewMessagesDialogProps, setViewMessagesDialogProps] = useState({})
    const [viewMessagesOpen, setViewMessagesOpen] = useState(false)

    const getUrlParams = useMemo(() => {
        const urlParams = new URLSearchParams(window.location.search)
        const params = {}
        for (let [key, value] of urlParams.entries()) {
            params[key] = decodeURIComponent(value)
        }
        return params
    }, [])

    useEffect(() => {
        const chatFlowInfo = getUrlParams
        if (Object.keys(chatFlowInfo).length > 0) {
            setViewMessagesOpen(true)
            setViewMessagesDialogProps({ title: '查看消息', chatflow: chatFlowInfo })
        } else {
            setViewMessagesOpen(false)
        }
    }, [getUrlParams])

    return <>{viewMessagesOpen ? <ViewMessages dialogProps={viewMessagesDialogProps} /> : <div>参数不够，页面无法展示</div>}</>
}

export default ViewMessage
