describe('get api user tests',()=>{
    it.only('get users',()=>{
        cy.request({
            method:'Get',
            url:'https://gorest.co.in//public/v2/users',
            Headers:{
                'Authorization ':"f196aada1fecea2f87b874668474a724c3c0a43c3e92bd7c12ea1ee2aec62a13",
                
            }
        })
        .then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.length).to.eq(10)
        })   
    })

})

describe('get api user tests',()=>{
    it.only('get users',()=>{
        cy.request({
            method:'Get',
            url:'https://jsonplaceholder.typicode.com/posts'
        
        })
        .then((res)=>{
            expect (res.body.length).to.eq(100)
        
})
})
})