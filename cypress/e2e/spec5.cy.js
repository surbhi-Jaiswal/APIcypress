describe('api user tests',()=>{
    it('get user details',()=>{
        cy.request({
            method: 'Get',
            url:'https://crudcrud.com/api/51324db1cb6e464684f7b1f8f380c0cc/633fe3f95e22f903e803dd5c',
        //     Headers :{ 
        //         authentication: '51324db1cb6e464684f7b1f8f380c0cc'}
         })
        .then((res)=>{
       var userDetails=res
        console.log( userDetails)
        })
    })

})
describe('api user tests',()=>{
    it.only('get user details',()=>{
        cy.request({
            method: 'Post',
            url:'https://crudcrud.com/api',
            headers :{
                authantication : '51324db1cb6e464684f7b1f8f380c0cc',
            
        body : {"_id":"633fe3f95e22f903e803dd5c","name":"Sparkle Angel","age":2,"colour":"blue"} 
            }
         })
        .then((res)=>{
            expect (res.status).to.eq(200)

    })

})})
