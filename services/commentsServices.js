const commentModel =  require("../models/commentsModel");

const getAllcomments = ()=>{



    return new Promise((resolve,reject)=>{

        commentModel.find({},(err,comments)=>{
    
            
            if(err)
                reject(err)
            else{
                resolve(comments)
            }
        })
    })
    
    
}

const getcommentsById = (id) =>{
    return new Promise((resolve,reject)=>{
        commentModel.findById(id,(err,comments)=>{
            if(err){
    
            }
            else
            {
                resolve(comments)
            }
        })

    })

}


const addcomment = (newcomments) =>{
    //
    return new Promise((resolve,reject)=>{
        const comment = new commentModel(newcomments);

        comment.save((err)=>{
        if(err){
            console.log("faild")
            reject(err)
        
        }
        else
            resolve("Added!!")
        });
   
    });

};


const updatecomments = (id,commentsToUpdate)=>{
    return new Promise((resolve,reject)=>{
        commentModel.findByIdAndUpdate(id,commentsToUpdate,(err)=>{
            if(err)
                reject(err)
            else
                resolve("succesfully")
        })
    })

}

const deletecomments = (id) =>{
    
    return new Promise((resolve,reject)=>{
    commentModel.findByIdAndRemove(id,(err)=>{
        if(err)
            reject(err)
        else{
            console.log("delet!!!!!!!!!!!!!! " + id)
            resolve("delete!!")
        }
    })
})

}

const getRotterPost = async() =>{
    
    return new Promise(async(resolve,reject)=>{
        try{
            const obj = await axios.get("https://rotter.net/rss/rotternews.xml") 
            resolve(obj)
        }
        catch{
            reject("bad")
        }
 
    })

}



//addMovies(myMovies).then((response)=>console.log(response)).catch((err)=>console.log(err))

module.exports = {getAllcomments,getcommentsById,addcomment,updatecomments,deletecomments,getRotterPost}