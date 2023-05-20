import { useEffect } from "react"


const useTitle = headTitle =>{
    useEffect(() => {
        document.title = `${headTitle} - Toy zone`;
    },[headTitle])
}

export default useTitle;