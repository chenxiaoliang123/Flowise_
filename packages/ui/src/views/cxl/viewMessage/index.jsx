import { useState, useEffect, useMemo } from 'react'
// project imports
// import ViewMessagesDialog from '@/ui-component/dialog/ViewMessagesDialog'
import ViewMessages from '@/ui-component/dialog/ViewMessagesCxl'
// ==============================|| SETTINGS ||============================== //

const ViewMessage = () => {
    let url = location.href
    const getUrlParams = useMemo(() => {
        const paramsRegex = /[?&]+([^=&]+)=([^&]*)/gi
        const params = {}
        let match
        while ((match = paramsRegex.exec(url))) {
            params[match[1]] = match[2]
        }
        return params
    }, [url])

    console.info('cxl', url)
    const [viewMessagesDialogProps, setViewMessagesDialogProps] = useState({})
    const [viewMessagesDialogOpen, setViewMessagesDialogOpen] = useState(true)

    useEffect(() => {
        const chatFlowInfo = getUrlParams()
        setViewMessagesDialogProps({ title: '查看消息', chatflow: chatFlowInfo })
        console.info('cxl chatFlowInfo', chatFlowInfo)
    }, [getUrlParams])

    return (
        <ViewMessages
            show={viewMessagesDialogOpen}
            dialogProps={viewMessagesDialogProps}
            onCancel={() => setViewMessagesDialogOpen(false)}
        />
    )
}

export default ViewMessage
