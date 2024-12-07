const getData = (req,res) =>{
    res.send("Hello");
}


const putData = (req,res) =>{
    try{
        res.send("Hello World");
    }
    catch(e)
    {
        res.send("error");
    }
}
export {getData,putData};