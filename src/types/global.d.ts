// Global type definitions
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

declare global {
  // Next.js page types with layouts
  type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
  }

  // Define common types used across the application
  interface ApiResponse<T = unknown> {
    data: T
    status: number
    message: string
  }

  // Generic table types for Quill editor
  interface QuillTable {
    rowCount: number
    columnCount: number
    cells: Record<string, TableCell>
  }

  interface TableCell {
    content: string
    rowspan: number
    colspan: number
  }

  // Replace Function types with specific callback types
  type TableCallback = (table: QuillTable) => void
  type CellCallback = (cell: TableCell) => void
  type TableEventHandler = (event: MouseEvent | KeyboardEvent) => void

  // Generic data types
  interface DataItem {
    id: string | number
    [key: string]: unknown
  }
}

export {}
