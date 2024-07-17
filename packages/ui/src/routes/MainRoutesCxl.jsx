import { lazy } from 'react'

// project imports
import CxlLayout from '@/layout/CxlLayout'
import Loadable from '@/ui-component/loading/Loadable'
// documents routing
const Documents = Loadable(lazy(() => import('@/views/docstorecxl')))
const DocumentStoreDetail = Loadable(lazy(() => import('@/views/docstorecxl/DocumentStoreDetail')))
const ShowStoredChunks = Loadable(lazy(() => import('@/views/docstorecxl/ShowStoredChunks')))
const LoaderConfigPreviewChunks = Loadable(lazy(() => import('@/views/docstorecxl/LoaderConfigPreviewChunks')))
const Canvas = Loadable(lazy(() => import('@/views/canvas')))
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutesCxl = {
    path: '/',
    element: <CxlLayout />,
    children: [
        {
            path: '/cxl/document-stores',
            element: <Documents />
        },
        {
            path: '/cxl/document-stores/:id',
            element: <DocumentStoreDetail />
        },
        {
            path: '/cxl/document-stores/chunks/:id/:id',
            element: <ShowStoredChunks />
        },
        {
            path: '/cxl/document-stores/:id/:name',
            element: <LoaderConfigPreviewChunks />
        },
        {
            path: '/cxl/canvas/:id',
            element: <Canvas />
        }
    ]
}

export default MainRoutesCxl
