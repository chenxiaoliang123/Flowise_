// assets
import {
    IconTrash,
    IconFileUpload,
    IconFileExport,
    IconCopy,
    IconMessage,
    IconDatabaseExport,
    IconAdjustmentsHorizontal,
    IconUsers
} from '@tabler/icons-react'

// constant
const icons = {
    IconTrash,
    IconFileUpload,
    IconFileExport,
    IconCopy,
    IconMessage,
    IconDatabaseExport,
    IconAdjustmentsHorizontal,
    IconUsers
}

// ==============================|| SETTINGS MENU ITEMS ||============================== //

const settings = {
    id: 'settings',
    title: '',
    type: 'group',
    children: [
        {
            id: 'viewMessages',
            // title: 'View Messages',
            title: '查看消息',
            type: 'item',
            url: '',
            icon: icons.IconMessage
        },
        {
            id: 'viewLeads',
            // title: 'View Leads',
            title: '查看潜在客户',
            type: 'item',
            url: '',
            icon: icons.IconUsers
        },
        {
            id: 'viewUpsertHistory',
            // title: 'Upsert History',
            title: '历史记录',
            type: 'item',
            url: '',
            icon: icons.IconDatabaseExport
        },
        {
            id: 'chatflowConfiguration',
            // title: 'Configuration',
            title: '流程配置',
            type: 'item',
            url: '',
            icon: icons.IconAdjustmentsHorizontal
        },
        {
            id: 'duplicateChatflow',
            // title: 'Duplicate Chatflow',
            title: '复制流程',
            type: 'item',
            url: '',
            icon: icons.IconCopy
        },
        {
            id: 'loadChatflow',
            // title: 'Load Chatflow',
            title: '导入流程',
            type: 'item',
            url: '',
            icon: icons.IconFileUpload
        },
        {
            id: 'exportChatflow',
            // title: 'Export Chatflow',
            title: '导出流程',
            type: 'item',
            url: '',
            icon: icons.IconFileExport
        },
        {
            id: 'deleteChatflow',
            // title: 'Delete Chatflow',
            title: '删除流程',
            type: 'item',
            url: '',
            icon: icons.IconTrash
        }
    ]
}

export default settings
