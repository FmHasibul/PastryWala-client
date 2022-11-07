import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}- Pastry Wala`
    }, [title])
}
export default useTitle;