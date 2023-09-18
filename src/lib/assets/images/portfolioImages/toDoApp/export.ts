import ImageSource from "$lib/models/ImageSource";
import createATask from './createATask.png'; 
import recentlyDeleted from './recentlyDeleted.png'
import tasks from './tasks.png'

export const toDoAppImages: ImageSource[] = [
    new ImageSource(
        createATask, 
        "Create a task"
    ), 
    new ImageSource(
        recentlyDeleted, 
        "Recently Deleted"
    ), 
    new ImageSource(
        tasks, 
        "Tasks"
    )
]
