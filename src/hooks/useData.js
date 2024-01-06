import { useContext, useEffect, useState } from "react"
import { FilterContext } from "../context";
import { useSelector } from "react-redux";
import { FILTER_NAMES } from "../enums";

export const useData = () => {
  // Hooks-------------------------------------
  const { currentFilter, searchValue } = useContext(FilterContext)
  const { data } = useSelector((state) => state.Todo)
  // State-------------------------------------
  const [renderData, setRenderData] = useState([]);

  useEffect(() => {
    if (currentFilter == FILTER_NAMES.ALL) {
      setRenderData([...data])
    } else if (currentFilter == FILTER_NAMES.COMPLETED) {
      let filteredData = data.filter((task) => task.isCompleted)
      setRenderData([...filteredData])
    } else if (currentFilter == FILTER_NAMES.IN_PROGRESS) {
      let filteredData = data.filter((task) => !task.isCompleted)
      setRenderData([...filteredData])
    }
  }, [currentFilter, data])

  useEffect(() => {
    // Deboune
    const timeoutId = setTimeout(() => {
      if (searchValue.trim().length > 0) {
        let searchTasks = data.filter((task) => task.name.toLowerCase().includes(searchValue.toLowerCase()))
        setRenderData([...searchTasks])
      } else {
        setRenderData([...data])
      }
    }, 800)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [searchValue])


  return { renderData }
}