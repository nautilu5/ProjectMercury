const Search = require('../models/searchmodel');
const Result = require('../models/resultmodel')

module.exports = (router) => {


    router.post('/result', (req,res) => {
        if(req) {
            
            res.json({ success: true, message: "this is what you requested to search: "+req.search })
            
            let search = new Search ({
                search: req.body.search.toLowerCase()
            })

            search.save((err) => {

                if(err) {
                   
                    res.json({ success: false, message: "error, please look up error code: "+err.code })
                
                } else { 

                    res.json({ success:true, message: "Search went through!"})
                
                }
            })
        }

    })
        

    return router
}