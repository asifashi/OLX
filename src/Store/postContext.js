import { createContext, useState } from "react";

export const postContext=createContext(null)


function Post({children})  {
   const [postDetails,setPost] = useState(null)
  return(
     <postContext.Provider value={{postDetails,setPost}}>
       {children}

     </postContext.Provider>
    
  )
}
export default Post;