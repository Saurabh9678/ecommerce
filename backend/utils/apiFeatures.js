class ApiFeatures{
    constructor(query,queryStr){
        this.query = query;
        this.queryStr = queryStr
    }

    search(){
        const keyword = this.queryStr.keyword
        ? {
            name: {
                $regex: this.queryStr.keyword,
                $options: "i"
            },
         }
         :{};

        this.query = this.query.find({...keyword});
        return this;
    }
    filter(){
        const queryCopy = {...this.queryStr} // This is done becuz in js objects are pass by reference. if we manipulate anything in the variable the main object will also change but after adding parenthesis it will give the value and not the reference

        // Remove fields
        const removeFields = ["keyword","page","limit"];
        removeFields.forEach(key => delete queryCopy[key]);
        //Filter for price and rating
        
        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key)=> `$${key}`); //The parameter of replace function is symbol for regex



        this.query = this.query.find(JSON.parse(queryStr));
        return this;


    }
    //Pagination is  number of items to show per page 
    pagination(resultPerPage){
        const currentPage = this.queryStr.page || 1;

        const skip = resultPerPage * (currentPage -1);
        
        this.query = this.query.limit(resultPerPage).skip(skip);

        return this;
    }
}

module.exports = ApiFeatures