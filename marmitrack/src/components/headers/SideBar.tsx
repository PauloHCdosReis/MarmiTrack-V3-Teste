import { Menu } from 'lucide-react'

export default function SideBar() {
  return (
    <div className="w-14 flex flex-col justify-between min-h-screen max-h-screen bg-secondary">
      <div className="flex flex-col justify-center items-center py-3 bg-slate-800">
        <Menu />
      </div>
      <div className="h-full flex flex-col items-center py-3">
        <Menu />
        <Menu />
      </div>
      <div className="flex flex-col justify-center items-center py-3 bg-slate-800">
        <Menu />
      </div>
    </div>
  )
}
